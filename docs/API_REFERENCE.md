# API reference

Generated from Semantic IR `1.14.0` at contract fingerprint `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`. SDK maturity and limitations are copied from each linked artifact manifest; an SDK without one is marked unattested.

## SDKs

| SDK | Maturity | Recorded limitations |
| --- | --- | --- |
| [dotnet](dotnet/index.md) | experimental | 13 |
| [go](go/index.md) | experimental | 9 |
| [java](java/index.md) | experimental | 15 |
| [javascript](javascript/index.md) | verified | 9 |
| [kotlin](kotlin/index.md) | experimental | 14 |
| [python](python/index.md) | experimental | 12 |
| [rust](rust/index.md) | experimental | 18 |
| [typescript](typescript/index.md) | verified | 9 |

## HTTP reference

The published operations independent of any SDK: [HTTP reference](http/index.md).

## Contract operations

| Operation | Method | Path |
| --- | --- | --- |
| `cancelJob` | `POST` | `/v1/jobs/{jobId}/cancel` |
| `createCloudBox` | `POST` | `/v1/cloud/boxes` |
| `describeAgentMods` | `GET` | `/v1/mods` |
| `getHealth` | `GET` | `/health` |
| `getJobExecution` | `GET` | `/v1/jobs/{jobId}/execution` |
| `getJobLogs` | `GET` | `/v1/jobs/{jobId}/logs` |
| `getJobStatus` | `GET` | `/v1/jobs/{jobId}` |
| `getOrganizationFleet` | `GET` | `/v1/organizations/{orgId}/fleet` |
| `getWhiteLabelCloudCatalog` | `GET` | `/v1/cloud/catalog` |
| `inspectProject` | `POST` | `/v1/inspect` |
| `listCapabilities` | `GET` | `/v1/capabilities` |
| `listCloudBoxes` | `GET` | `/v1/cloud/boxes` |
| `listJobs` | `GET` | `/v1/jobs` |
| `listOrganizationMembers` | `GET` | `/v1/organizations/{orgId}/members` |
| `listProviders` | `GET` | `/v1/providers` |
| `listSaasPlans` | `GET` | `/v1/saas/plans` |
| `performCloudBoxAction` | `POST` | `/v1/cloud/boxes/{boxId}/action` |
| `startAgentJob` | `POST` | `/v1/agent-jobs` |
| `startGithubJob` | `POST` | `/v1/github-jobs` |
| `startProjectJob` | `POST` | `/v1/jobs` |
| `syncCloudBoxVault` | `POST` | `/v1/cloud/boxes/{boxId}/vault` |
| `updateOrganizationFleetPolicy` | `PUT` | `/v1/organizations/{orgId}/fleet/policy` |
| `upsertOrganizationMember` | `POST` | `/v1/organizations/{orgId}/members` |

Machine-readable page hashes: [`api-reference-index.json`](api-reference-index.json).  
Documentation build: `5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e`, inputs and every output recorded in [`doc-build-manifest.json`](doc-build-manifest.json). The API version above and each SDK's package version are independent; this build carries no single version of its own.
