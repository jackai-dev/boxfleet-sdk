---
title: "Getting started · java"
html: "getting-started.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# Getting started · java

API version: `0.3.0` Semantic IR: `1.14.0` Contract fingerprint: `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa` SDK maturity: **experimental** Artifact evidence: `omniwrap-artifact.json`, SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

Official OpenAPI 3.1 specification for **BoxFleet** (`boxfleet` / `boxfleek` / `jackai-box`), generated and verified with **OmniWrap** for the `jackai-dev` ecosystem. BoxFleet unifies: - **Local Firecracker &amp; WSL2 microVMs** with host-side model relay and zero guest credentials. - **25 Cloud &amp; GPU Sandbox Providers** (`e2b`, `lambda`, `runpod`, `daytona`, `modal`, `beam`, `fly-machines`, `cloudflare-sandbox`, `koyeb`, `morph`, `blaxel`, `sprites`, `northflank`, `together`, `replicate`, `baseten`, `fal`, `fireworks`, `codesandbox`, `railway`, `render`, `hetzner`, `digitalocean`, `vultr`, `linode`, `instabox`, `molted`). - **BoxFleet Managed White-Label Cloud (`boxfleet-cloud`)**: Zero-idle-cost ($0/hr when suspended) instant microVMs, X11/noVNC `:1` GUI desktop streaming, serverless H100/A100/L4 GPUs, `tmpfs` `/run/boxfleet/vault` secret injection, and wake-on-HTTP preview URLs (`https://{port}-{boxId}.preview.boxfleet.io`). - **JackAISaaS Connect Multi-Tenant SaaS &amp; Business/Enterprise Fleet Governance**: 5 tiers (`free`, `pro`, `team`, `business`, `enterprise`), RBAC seats, per-member box quotas, and live park control.

## Capabilities

- `api-key-bearer-basic-authentication`
- `async-completablefuture-and-sync-wrappers`
- `configurable-base-url`
- `dependency-free-java-17-runtime`
- `executable-http-client`
- `idempotency-key-enables-safe-retries`
- `java-httpclient-transport-injection`
- `json-form-multipart-text-binary-content`
- `path-query-header-cookie-serialization`
- `raw-response-accessors-with-request-id`
- `record-enum-array-map-allof-models`
- `request-lifecycle-hooks`
- `request-tracing-spans`
- `streaming-enforced-response-byte-limit`
- `structured-http-transport-timeout-errors`
- `timeouts-cancellation-and-idempotent-retries`

## Runtime capabilities not exercised by this contract

- `sse-and-ndjson-streaming`

## Limitations

- `absent-and-null-optional-fields-conflated-by-record-models`
- `base-url-query-and-fragment-not-supported`
- `date-and-decimal-formats-mapped-to-string-and-floating-point`
- `full-v3-008-conformance-and-publishing-gates-not-yet-complete`
- `multi-media-operations-select-one-canonical-supported-content-type`
- `mutual-tls-requires-injected-httpclient`
- `oauth-token-acquisition-not-generated`
- `oneof-anyof-use-lossless-object-wrappers`
- `pagination-iterators-not-generated`
- `response-model-selects-one-canonical-success-shape`
- `runtime-schema-validation-not-generated`
- `sdk-tests-not-generated`
- `unknown-fields-dropped-by-record-models`
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
