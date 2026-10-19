# BoxFleet TypeScript API

<!-- omniwrap-api-reference eyJjb250cmFjdF9maW5nZXJwcmludCI6IjE3ZGRlMWE4OTgwNThiMzJlNTcwNDc3NGI3NjVhNTFjMmJjZjEyYmRkMDRlYzM4MDVkNmI2ODA0YWM1YWU3ZmEiLCJvcGVyYXRpb25fY291bnQiOjIzLCJyZW5kZXJlciI6InR5cGVzY3JpcHQiLCJ2ZXJzaW9uIjoiMS40LjAifQ -->

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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5jcmVhdGVCb3giLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoiY3JlYXRlQ2xvdWRCb3giLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzIiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiNzRjZjE1MTRmMDBlMTIwYjMyMTJiZDdlZDNjYzEzNDQ1ZmY0ODJjM2E4ZjcxNGQyZjJjNDA0MTZlMmE0ZGM2ZSIsInNpZ25hdHVyZV9zaGEyNTYiOiJkNjQ3M2I0MTIwNTY1OTBhYmUxOWQzMjUxMzY5MjJhOWI3YzEyZGMzY2FlY2UyYTAzZjA4ZWFhYmVjYzE4ZmVlIn0 -->
### `client.cloud.createBox`

Operation ID: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  

#### Signature

