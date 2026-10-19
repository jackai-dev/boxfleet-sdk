# Agent task recipes

Corpus SHA-256: `9d50c707b1da6dbea19ac903b472a6728c6659ec301bc9f63b16b34b1ee9dea6`

These recipes are retrieval and planning evidence. They never authorize API execution.

## `authentication-canceljob-bearerauth` — authentication

How is bearerAuth authentication applied to cancelJob? Cite exactly: operation:cancelJob, auth:bearerAuth

Intent: Recover the exact authentication scheme, location or flow, and required scopes.

Expected evidence:

- operation: `cancelJob`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/cancelJob`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-canceljob` — discovery

Find the exact operation cancelJob (POST /v1/jobs/{jobId}/cancel) for Cancel a running job and trigger immediate sandbox cleanup. Cite exactly: operation:cancelJob, schema:JobSummary, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `cancelJob`
- schema: `JobSummary`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/cancelJob`
- `omniwrap://semantic/schema/JobSummary`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-createcloudbox` — discovery

Find the exact operation createCloudBox (POST /v1/cloud/boxes) for Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box. Cite exactly: operation:createCloudBox, schema:CloudBoxEnvelope, schema:CreateCloudBoxRequest, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `createCloudBox`
- schema: `CloudBoxEnvelope`
- schema: `CreateCloudBoxRequest`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/createCloudBox`
- `omniwrap://semantic/schema/CloudBoxEnvelope`
- `omniwrap://semantic/schema/CreateCloudBoxRequest`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-getjobstatus` — discovery

Find the exact operation getJobStatus (GET /v1/jobs/{jobId}) for Retrieve current status, exit code, and cleanup receipt of a job. Cite exactly: operation:getJobStatus, schema:JobSummary, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `getJobStatus`
- schema: `JobSummary`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/getJobStatus`
- `omniwrap://semantic/schema/JobSummary`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-getwhitelabelcloudcatalog` — discovery

Find the exact operation getWhiteLabelCloudCatalog (GET /v1/cloud/catalog) for Retrieve BoxFleet White-Label Cloud templates and zero-idle-cost wholesale backends. Cite exactly: operation:getWhiteLabelCloudCatalog, schema:WhiteLabelCloudCatalog

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `getWhiteLabelCloudCatalog`
- schema: `WhiteLabelCloudCatalog`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/operation/getWhiteLabelCloudCatalog`
- `omniwrap://semantic/schema/WhiteLabelCloudCatalog`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-inspectproject` — discovery

Find the exact operation inspectProject (POST /v1/inspect) for Inspect a project root to detect runtimes, package managers, and test/build commands. Cite exactly: operation:inspectProject, schema:InspectProjectRequest, schema:ProjectInspectionPlan, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `inspectProject`
- schema: `InspectProjectRequest`
- schema: `ProjectInspectionPlan`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/inspectProject`
- `omniwrap://semantic/schema/InspectProjectRequest`
- `omniwrap://semantic/schema/ProjectInspectionPlan`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-listjobs` — discovery

Find the exact operation listJobs (GET /v1/jobs) for List sandbox execution jobs with optional status or box filters. Cite exactly: operation:listJobs, schema:JobListResponse, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `listJobs`
- schema: `JobListResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/listJobs`
- `omniwrap://semantic/schema/JobListResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-listorganizationmembers` — discovery

Find the exact operation listOrganizationMembers (GET /v1/organizations/{orgId}/members) for List organization seats, RBAC roles, and per-user box quotas. Cite exactly: operation:listOrganizationMembers, schema:OrganizationMembersResponse, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `listOrganizationMembers`
- schema: `OrganizationMembersResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/listOrganizationMembers`
- `omniwrap://semantic/schema/OrganizationMembersResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-listproviders` — discovery

Find the exact operation listProviders (GET /v1/providers) for List configured local Firecracker and cloud/GPU sandbox providers and templates. Cite exactly: operation:listProviders, schema:ProvidersResponse, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `listProviders`
- schema: `ProvidersResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/listProviders`
- `omniwrap://semantic/schema/ProvidersResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-listsaasplans` — discovery

