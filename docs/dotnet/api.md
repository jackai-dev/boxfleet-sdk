# BoxFleet .NET API

<!-- omniwrap-api-reference eyJjb250cmFjdF9maW5nZXJwcmludCI6IjE3ZGRlMWE4OTgwNThiMzJlNTcwNDc3NGI3NjVhNTFjMmJjZjEyYmRkMDRlYzM4MDVkNmI2ODA0YWM1YWU3ZmEiLCJvcGVyYXRpb25fY291bnQiOjIzLCJyZW5kZXJlciI6ImRvdG5ldCIsInZlcnNpb24iOiIxLjQuMCJ9 -->

This generated index is tied to Semantic IR `1.14.0` and contract fingerprint `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`. Every operation below is rendered from the same semantic contract and artifact-attested public member allocation as the SDK.

SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

## Client hooks and tracing

`new ClientOptions { Hooks = new RequestHooks { ... } }` registers four callbacks. Every attempt starts with `BeforeRequest` and ends with exactly one of `OnRetry` (another attempt follows), `AfterResponse` (the success the call returns) or `OnError` (the failure the call reports). Each receives the operation id, the HTTP method, the URL, the request headers, the attempt number (from 1), the time elapsed since the call started and, once the server answered, the HTTP status. No context carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`, every API-key header and API-key query parameter, and any configured credential value read `[redacted]`. Every context is an immutable `HookContext` record: no hook can change the request.

`new ClientOptions { Tracer = ... }` opens one span per call through the tracer interface this SDK defines, named after the operation id, with `http.request.method`, `http.response.status_code` and `http.request.resend_count`. It needs no tracing library; README.md maps it onto the OpenTelemetry API.

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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDcmVhdGVDbG91ZEJveEFzeW5jIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6ImNyZWF0ZUNsb3VkQm94IiwicGF0aCI6Ii92MS9jbG91ZC9ib3hlcyIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6Ijk5M2JkNTNkYjhlOTg2ZGM4MWJlNmI4MjkyOTgzMjg5NTEwYzQwYjMwY2M3OWVlMTg0NjUwODhjZGY5OTNiY2YiLCJzaWduYXR1cmVfc2hhMjU2IjoiOWU0NjQyYmQ2NWU5NjEzM2JkZjhlOTYwNDdkOGM5MDk2NGQwMDdmYTcyZWJlYzI0ZmZhNmQ3Y2YzNDRjOGQ4MiJ9 -->
### `client.CreateCloudBoxAsync`

Operation ID: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  
Detailed page: [`createCloudBox`](operations/cloud/createcloudbox.md)

#### Signature

```csharp
public async Task<CloudBoxEnvelope> CreateCloudBoxAsync(
CreateCloudBoxRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJHZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nQXN5bmMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nIiwicGF0aCI6Ii92MS9jbG91ZC9jYXRhbG9nIiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiYzcyOWNlZDM2MzEzZDlhYmUwMGJhODFlZWIxZGJhZjYyOWM2MWVjZWFkYWRjNTI1NTdjNDlhN2JjNTYyZDlhOCIsInNpZ25hdHVyZV9zaGEyNTYiOiJiZjQ5ODVhODUzZjZlODdkMjllM2MyZGFlOTBmMmU3OTFlOThiZmMxYjA5YTU0YjhlNzRhZmJiNGVmOTk2MWI0In0 -->
### `client.GetWhiteLabelCloudCatalogAsync`

Operation ID: `getWhiteLabelCloudCatalog`  
Route: `GET` `/v1/cloud/catalog`  
Detailed page: [`getWhiteLabelCloudCatalog`](operations/cloud/getwhitelabelcloudcatalog.md)

#### Signature

```csharp
public async Task<WhiteLabelCloudCatalog> GetWhiteLabelCloudCatalogAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJMaXN0Q2xvdWRCb3hlc0FzeW5jIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdENsb3VkQm94ZXMiLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzIiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiZTZjYmVkZDYyMGU1MDY3MGQxZTFmNmZjMDBhOWE1M2EyYjIwMGUwYjQ2ZGU2NjNkOWFjOTg4MWUwN2Q4MDNhYSIsInNpZ25hdHVyZV9zaGEyNTYiOiI3MTZiNmUzZjI5YTIxYzYxNzFlNDBiMGNhZjVhOWY1ZjI5M2M1MWQ5N2ZlNjhiOGVjNjhmMTkyY2RhYjNiMTQzIn0 -->
### `client.ListCloudBoxesAsync`

Operation ID: `listCloudBoxes`  
Route: `GET` `/v1/cloud/boxes`  
Detailed page: [`listCloudBoxes`](operations/cloud/listcloudboxes.md)

#### Signature

```csharp
public async Task<CloudBoxListResponse> ListCloudBoxesAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJQZXJmb3JtQ2xvdWRCb3hBY3Rpb25Bc3luYyIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJwZXJmb3JtQ2xvdWRCb3hBY3Rpb24iLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzL3tib3hJZH0vYWN0aW9uIiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiMTJmYWY4N2RkNTZhODIwMjZjODg2N2RmYTQ5MzFmZWIyM2I5ZGM5NzU5YTUzYzQ4YmI2NmJiOGI2ZDU5MjlhYiIsInNpZ25hdHVyZV9zaGEyNTYiOiIyZDE2NTAwOWY5M2NmMWQzMTEzNzViZTY0MjZhN2EyNjg4OGZiYTJlYjk5YmEwYjU4MjYyMmM0Nzc5NjhkODE0In0 -->
### `client.PerformCloudBoxActionAsync`

Operation ID: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Detailed page: [`performCloudBoxAction`](operations/cloud/performcloudboxaction.md)

#### Signature

```csharp
public async Task<CloudBoxActionResponse> PerformCloudBoxActionAsync(
string boxId,
CloudBoxActionRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTeW5jQ2xvdWRCb3hWYXVsdEFzeW5jIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN5bmNDbG91ZEJveFZhdWx0IiwicGF0aCI6Ii92MS9jbG91ZC9ib3hlcy97Ym94SWR9L3ZhdWx0IiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiZGEzN2FlM2U2N2Q4YjZiM2EwMGVmMzRjMzJkM2M2NDRiNDEzMzhiMTZhMWQyMjgzNGQyNDU2YmVlYTM2ZWQ4YSIsInNpZ25hdHVyZV9zaGEyNTYiOiI3OGYwYzNiNTI3YWVjYWIzZmMwZjc5MzQzYTg0ZmUwODUyMTg0Y2JiNWI2YTgxZTBhNGJhZmFlZWYwNTJhN2YwIn0 -->
### `client.SyncCloudBoxVaultAsync`

Operation ID: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Detailed page: [`syncCloudBoxVault`](operations/cloud/synccloudboxvault.md)

#### Signature

```csharp
public async Task<SyncCloudBoxVaultResponse> SyncCloudBoxVaultAsync(
string boxId,
SyncCloudBoxVaultRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJHZXRPcmdhbml6YXRpb25GbGVldEFzeW5jIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0T3JnYW5pemF0aW9uRmxlZXQiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9mbGVldCIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImZhNDZkYzFlYWM3OGQwM2NjYzc2ZjIwNmUzNjBmN2M0NTRjYmFlN2M3YzUzM2I3YjFiYjM5NzVlNWVkYjQwZjMiLCJzaWduYXR1cmVfc2hhMjU2IjoiZjk2Y2NiNmU0YjI3MWYwMzI5ZmRiNWY3MmQ2MTdkNDJmOTZkYmU3NDVhMGIyYTFjYzdmNjNhODVhOGZiNzNhOSJ9 -->
### `client.GetOrganizationFleetAsync`

Operation ID: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  
Detailed page: [`getOrganizationFleet`](operations/fleet/getorganizationfleet.md)

#### Signature

```csharp
public async Task<OrganizationFleetResponse> GetOrganizationFleetAsync(
string orgId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJMaXN0T3JnYW5pemF0aW9uTWVtYmVyc0FzeW5jIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdE9yZ2FuaXphdGlvbk1lbWJlcnMiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9tZW1iZXJzIiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiYTQ5ZDk1ODA2MWEzMTI2N2FlZTM2NTJmYWUyOGMxODRlMjk5MWJmOTE1MmNkZGI3ODc5ZjVlZDI4NThkOTU0NCIsInNpZ25hdHVyZV9zaGEyNTYiOiIzMDQwZmEzMDFjMWUzYjdjMjVhYTE2ZWQyMDkzMTFmMzgwZDNiMzZhOTI2MzlkYzMwNjBkMjhiNzFkM2ZlM2NiIn0 -->
### `client.ListOrganizationMembersAsync`

Operation ID: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  
Detailed page: [`listOrganizationMembers`](operations/fleet/listorganizationmembers.md)

#### Signature

```csharp
public async Task<OrganizationMembersResponse> ListOrganizationMembersAsync(
string orgId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJMaXN0U2Fhc1BsYW5zQXN5bmMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0U2Fhc1BsYW5zIiwicGF0aCI6Ii92MS9zYWFzL3BsYW5zIiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiNmI4NzUyOWYzMzk1MzIyNTAxZjFjZjQzMDY1YWEzNjZkMWI2MWRhMTYyNTdlNzM3OGMzZGFkMmEyNjUzMDYzYyIsInNpZ25hdHVyZV9zaGEyNTYiOiI2NWM5NTMyMWNhOTBiZmQ2MjkyZTBhN2I0OGEwNDg5Y2QzYjUwYzk0M2JmYzgyM2E1Y2JiNmZmODM2OTVlZDI1In0 -->
### `client.ListSaasPlansAsync`

Operation ID: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  
Detailed page: [`listSaasPlans`](operations/fleet/listsaasplans.md)

#### Signature

```csharp
public async Task<SaasPlansResponse> ListSaasPlansAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJVcGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeUFzeW5jIiwibWV0aG9kIjoiUFVUIiwib3BlcmF0aW9uX2lkIjoidXBkYXRlT3JnYW5pemF0aW9uRmxlZXRQb2xpY3kiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9mbGVldC9wb2xpY3kiLCJyZXNvdXJjZSI6ImZsZWV0Iiwic2VjdGlvbl9zaGEyNTYiOiJlNDE1MjBmOWQ1NWVlMjBkNTk2MmE1YzQ0Yzc0Y2EyNjhkYjFkYmJjZTY4N2E3NGNiNGY2ZDQ4ZjQzNGRlMzRmIiwic2lnbmF0dXJlX3NoYTI1NiI6ImFlMDc4YmY0Mzc0NzhjNzI2ODk2MmVlMDc3MDkxYzAwN2JmZmVjNWFjYjg0Zjc4YzZjYmMzZWJjY2IzMTJlMWIifQ -->
### `client.UpdateOrganizationFleetPolicyAsync`

Operation ID: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Detailed page: [`updateOrganizationFleetPolicy`](operations/fleet/updateorganizationfleetpolicy.md)

#### Signature

```csharp
public async Task<OrganizationFleetResponse> UpdateOrganizationFleetPolicyAsync(
string orgId,
FleetPolicyUpdateRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJVcHNlcnRPcmdhbml6YXRpb25NZW1iZXJBc3luYyIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9tZW1iZXJzIiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiODhiOWY2YmYwMWVhNGM0NWFlMDZjODFhY2FhNWEwYmY0MjM2M2UyODM1MzJjMjk4NDVkNDcxNDcxNDllYTFmNCIsInNpZ25hdHVyZV9zaGEyNTYiOiI5NTdiMmVhOGIzMWNjYjRlNDNjMWYwODc2NWYxY2ZhYjE5NTIzOWVhOTk3YTYxOGE1NmU4NmNlZTlhYzc4ZWJiIn0 -->
### `client.UpsertOrganizationMemberAsync`

Operation ID: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  
Detailed page: [`upsertOrganizationMember`](operations/fleet/upsertorganizationmember.md)

#### Signature

```csharp
public async Task<OrganizationMember> UpsertOrganizationMemberAsync(
string orgId,
UpsertOrganizationMemberRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDYW5jZWxKb2JBc3luYyIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9jYW5jZWwiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjczYzZiOGU5NTdlZmU1ZGNmZWE4NDQ3MzJhY2ZjMWUyZjc2NGQ4MjBlMjM3NDU1NmE3ZjM5NWZhZGU1YmZhNzkiLCJzaWduYXR1cmVfc2hhMjU2IjoiMzY0YWM1NTk3NjYwZmUzZTFlNzRlNTU2ODgxZDRhZjJiMDY3MGMwYWIxMWNlYmY0YmI2NWZiZDNjN2ZlNzY2OSJ9 -->
### `client.CancelJobAsync`

Operation ID: `cancelJob`  
Route: `POST` `/v1/jobs/{jobId}/cancel`  
Detailed page: [`cancelJob`](operations/jobs/canceljob.md)

#### Signature

```csharp
public async Task<JobSummary> CancelJobAsync(
string jobId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJHZXRKb2JFeGVjdXRpb25Bc3luYyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYkV4ZWN1dGlvbiIsInBhdGgiOiIvdjEvam9icy97am9iSWR9L2V4ZWN1dGlvbiIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiZjk4ZDc3MTg0MDJlN2FlZmJmZjczNTFhNWRlNzk4OTMwYjIzOTZiNzk5MDhjZGE3NmI4YWZlNGEwNDJhYzY2YSIsInNpZ25hdHVyZV9zaGEyNTYiOiJjNzJiYzM2OGRlMzRhZDZhODFjNmQ2NWU4NmVkODkzN2QwZTA2YzczZmM2M2VkMmZhY2YxMGQwYzA1ZjU4YWE3In0 -->
### `client.GetJobExecutionAsync`

Operation ID: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  
Detailed page: [`getJobExecution`](operations/jobs/getjobexecution.md)

#### Signature

```csharp
public async Task<JobExecutionResponse> GetJobExecutionAsync(
string jobId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJHZXRKb2JMb2dzQXN5bmMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIiwicGF0aCI6Ii92MS9qb2JzL3tqb2JJZH0vbG9ncyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYWFhMDBmYWQwNjBkNGEyOTJkOGZiOTFjZmZhNmE1YjgxZjc2MjI5OGRiZTZiMTVkMzFiZjY3MTEwZWQ5OTlkMCIsInNpZ25hdHVyZV9zaGEyNTYiOiIxODQyYTc0NmYzOTUxNTNiZDMzNmRiZGExOTQ5ZDcxMjdhMzgwZDFmMmIwNGZlMDFlYjkwOTA5NTAyMjEwMTU1In0 -->
### `client.GetJobLogsAsync`

Operation ID: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  
Detailed page: [`getJobLogs`](operations/jobs/getjoblogs.md)

#### Signature

```csharp
public async Task<JobLogsResponse> GetJobLogsAsync(
string jobId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJHZXRKb2JTdGF0dXNBc3luYyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYlN0YXR1cyIsInBhdGgiOiIvdjEvam9icy97am9iSWR9IiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiI4MjIyMWI4ZTBhMTI5NGM2M2MzYWFhOWU2ODkzMjY4ZDM4ZGU0ZjRkZTU3NGM1NTZjYTZlMGJiNTE4NmFkOTYyIiwic2lnbmF0dXJlX3NoYTI1NiI6ImM1YTBiY2JkOTY5MjE3NDE5MzE4ODc0NDNhNTBhYWUyZmMzYzNjNTMzYThmNDM1YzFjMmY5MjEzNGE2ODUyY2MifQ -->
### `client.GetJobStatusAsync`

Operation ID: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  
Detailed page: [`getJobStatus`](operations/jobs/getjobstatus.md)

#### Signature

```csharp
public async Task<JobSummary> GetJobStatusAsync(
string jobId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJJbnNwZWN0UHJvamVjdEFzeW5jIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6Imluc3BlY3RQcm9qZWN0IiwicGF0aCI6Ii92MS9pbnNwZWN0IiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJlNTVkZmQyMzBhOTQ5ODZmNmQxYjY5YjQ5NzBhMWZhYTI5OTlmNmMyODcwYjE0ZDFiMjhlYzM4ZTFiYjkxNWFkIiwic2lnbmF0dXJlX3NoYTI1NiI6IjEyNTNiYzc4YTA0MjRkNTA2NzQ0ZWFmZWRiYWFjOWM1MjBkNWU1NmE2ZjE4ZTQ5MGNlOThmNTM0Yzk3ZDc3MzkifQ -->
### `client.InspectProjectAsync`

Operation ID: `inspectProject`  
Route: `POST` `/v1/inspect`  
Detailed page: [`inspectProject`](operations/jobs/inspectproject.md)

#### Signature

```csharp
public async Task<ProjectInspectionPlan> InspectProjectAsync(
InspectProjectRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJMaXN0Sm9ic0FzeW5jIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdEpvYnMiLCJwYXRoIjoiL3YxL2pvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjdkOTU1MDg4ODFhYTUwZjQ4NDViNGU4YzgyNzQ3ZmMzYTVlZDdjZWZjYWE0NmEzMzc0NTYwZjhhMDFiYTZlOTAiLCJzaWduYXR1cmVfc2hhMjU2IjoiYmUxMjI2ODgyYzM5YmZkNGMyODc2MjFkZGRhODA5MDc5ODJiZDc4MjdjMzFjMGQwYjEwMjJhNDdiMTU1Y2VhZCJ9 -->
### `client.ListJobsAsync`

Operation ID: `listJobs`  
Route: `GET` `/v1/jobs`  
Detailed page: [`listJobs`](operations/jobs/listjobs.md)

#### Signature

```csharp
public async Task<JobListResponse> ListJobsAsync(
ListJobsStatus? status = null,
string? boxId = null,
long? limit = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTdGFydEFnZW50Sm9iQXN5bmMiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3RhcnRBZ2VudEpvYiIsInBhdGgiOiIvdjEvYWdlbnQtam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYTRjZTM4MmQ5Mzg4NmM5NDVkNGQwYzgyMzA1NzRlYmNlNDMyN2JlNTdmZDJmZTE5ZjI1ZDQ2NGQzNDU3N2VhYSIsInNpZ25hdHVyZV9zaGEyNTYiOiI0YzNiZGJkOGFlOGViY2QyYWMzMjMwNTNkNWM1N2YxNzU0NmVlNzk1MTJjMDkzMmVjMTZmNGU0NGM4ZTlmYWNkIn0 -->
### `client.StartAgentJobAsync`

Operation ID: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  
Detailed page: [`startAgentJob`](operations/jobs/startagentjob.md)

#### Signature

```csharp
public async Task<JobSummary> StartAgentJobAsync(
StartAgentJobRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTdGFydEdpdGh1YkpvYkFzeW5jIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN0YXJ0R2l0aHViSm9iIiwicGF0aCI6Ii92MS9naXRodWItam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiNDUxYjM3M2M4MjNhYmM0MjNmZTJmZWNmOWVlZTRiNWFkNDMyYzI4YWViZDdiYTIxMmFhMzBlN2ZhMGU1NGI4OCIsInNpZ25hdHVyZV9zaGEyNTYiOiJhZjUyMzc0YjhiNDQ1MTA0ZWE0MDI5OTdjZTgwZDk2MTU0MzYyMzE2YTdkOGQyOGE1ODM0MmU4Mjg3YTk2YjIxIn0 -->
### `client.StartGithubJobAsync`

Operation ID: `startGithubJob`  
Route: `POST` `/v1/github-jobs`  
Detailed page: [`startGithubJob`](operations/jobs/startgithubjob.md)

#### Signature

```csharp
public async Task<JobSummary> StartGithubJobAsync(
StartGithubJobRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTdGFydFByb2plY3RKb2JBc3luYyIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IiLCJwYXRoIjoiL3YxL2pvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjkxZmUxM2Q4YWMzYzk5ZGRiOTkzNTZiNWE1YTBlOTU5NTM1ZGRiNmExNDY0MGY5YzMzNzUzZTQyOTI2OGIzZTciLCJzaWduYXR1cmVfc2hhMjU2IjoiZjc2NDlhYzNhNmVkZTZmMjZjYmY3NmI3MzFlMDdmNTMzYzk1YTEwNWQ3YzFiODExZTc4NDU1ZWY3NTUxYjU5ZCJ9 -->
### `client.StartProjectJobAsync`

Operation ID: `startProjectJob`  
Route: `POST` `/v1/jobs`  
Detailed page: [`startProjectJob`](operations/jobs/startprojectjob.md)

#### Signature

```csharp
public async Task<JobSummary> StartProjectJobAsync(
StartProjectJobRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJEZXNjcmliZUFnZW50TW9kc0FzeW5jIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZGVzY3JpYmVBZ2VudE1vZHMiLCJwYXRoIjoiL3YxL21vZHMiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiY2JlM2UyNjE2ZTJhZDgyZTBkOWY0ODVhODBmZjhkZGZiOGFkNDVkODAyM2I4NmQxZjk5NTg4NWEyNzBjY2ZhMSIsInNpZ25hdHVyZV9zaGEyNTYiOiJiMjhmMTEyZDMxMWRjZmYwZWYxNGYyMjQyYTI5YzYyZThmZTFmOGU5ZTBjMTFmN2ZlZGJhZTA2ZTE1YmRkMGI5In0 -->
### `client.DescribeAgentModsAsync`

Operation ID: `describeAgentMods`  
Route: `GET` `/v1/mods`  
Detailed page: [`describeAgentMods`](operations/system/describeagentmods.md)

#### Signature

```csharp
public async Task<ModsCatalogResponse> DescribeAgentModsAsync(
DescribeAgentModsTarget? target = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJHZXRIZWFsdGhBc3luYyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEhlYWx0aCIsInBhdGgiOiIvaGVhbHRoIiwicmVzb3VyY2UiOiJzeXN0ZW0iLCJzZWN0aW9uX3NoYTI1NiI6IjZhZDQ0YjJhZmI1ZWIwNDIxODE5NzA5NTAwYzU3YmZkZWQ3MzFjYmZmNzAxNTZmNDQ2OGY2NWFlMjAxNWE2NmYiLCJzaWduYXR1cmVfc2hhMjU2IjoiYjFjZjUxODljZmIzNzFhZjRhZDU1YzYyMzEzYmRjZjY1ODdhOTFiYzdhOTliYjNhZTY2OTg1ZjYyOWZkOWJiNyJ9 -->
### `client.GetHealthAsync`

Operation ID: `getHealth`  
Route: `GET` `/health`  
Detailed page: [`getHealth`](operations/system/gethealth.md)

#### Signature

```csharp
public async Task<HealthResponse> GetHealthAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJMaXN0Q2FwYWJpbGl0aWVzQXN5bmMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Q2FwYWJpbGl0aWVzIiwicGF0aCI6Ii92MS9jYXBhYmlsaXRpZXMiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiZmYwYmJmN2E5ZTQ4MDAxNjllNjY1YzkyZTZjZWY0NjQ3NGQ1ODZlNGE1NDk1ZjAwYTQ5NzdkNjg0OGNiZGY1MiIsInNpZ25hdHVyZV9zaGEyNTYiOiJjZjNjMmMzNTIxZmNhMmExNTRhY2VhZjU2NjVlMjA2YTcyOWI0MTUzNmNiYzRkYTdjMTdiMTkzN2UwMzJkMjg4In0 -->
### `client.ListCapabilitiesAsync`

Operation ID: `listCapabilities`  
Route: `GET` `/v1/capabilities`  
Detailed page: [`listCapabilities`](operations/system/listcapabilities.md)

#### Signature

```csharp
public async Task<CapabilitiesResponse> ListCapabilitiesAsync(
string? queryXf1e9d09a9612 = null,
ListCapabilitiesState? state = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJMaXN0UHJvdmlkZXJzQXN5bmMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0UHJvdmlkZXJzIiwicGF0aCI6Ii92MS9wcm92aWRlcnMiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiZGIwY2M3YWI3NDhhZWE1MzIxMzhhMjk0ZGJhOGZlMWM2YmJiZTk0MjBkMGYxZjNhN2FjYTAyNWU0MDBiYzhkYyIsInNpZ25hdHVyZV9zaGEyNTYiOiI4OTEyZmY2OGJhNDNjNjg5YmU5MTQ5NmQ1YTI4MTc3NjQ2YzMxZTQ1MTgzYzdhZTQ0MzA2N2Q1YzExZDBkNjZmIn0 -->
### `client.ListProvidersAsync`

Operation ID: `listProviders`  
Route: `GET` `/v1/providers`  
Detailed page: [`listProviders`](operations/system/listproviders.md)

#### Signature

```csharp
public async Task<ProvidersResponse> ListProvidersAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