```typescript
client.cloud.createBox<Raw extends boolean = false>(body: CreateCloudBoxRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<CloudBoxEnvelope> : WithRequestId<CloudBoxEnvelope>>;
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
```typescript
const result = await client.cloud.createBox({}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjcmVhdGVDbG91ZEJveCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5nZXRXaGl0ZUxhYmVsQ2F0YWxvZyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldFdoaXRlTGFiZWxDbG91ZENhdGFsb2ciLCJwYXRoIjoiL3YxL2Nsb3VkL2NhdGFsb2ciLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiI5YmVhMmNmMDZmZDZkZTVhODViYWRmNTc2MThkMDNiZjQ2OGNmMjUzZmJhNmEwYmVmN2E1ZTNiZjFiODEyMWIwIiwic2lnbmF0dXJlX3NoYTI1NiI6ImVkZDFiZGVmZjgzODNmNDc3ZmU4Y2NhNTlkZGZiYTZkZjI1M2M1OWYwZGI5ZjBmZDBhNTU1YTY5MGJhM2I0MWIifQ -->
### `client.cloud.getWhiteLabelCatalog`

Operation ID: `getWhiteLabelCloudCatalog`  
Route: `GET` `/v1/cloud/catalog`  

#### Signature

```typescript
client.cloud.getWhiteLabelCatalog<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<WhiteLabelCloudCatalog> : WithRequestId<WhiteLabelCloudCatalog>>;
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
```typescript
const result = await client.cloud.getWhiteLabelCatalog();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5saXN0Qm94ZXMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMiLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJmZTc1ODBjMTBjOTgzYjkzOGRlMTM4MDBlYzBhYTViYmU4MDNjYzhiMjc5ODVhNTBiOWIzNzA1MGI1MGMzYWY0Iiwic2lnbmF0dXJlX3NoYTI1NiI6ImM3ZjkxMDJjYmQyNGI0NmNkMDA0NzA2YjI0MTcxMGMyMjNkZjM0NmU0MzAxYWJmOTE3MGRjMjgzYzE3MDgzODcifQ -->
### `client.cloud.listBoxes`

Operation ID: `listCloudBoxes`  
Route: `GET` `/v1/cloud/boxes`  

#### Signature

```typescript
client.cloud.listBoxes<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CloudBoxListResponse> : WithRequestId<CloudBoxListResponse>>;
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
```typescript
const result = await client.cloud.listBoxes();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5wZXJmb3JtQm94QWN0aW9uIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InBlcmZvcm1DbG91ZEJveEFjdGlvbiIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMve2JveElkfS9hY3Rpb24iLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiIxYzE5ZTlhNGFiYTY5NGJiZTkxYWZmOGI1OTA0ZWRhZWUwY2YzMGM4OTRhNjQyMzg2ZDdiNTg4OTZkODkwYmUyIiwic2lnbmF0dXJlX3NoYTI1NiI6IjVkOWU1OTc5YTlhYzBkMWU2MzhjYjU1OTI5MzllYjcwZTA5YzcxZmU0MzVlZGY1Y2Q4YTY1MWY3ZGM4NjUyMTgifQ -->
### `client.cloud.performBoxAction`

Operation ID: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  

#### Signature

```typescript
client.cloud.performBoxAction<Raw extends boolean = false>(boxId: string, body: CloudBoxActionRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<CloudBoxActionResponse> : WithRequestId<CloudBoxActionResponse>>;
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
```typescript
const result = await client.cloud.performBoxAction("example", {"action": "suspend"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJwZXJmb3JtQ2xvdWRCb3hBY3Rpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5zeW5jQm94VmF1bHQiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3luY0Nsb3VkQm94VmF1bHQiLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzL3tib3hJZH0vdmF1bHQiLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJkYjU3MjFhNGFjMDY4MmZjYzg0NzJkYmEwYzY1MjE0NjY4YjE0MTY5YTNlNmVlMGI4NGZkNDE1ZDZhYjczY2FiIiwic2lnbmF0dXJlX3NoYTI1NiI6IjA0YWRiZmI0NzNhNjA4Mzg1NTUxY2ZmY2RmYWZkNTFiOWJiNTQzNzJkYTlhOGU2OTMzNzIxN2E1MTkxNWFjMTcifQ -->
### `client.cloud.syncBoxVault`

Operation ID: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  

#### Signature

```typescript
client.cloud.syncBoxVault<Raw extends boolean = false>(boxId: string, body: SyncCloudBoxVaultRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<SyncCloudBoxVaultResponse> : WithRequestId<SyncCloudBoxVaultResponse>>;
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
```typescript
const result = await client.cloud.syncBoxVault("example", {"keys": ["example"]}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzeW5jQ2xvdWRCb3hWYXVsdCJ9 -->

## Resource `fleet`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5nZXRPcmdhbml6YXRpb24iLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCIsInBhdGgiOiIvdjEvb3JnYW5pemF0aW9ucy97b3JnSWR9L2ZsZWV0IiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiNDM5ZDdiMmZiODhjODYyMmExZDYwNDMyMDNhN2U3NThlMDU2NWI3ZWIzNjYyOGMyOTM1ZDE0ODU3YTZkMjBiYSIsInNpZ25hdHVyZV9zaGEyNTYiOiJjNGNhNjQ4NWYyMDE2MjA0NjM5YTRmY2Q0ZDMxYjkyZjI1NzM2NGZmNDU1ZjI0OTE4ZmQxMDgzZjE5NzEyZjcxIn0 -->
### `client.fleet.getOrganization`

Operation ID: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  

#### Signature

```typescript
client.fleet.getOrganization<Raw extends boolean = false>(orgId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<OrganizationFleetResponse> : WithRequestId<OrganizationFleetResponse>>;
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
```typescript
const result = await client.fleet.getOrganization("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5saXN0T3JnYW5pemF0aW9uTWVtYmVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RPcmdhbml6YXRpb25NZW1iZXJzIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImVlY2ViNmQ0MDBhNjdhZTk4MWMxZjZjMjMzMzNiYTI3ZDgyNjA4ODIyMzMyODQyNjU3ZTcxZGI4MDIyNzhmZGUiLCJzaWduYXR1cmVfc2hhMjU2IjoiYjA0YjdiMjVmYzQ3Yzk2MWE0MGQwODIxM2YzMDkyZGFiNDg3NzFkOThhYmZiMGNlMzQzZDQ3N2M3ZTc2NTA1YyJ9 -->
### `client.fleet.listOrganizationMembers`

Operation ID: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  

#### Signature

```typescript
client.fleet.listOrganizationMembers<Raw extends boolean = false>(orgId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<OrganizationMembersResponse> : WithRequestId<OrganizationMembersResponse>>;
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
```typescript
const result = await client.fleet.listOrganizationMembers("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0T3JnYW5pemF0aW9uTWVtYmVycyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5saXN0U2Fhc1BsYW5zIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdFNhYXNQbGFucyIsInBhdGgiOiIvdjEvc2Fhcy9wbGFucyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjBlYzhjOTFiMDM0ZGIxYTRjMTg2YzY5OWZmMDhkZmNhMGVjNzQ0Y2Y5YTcyZmViNWJlMDdiM2NkMDY5Y2VjYzUiLCJzaWduYXR1cmVfc2hhMjU2IjoiMWMxMzg5MDYwZjEyYzlhYTUzOWY2N2FkY2NiM2QxNDUwZmJkMjg2ODUxZjljZThmYjBkZTYyMDQ0YTIyNGYzMiJ9 -->
### `client.fleet.listSaasPlans`

Operation ID: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  

#### Signature

```typescript
client.fleet.listSaasPlans<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<SaasPlansResponse> : WithRequestId<SaasPlansResponse>>;
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
```typescript
const result = await client.fleet.listSaasPlans();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0U2Fhc1BsYW5zIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC51cGRhdGVPcmdhbml6YXRpb25Qb2xpY3kiLCJtZXRob2QiOiJQVVQiLCJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSIsInBhdGgiOiIvdjEvb3JnYW5pemF0aW9ucy97b3JnSWR9L2ZsZWV0L3BvbGljeSIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjM2NTcwYzFmZTgwMmQ4ZWQ1ZGVjYTdhODBhOGJjODgwOTY5MzgzMWZlZTA2YTY0YWJlZTQ4MjExZmY5YjY5NmMiLCJzaWduYXR1cmVfc2hhMjU2IjoiNTQyYjdmODg5NTczY2IwNWI2NzM5NjMzNjZhNGFhOGY5NjI2ZmNiOTRhMDM3MTdlZjA2MDk1OWJhNjJkOTE1YSJ9 -->
### `client.fleet.updateOrganizationPolicy`

Operation ID: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  

#### Signature

```typescript
client.fleet.updateOrganizationPolicy<Raw extends boolean = false>(orgId: string, body: FleetPolicyUpdateRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<OrganizationFleetResponse> : WithRequestId<OrganizationFleetResponse>>;
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
```typescript
const result = await client.fleet.updateOrganizationPolicy("example", {}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC51cHNlcnRPcmdhbml6YXRpb25NZW1iZXIiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoidXBzZXJ0T3JnYW5pemF0aW9uTWVtYmVyIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6Ijk3MmM3OWM3ZWFhMTliOTE1MDk3ZDdhN2RlOGMzYTlmYjI0NWVkMjE0ODYyYjc3ZmY5NTMxMTQ3ZWI5MDFhNjkiLCJzaWduYXR1cmVfc2hhMjU2IjoiZjE3N2QzY2EyZjU5MTAyN2M3ZTgzMThmY2FjZjhlNmM1MGEwYmQ0OTBiMzQ0ODgzNTEzNWJlZTJmMDdlNTMyNyJ9 -->
### `client.fleet.upsertOrganizationMember`

Operation ID: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  

#### Signature

```typescript
client.fleet.upsertOrganizationMember<Raw extends boolean = false>(orgId: string, body: UpsertOrganizationMemberRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<OrganizationMember> : WithRequestId<OrganizationMember>>;
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
```typescript
const result = await client.fleet.upsertOrganizationMember("example", {"email": "example", "role": "owner", "userId": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIifQ -->

## Resource `jobs`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmNhbmNlbCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9jYW5jZWwiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjE2OTRjZDdiMTA4MTk4ZDBiNWZkMGE3Nzk0OTNlZjM0ZDI2YzhkNzU5M2E3M2Y0NDkxZjBmNzc4MjQyZmVmMzYiLCJzaWduYXR1cmVfc2hhMjU2IjoiNGY2OWQ2YTIxYmJiNGFkMWIxMjA4M2U0ZmQzOWEyNDIyMjU1NzJjNjgxNmNjOWFjNjU0YTVmM2E5NjVlZGUxZCJ9 -->
### `client.jobs.cancel`

Operation ID: `cancelJob`  
Route: `POST` `/v1/jobs/{jobId}/cancel`  

#### Signature

```typescript
client.jobs.cancel<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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
```typescript
const result = await client.jobs.cancel("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldEV4ZWN1dGlvbiIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYkV4ZWN1dGlvbiIsInBhdGgiOiIvdjEvam9icy97am9iSWR9L2V4ZWN1dGlvbiIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiMzhiNjJiNjVjMmI5ZTU4MzM1YzU1MjRmZDJmYjQ5ZTIwYTllMDM2MmM1MTM2YTBkZmJiYTI0Njk4NGY2ODgzZSIsInNpZ25hdHVyZV9zaGEyNTYiOiJlNTllZDhiNzA2NWE5YjgxN2NhYjU5YTdmZDllY2IyMGEwYWE2ODM0M2EyZTM2ODM2Mzc5N2RhOGVmZDEzZGNiIn0 -->
### `client.jobs.getExecution`

Operation ID: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  

#### Signature

```typescript
client.jobs.getExecution<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobExecutionResponse> : WithRequestId<JobExecutionResponse>>;
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
```typescript
const result = await client.jobs.getExecution("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JFeGVjdXRpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldExvZ3MiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIiwicGF0aCI6Ii92MS9qb2JzL3tqb2JJZH0vbG9ncyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYTc2ZTUwY2IyNGE3YzM4NTFmMzgwYTgyMmVjMjIxZmQ3NmMyOGQwMTNmNWMwMjYyNmViMzU1MzBjMWRhM2YxMSIsInNpZ25hdHVyZV9zaGEyNTYiOiJmODMzZTUyMDVlYTRkZmZjZDgwMGJkMzdlNGJlNDcwYzBkZDI3NzY5Njk1MDY1YTM5YWRiM2I5OTgyY2ZiYzNlIn0 -->
### `client.jobs.getLogs`

Operation ID: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  

#### Signature

```typescript
client.jobs.getLogs<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobLogsResponse> : WithRequestId<JobLogsResponse>>;
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
```typescript
const result = await client.jobs.getLogs("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldFN0YXR1cyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYlN0YXR1cyIsInBhdGgiOiIvdjEvam9icy97am9iSWR9IiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJjYTYzY2Y1NzMzOGE1OWZlODc4YmRmNjZjZWVhMTAyNmVkMzUwZmI2Y2QxNjg3MmY2ZDk3ZGFhMmY2ZmE2ZDU1Iiwic2lnbmF0dXJlX3NoYTI1NiI6IjFlYmNhMjQwNjRiYjVjYmRlNGQzNWMxZDllOTg3YTYxYTMwMjNlNjViNTljZmQ2ZTBmZmJkMDFhOGM1YmY4YmEifQ -->
### `client.jobs.getStatus`

Operation ID: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  

#### Signature

```typescript
client.jobs.getStatus<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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
```typescript
const result = await client.jobs.getStatus("example");
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JTdGF0dXMifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmluc3BlY3RQcm9qZWN0IiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6Imluc3BlY3RQcm9qZWN0IiwicGF0aCI6Ii92MS9pbnNwZWN0IiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiI1MWZkYzFkMjFjOTgxYmJmODQxNjJhZmQ0M2UzNjhjZjhiNWUxNTQwNzllNThlNjYyNDFhOTY2ZTUyOTg2Yjc0Iiwic2lnbmF0dXJlX3NoYTI1NiI6ImJiZGQ1NWRkZTVjZWIwYjNkZGJiNGNlYTNiYjNmZDUxMThhMGNlMTAwMTU0NThhMzc0OWNkNzczOGUxMDBmNTcifQ -->
### `client.jobs.inspectProject`

Operation ID: `inspectProject`  
Route: `POST` `/v1/inspect`  

#### Signature

```typescript
client.jobs.inspectProject<Raw extends boolean = false>(body: InspectProjectRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<ProjectInspectionPlan> : WithRequestId<ProjectInspectionPlan>>;
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
```typescript
const result = await client.jobs.inspectProject({"projectRoot": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJpbnNwZWN0UHJvamVjdCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmxpc3QiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyIsInBhdGgiOiIvdjEvam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYzI5YzE4ZGZjZTgyMjM5YWYwNmIwZmM3ZGExZjgzMTJjYWEzOTgwNGZhNDIzMzhkMWNjNmM4OTRjZjQ4Njc5NyIsInNpZ25hdHVyZV9zaGEyNTYiOiI1NmM2YTE3ZDcyNGU4MmQzZmI1NGFhYTdmM2EwMmY5YjcyMTFmZTE0ZTliYTUyOWYwOGJlZDhkNzc3MGY3NDNkIn0 -->
### `client.jobs.list`

Operation ID: `listJobs`  
Route: `GET` `/v1/jobs`  

#### Signature

```typescript
client.jobs.list<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(boxId?: string, limit?: number, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(status?: "queued" | "running" | "succeeded" | "failed" | "cancelled", limit?: number, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(status?: "queued" | "running" | "succeeded" | "failed" | "cancelled", boxId?: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(status?: "queued" | "running" | "succeeded" | "failed" | "cancelled", boxId?: string, limit?: number, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
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
```typescript
const result = await client.jobs.list();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0QWdlbnQiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3RhcnRBZ2VudEpvYiIsInBhdGgiOiIvdjEvYWdlbnQtam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiMDM4MmQ2MjMxYmViYTAyM2JmZDMzNGVlODgyZDRhNDc2NTNkYmU2NGM4MzJmMDBlNDA0NzUxOTU3MWNiYjNhZiIsInNpZ25hdHVyZV9zaGEyNTYiOiJhNGZjZDZjOTZiM2JjN2QxN2YxNmFjYmIzYzI4YTc5M2VjOGI2MTdjY2JiMzViNzhmODY2Nzg3OWYxYjJkYTZhIn0 -->
### `client.jobs.startAgent`

Operation ID: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  

#### Signature

```typescript
client.jobs.startAgent<Raw extends boolean = false>(body: StartAgentJobRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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
```typescript
const result = await client.jobs.startAgent({"projectRoot": "example", "task": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEFnZW50Sm9iIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0R2l0aHViIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN0YXJ0R2l0aHViSm9iIiwicGF0aCI6Ii92MS9naXRodWItam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiM2VlNjg5ZWI1NTAzM2E2MzBkMjg5NWIxYThlMDgxMTY1OGVkZjQxZWM1YzA0ZmZhZTZlOWU0NDI5MDJiMjQ3YiIsInNpZ25hdHVyZV9zaGEyNTYiOiI0ZjUxN2U4N2NjN2Y2YWEyOTdiZTJhZTM4NjA0Yzc3Y2I5MTViNjA0YzlhNTZhMGNhYWYwM2E5YmJjNDZiNTRiIn0 -->
### `client.jobs.startGithub`

Operation ID: `startGithubJob`  
Route: `POST` `/v1/github-jobs`  

#### Signature

```typescript
client.jobs.startGithub<Raw extends boolean = false>(body: StartGithubJobRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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
```typescript
const result = await client.jobs.startGithub({"repository": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEdpdGh1YkpvYiJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0UHJvamVjdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IiLCJwYXRoIjoiL3YxL2pvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6ImM5OGFkZjI3MzhlZDFkNzkzMGE4YmY1MTY5YWQwNWIyOGRiMTg1ZWVjYzg3NzNkMDU3YmU4NWFkMmU1ZGJiOWIiLCJzaWduYXR1cmVfc2hhMjU2IjoiZmFiOTk3NDFiYWUwY2RjMzdkYWY5MTQ4MzU2NGM4YTliYzMzMjQ1YWI5YjgwY2ZkMzhmOWViNWI3ZmU5Y2YzZCJ9 -->
### `client.jobs.startProject`

Operation ID: `startProjectJob`  
Route: `POST` `/v1/jobs`  

#### Signature

```typescript
client.jobs.startProject<Raw extends boolean = false>(body: StartProjectJobRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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
```typescript
const result = await client.jobs.startProject({"projectRoot": "example"}, { contentType: "application/json" });
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IifQ -->

## Resource `system`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0uZGVzY3JpYmVBZ2VudE1vZHMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyIsInBhdGgiOiIvdjEvbW9kcyIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiIzZTRjMTg5N2I2NTQ1YjE5N2RiN2E0OTY5OWE3ZjZkMWNlODE4MjUyOTU3ZWYxMjNhNmJlNmZiMGM2Zjk0ZDUzIiwic2lnbmF0dXJlX3NoYTI1NiI6ImQ0M2IzMjdmYWU3YTU5MjVjZTI1MmJjMTJlNWJkMGQ3N2ExMzg4ZTE4YWJmZGZlODI1N2YwYjg0NzhkY2VhYmUifQ -->
### `client.system.describeAgentMods`

Operation ID: `describeAgentMods`  
Route: `GET` `/v1/mods`  

#### Signature

```typescript
client.system.describeAgentMods<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<ModsCatalogResponse> : WithRequestId<ModsCatalogResponse>>;
client.system.describeAgentMods<Raw extends boolean = false>(target_2?: "all" | "claude-code" | "claude-desktop" | "codex" | "agy" | "gemini-cli" | "cursor" | "windsurf" | "vscode" | "zed", requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<ModsCatalogResponse> : WithRequestId<ModsCatalogResponse>>;
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
```typescript
const result = await client.system.describeAgentMods();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0uZ2V0SGVhbHRoIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0SGVhbHRoIiwicGF0aCI6Ii9oZWFsdGgiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiNzE2OGI5OGJjODlmZDlmZmVjY2VkMGFjMDJlZjgyZjI1MTI2NGIxZjY3Y2IzODdlMTI4NzM1YzRmYTBjOWY0ZiIsInNpZ25hdHVyZV9zaGEyNTYiOiIxNDM3OWRmYTI0OWNhNTkyNjFhYjgxMmJlMjE2Njg5ZjYwZDU4MTIyY2FmNDE4ZTRjMmI0OWEzNTZjNTEwZmIxIn0 -->
### `client.system.getHealth`

Operation ID: `getHealth`  
Route: `GET` `/health`  

#### Signature

```typescript
client.system.getHealth<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<HealthResponse> : WithRequestId<HealthResponse>>;
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
```typescript
const result = await client.system.getHealth();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRIZWFsdGgifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0ubGlzdENhcGFiaWxpdGllcyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RDYXBhYmlsaXRpZXMiLCJwYXRoIjoiL3YxL2NhcGFiaWxpdGllcyIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiI1Y2Y2ZjVlNzc3N2EwZGFiOTYyMzY4NjM5Y2YzMDg4NzQ5NDRmZmJlZjZjOGEyZTI1MGMzNmEyOTE3NjUyOTBjIiwic2lnbmF0dXJlX3NoYTI1NiI6IjcyZGJiMWQ4MjMyMGEzYzVkYTIzY2E5M2ZkZmNkZjczNzljMzI1MWNmZjI2ZjMxZTExYTExNDFjZDdmM2EzYjgifQ -->
### `client.system.listCapabilities`

Operation ID: `listCapabilities`  
Route: `GET` `/v1/capabilities`  

#### Signature

```typescript
client.system.listCapabilities<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
client.system.listCapabilities<Raw extends boolean = false>(state?: "implemented" | "conditional" | "planned", requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
client.system.listCapabilities<Raw extends boolean = false>(query?: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
client.system.listCapabilities<Raw extends boolean = false>(query?: string, state?: "implemented" | "conditional" | "planned", requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
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
```typescript
const result = await client.system.listCapabilities();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2FwYWJpbGl0aWVzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0ubGlzdFByb3ZpZGVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RQcm92aWRlcnMiLCJwYXRoIjoiL3YxL3Byb3ZpZGVycyIsInJlc291cmNlIjoic3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiIzNDZlNGZlYmIwYjBhMzlkNDI4M2FmMzE2OWVlNzAzZjZiNjY0ZjAwOWJlMWEzZTc0ZGMxY2NiNTc1NzJjOTdmIiwic2lnbmF0dXJlX3NoYTI1NiI6IjBmYTY2ZDUyYTA3MDViOWYyZjE1NTdlZDY0MmUyYWEwNWU3MzY3NDYxZGRhZjYxMWY0M2ZlM2JhM2MyMzJlZjgifQ -->
### `client.system.listProviders`

Operation ID: `listProviders`  
Route: `GET` `/v1/providers`  

#### Signature

```typescript
client.system.listProviders<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<ProvidersResponse> : WithRequestId<ProvidersResponse>>;
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
```typescript
const result = await client.system.listProviders();
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0UHJvdmlkZXJzIn0 -->

