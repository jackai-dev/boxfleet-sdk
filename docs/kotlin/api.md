# BoxFleet kotlin API

<!-- omniwrap-api-reference eyJjb250cmFjdF9maW5nZXJwcmludCI6IjE3ZGRlMWE4OTgwNThiMzJlNTcwNDc3NGI3NjVhNTFjMmJjZjEyYmRkMDRlYzM4MDVkNmI2ODA0YWM1YWU3ZmEiLCJvcGVyYXRpb25fY291bnQiOjIzLCJyZW5kZXJlciI6ImtvdGxpbiIsInZlcnNpb24iOiIxLjQuMCJ9 -->

This generated index is tied to Semantic IR `1.14.0` and contract fingerprint `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`. Every operation below is rendered from the same semantic contract and artifact-attested public member allocation as the SDK.

SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

## Client hooks and tracing

`ClientOptions(hooks = RequestHooks(...))` registers four callbacks. Every attempt starts with `beforeRequest` and ends with exactly one of `onRetry` (another attempt follows), `afterResponse` (the success the call returns) or `onError` (the failure the call reports). Each receives the operation id, the HTTP method, the URL, the request headers, the attempt number (from 1), the time elapsed since the call started and, once the server answered, the HTTP status. No context carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`, every API-key header and API-key query parameter, and any configured credential value read `[redacted]`. Every context is an immutable `HookContext`: no hook can change the request.

`ClientOptions(tracer = ...)` opens one span per call through the tracer interface this SDK defines, named after the operation id, with `http.request.method`, `http.response.status_code` and `http.request.resend_count`. It needs no tracing library; README.md maps it onto the OpenTelemetry API.

## Shared types

- `CapabilitiesResponse`
- `CloudBox`
- `CloudBoxActionRequest`
- `CloudBoxActionResponse`
- `CloudBoxEnvelope`
- `CloudBoxListResponse`
- `CreateCloudBoxRequest`
- `FleetPolicyUpdateRequest`
- `HealthResponse`
- `InspectProjectRequest`
- `JobExecutionResponse`
- `JobListResponse`
- `JobLogsResponse`
- `JobSummary`
- `ModsCatalogResponse`
- `OrganizationFleetResponse`
- `OrganizationMember`
- `OrganizationMembersResponse`
- `ProjectInspectionPlan`
- `ProvidersResponse`
- `SaasPlansResponse`
- `StartAgentJobRequest`
- `StartGithubJobRequest`
- `StartProjectJobRequest`
- `SyncCloudBoxVaultRequest`
- `SyncCloudBoxVaultResponse`
- `UpsertOrganizationMemberRequest`
- `WhiteLabelCloudCatalog`

## Resource `cloud`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJjcmVhdGVDbG91ZEJveCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJjcmVhdGVDbG91ZEJveCIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMiLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiI5NzYwYmY0ZjIzZGRhYjAwOGI1NmZkMjNkOTM3ZDBlMDMwNmQ1NjVhYTFhOWY4NzEwZGNkYmJmNjkzZTRlMDE1Iiwic2lnbmF0dXJlX3NoYTI1NiI6IjNiNzNhNDk2Y2I4ZTg0NmFhYWZlNzY3ODVmZmY4ZTVkNmQ5NTQ3ZjM2OGFiZTI2NzZjYjYyMWM3MTczMDk3OTQifQ -->
### `client.createCloudBox`

Operation ID: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  
Detailed page: [`createCloudBox`](operations/cloud/createcloudbox.md)

#### Signature

```kotlin
suspend fun createCloudBox(params: CreateCloudBoxParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<CloudBoxEnvelope>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `CreateCloudBoxRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Provisioned white-label box | application/json (CloudBoxEnvelope) |

#### Canonical required-input example

```json
{
  "body": {},
  "content_type": "application/json",
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjcmVhdGVDbG91ZEJveCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJnZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0V2hpdGVMYWJlbENsb3VkQ2F0YWxvZyIsInBhdGgiOiIvdjEvY2xvdWQvY2F0YWxvZyIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6IjdlNDFjOTZjNzJmZmJjNDBhMjUwNzgwNTBlMjBhNTQwMmE5NjZhODY5ZWQ5Y2EwNzQ0Mjc0NjRlZGE2OTY0ZWYiLCJzaWduYXR1cmVfc2hhMjU2IjoiN2NkOWNjYWYyYzYzZTc4NDQ0ZDVhYWY3MWZlMzRmZDZlYjc4MzY2OTE3NTY4YTQ2ZjMxODg3ZmFhMzZjMWU3ZCJ9 -->
### `client.getWhiteLabelCloudCatalog`

Operation ID: `getWhiteLabelCloudCatalog`  
Route: `GET` `/v1/cloud/catalog`  
Detailed page: [`getWhiteLabelCloudCatalog`](operations/cloud/getwhitelabelcloudcatalog.md)

#### Signature

```kotlin
suspend fun getWhiteLabelCloudCatalog(params: GetWhiteLabelCloudCatalogParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<WhiteLabelCloudCatalog>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-Label Cloud catalog | application/json (WhiteLabelCloudCatalog) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJsaXN0Q2xvdWRCb3hlcyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RDbG91ZEJveGVzIiwicGF0aCI6Ii92MS9jbG91ZC9ib3hlcyIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6Ijg5ZjI1MDkwYzhlNWE4MmQxYTY1OWM1NTJhYTJkOTM3ZWMwZTZhZDdhN2VlMTU1N2QyODhhMjcyYTQ5ZWUwMjYiLCJzaWduYXR1cmVfc2hhMjU2IjoiOWRhMjc0MjY5NTcwMGIwZTRmOTRhYjQwNTZlMjUxMDI3MWQwNjgzODYzZDg1MDU0NDhhY2I1MTM2N2I5MTc1MCJ9 -->
### `client.listCloudBoxes`

Operation ID: `listCloudBoxes`  
Route: `GET` `/v1/cloud/boxes`  
Detailed page: [`listCloudBoxes`](operations/cloud/listcloudboxes.md)

#### Signature

```kotlin
suspend fun listCloudBoxes(params: ListCloudBoxesParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<CloudBoxListResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-label cloud boxes | application/json (CloudBoxListResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJwZXJmb3JtQ2xvdWRCb3hBY3Rpb24iLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoicGVyZm9ybUNsb3VkQm94QWN0aW9uIiwicGF0aCI6Ii92MS9jbG91ZC9ib3hlcy97Ym94SWR9L2FjdGlvbiIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6ImI4NTZkOTc5MDhhZjUzNmQzNjhhYTI4MjQxMGJhODllY2YxMDY3MjgxMTg5OGU3YWFhYzU5MjdhNTk4YzFiNzAiLCJzaWduYXR1cmVfc2hhMjU2IjoiNGIxOWM1ODllMTQ0NDU1ZjFiYzdjNTlmNjQ4YjYyNjE1YzQzOGUyZGVmMWEwY2Q5MTgzMTI3OGViOWM3Y2QxNyJ9 -->
### `client.performCloudBoxAction`

Operation ID: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Detailed page: [`performCloudBoxAction`](operations/cloud/performcloudboxaction.md)

#### Signature

```kotlin
suspend fun performCloudBoxAction(params: PerformCloudBoxActionParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<CloudBoxActionResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | `path` | yes | `string` |  |
| `body` | body | yes | `CloudBoxActionRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cloud box action result | application/json (CloudBoxActionResponse) |

#### Canonical required-input example

```json
{
  "body": {
    "action": "suspend"
  },
  "content_type": "application/json",
  "parameters": [
    {
      "in": "path",
      "name": "boxId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJwZXJmb3JtQ2xvdWRCb3hBY3Rpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJzeW5jQ2xvdWRCb3hWYXVsdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzeW5jQ2xvdWRCb3hWYXVsdCIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMve2JveElkfS92YXVsdCIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6Ijc4ZWYxMzNmYzU3YTc5OTU3NmQ1ZjY0NzQ0OWRlY2EyMTAwOWI0NWViMzM5Mjk4NTA0ODcxMTQyYmFmY2YwYTUiLCJzaWduYXR1cmVfc2hhMjU2IjoiYWMyYzE1YzM0NTlkMGE0ZTIwODA0N2FmZTFiMmM5YzI3MGE0MGExNjE0NDY2NzIzMzU4MTQwMWQyOTRmODY2MSJ9 -->
### `client.syncCloudBoxVault`

Operation ID: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Detailed page: [`syncCloudBoxVault`](operations/cloud/synccloudboxvault.md)

#### Signature

```kotlin
suspend fun syncCloudBoxVault(params: SyncCloudBoxVaultParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<SyncCloudBoxVaultResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | `path` | yes | `string` |  |
| `body` | body | yes | `SyncCloudBoxVaultRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Vault sync receipt (key names only, zero secret values echoed) | application/json (SyncCloudBoxVaultResponse) |

#### Canonical required-input example

```json
{
  "body": {
    "keys": [
      "example"
    ]
  },
  "content_type": "application/json",
  "parameters": [
    {
      "in": "path",
      "name": "boxId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzeW5jQ2xvdWRCb3hWYXVsdCJ9 -->

## Resource `fleet`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJnZXRPcmdhbml6YXRpb25GbGVldCIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldE9yZ2FuaXphdGlvbkZsZWV0IiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vZmxlZXQiLCJyZXNvdXJjZSI6ImZsZWV0Iiwic2VjdGlvbl9zaGEyNTYiOiI2YTY4ZDg5YzdhMmExMjIzNmZlZTQ3MzA2Mjk0OTMxMzg1NzRkZTY2MDdiZWE2NGJhNGM1OTY1N2Q4ZDRiNTdjIiwic2lnbmF0dXJlX3NoYTI1NiI6IjBiOGJjZjljNTk0M2JlMDNmOGZmYmVkMzAyNmM2YWJhOGM1NmJmN2QyYjUzZTI4YTcyODNhZWJjMmMxMWIxZmQifQ -->
### `client.getOrganizationFleet`

Operation ID: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  
Detailed page: [`getOrganizationFleet`](operations/fleet/getorganizationfleet.md)

#### Signature

```kotlin
suspend fun getOrganizationFleet(params: GetOrganizationFleetParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<OrganizationFleetResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |

#### Canonical required-input example

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "orgId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJsaXN0T3JnYW5pemF0aW9uTWVtYmVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RPcmdhbml6YXRpb25NZW1iZXJzIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjY1MmFhYmJlOTRlYjE3ZWNlYzhlZjJmYjk1MzJjNDc0MTNmOWQzMmM1MTI3NDhjOGM2ZjUyMTlmZTU2ODY0ODMiLCJzaWduYXR1cmVfc2hhMjU2IjoiOWY0NTYwNmE5YzI5OGI0OGU4MDk3M2UxNzQyYTRhNDQ0OTMwODU3Yzc4Yjg4MjgyNDQzZjZlMmUwNzAxMTA5ZSJ9 -->
### `client.listOrganizationMembers`

Operation ID: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  
Detailed page: [`listOrganizationMembers`](operations/fleet/listorganizationmembers.md)

#### Signature

```kotlin
suspend fun listOrganizationMembers(params: ListOrganizationMembersParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<OrganizationMembersResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization members list | application/json (OrganizationMembersResponse) |

#### Canonical required-input example

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "orgId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0T3JnYW5pemF0aW9uTWVtYmVycyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJsaXN0U2Fhc1BsYW5zIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdFNhYXNQbGFucyIsInBhdGgiOiIvdjEvc2Fhcy9wbGFucyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImE4N2Q1OTNjMzNhZDYxN2QzNzFmNGQyNDQ4NDk2MmU4NzBmYjUwMTYyMWQ4YzAzYzg1YThlNmQxMThmNzVhOWEiLCJzaWduYXR1cmVfc2hhMjU2IjoiOGY2NjdmMjMzYjA4YzZiMzRhMGNlYzc2MWNjNjAwZjkzMmEyMTE2MWJiMmE0MWYzYmJlOWZkOTA5MmEzNjcwMyJ9 -->
### `client.listSaasPlans`

Operation ID: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  
Detailed page: [`listSaasPlans`](operations/fleet/listsaasplans.md)

#### Signature

```kotlin
suspend fun listSaasPlans(params: ListSaasPlansParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<SaasPlansResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | SaaS plan catalog | application/json (SaasPlansResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0U2Fhc1BsYW5zIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSIsIm1ldGhvZCI6IlBVVCIsIm9wZXJhdGlvbl9pZCI6InVwZGF0ZU9yZ2FuaXphdGlvbkZsZWV0UG9saWN5IiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vZmxlZXQvcG9saWN5IiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiYTk0NjFkOWY4YTE0MmYxNGE4NTg0NmU4MWRlZmE1YzIxZDE5MzY3MjQzZWE5ZjgzNDA2ZGRiZDFlYTcwZDg0ZCIsInNpZ25hdHVyZV9zaGEyNTYiOiJkYWRmZTY2YWYyM2UxZWQ1YzI4MGM1NzY0MmRiYmI2OGUwN2Q1N2JiNGQxYjQwMDFhZmIwZDA3M2QyYTE4YjE2In0 -->
### `client.updateOrganizationFleetPolicy`

Operation ID: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Detailed page: [`updateOrganizationFleetPolicy`](operations/fleet/updateorganizationfleetpolicy.md)

#### Signature

```kotlin
suspend fun updateOrganizationFleetPolicy(params: UpdateOrganizationFleetPolicyParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<OrganizationFleetResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `FleetPolicyUpdateRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Updated fleet policy | application/json (OrganizationFleetResponse) |

#### Canonical required-input example

```json
{
  "body": {},
  "content_type": "application/json",
  "parameters": [
    {
      "in": "path",
      "name": "orgId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoidXBzZXJ0T3JnYW5pemF0aW9uTWVtYmVyIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjNhOWY1ZTc0Y2IzNjEwNDQ2ZGZlN2U3MTVkYzg2ZTgzZTliMDE2ODIxNjIxNzM0YzA4OWJkN2UwNjljN2E4M2YiLCJzaWduYXR1cmVfc2hhMjU2IjoiNTg5MjVlNjliYjdmOGZmZGRkYjM2N2ZmMzEyN2U5NmQxOTU3ZjRkMWIxZmM0ZmVjNjFmM2NhMjBkYzUxOThjZSJ9 -->
### `client.upsertOrganizationMember`

Operation ID: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  
Detailed page: [`upsertOrganizationMember`](operations/fleet/upsertorganizationmember.md)

#### Signature

```kotlin
suspend fun upsertOrganizationMember(params: UpsertOrganizationMemberParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<OrganizationMember>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `UpsertOrganizationMemberRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Upserted organization member | application/json (OrganizationMember) |

#### Canonical required-input example

```json
{
  "body": {
    "email": "example",
    "role": "owner",
    "userId": "example"
  },
  "content_type": "application/json",
  "parameters": [
    {
      "in": "path",
      "name": "orgId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIifQ -->

## Resource `jobs`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJjYW5jZWxKb2IiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoiY2FuY2VsSm9iIiwicGF0aCI6Ii92MS9qb2JzL3tqb2JJZH0vY2FuY2VsIiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJlMGRiMmZlMDE1NGNkY2Q1M2RkNDQxMWQ4MDE4YTJlNWI1MTNjYjc5YTk4MGZmMDc1ODZiZjUxNGYyOGJmZmM1Iiwic2lnbmF0dXJlX3NoYTI1NiI6ImI0NTEyYTM3NDQ4NWY2YzZhNDg3YTY3ZWNiNTYyOGJjMGRhNzI3YTU3NTM0NjYyYzk5NzBmYzdmYjMyZmFhMDkifQ -->
### `client.cancelJob`

Operation ID: `cancelJob`  
Route: `POST` `/v1/jobs/{jobId}/cancel`  
Detailed page: [`cancelJob`](operations/jobs/canceljob.md)

#### Signature

```kotlin
suspend fun cancelJob(params: CancelJobParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |

#### Canonical required-input example

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "jobId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJnZXRKb2JFeGVjdXRpb24iLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JFeGVjdXRpb24iLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9leGVjdXRpb24iLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjZkMzc0NDQxNjU1ODY0ZGUxMDRjYmU0NWE4MzE3MmNiODNlZjczNWYwOTI0MmNkM2RiODQyMTY0NjY0NGNmZDkiLCJzaWduYXR1cmVfc2hhMjU2IjoiMjJiODlhZmI0ZmJhZjRlZTljMWEyMDEzMGI1MGFiODc1N2UyZmFlMzg1MGYyNGQ3YzE1ZTI0NTNkZmEyMTdiZiJ9 -->
### `client.getJobExecution`

Operation ID: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  
Detailed page: [`getJobExecution`](operations/jobs/getjobexecution.md)

#### Signature

```kotlin
suspend fun getJobExecution(params: GetJobExecutionParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobExecutionResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |

#### Canonical required-input example

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "jobId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JFeGVjdXRpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJnZXRKb2JMb2dzIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0Sm9iTG9ncyIsInBhdGgiOiIvdjEvam9icy97am9iSWR9L2xvZ3MiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6Ijk0YjFiZmE1OTM4MzIwODk1NmNhYjRiM2QzMjBhMGYwZmRlMjM4YzY1NmI2ZGVjMWE3NjBlZTQ3ZTFlNjI5MmQiLCJzaWduYXR1cmVfc2hhMjU2IjoiZmJmMmVjMTc3OGE1OWUzYzIxMzc1ZWJjNDFlOTM0NDZlYzFmODNhNThjYTliYTY4OGJkNmRhM2U0NTE0ODRlMiJ9 -->
### `client.getJobLogs`

Operation ID: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  
Detailed page: [`getJobLogs`](operations/jobs/getjoblogs.md)

#### Signature

```kotlin
suspend fun getJobLogs(params: GetJobLogsParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobLogsResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Redacted job logs | application/json (JobLogsResponse) |

#### Canonical required-input example

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "jobId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJnZXRKb2JTdGF0dXMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JTdGF0dXMiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfSIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiZjg5MDAyYjRlZjdmZTk2YWVlOWM0ODIwYTJhZDNlOGQyNjBlOTEyYzFjMDU2ZjBlZTQ4MjI0N2I3ZTVmNDJjNyIsInNpZ25hdHVyZV9zaGEyNTYiOiI0MzZmNGY0NWQ4ZDU5ZjY1OWQzY2M2ZmJiMjY0YmFkYTJhYmRiYmZhZTE4MTNkYjJlNDFmNDFmNGY2MDhhZGFhIn0 -->
### `client.getJobStatus`

Operation ID: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  
Detailed page: [`getJobStatus`](operations/jobs/getjobstatus.md)

#### Signature

```kotlin
suspend fun getJobStatus(params: GetJobStatusParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job status snapshot | application/json (JobSummary) |

#### Canonical required-input example

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "jobId",
      "value": "example"
    }
  ]
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JTdGF0dXMifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJpbnNwZWN0UHJvamVjdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJpbnNwZWN0UHJvamVjdCIsInBhdGgiOiIvdjEvaW5zcGVjdCIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiNTVmOTNlMDlmMGZhNTRmMWY5NTA3ZWM5ZmY4NWQwMWQ5YTJlYjZhM2MzMzI1ZWM5MGE1M2QxZTIwMzRlM2M2MCIsInNpZ25hdHVyZV9zaGEyNTYiOiI5Y2IzNTM3ZDVkMjI5OWNkZWVhZDQ0Y2RjZjA4NTYyNzM5NjkwMTk1YjIxMjdmNDZjZmZiZjBhODk5Y2YxMWIzIn0 -->
### `client.inspectProject`

Operation ID: `inspectProject`  
Route: `POST` `/v1/inspect`  
Detailed page: [`inspectProject`](operations/jobs/inspectproject.md)

#### Signature

```kotlin
suspend fun inspectProject(params: InspectProjectParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<ProjectInspectionPlan>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `InspectProjectRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |

#### Canonical required-input example

```json
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJpbnNwZWN0UHJvamVjdCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJsaXN0Sm9icyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RKb2JzIiwicGF0aCI6Ii92MS9qb2JzIiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJkOTM1ZTYwMGI5YWE0ZmI2YzkzM2QwODIxZjUwZjRmOGQ1MzMyZDRhMjBjZTk2Njg2YTA2YmMxNjI1ZDk5M2U0Iiwic2lnbmF0dXJlX3NoYTI1NiI6IjI2OTg5ZjQ2Njc4ZjFiNDc1NTYxZjZlZTExN2JiNTQyYWJlZGMxMmFmNmVkOGIyNjkxODljNDYxN2JlOGQ3ZGMifQ -->
### `client.listJobs`

Operation ID: `listJobs`  
Route: `GET` `/v1/jobs`  
Detailed page: [`listJobs`](operations/jobs/listjobs.md)

#### Signature

```kotlin
suspend fun listJobs(params: ListJobsParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobListResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | `query` | no | `string` |  |
| `boxId` | `query` | no | `string` |  |
| `limit` | `query` | no | `integer` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJzdGFydEFnZW50Sm9iIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN0YXJ0QWdlbnRKb2IiLCJwYXRoIjoiL3YxL2FnZW50LWpvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjE1NzQwYzIzM2IxMGZkMmRjZjllZjY4MThhZDc5ZmFkNzM5ODRjMGI4MWEyOWRlNjIyYTg4NTZkZTEyYjkxYWEiLCJzaWduYXR1cmVfc2hhMjU2IjoiMzI2YTgyMWFkZGI4ZTZhNzBlMzliYzA2NTdkMTlkZDY2N2VjZDI2ZGU5M2YyNmZjZDFkMDkwYTMwMTIwMWJlOSJ9 -->
### `client.startAgentJob`

Operation ID: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  
Detailed page: [`startAgentJob`](operations/jobs/startagentjob.md)

#### Signature

```kotlin
suspend fun startAgentJob(params: StartAgentJobParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartAgentJobRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Autonomous coding job started | application/json (JobSummary) |

#### Canonical required-input example

```json
{
  "body": {
    "projectRoot": "example",
    "task": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEFnZW50Sm9iIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJzdGFydEdpdGh1YkpvYiIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzdGFydEdpdGh1YkpvYiIsInBhdGgiOiIvdjEvZ2l0aHViLWpvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6ImQ1MjIwYTJjMDRiNTZkNDgzMWMzOWQyZWRkMDIxMjFlM2YwMzQwZTc3N2RmNzg0OTVkYWFmNDEyZDJiNWQ1NGIiLCJzaWduYXR1cmVfc2hhMjU2IjoiZmQyZDdlMjA3M2JlNjZiNmE3M2JjMDlmNjNlY2U4MTQ5ZTc5M2NhN2YwMGEwYzhlM2U0MTJkN2ZkMjU0NWQ0MSJ9 -->
### `client.startGithubJob`

Operation ID: `startGithubJob`  
Route: `POST` `/v1/github-jobs`  
Detailed page: [`startGithubJob`](operations/jobs/startgithubjob.md)

#### Signature

```kotlin
suspend fun startGithubJob(params: StartGithubJobParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartGithubJobRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | GitHub sandbox job started | application/json (JobSummary) |

#### Canonical required-input example

```json
{
  "body": {
    "repository": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEdpdGh1YkpvYiJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJzdGFydFByb2plY3RKb2IiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3RhcnRQcm9qZWN0Sm9iIiwicGF0aCI6Ii92MS9qb2JzIiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJmYzk1Yjg1YmY4MzhjOTFiOWJkNDEwNjVlZmIyZGFiMDNiYmVlNDk2ZTE2MGRkMzkxMjY2YTQ1ZjQzNzIyN2EzIiwic2lnbmF0dXJlX3NoYTI1NiI6ImMwNzVkMjM1MWYzMzQ5MzA4YjlmZDlhYzE1ZGU0NGYxYjMyZTYzN2YwYjY3ZWQ3MzY4NzlkMjYxNjZmMjI5NjAifQ -->
### `client.startProjectJob`

Operation ID: `startProjectJob`  
Route: `POST` `/v1/jobs`  
Detailed page: [`startProjectJob`](operations/jobs/startprojectjob.md)

#### Signature

```kotlin
suspend fun startProjectJob(params: StartProjectJobParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartProjectJobRequest` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Job created and started | application/json (JobSummary) |

#### Canonical required-input example

```json
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IifQ -->

## Resource `system`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJkZXNjcmliZUFnZW50TW9kcyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImRlc2NyaWJlQWdlbnRNb2RzIiwicGF0aCI6Ii92MS9tb2RzIiwicmVzb3VyY2UiOiJzeXN0ZW0iLCJzZWN0aW9uX3NoYTI1NiI6IjA1MDk4NDJlZGQ0OTM4Njc5NDcwNmYwM2EyNzU1NTMwNDNiMjZhNzY4NGJiZGFjNjZkNzc2NmY5ZTI1ZjNiOWYiLCJzaWduYXR1cmVfc2hhMjU2IjoiZmQyOGQ1OTVjMzFkZWRiOWE5ZGQ4OGMxMDVhNjBiZDBmMThmOGM5NTVkNzExNzA1NzAzZTgyOWMyYjdjY2UzYyJ9 -->
### `client.describeAgentMods`

Operation ID: `describeAgentMods`  
Route: `GET` `/v1/mods`  
Detailed page: [`describeAgentMods`](operations/system/describeagentmods.md)

#### Signature

```kotlin
suspend fun describeAgentMods(params: DescribeAgentModsParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<ModsCatalogResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `target` | `query` | no | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Agent mods catalog | application/json (ModsCatalogResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJnZXRIZWFsdGgiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRIZWFsdGgiLCJwYXRoIjoiL2hlYWx0aCIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiIzNTVmZGQ4N2ZlOTRmOGJjMzk3ZjExOWUyYjM1NTNkMjAxZTZlOGYyOWZjZDBhOWM4NTViMGM3M2M2ZmRiYmU3Iiwic2lnbmF0dXJlX3NoYTI1NiI6ImFmMDVmYzc2YTU4ZDY0ZGQzMjk0YzUwYjc5MDAyZTg2YjNkMzViODdiZGRlMGYzYzQzZTZiNDUxNTM0YmJiNDUifQ -->
### `client.getHealth`

Operation ID: `getHealth`  
Route: `GET` `/health`  
Detailed page: [`getHealth`](operations/system/gethealth.md)

#### Signature

```kotlin
suspend fun getHealth(params: GetHealthParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<HealthResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Service health status | application/json (HealthResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRIZWFsdGgifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJsaXN0Q2FwYWJpbGl0aWVzIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdENhcGFiaWxpdGllcyIsInBhdGgiOiIvdjEvY2FwYWJpbGl0aWVzIiwicmVzb3VyY2UiOiJzeXN0ZW0iLCJzZWN0aW9uX3NoYTI1NiI6ImNlNzY1MjA1MzhjMmI4MmRiOTNmMTIzNmE0MWE4NjlmMzk5ZWQ5OTY3MjQ4OWQzM2M3ZDUyMTExNmNjMThmM2EiLCJzaWduYXR1cmVfc2hhMjU2IjoiNjQ0NmM2NjhhNjc3ZGViNWM1ZDRjMTQ2ZDlmNjQxMDI4OTYxNTA4Yzc0MWYyZmJlY2YyMzg5ZjEwMmM3MWFmNyJ9 -->
### `client.listCapabilities`

Operation ID: `listCapabilities`  
Route: `GET` `/v1/capabilities`  
Detailed page: [`listCapabilities`](operations/system/listcapabilities.md)

#### Signature

```kotlin
suspend fun listCapabilities(params: ListCapabilitiesParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<CapabilitiesResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `query` | `query` | no | `string` |  |
| `state` | `query` | no | `string` |  |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2FwYWJpbGl0aWVzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJsaXN0UHJvdmlkZXJzIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdFByb3ZpZGVycyIsInBhdGgiOiIvdjEvcHJvdmlkZXJzIiwicmVzb3VyY2UiOiJzeXN0ZW0iLCJzZWN0aW9uX3NoYTI1NiI6IjcyNjNlYzY1YmVhYThjY2QxZDUzZjgzZmQ4NWYxYjI0OTQ1ZjA3NGZkMjI0OTBlYzMwZGI0MjAzZDJjNWZhZjIiLCJzaWduYXR1cmVfc2hhMjU2IjoiMzFkMzA5Zjk4ODcyYzgzNTJhZDA2YjkzMjc0MzdkNmUwMTZiYTZkNjU3N2FiMjczODM0ZWJkOTFjYjU0ZWMyZSJ9 -->
### `client.listProviders`

Operation ID: `listProviders`  
Route: `GET` `/v1/providers`  
Detailed page: [`listProviders`](operations/system/listproviders.md)

#### Signature

```kotlin
suspend fun listProviders(params: ListProvidersParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<ProvidersResponse>
```

#### Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

#### Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |

#### Canonical required-input example

```json
{
  "parameters": []
}
```

#### SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0UHJvdmlkZXJzIn0 -->

