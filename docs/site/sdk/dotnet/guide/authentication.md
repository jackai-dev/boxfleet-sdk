---
title: "Authentication · dotnet"
html: "authentication.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# Authentication · dotnet

## Schemes

| Name | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Operation requirements

| Operation | Accepted requirement |
| --- | --- |
| [`cancelJob`](../jobs/canceljob.md) | bearerAuth |
| [`createCloudBox`](../cloud/createcloudbox.md) | bearerAuth |
| [`describeAgentMods`](../system/describeagentmods.md) | bearerAuth |
| [`getJobExecution`](../jobs/getjobexecution.md) | bearerAuth |
| [`getJobLogs`](../jobs/getjoblogs.md) | bearerAuth |
| [`getJobStatus`](../jobs/getjobstatus.md) | bearerAuth |
| [`getOrganizationFleet`](../fleet/getorganizationfleet.md) | bearerAuth |
| [`inspectProject`](../jobs/inspectproject.md) | bearerAuth |
| [`listCapabilities`](../system/listcapabilities.md) | bearerAuth |
| [`listCloudBoxes`](../cloud/listcloudboxes.md) | bearerAuth |
| [`listJobs`](../jobs/listjobs.md) | bearerAuth |
| [`listOrganizationMembers`](../fleet/listorganizationmembers.md) | bearerAuth |
| [`listProviders`](../system/listproviders.md) | bearerAuth |
| [`performCloudBoxAction`](../cloud/performcloudboxaction.md) | bearerAuth |
| [`startAgentJob`](../jobs/startagentjob.md) | bearerAuth |
| [`startGithubJob`](../jobs/startgithubjob.md) | bearerAuth |
| [`startProjectJob`](../jobs/startprojectjob.md) | bearerAuth |
| [`syncCloudBoxVault`](../cloud/synccloudboxvault.md) | bearerAuth |
| [`updateOrganizationFleetPolicy`](../fleet/updateorganizationfleetpolicy.md) | bearerAuth |
| [`upsertOrganizationMember`](../fleet/upsertorganizationmember.md) | bearerAuth |

## Artifact capability evidence

- `api-key-bearer-basic-authentication`
- `cancellationtoken-request-cancellation`

## Artifact limitations

- `mutual-tls-requires-injected-httpclient`
- `oauth-token-acquisition-not-generated`
