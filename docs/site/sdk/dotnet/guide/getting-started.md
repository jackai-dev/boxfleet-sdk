---
title: "Getting started · dotnet"
html: "getting-started.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# Getting started · dotnet

API version: `0.3.0` Semantic IR: `1.14.0` Contract fingerprint: `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa` SDK maturity: **experimental** Artifact evidence: `omniwrap-artifact.json`, SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

Official OpenAPI 3.1 specification for **BoxFleet** (`boxfleet` / `boxfleek` / `jackai-box`), generated and verified with **OmniWrap** for the `jackai-dev` ecosystem. BoxFleet unifies: - **Local Firecracker &amp; WSL2 microVMs** with host-side model relay and zero guest credentials. - **25 Cloud &amp; GPU Sandbox Providers** (`e2b`, `lambda`, `runpod`, `daytona`, `modal`, `beam`, `fly-machines`, `cloudflare-sandbox`, `koyeb`, `morph`, `blaxel`, `sprites`, `northflank`, `together`, `replicate`, `baseten`, `fal`, `fireworks`, `codesandbox`, `railway`, `render`, `hetzner`, `digitalocean`, `vultr`, `linode`, `instabox`, `molted`). - **BoxFleet Managed White-Label Cloud (`boxfleet-cloud`)**: Zero-idle-cost ($0/hr when suspended) instant microVMs, X11/noVNC `:1` GUI desktop streaming, serverless H100/A100/L4 GPUs, `tmpfs` `/run/boxfleet/vault` secret injection, and wake-on-HTTP preview URLs (`https://{port}-{boxId}.preview.boxfleet.io`). - **JackAISaaS Connect Multi-Tenant SaaS &amp; Business/Enterprise Fleet Governance**: 5 tiers (`free`, `pro`, `team`, `business`, `enterprise`), RBAC seats, per-member box quotas, and live park control.

## Capabilities

- `allof-object-flattening`
- `api-key-bearer-basic-authentication`
- `cancellationtoken-request-cancellation`
- `configurable-base-url`
- `dependency-free-dotnet-8-runtime`
- `executable-http-client`
- `httpclient-transport-injection`
- `idempotency-key-enables-safe-retries`
- `json-form-multipart-text-binary-content`
- `nullable-record-array-map-enum-models`
- `path-query-header-cookie-serialization`
- `request-lifecycle-hooks`
- `request-tracing-spans`
- `resource-oriented-client-accessors`
- `streaming-enforced-response-byte-limit`
- `task-async-client`
- `timeouts-and-idempotent-retries`
- `typed-http-connection-timeout-errors`
- `typed-http-errors`

## Runtime capabilities not exercised by this contract

- `sse-and-ndjson-streaming`

## Limitations

- `base-url-query-and-fragment-not-supported`
- `date-time-native-but-decimal-format-mapped-to-double-or-string`
- `full-v3-006-conformance-and-publishing-gates-not-yet-complete`
- `mutual-tls-requires-injected-httpclient`
- `oauth-token-acquisition-not-generated`
- `oneof-anyof-use-lossless-json-element`
- `pagination-iterators-not-generated`
- `raw-response-body-exposed-only-for-binary-media`
- `runtime-request-validation-not-generated`
- `sdk-tests-not-generated`
- `unknown-fields-preserved-only-where-additional-properties-declared`
- `webhook-verification-not-generated`
- `websocket-transport-not-generated`

## Operations

| Operation | Method | Path |
| --- | --- | --- |
| [`cancelJob`](../jobs/canceljob.md) | `POST` | `/v1/jobs/{jobId}/cancel` |
| [`createCloudBox`](../cloud/createcloudbox.md) | `POST` | `/v1/cloud/boxes` |
| [`describeAgentMods`](../system/describeagentmods.md) | `GET` | `/v1/mods` |
| [`getHealth`](../system/gethealth.md) | `GET` | `/health` |
| [`getJobExecution`](../jobs/getjobexecution.md) | `GET` | `/v1/jobs/{jobId}/execution` |
| [`getJobLogs`](../jobs/getjoblogs.md) | `GET` | `/v1/jobs/{jobId}/logs` |
| [`getJobStatus`](../jobs/getjobstatus.md) | `GET` | `/v1/jobs/{jobId}` |
| [`getOrganizationFleet`](../fleet/getorganizationfleet.md) | `GET` | `/v1/organizations/{orgId}/fleet` |
| [`getWhiteLabelCloudCatalog`](../cloud/getwhitelabelcloudcatalog.md) | `GET` | `/v1/cloud/catalog` |
| [`inspectProject`](../jobs/inspectproject.md) | `POST` | `/v1/inspect` |
| [`listCapabilities`](../system/listcapabilities.md) | `GET` | `/v1/capabilities` |
| [`listCloudBoxes`](../cloud/listcloudboxes.md) | `GET` | `/v1/cloud/boxes` |
| [`listJobs`](../jobs/listjobs.md) | `GET` | `/v1/jobs` |
| [`listOrganizationMembers`](../fleet/listorganizationmembers.md) | `GET` | `/v1/organizations/{orgId}/members` |
| [`listProviders`](../system/listproviders.md) | `GET` | `/v1/providers` |
| [`listSaasPlans`](../fleet/listsaasplans.md) | `GET` | `/v1/saas/plans` |
| [`performCloudBoxAction`](../cloud/performcloudboxaction.md) | `POST` | `/v1/cloud/boxes/{boxId}/action` |
| [`startAgentJob`](../jobs/startagentjob.md) | `POST` | `/v1/agent-jobs` |
| [`startGithubJob`](../jobs/startgithubjob.md) | `POST` | `/v1/github-jobs` |
| [`startProjectJob`](../jobs/startprojectjob.md) | `POST` | `/v1/jobs` |
| [`syncCloudBoxVault`](../cloud/synccloudboxvault.md) | `POST` | `/v1/cloud/boxes/{boxId}/vault` |
| [`updateOrganizationFleetPolicy`](../fleet/updateorganizationfleetpolicy.md) | `PUT` | `/v1/organizations/{orgId}/fleet/policy` |
| [`upsertOrganizationMember`](../fleet/upsertorganizationmember.md) | `POST` | `/v1/organizations/{orgId}/members` |
