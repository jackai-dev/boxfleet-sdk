# BoxFleet Python API

<!-- omniwrap-api-reference eyJjb250cmFjdF9maW5nZXJwcmludCI6IjE3ZGRlMWE4OTgwNThiMzJlNTcwNDc3NGI3NjVhNTFjMmJjZjEyYmRkMDRlYzM4MDVkNmI2ODA0YWM1YWU3ZmEiLCJvcGVyYXRpb25fY291bnQiOjIzLCJyZW5kZXJlciI6InB5dGhvbiIsInZlcnNpb24iOiIxLjQuMCJ9 -->

This generated index is tied to Semantic IR `1.14.0` and contract fingerprint `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`. Every operation below is rendered from the same semantic contract and artifact-attested public member allocation as the SDK.

SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

## Client hooks and tracing

`Client(hooks=Hooks(...))` registers four callbacks. Every attempt starts with `before_request` and ends with exactly one of `on_retry` (another attempt follows), `after_response` (the success the call returns) or `on_error` (the failure the call reports). Each receives the operation id, the HTTP method, the URL, the request headers, the attempt number (from 1), the time elapsed since the call started and, once the server answered, the HTTP status. No context carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`, every API-key header and API-key query parameter, and any configured credential value read `[redacted]`. Every context is a frozen `HookContext`: no hook can change the request.

`Client(tracer=...)` opens one span per call through the tracer interface this SDK defines, named after the operation id, with `http.request.method`, `http.response.status_code` and `http.request.resend_count`. It needs no tracing library; README.md maps it onto the OpenTelemetry API.

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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5jcmVhdGVfYm94IiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6ImNyZWF0ZUNsb3VkQm94IiwicGF0aCI6Ii92MS9jbG91ZC9ib3hlcyIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6ImRiODY4OTI2ZTU3ZjM2YmViOTEwZTdhYmYwMmRjZjBiNTI3NTczZjZiY2IwNWE3NmI0ZjBmNmRkNWViYTQzZDYiLCJzaWduYXR1cmVfc2hhMjU2IjoiNTQ1YTY5MzFjMTc1Yjk4ZGE4NjUyYzA4OTgwMWQ0NjAxNzc2YjBjNzAyZDJlYmU4ZWU4MjgwMWI4OGJlMDlkMSJ9 -->
### `client.cloud.create_box`

Operation ID: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  
Detailed page: [`createCloudBox`](operations/cloud/createcloudbox.md)

#### Signature

```python
client.cloud.create_box(body: CreateCloudBoxRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CloudBoxEnvelope
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
```python
result = client.cloud.create_box({}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjcmVhdGVDbG91ZEJveCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5nZXRfd2hpdGVfbGFiZWxfY2F0YWxvZyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldFdoaXRlTGFiZWxDbG91ZENhdGFsb2ciLCJwYXRoIjoiL3YxL2Nsb3VkL2NhdGFsb2ciLCJyZXNvdXJjZSI6ImNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJjMjJkMGZiOWVhYzBiMzQwYjYzMzUwMTI5ODIxNmE4MTY1MDk4ZmZjNTdmOTYwMGI2MDEwZTQ0M2U3ZmE4ZjBhIiwic2lnbmF0dXJlX3NoYTI1NiI6IjEyMzQzYjhlZWM0MzBmMTliNDlkNGNlM2Q1MzM1YmYwMTIyMjhiZDM0N2FlNjM1YTg3YWMzZGQ5NjNiNDI4NjcifQ -->
### `client.cloud.get_white_label_catalog`

Operation ID: `getWhiteLabelCloudCatalog`  
Route: `GET` `/v1/cloud/catalog`  
Detailed page: [`getWhiteLabelCloudCatalog`](operations/cloud/getwhitelabelcloudcatalog.md)

#### Signature

```python
client.cloud.get_white_label_catalog(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> WhiteLabelCloudCatalog
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
```python
result = client.cloud.get_white_label_catalog()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRXaGl0ZUxhYmVsQ2xvdWRDYXRhbG9nIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5saXN0X2JveGVzIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdENsb3VkQm94ZXMiLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzIiwicmVzb3VyY2UiOiJjbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiNzhkZGQ1ZWNjODkzNjY4MTVjZjhmNTM0YWUwZmU1ZDVlYWIzNDMwNWVhMmRmMjYwZmRhNWQ1NWVjNGM3OTdjZSIsInNpZ25hdHVyZV9zaGEyNTYiOiJkZWYzMDYxOWI0MGRjZmU1ZGM0OTgxNTA2MDU4NDUyOGFhN2NiYjIwNjIzMmJiYTEzYjhhZmJkNjQxZDZiMjAxIn0 -->
### `client.cloud.list_boxes`

Operation ID: `listCloudBoxes`  
Route: `GET` `/v1/cloud/boxes`  
Detailed page: [`listCloudBoxes`](operations/cloud/listcloudboxes.md)

#### Signature

```python
client.cloud.list_boxes(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CloudBoxListResponse
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
```python
result = client.cloud.list_boxes()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5wZXJmb3JtX2JveF9hY3Rpb24iLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoicGVyZm9ybUNsb3VkQm94QWN0aW9uIiwicGF0aCI6Ii92MS9jbG91ZC9ib3hlcy97Ym94SWR9L2FjdGlvbiIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6IjBiMTVjYjY2YWY4YmY2NDI3ZWJmZjNlMzYwMjI3MjhlN2MyNjc3M2ZmYTFmYzFjNmM0ZjhkZWUxNjQyM2MyNzciLCJzaWduYXR1cmVfc2hhMjU2IjoiOGZmYjBlYmJmYmJkM2E2YzViZWMwYmQ1ODgyYmQ5NjY3MGNkYzMwOGUyMGU0NzgxNmE0YTQyMDRhOWUwMzNjZCJ9 -->
### `client.cloud.perform_box_action`

Operation ID: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Detailed page: [`performCloudBoxAction`](operations/cloud/performcloudboxaction.md)

#### Signature

```python
client.cloud.perform_box_action(box_id: str, body: CloudBoxActionRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CloudBoxActionResponse
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
```python
result = client.cloud.perform_box_action('example', {'action': 'suspend'}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJwZXJmb3JtQ2xvdWRCb3hBY3Rpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJjbG91ZC5zeW5jX2JveF92YXVsdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzeW5jQ2xvdWRCb3hWYXVsdCIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMve2JveElkfS92YXVsdCIsInJlc291cmNlIjoiY2xvdWQiLCJzZWN0aW9uX3NoYTI1NiI6ImFkMTI5YTA5NTg4YTU1NTExYjY2ZTMxNjljNDk1NWQ4NDY4ZmI2YTg0NGMzNzMxM2ZhODJjY2JiY2MwMTM4YjYiLCJzaWduYXR1cmVfc2hhMjU2IjoiYzMzOTBhY2VhYTA3M2RiYzY5OGY2NDc4MWVkOWNjMjlmMWZkM2NmNTkzYmIxM2RlMTg4N2I0NzUxMmE4NmFmZSJ9 -->
### `client.cloud.sync_box_vault`

Operation ID: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Detailed page: [`syncCloudBoxVault`](operations/cloud/synccloudboxvault.md)

#### Signature

```python
client.cloud.sync_box_vault(box_id: str, body: SyncCloudBoxVaultRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> SyncCloudBoxVaultResponse
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
```python
result = client.cloud.sync_box_vault('example', {'keys': ['example']}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzeW5jQ2xvdWRCb3hWYXVsdCJ9 -->

## Resource `fleet`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5nZXRfb3JnYW5pemF0aW9uIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0T3JnYW5pemF0aW9uRmxlZXQiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9mbGVldCIsInJlc291cmNlIjoiZmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImE4MDUxNjFkMzcyYjI1ZDRjODhkZTVjZDVhNTk2YTgwODFjM2FlN2E0ZjIwZGQyNjE1NjcyYWEwM2Y5YjZmMzQiLCJzaWduYXR1cmVfc2hhMjU2IjoiNDRjOWIyNmMzNmMzNWNiMGFkYzkxOWNmOTUyZmE0OGFmNWU2N2JjNzM2YjY5MjFhNDA2YTQ2MGVkYmVkNDEyYiJ9 -->
### `client.fleet.get_organization`

Operation ID: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  
Detailed page: [`getOrganizationFleet`](operations/fleet/getorganizationfleet.md)

#### Signature

```python
client.fleet.get_organization(org_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationFleetResponse
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
```python
result = client.fleet.get_organization('example')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5saXN0X29yZ2FuaXphdGlvbl9tZW1iZXJzIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdE9yZ2FuaXphdGlvbk1lbWJlcnMiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9tZW1iZXJzIiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiYmU4MmU4ZTA0YzRhOWFlZjFhNmZiZThkYzBkMzAyNGU1MTdkMDZkZWI2NGEwZTU2NDJhYzQ4MGExYWRjODgxNiIsInNpZ25hdHVyZV9zaGEyNTYiOiIxNzNlMjA0ZDdhMjIzMWYwZWQzMjRlMGI1Mzk4ODljZWI4NzQ5YzE2Y2NmZDRmYjA4MWNmMGFiYWEwOWMwZWE3In0 -->
### `client.fleet.list_organization_members`

Operation ID: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  
Detailed page: [`listOrganizationMembers`](operations/fleet/listorganizationmembers.md)

#### Signature

```python
client.fleet.list_organization_members(org_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationMembersResponse
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
```python
result = client.fleet.list_organization_members('example')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0T3JnYW5pemF0aW9uTWVtYmVycyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC5saXN0X3NhYXNfcGxhbnMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0U2Fhc1BsYW5zIiwicGF0aCI6Ii92MS9zYWFzL3BsYW5zIiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiYjg4ODYzMTlhZmZkZDQ0NTM3NDNmN2I1MmVhY2ZhMzhmNDIwN2Y3YzUxNmE0M2NhM2I5MDAwM2Y1YThmMzY1OCIsInNpZ25hdHVyZV9zaGEyNTYiOiI3ODhkYzRhNTY0Yzc5ZjdkZDZhZjVmMzJkYmMxNWU5NDZkNmYwYTBiMzgwMGRjMmNlNDM1ZDE5NTFjMWFhOWMyIn0 -->
### `client.fleet.list_saas_plans`

Operation ID: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  
Detailed page: [`listSaasPlans`](operations/fleet/listsaasplans.md)

#### Signature

```python
client.fleet.list_saas_plans(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> SaasPlansResponse
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
```python
result = client.fleet.list_saas_plans()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0U2Fhc1BsYW5zIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC51cGRhdGVfb3JnYW5pemF0aW9uX3BvbGljeSIsIm1ldGhvZCI6IlBVVCIsIm9wZXJhdGlvbl9pZCI6InVwZGF0ZU9yZ2FuaXphdGlvbkZsZWV0UG9saWN5IiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vZmxlZXQvcG9saWN5IiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiNjQzM2FkZmNkNGE0YTkyOGI0ZTM5OGIyYjFjN2E1OGYxNTAwYjI5ZTAxM2U4ZmI3Y2QzMDgyMTkwNDJjMzZkOSIsInNpZ25hdHVyZV9zaGEyNTYiOiJkYmFjMGEwMDY5YzQ4YTA4ZGVhZDdlYTlmNDgzZGNlNGM5ZDAxZjZjMTJiZWM5YzBmYTllNWIzZTlmZWI2ZTRkIn0 -->
### `client.fleet.update_organization_policy`

Operation ID: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Detailed page: [`updateOrganizationFleetPolicy`](operations/fleet/updateorganizationfleetpolicy.md)

#### Signature

```python
client.fleet.update_organization_policy(org_id: str, body: FleetPolicyUpdateRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationFleetResponse
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
```python
result = client.fleet.update_organization_policy('example', {}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJmbGVldC51cHNlcnRfb3JnYW5pemF0aW9uX21lbWJlciIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIiLCJwYXRoIjoiL3YxL29yZ2FuaXphdGlvbnMve29yZ0lkfS9tZW1iZXJzIiwicmVzb3VyY2UiOiJmbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiMDIyZTI2Y2IzMDUzMGVhNmI0OGFlOGFhZTdkNDQ2MzM0MDViNDZhYmExYjQyMDA2YmY0MGE2ZjgyNTVhZDBhMSIsInNpZ25hdHVyZV9zaGEyNTYiOiIyMzVlZDY4NWU4YjMzMTAyM2NlNDVmYzk3YTQ1ZjdhMDBhZDlmMjFhMjBmZDZkODVmZjE4ZWVkMmQwOWU0OThlIn0 -->
### `client.fleet.upsert_organization_member`

Operation ID: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  
Detailed page: [`upsertOrganizationMember`](operations/fleet/upsertorganizationmember.md)

#### Signature

```python
client.fleet.upsert_organization_member(org_id: str, body: UpsertOrganizationMemberRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationMember
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
```python
result = client.fleet.upsert_organization_member('example', {'email': 'example', 'role': 'owner', 'userId': 'example'}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJ1cHNlcnRPcmdhbml6YXRpb25NZW1iZXIifQ -->

## Resource `jobs`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmNhbmNlbCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9jYW5jZWwiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6ImZmYzE4NDY0OWIzNDEzOGI1MmQ1ZDkzNzBiNGU2NDA3NGE4ZGE4MzJmYmRkZGY1OTkxNmFiNGM4ZjZkOWM0NzEiLCJzaWduYXR1cmVfc2hhMjU2IjoiNmY4Zjg3MTg1NDY2M2JhYzE2MTlmOTVmZTFlODliZGI0MzA3OWQwOGZlMmEzNzAwZjQ3YzlhMzg0ZDE5YzY0NCJ9 -->
### `client.jobs.cancel`

Operation ID: `cancelJob`  
Route: `POST` `/v1/jobs/{jobId}/cancel`  
Detailed page: [`cancelJob`](operations/jobs/canceljob.md)

#### Signature

```python
client.jobs.cancel(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
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
```python
result = client.jobs.cancel('example')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldF9leGVjdXRpb24iLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JFeGVjdXRpb24iLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9leGVjdXRpb24iLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjQyM2RiMzY4NWJlZjlhNDk0MjVjMzI4NDFjNjEwOGIyOGM0ZTRiY2EzNzMxZDBlMTEwZmM4NmQzY2NjNzUxODkiLCJzaWduYXR1cmVfc2hhMjU2IjoiY2I1NzhjOTEwZDA1YjNlYjg0N2U3MjEwYzQwY2QwOGNlNTc5Y2EzZjk5YTA4MGEyZWI1NGYwYzE2YzRkYzM3NCJ9 -->
### `client.jobs.get_execution`

Operation ID: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  
Detailed page: [`getJobExecution`](operations/jobs/getjobexecution.md)

#### Signature

```python
client.jobs.get_execution(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobExecutionResponse
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
```python
result = client.jobs.get_execution('example')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JFeGVjdXRpb24ifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldF9sb2dzIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0Sm9iTG9ncyIsInBhdGgiOiIvdjEvam9icy97am9iSWR9L2xvZ3MiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjIzOTdiNGFhNzIzNDE2OTBmMWZhZjdmYTcxNTlhNjAzNThkYjQxMWVkOWUzYjg4MzE5YmFkOTM3YjY1ZjY3YzQiLCJzaWduYXR1cmVfc2hhMjU2IjoiNjI5YTEzNGU3ZmEwZDVmMjJiYTk2ZTNhNTRmNTMxZTMzMWFiNTZlNzA0YmIwOTFmZTZkYjViYjRiOWYwOGI1ZiJ9 -->
### `client.jobs.get_logs`

Operation ID: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  
Detailed page: [`getJobLogs`](operations/jobs/getjoblogs.md)

#### Signature

```python
client.jobs.get_logs(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobLogsResponse
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
```python
result = client.jobs.get_logs('example')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmdldF9zdGF0dXMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JTdGF0dXMiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfSIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYmVjYTNmYWQ5N2ZlNjFlMDc2NTFkMDA0OGZiOWMwMTRiMzc3MTBmZDhiYzU5Y2ExMWEzYWJjNTVkNzY2NTc5YiIsInNpZ25hdHVyZV9zaGEyNTYiOiIxMzQyYzcwMjc5NDVmNDA4M2E0ZDA3ODlkNDRhYTJhMzg0OTdmMWNkNjc5ODlkOGMxZmI1YjNhZTYwYzE3MGM2In0 -->
### `client.jobs.get_status`

Operation ID: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  
Detailed page: [`getJobStatus`](operations/jobs/getjobstatus.md)

#### Signature

```python
client.jobs.get_status(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
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
```python
result = client.jobs.get_status('example')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRKb2JTdGF0dXMifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmluc3BlY3RfcHJvamVjdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJpbnNwZWN0UHJvamVjdCIsInBhdGgiOiIvdjEvaW5zcGVjdCIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiYzEwNjc4YTQwZGVjYmIyMTc0NzI3NmIwNzY1NmU0OTRlYjA2MDkzNWIwZjMwZjAyNjQzZDNjNWM0ODBlNjE2NyIsInNpZ25hdHVyZV9zaGEyNTYiOiJiZmE5ZWJhNzNjZTBiNTM2MjgwNDZlNjEwNzNhY2U2NDA1YjkzZWZjM2JkODA0YWU2NWQ5MTMyYzQ2MzBmMWQ1In0 -->
### `client.jobs.inspect_project`

Operation ID: `inspectProject`  
Route: `POST` `/v1/inspect`  
Detailed page: [`inspectProject`](operations/jobs/inspectproject.md)

#### Signature

```python
client.jobs.inspect_project(body: InspectProjectRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ProjectInspectionPlan
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
```python
result = client.jobs.inspect_project({'projectRoot': 'example'}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJpbnNwZWN0UHJvamVjdCJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLmxpc3QiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyIsInBhdGgiOiIvdjEvam9icyIsInJlc291cmNlIjoiam9icyIsInNlY3Rpb25fc2hhMjU2IjoiNDQ1OTFlYmIyM2VlZjAwOWY4YjNlYTZkMzhjODdlNTVhNWU4MGIzZWMxMTJiYTFhNzdmZTIxMGQ0YzM0YTYyYiIsInNpZ25hdHVyZV9zaGEyNTYiOiI0ZGEzMjM0MGNjNmM1ZWViNjA4ODQzMmM5NWE1ZTFlZjdhMTBjNTIzYzU3NWRlMDI3YzdjZjAyZWFiNTFjNWM1In0 -->
### `client.jobs.list`

Operation ID: `listJobs`  
Route: `GET` `/v1/jobs`  
Detailed page: [`listJobs`](operations/jobs/listjobs.md)

#### Signature

```python
client.jobs.list(status: Optional[Literal['queued', 'running', 'succeeded', 'failed', 'cancelled']] = None, box_id: Optional[str] = None, limit: Optional[int] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobListResponse
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
```python
result = client.jobs.list()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0X2FnZW50IiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN0YXJ0QWdlbnRKb2IiLCJwYXRoIjoiL3YxL2FnZW50LWpvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjZjZGY5MTljYmEzZDQxYWFmN2E4Y2JiZDgxZWMyODAxM2JkYWM3NjI0OTJkMzJkODU3MTE0MjdkMGNiZTRiNDkiLCJzaWduYXR1cmVfc2hhMjU2IjoiZWU3YjhhODIwNjQ5YzFmYmJjMTkwNzQyZTQzZWI5YzZjNTBkMjZkYWVjZTZkMDRhMjdkM2YxYzdjMTIzZDRiZCJ9 -->
### `client.jobs.start_agent`

Operation ID: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  
Detailed page: [`startAgentJob`](operations/jobs/startagentjob.md)

#### Signature

```python
client.jobs.start_agent(body: StartAgentJobRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
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
```python
result = client.jobs.start_agent({'projectRoot': 'example', 'task': 'example'}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEFnZW50Sm9iIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0X2dpdGh1YiIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzdGFydEdpdGh1YkpvYiIsInBhdGgiOiIvdjEvZ2l0aHViLWpvYnMiLCJyZXNvdXJjZSI6ImpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjAzYjc2N2MxMWZhZDI0NDhmOTk2ZTRmMWJmMTkxMjIwZmNkZTVhMjMyNjQ5NTlkMzM5NmQxNDI1MzY2YWIzNzkiLCJzaWduYXR1cmVfc2hhMjU2IjoiZjZhMzc0YmNmYjk1NDFhYWRiNDk0ZDY1MGNlNWMzM2Q4ZGI0OTBkNjY2YTAxNmYzOTMxMTM0ZDY1ODI1YjkxMSJ9 -->
### `client.jobs.start_github`

Operation ID: `startGithubJob`  
Route: `POST` `/v1/github-jobs`  
Detailed page: [`startGithubJob`](operations/jobs/startgithubjob.md)

#### Signature

```python
client.jobs.start_github(body: StartGithubJobRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
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
```python
result = client.jobs.start_github({'repository': 'example'}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydEdpdGh1YkpvYiJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJqb2JzLnN0YXJ0X3Byb2plY3QiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3RhcnRQcm9qZWN0Sm9iIiwicGF0aCI6Ii92MS9qb2JzIiwicmVzb3VyY2UiOiJqb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJjNWI5Mzc4ZWJhMzdjNDRkYzE3ZTBiMzNmMGQyZDM1M2YyZmU4MzZlOWNkMTYxMmJhMDRhNzc3Y2NhZWM3NDYxIiwic2lnbmF0dXJlX3NoYTI1NiI6IjZhMDUzNzYxNzM0YjY4YWY1ZTA0YmU3MzA1MDI3NjYxMGJmNWZmZjdjZTQ2MWQwMTcyYmUyNGZlNWJkNWRlNDIifQ -->
### `client.jobs.start_project`

Operation ID: `startProjectJob`  
Route: `POST` `/v1/jobs`  
Detailed page: [`startProjectJob`](operations/jobs/startprojectjob.md)

#### Signature

```python
client.jobs.start_project(body: StartProjectJobRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
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
```python
result = client.jobs.start_project({'projectRoot': 'example'}, content_type='application/json')
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IifQ -->

## Resource `system`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0uZGVzY3JpYmVfYWdlbnRfbW9kcyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImRlc2NyaWJlQWdlbnRNb2RzIiwicGF0aCI6Ii92MS9tb2RzIiwicmVzb3VyY2UiOiJzeXN0ZW0iLCJzZWN0aW9uX3NoYTI1NiI6IjEyZjYxNDlkMTRiODEwMWE3N2E1Zjc0YzQ1NzA4ZDFkYmFiMTJkNTEwMTMzMDU4YTlkY2Y4NmVhZjg0ZTBjMjIiLCJzaWduYXR1cmVfc2hhMjU2IjoiMWVlNjA0YWQyNzRjM2Q2ZmY5YjhjMWE1NDY4NzNkODNlZDBjNTViYzI2YzljN2FiNDA4MjEyY2M4ZDM5ZTc5ZCJ9 -->
### `client.system.describe_agent_mods`

Operation ID: `describeAgentMods`  
Route: `GET` `/v1/mods`  
Detailed page: [`describeAgentMods`](operations/system/describeagentmods.md)

#### Signature

```python
client.system.describe_agent_mods(target: Optional[Literal['all', 'claude-code', 'claude-desktop', 'codex', 'agy', 'gemini-cli', 'cursor', 'windsurf', 'vscode', 'zed']] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ModsCatalogResponse
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
```python
result = client.system.describe_agent_mods()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyJ9 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0uZ2V0X2hlYWx0aCIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEhlYWx0aCIsInBhdGgiOiIvaGVhbHRoIiwicmVzb3VyY2UiOiJzeXN0ZW0iLCJzZWN0aW9uX3NoYTI1NiI6ImE0M2RkZWQ2Y2E5YjI1OGM2ODA4YTc5YTdlNWUzNjYxMjFiOTJlMDBiMmE0NTBiOTZkYmJmNjlkODJmMDk4NTMiLCJzaWduYXR1cmVfc2hhMjU2IjoiZWZkODgxZmFiZjVlNGM5NDE5ZTA1NWNhMGM5Y2JlNDljNjFkZDYyZWZlMThlNTUwZWZiNGIzNjIyYzgyODMyNSJ9 -->
### `client.system.get_health`

Operation ID: `getHealth`  
Route: `GET` `/health`  
Detailed page: [`getHealth`](operations/system/gethealth.md)

#### Signature

```python
client.system.get_health(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> HealthResponse
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
```python
result = client.system.get_health()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJnZXRIZWFsdGgifQ -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0ubGlzdF9jYXBhYmlsaXRpZXMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Q2FwYWJpbGl0aWVzIiwicGF0aCI6Ii92MS9jYXBhYmlsaXRpZXMiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiOTA2ZThhMDg1NDg4YmNjNThjYTJlZjY1YTkzN2Y3YjZiZTczZTZhOTMxZjI4ZjhlYjAxZjNjYTY1ZWQyZTFiOCIsInNpZ25hdHVyZV9zaGEyNTYiOiIzOGJkOWU0ZGUzNTNlNzhiYzBlZjcwYjg0Mzg5NjdiOTk3MWExNjc5YmNlZWU1ZGFiNjI5Y2RkNWU2NDM4MDVmIn0 -->
### `client.system.list_capabilities`

Operation ID: `listCapabilities`  
Route: `GET` `/v1/capabilities`  
Detailed page: [`listCapabilities`](operations/system/listcapabilities.md)

#### Signature

```python
client.system.list_capabilities(query_2: Optional[str] = None, state: Optional[Literal['implemented', 'conditional', 'planned']] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CapabilitiesResponse
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
```python
result = client.system.list_capabilities()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0Q2FwYWJpbGl0aWVzIn0 -->

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6bnVsbCwiZXhhbXBsZV9zdGF0dXMiOiJnZW5lcmF0ZWQiLCJtZW1iZXIiOiJzeXN0ZW0ubGlzdF9wcm92aWRlcnMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0UHJvdmlkZXJzIiwicGF0aCI6Ii92MS9wcm92aWRlcnMiLCJyZXNvdXJjZSI6InN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiYTAyYWU4ODMxZmMzYzY0ZWE3NGM3ZjlhZGRmMDQ5ZDE4ZWU4YTg1MGUyMTBhYmViOTUzOGI5ZTE3Yzg5NTQxZSIsInNpZ25hdHVyZV9zaGEyNTYiOiIyZDU5NDM5MjRkOTZjZThkZWRjOTkxNGM1NThmMGU0ZjlkOWZhYTZkNTE2NTQyNGJjZmY5YTIyYjg2ZmViNjBhIn0 -->
### `client.system.list_providers`

Operation ID: `listProviders`  
Route: `GET` `/v1/providers`  
Detailed page: [`listProviders`](operations/system/listproviders.md)

#### Signature

```python
client.system.list_providers(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ProvidersResponse
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
```python
result = client.system.list_providers()
```

<!-- omniwrap-api-operation-end eyJvcGVyYXRpb25faWQiOiJsaXN0UHJvdmlkZXJzIn0 -->

