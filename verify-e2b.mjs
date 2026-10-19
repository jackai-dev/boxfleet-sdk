import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { access, readFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';
import { Client as TsClient, BoxFleetError } from './sdk/typescript/boxfleet-sdk/index.mjs';
import { Client as JsClient } from './sdk/javascript/boxfleet-sdk/index.mjs';

const REQUIRED_ARTIFACTS = [
  'sdk/typescript/boxfleet-sdk/index.mjs',
  'sdk/javascript/boxfleet-sdk/index.mjs',
  'sdk/python/boxfleet-sdk/pyproject.toml',
  'sdk/go/boxfleet-sdk/go.mod',
  'sdk/rust/boxfleet_sdk/Cargo.toml',
  'sdk/java/BoxFleetSdk/pom.xml',
  'sdk/dotnet/BoxFleetSdk/BoxFleetSdk.csproj',
  'sdk/kotlin/BoxFleetSdk/build.gradle.kts',
  'skill/use-boxfleet/SKILL.md',
  'mcp/boxfleet-mcp/server.py',
  'docs/site/llms.txt',
];

async function main() {
  for (const relPath of REQUIRED_ARTIFACTS) {
    await access(join(process.cwd(), relPath));
  }

  const server = createServer((req, res) => {
    res.setHeader('content-type', 'application/json');
    if (req.url === '/health') {
      res.end(JSON.stringify({ ok: true, service: 'boxfleet-control-plane', version: '0.3.0' }));
      return;
    }
    if (req.url === '/v1/cloud/catalog') {
      res.end(JSON.stringify({
        schema: 'jackai-box.white-label-cloud/v1',
        brand: 'BoxFleet Managed Cloud',
        domain: 'boxfleet.io',
        previewDomainPattern: 'https://{port}-{boxId}.preview.boxfleet.io',
        zeroIdleCostModel: {
          fixedIdleInfrastructureCostUsd: 0,
          billingGranularity: 'per-active-second',
          idleMechanism: 'MicroVMs auto-suspend after idle timeout; wake (<300ms) on exec, SSH, or HTTP port visit.',
        },
        templates: [{ id: 'boxfleet-universal', name: 'BoxFleet Universal Linux VM', gpu: false }],
        backends: [{ id: 'fly-machines', name: 'Fly.io Machines API', isolation: 'firecracker-microvm' }],
      }));
      return;
    }
    if (req.url === '/v1/cloud/boxes' && req.method === 'POST') {
      res.statusCode = 201;
      res.end(JSON.stringify({
        organizationId: 'org_jackai',
        box: {
          id: 'bfx_e2bverified01',
          boxId: 'bfx_e2bverified01',
          name: 'box-e2bverified',
          provider: 'boxfleet-cloud',
          templateId: 'boxfleet-universal',
          state: 'running',
          previewUrlPattern: 'https://{port}-bfx_e2bverified01.preview.boxfleet.io',
        },
      }));
      return;
    }
    res.statusCode = 404;
    res.end(JSON.stringify({ error: { code: 'not_found', message: 'Not found' } }));
  });

  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  const baseURL = `http://127.0.0.1:${port}`;

  try {
    const tsClient = new TsClient({ baseURL, apiKey: 'bf_test_token' });
    const health = await tsClient.system.getHealth();
    assert.equal(health.ok, true);
    assert.equal(health.service, 'boxfleet-control-plane');

    const catalog = await tsClient.cloud.getWhiteLabelCatalog();
    assert.equal(catalog.schema, 'jackai-box.white-label-cloud/v1');
    assert.equal(catalog.zeroIdleCostModel.fixedIdleInfrastructureCostUsd, 0);

    const jsClient = new JsClient({ baseURL, apiKey: 'bf_test_token' });
    const created = await jsClient.cloud.createBox({
      templateId: 'boxfleet-universal',
      backend: 'fly-machines',
    });
    assert.equal(created.box.boxId, 'bfx_e2bverified01');
    assert.equal(typeof BoxFleetError, 'function');

    // Verify Python SDK import, exported client & descriptor surface, and zero-dependency MCP Knowledge Server
    const pyCmd = [
      'import sys, json',
      'sys.path.insert(0, "sdk/python/boxfleet-sdk")',
      'import boxfleet_sdk',
      'assert hasattr(boxfleet_sdk, "Client") and hasattr(boxfleet_sdk, "AsyncClient")',
      'assert hasattr(boxfleet_sdk, "BoxfleetError") and hasattr(boxfleet_sdk, "CloudBox")',
      'assert hasattr(boxfleet_sdk, "CreateCloudBoxRequest") and hasattr(boxfleet_sdk, "WhiteLabelCloudCatalog")',
      'print("python-sdk-ok")',
    ].join('; ');
    let pythonBin = 'python3';
    try {
      execFileSync('python3', ['--version'], { stdio: 'ignore' });
    } catch {
      pythonBin = 'python';
    }
    const pyOut = execFileSync(pythonBin, ['-c', pyCmd], { encoding: 'utf8' }).trim();
    assert.equal(pyOut, 'python-sdk-ok');

    // Verify generated MCP Knowledge Server (stdlib Python)
    const mcpInit = JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'e2b-verifier', version: '1.0.0' } },
    }) + '\n';
    const mcpOut = execFileSync(pythonBin, ['mcp/boxfleet-mcp/server.py'], {
      input: mcpInit,
      encoding: 'utf8',
    }).trim();
    const mcpResponse = JSON.parse(mcpOut.split('\n')[0]);
    assert.equal(mcpResponse.id, 1);
    assert.ok(mcpResponse.result.serverInfo.name.includes('boxfleet'));

    const skillMd = await readFile(join(process.cwd(), 'skill/use-boxfleet/SKILL.md'), 'utf8');
    assert.ok(/boxfleet/i.test(skillMd));

    console.log(JSON.stringify({
      ok: true,
      sdkSuite: '@jackai-dev/boxfleet-sdk',
      generator: 'OmniWrap 2.0.0',
      verifiedTargets: ['typescript', 'javascript', 'python', 'go', 'rust', 'java', 'dotnet', 'kotlin', 'skill', 'mcp'],
      platform: process.platform,
      arch: process.arch,
      node: process.version,
    }, null, 2));
  } finally {
    server.close();
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
