# BoxFleet typescript SDK overview

[Overview](index.md) · [Configuration](configuration.md) · [Authentication](authentication.md) · [Errors](errors.md) · [Pagination](pagination.md) · [Streaming](streaming.md) · [Operations](operations/index.md) · [API index](api.md)

API version: `0.3.0`  
Semantic IR: `1.14.0`  
Contract fingerprint: `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

Official OpenAPI 3.1 specification for **BoxFleet** (`boxfleet` / `boxfleek` / `jackai-box`), generated and verified with **OmniWrap** for the `jackai-dev` ecosystem. BoxFleet unifies: - **Local Firecracker &amp; WSL2 microVMs** with host-side model relay and zero guest credentials. - **25 Cloud &amp; GPU Sandbox Providers** (`e2b`, `lambda`, `runpod`, `daytona`, `modal`, `beam`, `fly-machines`, `cloudflare-sandbox`, `koyeb`, `morph`, `blaxel`, `sprites`, `northflank`, `together`, `replicate`, `baseten`, `fal`, `fireworks`, `codesandbox`, `railway`, `render`, `hetzner`, `digitalocean`, `vultr`, `linode`, `instabox`, `molted`). - **BoxFleet Managed White-Label Cloud (`boxfleet-cloud`)**: Zero-idle-cost ($0/hr when suspended) instant microVMs, X11/noVNC `:1` GUI desktop streaming, serverless H100/A100/L4 GPUs, `tmpfs` `/run/boxfleet/vault` secret injection, and wake-on-HTTP preview URLs (`https://{port}-{boxId}.preview.boxfleet.io`). - **JackAISaaS Connect Multi-Tenant SaaS &amp; Business/Enterprise Fleet Governance**: 5 tiers (`free`, `pro`, `team`, `business`, `enterprise`), RBAC seats, per-member box quotas, and live park control.

## Capabilities

- `abortsignal-request-cancellation`
- `api-key-bearer-basic-authentication`
- `configurable-base-url`
- `executable-http-client`
- `fetch-transport-injection`
- `idempotency-key-enables-safe-retries`
- `minimum-node-18-runtime`
- `multi-content-request-encoding`
- `presence-preserving-nullable-model-fields`
- `promise-async-client`
- `raw-streaming-response-access`
- `request-lifecycle-hooks`
- `request-tracing-spans`
- `resource-oriented-client-accessors`
- `semantic-parameter-serialization`
- `semantic-schema-types`
- `streaming-enforced-response-byte-limit`
- `timeouts-and-idempotent-retries`
- `typed-http-errors`
- `typed-union-intersection-recursive-models`
- `typescript-declarations`
- `unknown-fields-preserved-on-decoded-models`

## Runtime capabilities not exercised by this contract

- `page-traversal-hasnextpage-getnextpage-iterpages`
- `sse-and-ndjson-streaming`
- `sse-metadata-last-event-id-and-bounded-resumption`

## Limitations

- `base-url-query-and-fragment-not-supported`
- `date-and-decimal-formats-mapped-to-string-and-floating-point`
- `mutual-tls-requires-injected-transport`
- `oauth-token-acquisition-not-generated`
- `runtime-request-validation-not-generated`
- `sdk-tests-not-generated`
- `unknown-fields-typed-only-where-additional-properties-declared`
- `webhook-verification-not-generated`
- `websocket-transport-not-generated`

## Operations

| Operation | Method | Path |
| --- | --- | --- |
| [`cancelJob`](operations/jobs/canceljob.md) | `POST` | `/v1/jobs/{jobId}/cancel` |
| [`createCloudBox`](operations/cloud/createcloudbox.md) | `POST` | `/v1/cloud/boxes` |
| [`describeAgentMods`](operations/system/describeagentmods.md) | `GET` | `/v1/mods` |
| [`getHealth`](operations/system/gethealth.md) | `GET` | `/health` |
| [`getJobExecution`](operations/jobs/getjobexecution.md) | `GET` | `/v1/jobs/{jobId}/execution` |
| [`getJobLogs`](operations/jobs/getjoblogs.md) | `GET` | `/v1/jobs/{jobId}/logs` |
| [`getJobStatus`](operations/jobs/getjobstatus.md) | `GET` | `/v1/jobs/{jobId}` |
| [`getOrganizationFleet`](operations/fleet/getorganizationfleet.md) | `GET` | `/v1/organizations/{orgId}/fleet` |
| [`getWhiteLabelCloudCatalog`](operations/cloud/getwhitelabelcloudcatalog.md) | `GET` | `/v1/cloud/catalog` |
| [`inspectProject`](operations/jobs/inspectproject.md) | `POST` | `/v1/inspect` |
| [`listCapabilities`](operations/system/listcapabilities.md) | `GET` | `/v1/capabilities` |
| [`listCloudBoxes`](operations/cloud/listcloudboxes.md) | `GET` | `/v1/cloud/boxes` |
| [`listJobs`](operations/jobs/listjobs.md) | `GET` | `/v1/jobs` |
| [`listOrganizationMembers`](operations/fleet/listorganizationmembers.md) | `GET` | `/v1/organizations/{orgId}/members` |
| [`listProviders`](operations/system/listproviders.md) | `GET` | `/v1/providers` |
| [`listSaasPlans`](operations/fleet/listsaasplans.md) | `GET` | `/v1/saas/plans` |
| [`performCloudBoxAction`](operations/cloud/performcloudboxaction.md) | `POST` | `/v1/cloud/boxes/{boxId}/action` |
| [`startAgentJob`](operations/jobs/startagentjob.md) | `POST` | `/v1/agent-jobs` |
| [`startGithubJob`](operations/jobs/startgithubjob.md) | `POST` | `/v1/github-jobs` |
| [`startProjectJob`](operations/jobs/startprojectjob.md) | `POST` | `/v1/jobs` |
| [`syncCloudBoxVault`](operations/cloud/synccloudboxvault.md) | `POST` | `/v1/cloud/boxes/{boxId}/vault` |
| [`updateOrganizationFleetPolicy`](operations/fleet/updateorganizationfleetpolicy.md) | `PUT` | `/v1/organizations/{orgId}/fleet/policy` |
| [`upsertOrganizationMember`](operations/fleet/upsertorganizationmember.md) | `POST` | `/v1/organizations/{orgId}/members` |
