# java SDK operations

[Overview](../index.md) · [Configuration](../configuration.md) · [Authentication](../authentication.md) · [Errors](../errors.md) · [Pagination](../pagination.md) · [Streaming](../streaming.md) · [Operations](../operations/index.md) · [API index](../api.md)

| Operation | Method | Path |
| --- | --- | --- |
| [`cancelJob`](jobs/canceljob.md) | `POST` | `/v1/jobs/{jobId}/cancel` |
| [`createCloudBox`](cloud/createcloudbox.md) | `POST` | `/v1/cloud/boxes` |
| [`describeAgentMods`](system/describeagentmods.md) | `GET` | `/v1/mods` |
| [`getHealth`](system/gethealth.md) | `GET` | `/health` |
| [`getJobExecution`](jobs/getjobexecution.md) | `GET` | `/v1/jobs/{jobId}/execution` |
| [`getJobLogs`](jobs/getjoblogs.md) | `GET` | `/v1/jobs/{jobId}/logs` |
| [`getJobStatus`](jobs/getjobstatus.md) | `GET` | `/v1/jobs/{jobId}` |
| [`getOrganizationFleet`](fleet/getorganizationfleet.md) | `GET` | `/v1/organizations/{orgId}/fleet` |
| [`getWhiteLabelCloudCatalog`](cloud/getwhitelabelcloudcatalog.md) | `GET` | `/v1/cloud/catalog` |
| [`inspectProject`](jobs/inspectproject.md) | `POST` | `/v1/inspect` |
| [`listCapabilities`](system/listcapabilities.md) | `GET` | `/v1/capabilities` |
| [`listCloudBoxes`](cloud/listcloudboxes.md) | `GET` | `/v1/cloud/boxes` |
| [`listJobs`](jobs/listjobs.md) | `GET` | `/v1/jobs` |
| [`listOrganizationMembers`](fleet/listorganizationmembers.md) | `GET` | `/v1/organizations/{orgId}/members` |
| [`listProviders`](system/listproviders.md) | `GET` | `/v1/providers` |
| [`listSaasPlans`](fleet/listsaasplans.md) | `GET` | `/v1/saas/plans` |
| [`performCloudBoxAction`](cloud/performcloudboxaction.md) | `POST` | `/v1/cloud/boxes/{boxId}/action` |
| [`startAgentJob`](jobs/startagentjob.md) | `POST` | `/v1/agent-jobs` |
| [`startGithubJob`](jobs/startgithubjob.md) | `POST` | `/v1/github-jobs` |
| [`startProjectJob`](jobs/startprojectjob.md) | `POST` | `/v1/jobs` |
| [`syncCloudBoxVault`](cloud/synccloudboxvault.md) | `POST` | `/v1/cloud/boxes/{boxId}/vault` |
| [`updateOrganizationFleetPolicy`](fleet/updateorganizationfleetpolicy.md) | `PUT` | `/v1/organizations/{orgId}/fleet/policy` |
| [`upsertOrganizationMember`](fleet/upsertorganizationmember.md) | `POST` | `/v1/organizations/{orgId}/members` |
