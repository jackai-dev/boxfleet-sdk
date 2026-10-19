---
title: "describeAgentMods · python"
html: "describeagentmods.html"
language: "python"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# describeAgentMods

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

HTTP reference: [GET /v1/mods](../../../http/system/describeagentmods.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.describe_agent_mods` flat
- `client.with_raw_response.describe_agent_mods` raw
- `client.system.describe_agent_mods` resource

## Signature

```
client.system.describe_agent_mods(target: Optional[Literal['all', 'claude-code', 'claude-desktop', 'codex', 'agy', 'gemini-cli', 'cursor', 'windsurf', 'vscode', 'zed']] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ModsCatalogResponse
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.system.describe_agent_mods()
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `target` | query | no | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Agent mods catalog | application/json (ModsCatalogResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [Open](../../dotnet/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [Open](../../go/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [Open](../../java/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [Open](../../javascript/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [Open](../../kotlin/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [Open](../../rust/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [Open](../../typescript/system/describeagentmods.md) |