Find the exact operation listSaasPlans (GET /v1/saas/plans) for List JackAISaaS Connect & BoxFleet subscription plans, quotas, and fleet entitlements. Cite exactly: operation:listSaasPlans, schema:SaasPlansResponse

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `listSaasPlans`
- schema: `SaasPlansResponse`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/operation/listSaasPlans`
- `omniwrap://semantic/schema/SaasPlansResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-startprojectjob` — discovery

Find the exact operation startProjectJob (POST /v1/jobs) for Start an isolated sandbox job for tests, builds, or custom commands. Cite exactly: operation:startProjectJob, schema:JobSummary, schema:StartProjectJobRequest, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `startProjectJob`
- schema: `JobSummary`
- schema: `StartProjectJobRequest`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/startProjectJob`
- `omniwrap://semantic/schema/JobSummary`
- `omniwrap://semantic/schema/StartProjectJobRequest`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-updateorganizationfleetpolicy` — discovery

Find the exact operation updateOrganizationFleetPolicy (PUT /v1/organizations/{orgId}/fleet/policy) for Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO). Cite exactly: operation:updateOrganizationFleetPolicy, schema:FleetPolicyUpdateRequest, schema:OrganizationFleetResponse, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `updateOrganizationFleetPolicy`
- schema: `FleetPolicyUpdateRequest`
- schema: `OrganizationFleetResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/updateOrganizationFleetPolicy`
- `omniwrap://semantic/schema/FleetPolicyUpdateRequest`
- `omniwrap://semantic/schema/OrganizationFleetResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `discovery-upsertorganizationmember` — discovery

Find the exact operation upsertOrganizationMember (POST /v1/organizations/{orgId}/members) for Add or update an organization member seat, RBAC role, and personal box quota. Cite exactly: operation:upsertOrganizationMember, schema:OrganizationMember, schema:UpsertOrganizationMemberRequest, auth:bearerAuth

Intent: Identify the operation without inventing a route or method.

Expected evidence:

- operation: `upsertOrganizationMember`
- schema: `OrganizationMember`
- schema: `UpsertOrganizationMemberRequest`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/upsertOrganizationMember`
- `omniwrap://semantic/schema/OrganizationMember`
- `omniwrap://semantic/schema/UpsertOrganizationMemberRequest`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-canceljob` — integration

Plan a correct SDK integration for cancelJob (POST /v1/jobs/{jobId}/cancel). Cite exactly: operation:cancelJob, schema:JobSummary, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `cancelJob`
- schema: `JobSummary`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/cancelJob`
- `omniwrap://semantic/schema/JobSummary`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-createcloudbox` — integration

Plan a correct SDK integration for createCloudBox (POST /v1/cloud/boxes). Cite exactly: operation:createCloudBox, schema:CloudBoxEnvelope, schema:CreateCloudBoxRequest, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `createCloudBox`
- schema: `CloudBoxEnvelope`
- schema: `CreateCloudBoxRequest`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/createCloudBox`
- `omniwrap://semantic/schema/CloudBoxEnvelope`
- `omniwrap://semantic/schema/CreateCloudBoxRequest`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-getjobstatus` — integration

Plan a correct SDK integration for getJobStatus (GET /v1/jobs/{jobId}). Cite exactly: operation:getJobStatus, schema:JobSummary, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `getJobStatus`
- schema: `JobSummary`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/getJobStatus`
- `omniwrap://semantic/schema/JobSummary`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-getwhitelabelcloudcatalog` — integration

Plan a correct SDK integration for getWhiteLabelCloudCatalog (GET /v1/cloud/catalog). Cite exactly: operation:getWhiteLabelCloudCatalog, schema:WhiteLabelCloudCatalog

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `getWhiteLabelCloudCatalog`
- schema: `WhiteLabelCloudCatalog`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/operation/getWhiteLabelCloudCatalog`
- `omniwrap://semantic/schema/WhiteLabelCloudCatalog`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-inspectproject` — integration

Plan a correct SDK integration for inspectProject (POST /v1/inspect). Cite exactly: operation:inspectProject, schema:InspectProjectRequest, schema:ProjectInspectionPlan, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `inspectProject`
- schema: `InspectProjectRequest`
- schema: `ProjectInspectionPlan`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/inspectProject`
- `omniwrap://semantic/schema/InspectProjectRequest`
- `omniwrap://semantic/schema/ProjectInspectionPlan`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-listjobs` — integration

Plan a correct SDK integration for listJobs (GET /v1/jobs). Cite exactly: operation:listJobs, schema:JobListResponse, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `listJobs`
- schema: `JobListResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/listJobs`
- `omniwrap://semantic/schema/JobListResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-listorganizationmembers` — integration

