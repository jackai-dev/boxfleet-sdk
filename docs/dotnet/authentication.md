# dotnet SDK authentication

[Overview](index.md) · [Configuration](configuration.md) · [Authentication](authentication.md) · [Errors](errors.md) · [Pagination](pagination.md) · [Streaming](streaming.md) · [Operations](operations/index.md) · [API index](api.md)

## Schemes

| Name | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Operation requirements

| Operation | Accepted requirement |
| --- | --- |
| [`cancelJob`](operations/jobs/canceljob.md) | bearerAuth |
| [`createCloudBox`](operations/cloud/createcloudbox.md) | bearerAuth |
| [`describeAgentMods`](operations/system/describeagentmods.md) | bearerAuth |
| [`getJobExecution`](operations/jobs/getjobexecution.md) | bearerAuth |
| [`getJobLogs`](operations/jobs/getjoblogs.md) | bearerAuth |
| [`getJobStatus`](operations/jobs/getjobstatus.md) | bearerAuth |
| [`getOrganizationFleet`](operations/fleet/getorganizationfleet.md) | bearerAuth |
| [`inspectProject`](operations/jobs/inspectproject.md) | bearerAuth |
| [`listCapabilities`](operations/system/listcapabilities.md) | bearerAuth |
| [`listCloudBoxes`](operations/cloud/listcloudboxes.md) | bearerAuth |
| [`listJobs`](operations/jobs/listjobs.md) | bearerAuth |
| [`listOrganizationMembers`](operations/fleet/listorganizationmembers.md) | bearerAuth |
| [`listProviders`](operations/system/listproviders.md) | bearerAuth |
| [`performCloudBoxAction`](operations/cloud/performcloudboxaction.md) | bearerAuth |
| [`startAgentJob`](operations/jobs/startagentjob.md) | bearerAuth |
| [`startGithubJob`](operations/jobs/startgithubjob.md) | bearerAuth |
| [`startProjectJob`](operations/jobs/startprojectjob.md) | bearerAuth |
| [`syncCloudBoxVault`](operations/cloud/synccloudboxvault.md) | bearerAuth |
| [`updateOrganizationFleetPolicy`](operations/fleet/updateorganizationfleetpolicy.md) | bearerAuth |
| [`upsertOrganizationMember`](operations/fleet/upsertorganizationmember.md) | bearerAuth |

## Artifact capability evidence

- `api-key-bearer-basic-authentication`
- `cancellationtoken-request-cancellation`

## Artifact limitations

- `mutual-tls-requires-injected-httpclient`
- `oauth-token-acquisition-not-generated`
