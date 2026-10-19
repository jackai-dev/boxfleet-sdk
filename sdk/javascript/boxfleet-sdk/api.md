# BoxFleet JavaScript API

<!-- omniwrap-api-reference eyJjb250cmFjdF9maW5nZXJwcmludCI6IjE3ZGRlMWE4OTgwNThiMzJlNTcwNDc3NGI3NjVhNTFjMmJjZjEyYmRkMDRlYzM4MDVkNmI2ODA0YWM1YWU3ZmEiLCJvcGVyYXRpb25fY291bnQiOjIzLCJyZW5kZXJlciI6ImphdmFzY3JpcHQiLCJ2ZXJzaW9uIjoiMS40LjAifQ -->

This generated index is tied to Semantic IR `1.14.0` and contract fingerprint `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`. Every operation below is rendered from the same semantic contract and artifact-attested public member allocation as the SDK.

SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](omniwrap-artifact.json) binds this file by SHA-256 and is revalidated by the package gate.

## Client hooks and tracing

`new Client({ hooks })` registers four callbacks. Every attempt starts with `beforeRequest` and ends with exactly one of `onRetry` (another attempt follows), `afterResponse` (the success the call returns) or `onError` (the failure the call reports). Each receives the operation id, the HTTP method, the URL, the request headers, the attempt number (from 1), the time elapsed since the call started and, once the server answered, the HTTP status. No context carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`, every API-key header and API-key query parameter, and any configured credential value read `[redacted]`. `beforeRequest` is the one hook that may change the request (the documented per-request credential contract, which also reads credentials masked); the other three receive frozen `HookContext` copies.

`new Client({ tracer })` opens one span per call through the tracer interface this SDK defines, named after the operation id, with `http.request.method`, `http.response.status_code` and `http.request.resend_count`. It needs no tracing library; README.md maps it onto the OpenTelemetry API.

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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5jcmVhdGVCb3giLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoiY3JlYXRlQ2xvdWRCb3giLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzIiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiZTljN2VkNDc1N2E5MjZlOWU4MTdmM2YxMTJjODQwNGNlZmEyNmY3ZmU4ZTNjM2RjZTk2NDJjZDIwYzgyYTQzMCIsInNpZ25hdHVyZV9zaGEyNTYiOiIyNWE3MmI3NDVjZjJhYzgyOGY5MWVmYjNkYjZkYzdlN2I1ODBjYzBiMmY5MWEzMDdhNTMyNTQ0NjVmMzgzZjc0In0 -->
### `client.cloud.createBox`

Operation ID: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  

#### Signature

```javascript
client.cloud.createBox(body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.cloud.createBox({}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjcmVhdGVDbG91ZEJveCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5nZXRXaGl0ZUxhYmVsQ2F0YWxvZyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldFdoaXRlTGFiZWxDbG91ZENhdGFsb2ciLCJwYXRoIjoiL3YxL2Nsb3VkL2NhdGFsb2ciLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJlY2Q3ZDQzOWFmYzQ3ZWI2ODFlZGQwYjkyOTA0OTFkNjdiNjM2NDJkNjY1MjkzOGU3M2ZlZGFmYjZmMGE1MjBkIiwic2lnbmF0dXJlX3NoYTI1NiI6ImJjYTI4ODg0YWExODkyZjA5NGYwMjQwZmI2YTVjZmFhNDJhODAxMzNkODNmOWQxMTI1YmI2MGIyODgxMjM4NmIifQ -->
### `client.cloud.getWhiteLabelCatalog`

Operation ID: `getWhiteLabelCloudCatalog`  
Route: `GET` `/v1/cloud/catalog`  

#### Signature

```javascript
client.cloud.getWhiteLabelCatalog(requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.cloud.getWhiteLabelCatalog();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5saXN0Qm94ZXMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMiLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJmOGI1MjU2NGQzZTE2MjE5YTg1YmUzMjg5OWFiOTVjOTAzNjAwZjFjNzg3YTNjNjdhYmYyNTI5YjhiYzk0YTVhIiwic2lnbmF0dXJlX3NoYTI1NiI6IjMxZmNmNmRjMjJiMDI0ZWY0NDc5NzJjNGFkNTZjNDIwZDI2ZTljMDZiMzdjMTk2MGY0NDFhZjdkYmNhYzE0YTUifQ -->
### `client.cloud.listBoxes`

Operation ID: `listCloudBoxes`  
Route: `GET` `/v1/cloud/boxes`  

#### Signature

```javascript
client.cloud.listBoxes(requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.cloud.listBoxes();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5wZXJmb3JtQm94QWN0aW9uIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InBlcmZvcm1DbG91ZEJveEFjdGlvbiIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMve2JveElkfS9hY3Rpb24iLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJmNjNkNzUzY2UwMTJiNjM1YzhlODEzNTMxYTBlYjk0NWMxMzk1ODJkZjFmNTZlYjQ3OGJmNDYwZjNmNDU0NTM0Iiwic2lnbmF0dXJlX3NoYTI1NiI6IjA1YjgwMTYzYzBmZTRlYTc5ZWNhZTAwNWVmNWMyZGRiN2ZjNDVjMjZmNzdlZDA4Y2UyN2IyNjViYzBkNWNiYjAifQ -->
### `client.cloud.performBoxAction`

Operation ID: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  

#### Signature

```javascript
client.cloud.performBoxAction(boxId, body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.cloud.performBoxAction("example", {"action": "suspend"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJwZXJmb3JtQ2xvdWRCb3hBY3Rpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5zeW5jQm94VmF1bHQiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3luY0Nsb3VkQm94VmF1bHQiLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzL3tib3hJZH0vdmF1bHQiLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiI2MTM0MmViNWI3MGY5ZDZlNGI3ZjJkM2Q3MTkyM2JkOTk0NDE2YTNlMzNlMjRkZWVjMWU4ODk5ODgzYzBmMDJiIiwic2lnbmF0dXJlX3NoYTI1NiI6IjAzMmIwOWZkNWZjOGU1MTE3ZWU1MTkxZTc2OWJiNDdlNDcxMGM4YmQwN2UwOWVlOTdmZTY3ZThkYzI5OWJjNTEifQ -->
### `client.cloud.syncBoxVault`

Operation ID: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  

#### Signature

```javascript
client.cloud.syncBoxVault(boxId, body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.cloud.syncBoxVault("example", {"keys": ["example"]}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzeW5jQ2xvdWRCb3hWYXVsdCJ9 -->

## Resource `fleet`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5nZXRPcmdhbml6YXRpb24iLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCIsInBhdGgiOiIvdjEvb3JnYW5pemF0aW9ucy97b3JnSWR9L2ZsZWV0IiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiNWRhMTE3N2ZiY2M2OGYzOGU1YWEyOGVjMTkxNWZiOWY0ZjBiYWY3YjNmMjIyY2QzYzQzZTg2MTUyNjg5ZmE3MCIsInNpZ25hdHVyZV9zaGEyNTYiOiJmMjRlMGE1ZmIwY2YzZTMwYjQ4ZjBiZjk2MDhhOTBkNTg5YWIyMDk3ODgxYjUwMGU3OTkyMzAyODIyNGYwY2I5In0 -->
### `client.fleet.getOrganization`

Operation ID: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  

#### Signature

```javascript
client.fleet.getOrganization(orgId, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.fleet.getOrganization("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5saXN0T3JnYW5pemF0aW9uTWVtYmVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RPcmdhbml6YXRpb25NZW1iZXJzIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjljOGVlY2E1ODJkZmQ1Yjg5ZDFhZDU3NTU1MjNhMmYwMzUxNzU1YWI4MzBiZTkzOWIzNGY2OWFhN2I0ZDBhMzYiLCJzaWduYXR1cmVfc2hhMjU2IjoiYWExOGE3MGU1YjUxYzY3ZGQ0N2VhN2E4YmQ5NzE1N2FlODJmZDFjMzYwNzFiNmU0MTVmMTI1YjFmMDk4ZjU3OCJ9 -->
### `client.fleet.listOrganizationMembers`

Operation ID: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  

#### Signature

```javascript
client.fleet.listOrganizationMembers(orgId, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.fleet.listOrganizationMembers("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0T3JnYW5pemF0aW9uTWVtYmVycyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5saXN0U2Fhc1BsYW5zIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdFNhYXNQbGFucyIsInBhdGgiOiIvdjEvc2Fhcy9wbGFucyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6Ijg0Njk0YzRhYzZhYzBjN2I2ODFhZGU5NWRiNjZkZDM1ZWUxYjg3MDZkODY0MmUzN2NkNjA3ZGY0YmNiYzBkZDUiLCJzaWduYXR1cmVfc2hhMjU2IjoiYjAyYTA4NzFhYzYxNzE5M2MzODEzMDdmYTk4YzAzMDFjYzA1NjQyYjU0Y2UzZDY0MjdiZjVlOThkZTE0MTc3NiJ9 -->
### `client.fleet.listSaasPlans`

Operation ID: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  

#### Signature

```javascript
client.fleet.listSaasPlans(requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.fleet.listSaasPlans();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0U2Fhc1BsYW5zIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC51cGRhdGVPcmdhbml6YXRpb25Qb2xpY3kiLCJtZXRob2QiOiJQVVQiLCJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSIsInBhdGgiOiIvdjEvb3JnYW5pemF0aW9ucy97b3JnSWR9L2ZsZWV0L3BvbGljeSIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImRmMTlmY2NjMjdiMGJkNTI1MTFiMjgzMDEyZTRjMTY1NDg4MWRiNDgxYzM3NTI2YjUxYzRkOTdhMGJiMTA3ZjIiLCJzaWduYXR1cmVfc2hhMjU2IjoiZDU5ZDc4Mzc1ODg5ZjgwOTA3NWFlMjljZDUyNDdiNDg5YTEzMTc2MmVkZjhmOTAyOWQ1ZjVmZDhjNTdhZWMwMyJ9 -->
### `client.fleet.updateOrganizationPolicy`

Operation ID: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  

#### Signature

```javascript
client.fleet.updateOrganizationPolicy(orgId, body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.fleet.updateOrganizationPolicy("example", {}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC51cHNlcnRPcmdhbml6YXRpb25NZW1iZXIiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoidXBzZXJ0T3JnYW5pemF0aW9uTWVtYmVyIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImIzM2U2OTA3NDIzYjM1NDBlYmI5OGYyYTZkN2QxZmViYWMxOTIyZDBkMWY0Y2Q5N2VhYWQ5MWVkMGJlY2Y2NzMiLCJzaWduYXR1cmVfc2hhMjU2IjoiNDQ4NjcyOTU5NjQ2OTg0MTFlODY2NWJiY2Y0YjJhN2MxYTMwODcxZjBiYTg1ZDcyODMyYTY2NGI1NzIxODg3NSJ9 -->
### `client.fleet.upsertOrganizationMember`

Operation ID: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  

#### Signature

```javascript
client.fleet.upsertOrganizationMember(orgId, body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.fleet.upsertOrganizationMember("example", {"email": "example", "role": "owner", "userId": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIifQ -->

## Resource `jobs`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmNhbmNlbCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9jYW5jZWwiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6ImYxY2RhOTMwZTUzZWNiNjdjODZjMDg3NGYwY2JkNDE0NzZlY2ZkMjQxYzBlZDJlODk1OWQ5NGI4MWIzZDNkNTEiLCJzaWduYXR1cmVfc2hhMjU2IjoiNzliZWJiNTI3M2Q4YThhNDk0YzY3ZDg4YzA2YzUwNTc2ZmQ3YWExYzRmMmQzMWExMWQ3ZGFlODBjMjY3NmM3ZSJ9 -->
### `client.jobs.cancel`

Operation ID: `cancelJob`  
Route: `POST` `/v1/jobs/{jobId}/cancel`  

#### Signature

```javascript
client.jobs.cancel(jobId, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.cancel("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldEV4ZWN1dGlvbiIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYkV4ZWN1dGlvbiIsInBhdGgiOiIvdjEvam9icy97am9iSWR9L2V4ZWN1dGlvbiIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYmRjNzQ4YmI1YmZhNzFmYmEwMDc1NzY3MzBkYjkzODlhYzdkOTE0MGJhNGRmMTI2MzAxYjAxNWY1N2I3YmUyZCIsInNpZ25hdHVyZV9zaGEyNTYiOiI0NDU4ZjQxNTFiNDg2NThhNzYwMTU5ZDNlMjBhY2I0YzYwZjdjYjQyNWQxZTQ4MjU0YWNlY2M5ZGIwMGI3NTQ5In0 -->
### `client.jobs.getExecution`

Operation ID: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  

#### Signature

```javascript
client.jobs.getExecution(jobId, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.getExecution("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JFeGVjdXRpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldExvZ3MiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIiwicGF0aCI6Ii92MS9qb2JzL3tqb2JJZH0vbG9ncyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiNTEyMDk4NTI4N2Y2NTM3NmU0MjEzMmM5OGUwNmRlNTVjYWI1YzcwNDQxMzgyY2Y3NzM0MGY4ZTM4OGRiOWZhMiIsInNpZ25hdHVyZV9zaGEyNTYiOiIxMDE0NjY0YWVhYTExNDE2MzM4NTU4OWZiZGNlYmQxZDAyODM4NjljM2Q1MWEwZGQ3MWEwYzgxZDAxNGRhODIxIn0 -->
### `client.jobs.getLogs`

Operation ID: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  

#### Signature

```javascript
client.jobs.getLogs(jobId, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.getLogs("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldFN0YXR1cyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYlN0YXR1cyIsInBhdGgiOiIvdjEvam9icy97am9iSWR9IiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiI2MGU0OWI3ZGJmZGEyOTA5M2M5MDJiYTUxNzU3MTU3NmU4OTQ3ZmVkN2QwZjAwMWJhNzkwOWQ2YzY4MDg0YTgxIiwic2lnbmF0dXJlX3NoYTI1NiI6IjQyMDQwOGU5MTY2ZjY3Yjc0YzYzNTEyODg5MTU0NDdhNWQzYTg5NTcwYTZmZmM5YjJhYTY4YjlkOTQzNDUzMmQifQ -->
### `client.jobs.getStatus`

Operation ID: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  

#### Signature

```javascript
client.jobs.getStatus(jobId, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.getStatus("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JTdGF0dXMifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmluc3BlY3RQcm9qZWN0IiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6Imluc3BlY3RQcm9qZWN0IiwicGF0aCI6Ii92MS9pbnNwZWN0IiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiI2NDY5NDk1NTkzYTg3NTgwM2U2MzJjMmQzMDcxMGE0OGVkMTBlMmMxNTVkZWE0ODI4ODI0NzhmMzZhZjNkMzlhIiwic2lnbmF0dXJlX3NoYTI1NiI6IjM3NGJiOTNlMzM3ZDRiZjkwNDRhNjJhZjEyNWNhODg1NTgxODU4NzgxMDRjZmQxOTA0MWZhOTFlYzEyYzYxY2QifQ -->
### `client.jobs.inspectProject`

Operation ID: `inspectProject`  
Route: `POST` `/v1/inspect`  

#### Signature

```javascript
client.jobs.inspectProject(body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.inspectProject({"projectRoot": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJpbnNwZWN0UHJvamVjdCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmxpc3QiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyIsInBhdGgiOiIvdjEvam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiOTdkYTYyODI1MjkwNDM2NGEyMjM1YTVlYzQ0OTM3ZTBhOTg3MDBlMzk3MjFkZDk4ZmU2MTkzMWM3NGVlMTRhOSIsInNpZ25hdHVyZV9zaGEyNTYiOiI2YzA5MmI1NTNmNzNiYmIyYTZmZmM5OTNkNzJmMDhmZjI1OGI4MDM5MTU5YjBlYTA2NzI1YzYwZTQ5MjhjNmExIn0 -->
### `client.jobs.list`

Operation ID: `listJobs`  
Route: `GET` `/v1/jobs`  

#### Signature

```javascript
client.jobs.list(status?, boxId?, limit?, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.list();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0QWdlbnQiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3RhcnRBZ2VudEpvYiIsInBhdGgiOiIvdjEvYWdlbnQtam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYjkzM2NkNjI5YTI0M2VkNTRjNmRjNmIwYWRmZjk5ODNiMzc1NDEzMzVlNGIwZDg3ODY1YjIzNjQzMDg3ZTVjNiIsInNpZ25hdHVyZV9zaGEyNTYiOiI5ZDc1YTcxZmZiYjY0ODk1NjU1NmM3ZDVkOTg0NDViYzA1M2EyZWM1NGVjOGYwNDYxOGZiMTdmOGFjOWUyNTI3In0 -->
### `client.jobs.startAgent`

Operation ID: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  

#### Signature

```javascript
client.jobs.startAgent(body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.startAgent({"projectRoot": "example", "task": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEFnZW50Sm9iIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0R2l0aHViIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN0YXJ0R2l0aHViSm9iIiwicGF0aCI6Ii92MS9naXRodWItam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiNjFmYWIzMGQ1MjlhNmFiNzNjZjA4MzcwNjM2N2M1OWEyMjc1MTVkOGNmNDQ0NDhjOWY5ZGI1YWYzNmQ1OGJjZSIsInNpZ25hdHVyZV9zaGEyNTYiOiJlMDU3MDg4MDk1ODVhYmJiY2IyMGJlNGVlNjc1ZDM0YjNmYzA3NmM1OTg5MmY0MWY0Nzc4MGQ2ZTFmNjFjYjQ5In0 -->
### `client.jobs.startGithub`

Operation ID: `startGithubJob`  
Route: `POST` `/v1/github-jobs`  

#### Signature

```javascript
client.jobs.startGithub(body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.startGithub({"repository": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEdpdGh1YkpvYiJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0UHJvamVjdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IiLCJwYXRoIjoiL3YxL2pvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjhkNWNlMTk5YmI0MjI5OGY5ODMzNDI0NjJlMThmNTIzNTU1M2ViMjc3MzIzZTg3M2RlZDFkZjY0OWVmNTkwOWYiLCJzaWduYXR1cmVfc2hhMjU2IjoiYjlmNjBkMWUyMGQ3Mjk3MTUxZDhiYmEyMjc5MmVlNGM4ZDU2NWVhOTk2ODQyNTY5ZTdjY2Y3MDlmOTZjNzgyNSJ9 -->
### `client.jobs.startProject`

Operation ID: `startProjectJob`  
Route: `POST` `/v1/jobs`  

#### Signature

```javascript
client.jobs.startProject(body, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.jobs.startProject({"projectRoot": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IifQ -->

## Resource `system`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0uZGVzY3JpYmVBZ2VudE1vZHMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyIsInBhdGgiOiIvdjEvbW9kcyIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiJlZGM5MTdhMzRmOWYwNzU2MDRhZDc3MTY3OGZjNzdhYjI4NGYxMTMwYmI5YzVjYTRmOWEwYTFmNDExNGZiNGY5Iiwic2lnbmF0dXJlX3NoYTI1NiI6ImYwYWY2MTQ1NjJkNDlmMDE4MjdhOGUyMjdkYmY2Y2VkMWQ5NjIxMWUyMDI3YmFlNjNlZDE0ZmU3MWQ5Zjg3MTcifQ -->
### `client.system.describeAgentMods`

Operation ID: `describeAgentMods`  
Route: `GET` `/v1/mods`  

#### Signature

```javascript
client.system.describeAgentMods(target_2?, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.system.describeAgentMods();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0uZ2V0SGVhbHRoIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0SGVhbHRoIiwicGF0aCI6Ii9oZWFsdGgiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiNmY2YzQwZDBkZDBmYjk5MzNlMWE4NmQ3ZTgwZmUxMTYyYjk2ZjgxNDBmNDcwMjUzNDExMjk0NjJkOTlmNWMwNiIsInNpZ25hdHVyZV9zaGEyNTYiOiIzMDIxNjQzMjE5OWRiZWFmZjgzNjE5OTUxYjE5YzI0YmVkOTIxMGI5ZTU3YzI4NDRkZTdmYzlmMTU5MTIzOTc2In0 -->
### `client.system.getHealth`

Operation ID: `getHealth`  
Route: `GET` `/health`  

#### Signature

```javascript
client.system.getHealth(requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.system.getHealth();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRIZWFsdGgifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0ubGlzdENhcGFiaWxpdGllcyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RDYXBhYmlsaXRpZXMiLCJwYXRoIjoiL3YxL2NhcGFiaWxpdGllcyIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiJlYmExNTJhODE1ZGFlOTQ3YTZlOWIzNTc2YTZhZjVlMmExOTgxOGI3NDZlY2Y4ODdkZmI0YTZkN2EwMzJkMTU3Iiwic2lnbmF0dXJlX3NoYTI1NiI6IjU4NjM5ZjM0N2RjZWQwYzJkYmRkYzE0YjQ2NWZiZjdkYTNiNTIyYmVjN2ViYTE0YTQ0NDE5MTE3NDdjOTViMjkifQ -->
### `client.system.listCapabilities`

Operation ID: `listCapabilities`  
Route: `GET` `/v1/capabilities`  

#### Signature

```javascript
client.system.listCapabilities(query?, state?, requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.system.listCapabilities();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2FwYWJpbGl0aWVzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0ubGlzdFByb3ZpZGVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RQcm92aWRlcnMiLCJwYXRoIjoiL3YxL3Byb3ZpZGVycyIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiJjNWFjM2ViZjAzMjRlMDQ4MmE1ZDBjY2M5NjJiMDg5NWRkOTI0YmI0MjgyYWQ3ZGU1OWJmYjg4MzlmZjk4MjliIiwic2lnbmF0dXJlX3NoYTI1NiI6IjA1MmI5NDk5NDhkNjRmZTY4ZDlmY2VmM2FlZTg2ZmQ3YTI1MjE3OGY0YzVlZjQ3MmViZjRiZjYwZGVkMTUxYzYifQ -->
### `client.system.listProviders`

Operation ID: `listProviders`  
Route: `GET` `/v1/providers`  

#### Signature

```javascript
client.system.listProviders(requestOptions?)
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

Example status: `generated`  
```javascript
const result = await client.system.listProviders();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0UHJvdmlkZXJzIn0 -->