Plan a correct SDK integration for listOrganizationMembers (GET /v1/organizations/{orgId}/members). Cite exactly: operation:listOrganizationMembers, schema:OrganizationMembersResponse, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `listOrganizationMembers`
- schema: `OrganizationMembersResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/listOrganizationMembers`
- `omniwrap://semantic/schema/OrganizationMembersResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-listproviders` — integration

Plan a correct SDK integration for listProviders (GET /v1/providers). Cite exactly: operation:listProviders, schema:ProvidersResponse, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `listProviders`
- schema: `ProvidersResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/listProviders`
- `omniwrap://semantic/schema/ProvidersResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-listsaasplans` — integration

Plan a correct SDK integration for listSaasPlans (GET /v1/saas/plans). Cite exactly: operation:listSaasPlans, schema:SaasPlansResponse

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `listSaasPlans`
- schema: `SaasPlansResponse`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/operation/listSaasPlans`
- `omniwrap://semantic/schema/SaasPlansResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-startprojectjob` — integration

Plan a correct SDK integration for startProjectJob (POST /v1/jobs). Cite exactly: operation:startProjectJob, schema:JobSummary, schema:StartProjectJobRequest, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `startProjectJob`
- schema: `JobSummary`
- schema: `StartProjectJobRequest`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/startProjectJob`
- `omniwrap://semantic/schema/JobSummary`
- `omniwrap://semantic/schema/StartProjectJobRequest`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-updateorganizationfleetpolicy` — integration

Plan a correct SDK integration for updateOrganizationFleetPolicy (PUT /v1/organizations/{orgId}/fleet/policy). Cite exactly: operation:updateOrganizationFleetPolicy, schema:FleetPolicyUpdateRequest, schema:OrganizationFleetResponse, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `updateOrganizationFleetPolicy`
- schema: `FleetPolicyUpdateRequest`
- schema: `OrganizationFleetResponse`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/updateOrganizationFleetPolicy`
- `omniwrap://semantic/schema/FleetPolicyUpdateRequest`
- `omniwrap://semantic/schema/OrganizationFleetResponse`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.

## `integration-upsertorganizationmember` — integration

Plan a correct SDK integration for upsertOrganizationMember (POST /v1/organizations/{orgId}/members). Cite exactly: operation:upsertOrganizationMember, schema:OrganizationMember, schema:UpsertOrganizationMemberRequest, auth:bearerAuth

Intent: Recover exact wire parameters, request media, responses, and safety traits.

Expected evidence:

- operation: `upsertOrganizationMember`
- schema: `OrganizationMember`
- schema: `UpsertOrganizationMemberRequest`
- authentication: `bearerAuth`
- criterion: return the expected entity identifiers
- criterion: cite only resolvable OmniWrap resources
- criterion: stay within the declared result, context, and tool-call budgets
- criterion: perform none of the forbidden actions

Citations:

- `omniwrap://semantic/auth/bearerAuth`
- `omniwrap://semantic/operation/upsertOrganizationMember`
- `omniwrap://semantic/schema/OrganizationMember`
- `omniwrap://semantic/schema/UpsertOrganizationMemberRequest`

Budgets: at most 5 results, 8192 context bytes, and 3 tool calls.
