# HTTP reference

The published operations of this contract, independent of any SDK. Each page lists the SDK symbols bound to that exact operation, or says why a language has none.

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
