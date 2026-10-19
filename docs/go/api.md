# BoxFleet go API

<!-- omniwrap-api-reference eyJjb250cmFjdF9maW5nZXJwcmludCI6IjE3ZGRlMWE4OTgwNThiMzJlNTcwNDc3NGI3NjVhNTFjMmJjZjEyYmRkMDRlYzM4MDVkNmI2ODA0YWM1YWU3ZmEiLCJvcGVyYXRpb25fY291bnQiOjIzLCJyZW5kZXJlciI6ImdvIiwidmVyc2lvbiI6IjEuNC4wIn0 -->

This generated index is tied to Semantic IR `1.14.0` and contract fingerprint `17dde1a898058b32e5704774b765a51c2bcf12bdd04ec3805d6b6804ac5ae7fa`. Every operation below is rendered from the same semantic contract and artifact-attested public member allocation as the SDK.

SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../sdk/go/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `978e5bf64816d75c36685ed60679a586b2970a0b267ccc222d0378ca3c6b3580`

## Client hooks and tracing

`option.WithHooks(option.Hooks{...})` registers four callbacks. Every attempt starts with `BeforeRequest` and ends with exactly one of `OnRetry` (another attempt follows), `AfterResponse` (the success the call returns) or `OnError` (the failure the call reports). Each receives the operation id, the HTTP method, the URL, the request headers, the attempt number (from 1), the time elapsed since the call started and, once the server answered, the HTTP status. No context carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`, every API-key header and API-key query parameter, and any configured credential value read `[redacted]`. Every hook receives an `option.HookContext` value holding copies: no hook can change the request.

`option.WithTracer(tracer)` opens one span per call through the tracer interface this SDK defines, named after the operation id, with `http.request.method`, `http.response.status_code` and `http.request.resend_count`. It needs no tracing library; README.md maps it onto the OpenTelemetry API.

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

## Resource `Cloud`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDbG91ZC5OZXdCb3giLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoiY3JlYXRlQ2xvdWRCb3giLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzIiwicmVzb3VyY2UiOiJDbG91ZCIsInNlY3Rpb25fc2hhMjU2IjoiMGNjZmQzOTg2MDczZDE2YTllZmRmMTkzNzc4NmMyNGZkMzEwYWE2YTMwNjcwYTU5OTY2ZDY2MjU1YjE3NzRiZSIsInNpZ25hdHVyZV9zaGEyNTYiOiIwNTE2ZmFjMzBlNDUyZmIyODg3YjMyYmZhYjYzMDQzMjA1MDg4MzA0YWFjYzgxMTI0ZGE4NDlkNThlY2RlYzE4In0 -->
### `client.Cloud.NewBox`

Operation ID: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  
Detailed page: [`createCloudBox`](operations/cloud/createcloudbox.md)

#### Signature

```go
func (service *CloudService) NewBox(ctx context.Context, params CloudNewBoxParams, opts ...option.RequestOption) (*Response[*CloudBoxEnvelope], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDbG91ZC5HZXRXaGl0ZUxhYmVsQ2F0YWxvZyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldFdoaXRlTGFiZWxDbG91ZENhdGFsb2ciLCJwYXRoIjoiL3YxL2Nsb3VkL2NhdGFsb2ciLCJyZXNvdXJjZSI6IkNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiI1NGQ2ZWI3YzY3MDU1ZTdiNWRiNDgyOTYwMDRkZTg0NjJjYWY3MDJjYzAxOWU1MDMzZmU3ZGJmNmMyNzAxMDk0Iiwic2lnbmF0dXJlX3NoYTI1NiI6ImFjYWQ5YjliMjEzZWI1MTI3MmIxZDFkNjg0ZTM2NzAxMzNhZTJhMmZhM2JkMDhmOTExNWMxZmFmYzYyZmQzYzMifQ -->
### `client.Cloud.GetWhiteLabelCatalog`

Operation ID: `getWhiteLabelCloudCatalog`  
Route: `GET` `/v1/cloud/catalog`  
Detailed page: [`getWhiteLabelCloudCatalog`](operations/cloud/getwhitelabelcloudcatalog.md)

#### Signature

```go
func (service *CloudService) GetWhiteLabelCatalog(ctx context.Context, params CloudGetWhiteLabelCatalogParams, opts ...option.RequestOption) (*Response[*WhiteLabelCloudCatalog], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDbG91ZC5MaXN0Qm94ZXMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Q2xvdWRCb3hlcyIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMiLCJyZXNvdXJjZSI6IkNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiI1ZjY4NDY4ZDQ5YmQ3MTA5MDIyOWEyZjg4ZTExNjU1OTI4NzY0N2FiNmU1MWJhZmZjMjNjODMyODY5ZDQ1MDIwIiwic2lnbmF0dXJlX3NoYTI1NiI6IjEwNDE1ODFhZDk2NjEzNTg5YmUyYTQ4ZTc3MDYwNWI0NGM3MDJjOWYzN2UxMjIzZTkyZTM5ODIyNTM4NjY1MTIifQ -->
### `client.Cloud.ListBoxes`

Operation ID: `listCloudBoxes`  
Route: `GET` `/v1/cloud/boxes`  
Detailed page: [`listCloudBoxes`](operations/cloud/listcloudboxes.md)

#### Signature

```go
func (service *CloudService) ListBoxes(ctx context.Context, params CloudListBoxesParams, opts ...option.RequestOption) (*Response[*CloudBoxListResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDbG91ZC5QZXJmb3JtQm94QWN0aW9uIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InBlcmZvcm1DbG91ZEJveEFjdGlvbiIsInBhdGgiOiIvdjEvY2xvdWQvYm94ZXMve2JveElkfS9hY3Rpb24iLCJyZXNvdXJjZSI6IkNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiI1YjY4NzBlZDE5ZDY1YjIyY2QxMWE2MWQ5YjMxNzZiOGYwZjZkMzA1MjU5ZWFjYjVmYTdlYjM2YmQzZTBmZTVhIiwic2lnbmF0dXJlX3NoYTI1NiI6IjRiYTAwMTc1MDk0MzY2ZGQ0NjdjZjE0ODlkYTMxOTgzYTQyNzIxNDIyYzA1Y2I4MDdlYzBhMzc2MWQ3NjU5ZWUifQ -->
### `client.Cloud.PerformBoxAction`

Operation ID: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Detailed page: [`performCloudBoxAction`](operations/cloud/performcloudboxaction.md)

#### Signature

```go
func (service *CloudService) PerformBoxAction(ctx context.Context, params CloudPerformBoxActionParams, opts ...option.RequestOption) (*Response[*CloudBoxActionResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJDbG91ZC5TeW5jQm94VmF1bHQiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3luY0Nsb3VkQm94VmF1bHQiLCJwYXRoIjoiL3YxL2Nsb3VkL2JveGVzL3tib3hJZH0vdmF1bHQiLCJyZXNvdXJjZSI6IkNsb3VkIiwic2VjdGlvbl9zaGEyNTYiOiJiNmVmOTU1M2ZlZjgxM2VmYmY2MTQxYThkZjlhZmMyYzE5ZDVhYTE4ZDY4NWQ2OWI4OWMyY2ZiZGFhOWMwMDJjIiwic2lnbmF0dXJlX3NoYTI1NiI6ImY4OGY4MzgyMDAzNDAxNDI5MTVmOGIzYWZhZjI5YjZhOGM5ODA3YTYyMGRmMWRlZDY5NDBkZDVlNGJmYzFlZWIifQ -->
### `client.Cloud.SyncBoxVault`

Operation ID: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Detailed page: [`syncCloudBoxVault`](operations/cloud/synccloudboxvault.md)

#### Signature

```go
func (service *CloudService) SyncBoxVault(ctx context.Context, params CloudSyncBoxVaultParams, opts ...option.RequestOption) (*Response[*SyncCloudBoxVaultResponse], error)
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

## Resource `Fleet`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJGbGVldC5HZXRPcmdhbml6YXRpb24iLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRPcmdhbml6YXRpb25GbGVldCIsInBhdGgiOiIvdjEvb3JnYW5pemF0aW9ucy97b3JnSWR9L2ZsZWV0IiwicmVzb3VyY2UiOiJGbGVldCIsInNlY3Rpb25fc2hhMjU2IjoiNWIxYjQyMzk0ZGIwYTY4MjczM2JmMDFmYTgyYjgyODcwZThiOTkyNjFlZDcxMjUyYWQ3OGI5OWE2NjI4OWYwMSIsInNpZ25hdHVyZV9zaGEyNTYiOiI4ZmZkMDhhYmU2MWZjMGFkOWIwMWEyYzQwNTAxNDMxZTZjMjQwZTY4NmY4MTkwY2U0NzVjY2FlZmRkYzk4OWZmIn0 -->
### `client.Fleet.GetOrganization`

Operation ID: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  
Detailed page: [`getOrganizationFleet`](operations/fleet/getorganizationfleet.md)

#### Signature

```go
func (service *FleetService) GetOrganization(ctx context.Context, params FleetGetOrganizationParams, opts ...option.RequestOption) (*Response[*OrganizationFleetResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJGbGVldC5MaXN0T3JnYW5pemF0aW9uTWVtYmVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RPcmdhbml6YXRpb25NZW1iZXJzIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiRmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6ImMxMWMxOWY0MGNhNTBhYjFjMGMxY2QzYzJiMzRkMGRkM2JlMDUwNDQxYzJmODgzZDc2NGMxOWFmN2E0MjM5YjgiLCJzaWduYXR1cmVfc2hhMjU2IjoiYTgyYWUzZmVmZWZiODQ2ZGI0MWFkMWJmNTExZGZkODc0NDI3YjNlYTQ4NWVkZThjMGQxMzdmNjQxZTFhMTQ1ZiJ9 -->
### `client.Fleet.ListOrganizationMembers`

Operation ID: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  
Detailed page: [`listOrganizationMembers`](operations/fleet/listorganizationmembers.md)

#### Signature

```go
func (service *FleetService) ListOrganizationMembers(ctx context.Context, params FleetListOrganizationMembersParams, opts ...option.RequestOption) (*Response[*OrganizationMembersResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJGbGVldC5MaXN0U2Fhc1BsYW5zIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoibGlzdFNhYXNQbGFucyIsInBhdGgiOiIvdjEvc2Fhcy9wbGFucyIsInJlc291cmNlIjoiRmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjFiMjM1OWZjNTk2YThhZGQ2YzI2YjdhYWRhMDQ0YWRhZjVmY2VjMzMwNTgzYjNjODc5NzRkZTUyZDBmODY4YTMiLCJzaWduYXR1cmVfc2hhMjU2IjoiNzY4NDUwYmFmMTIwMmZmNTc1MzI4OWJjMWUyYmI2YjM1ZTkxOGM1ODAyMDcyODdlZTNmNDg5MDEzNTY4NGYzNCJ9 -->
### `client.Fleet.ListSaasPlans`

Operation ID: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  
Detailed page: [`listSaasPlans`](operations/fleet/listsaasplans.md)

#### Signature

```go
func (service *FleetService) ListSaasPlans(ctx context.Context, params FleetListSaasPlansParams, opts ...option.RequestOption) (*Response[*SaasPlansResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJGbGVldC5VcGRhdGVPcmdhbml6YXRpb25Qb2xpY3kiLCJtZXRob2QiOiJQVVQiLCJvcGVyYXRpb25faWQiOiJ1cGRhdGVPcmdhbml6YXRpb25GbGVldFBvbGljeSIsInBhdGgiOiIvdjEvb3JnYW5pemF0aW9ucy97b3JnSWR9L2ZsZWV0L3BvbGljeSIsInJlc291cmNlIjoiRmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjY2ZmMxYzkzZDNiODg0NmVlNDE5ZjVlZDdlY2M1OTQ4Y2Y1NzA5MzNiNDQ5YjkxMDBjZTNiZTNhMzEwNDAxOGEiLCJzaWduYXR1cmVfc2hhMjU2IjoiYzViZDJiZWNmNjBmYjgxOGM2NjE5YWJlYTBlMDc4M2Y2YmQzY2E4MzYzNTRmMGZhOWZiMTc2MDJhMjEyM2E4MCJ9 -->
### `client.Fleet.UpdateOrganizationPolicy`

Operation ID: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Detailed page: [`updateOrganizationFleetPolicy`](operations/fleet/updateorganizationfleetpolicy.md)

#### Signature

```go
func (service *FleetService) UpdateOrganizationPolicy(ctx context.Context, params FleetUpdateOrganizationPolicyParams, opts ...option.RequestOption) (*Response[*OrganizationFleetResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJGbGVldC5VcHNlcnRPcmdhbml6YXRpb25NZW1iZXIiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoidXBzZXJ0T3JnYW5pemF0aW9uTWVtYmVyIiwicGF0aCI6Ii92MS9vcmdhbml6YXRpb25zL3tvcmdJZH0vbWVtYmVycyIsInJlc291cmNlIjoiRmxlZXQiLCJzZWN0aW9uX3NoYTI1NiI6IjZhZDZjZjAyYmI2OWI3OGUwYzU5NmQwMGZiYzQ0NDlkNWVjNGFiZGIwOTdjYTdkYzg4MjA4NDVmYzkzOTFjNzkiLCJzaWduYXR1cmVfc2hhMjU2IjoiYjU4ZjE1MTQwMDBiZWExNzU5MjI5ZDAwM2IzMDQ1OGI5MTY1YjgxNTk5NGVhODliOWVhYTNhN2ZmYzZhOWQxNCJ9 -->
### `client.Fleet.UpsertOrganizationMember`

Operation ID: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  
Detailed page: [`upsertOrganizationMember`](operations/fleet/upsertorganizationmember.md)

#### Signature

```go
func (service *FleetService) UpsertOrganizationMember(ctx context.Context, params FleetUpsertOrganizationMemberParams, opts ...option.RequestOption) (*Response[*OrganizationMember], error)
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

## Resource `Jobs`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLkNhbmNlbCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJjYW5jZWxKb2IiLCJwYXRoIjoiL3YxL2pvYnMve2pvYklkfS9jYW5jZWwiLCJyZXNvdXJjZSI6IkpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6IjJjYTc1ZGYwNjY1NDBiNWUwMDE2MGI1MGQyMjY4NDMyNGU0YWM4MDk1MDUxZjZiMmJiZmM4NGRmYWNhMzlkNmEiLCJzaWduYXR1cmVfc2hhMjU2IjoiNTI5OGEzMzg3YWE1NTFkNjE2NzY4OTlmNjBiMWRkMThjZjVkOTliZDJjYmJmNGM4NDdlOWUzNWU3ZWRjMDI3ZCJ9 -->
### `client.Jobs.Cancel`

Operation ID: `cancelJob`  
Route: `POST` `/v1/jobs/{jobId}/cancel`  
Detailed page: [`cancelJob`](operations/jobs/canceljob.md)

#### Signature

```go
func (service *JobsService) Cancel(ctx context.Context, params JobsCancelParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLkdldEV4ZWN1dGlvbiIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYkV4ZWN1dGlvbiIsInBhdGgiOiIvdjEvam9icy97am9iSWR9L2V4ZWN1dGlvbiIsInJlc291cmNlIjoiSm9icyIsInNlY3Rpb25fc2hhMjU2IjoiZGU1Y2QzZjgxMWM0NDYzY2I4MWJiOTFhZTJkMDE0ZjYwMTk4ZDViNjY5ZjU2YTg1MDA2MTU2OTliZmU3YjQ5OCIsInNpZ25hdHVyZV9zaGEyNTYiOiI5YzU2Y2I1OWVlZjg4YzE0ZGY1ZmFlYTQ5MjE2OTFiMTYzNTBlM2IxZDgwMTc0Y2YwZTExMjRjMWZmMWVkZDkzIn0 -->
### `client.Jobs.GetExecution`

Operation ID: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  
Detailed page: [`getJobExecution`](operations/jobs/getjobexecution.md)

#### Signature

```go
func (service *JobsService) GetExecution(ctx context.Context, params JobsGetExecutionParams, opts ...option.RequestOption) (*Response[*JobExecutionResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLkdldExvZ3MiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJnZXRKb2JMb2dzIiwicGF0aCI6Ii92MS9qb2JzL3tqb2JJZH0vbG9ncyIsInJlc291cmNlIjoiSm9icyIsInNlY3Rpb25fc2hhMjU2IjoiNTllYTFhY2FlYzFmNjM0OGI4N2VjYTcxMmFjZGJjMjkxYjEzMGY5ZGRhOTBmYjc0MjE3NDViMWE1OWU0OWE3ZCIsInNpZ25hdHVyZV9zaGEyNTYiOiI0N2Q4MzRhZmEyYjdmNDFiNWU1YTQyOTIyM2RhODczOTZjZDJiYzFjMWJlMTI3OWEzZmFkMzJhMDk5YWEwMzg0In0 -->
### `client.Jobs.GetLogs`

Operation ID: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  
Detailed page: [`getJobLogs`](operations/jobs/getjoblogs.md)

#### Signature

```go
func (service *JobsService) GetLogs(ctx context.Context, params JobsGetLogsParams, opts ...option.RequestOption) (*Response[*JobLogsResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLkdldFN0YXR1cyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6ImdldEpvYlN0YXR1cyIsInBhdGgiOiIvdjEvam9icy97am9iSWR9IiwicmVzb3VyY2UiOiJKb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJkZWFhNGQ3MDQwY2FjNjZkYjc0MzNmNmNlZDAzYzI1ZDljYWY0OWVmZWQyYTU2MDg2OTFlNmQ4ZjIzNDI0MTgyIiwic2lnbmF0dXJlX3NoYTI1NiI6Ijk1YjNhOGVmNWIyNmM3MzQzMmVjNGQ2NTYwYjM4OWFjZDdmZjBmMmZjY2Y0Y2UxNDU4ODViYzRmZTU4YjgxMjUifQ -->
### `client.Jobs.GetStatus`

Operation ID: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  
Detailed page: [`getJobStatus`](operations/jobs/getjobstatus.md)

#### Signature

```go
func (service *JobsService) GetStatus(ctx context.Context, params JobsGetStatusParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLkluc3BlY3RQcm9qZWN0IiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6Imluc3BlY3RQcm9qZWN0IiwicGF0aCI6Ii92MS9pbnNwZWN0IiwicmVzb3VyY2UiOiJKb2JzIiwic2VjdGlvbl9zaGEyNTYiOiJiNDY1MTljOTc3NDNmZWU1ZDdjNDliNjlhM2MyN2ViMmZiNWUzNmEyMDM4Yjc4YzZlYmM0ODc5N2U0YmI3OTRhIiwic2lnbmF0dXJlX3NoYTI1NiI6IjZkMWMxNjZiMjE3YmIwNzI4NGFiZjE3ODFjMThkOTJiNTI0Y2FkZmJhMTA5MDQ3OTUwYjMxM2UxMWY1NTc1YzMifQ -->
### `client.Jobs.InspectProject`

Operation ID: `inspectProject`  
Route: `POST` `/v1/inspect`  
Detailed page: [`inspectProject`](operations/jobs/inspectproject.md)

#### Signature

```go
func (service *JobsService) InspectProject(ctx context.Context, params JobsInspectProjectParams, opts ...option.RequestOption) (*Response[*ProjectInspectionPlan], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLkxpc3QiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJsaXN0Sm9icyIsInBhdGgiOiIvdjEvam9icyIsInJlc291cmNlIjoiSm9icyIsInNlY3Rpb25fc2hhMjU2IjoiOTBhZmY4Yjk3ZDZlMDE4ZGRhNDFiZmE3MTMxZWRjMzlhZWRlODJlOTk0NjkxYzUwYjNlODhlNTM3MTVmY2ViMCIsInNpZ25hdHVyZV9zaGEyNTYiOiIzNDIxZjcyOWUxZDdkM2JkYTM0MjFjYjgyYTUzNjg3OTdjNTFiMzcyMGU1YzM1YTNmNzY4OWJlZDRjMzkxYTY1In0 -->
### `client.Jobs.List`

Operation ID: `listJobs`  
Route: `GET` `/v1/jobs`  
Detailed page: [`listJobs`](operations/jobs/listjobs.md)

#### Signature

```go
func (service *JobsService) List(ctx context.Context, params JobsListParams, opts ...option.RequestOption) (*Response[*JobListResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLlN0YXJ0QWdlbnQiLCJtZXRob2QiOiJQT1NUIiwib3BlcmF0aW9uX2lkIjoic3RhcnRBZ2VudEpvYiIsInBhdGgiOiIvdjEvYWdlbnQtam9icyIsInJlc291cmNlIjoiSm9icyIsInNlY3Rpb25fc2hhMjU2IjoiMjA3NzJmYzUyYmY2OGU5ZTFmYzJmNWY2ZGVjNTM3NWI0NzIxNGMwNDNkMDA2NDFmMjA5NTc5ZjZiMWNiODJlYSIsInNpZ25hdHVyZV9zaGEyNTYiOiIxZGUzMjg3YmQwNGU0ZWRmMDdhYWE3NjRhYjI0OWUyNjk1NWMzM2VjNGQxNTE5Yzc0NzA5YjJkMmUwMTI3OWQ0In0 -->
### `client.Jobs.StartAgent`

Operation ID: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  
Detailed page: [`startAgentJob`](operations/jobs/startagentjob.md)

#### Signature

```go
func (service *JobsService) StartAgent(ctx context.Context, params JobsStartAgentParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLlN0YXJ0R2l0aHViIiwibWV0aG9kIjoiUE9TVCIsIm9wZXJhdGlvbl9pZCI6InN0YXJ0R2l0aHViSm9iIiwicGF0aCI6Ii92MS9naXRodWItam9icyIsInJlc291cmNlIjoiSm9icyIsInNlY3Rpb25fc2hhMjU2IjoiMTMzZjU2Y2QwYzdjMjVjOTYzMDZkMmY1MWI1YzFiOGRhZDZiMDM4MGFjOThkODBlNjczYWIzMjY0ZWY5YjM0YiIsInNpZ25hdHVyZV9zaGEyNTYiOiI5NjJhYTc4NTQ4MWNkZDg1MGMzOGE3YjJjMWUwNDliYTk3YzA0ZWY3NmFiNjIwZmIwZDk4ZmYzODk0NWQxMTk3In0 -->
### `client.Jobs.StartGithub`

Operation ID: `startGithubJob`  
Route: `POST` `/v1/github-jobs`  
Detailed page: [`startGithubJob`](operations/jobs/startgithubjob.md)

#### Signature

```go
func (service *JobsService) StartGithub(ctx context.Context, params JobsStartGithubParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJKb2JzLlN0YXJ0UHJvamVjdCIsIm1ldGhvZCI6IlBPU1QiLCJvcGVyYXRpb25faWQiOiJzdGFydFByb2plY3RKb2IiLCJwYXRoIjoiL3YxL2pvYnMiLCJyZXNvdXJjZSI6IkpvYnMiLCJzZWN0aW9uX3NoYTI1NiI6ImE5MWExMmE0MTAxMmIxOTAzMzAzZDdiMmZhZjhmOGI4NTcxOWFiZDg1MjllY2E2MmI3OGQ3ZWEyOWI2YzkwMWQiLCJzaWduYXR1cmVfc2hhMjU2IjoiMjhkODcwOGY4NWVjYTBlMGIzNmQ4ODk3ZGUyZGEyNmRhYzA4ODc5NWJmYzljODY2ZTVhOGNiNTU1NTkzNmQ2NyJ9 -->
### `client.Jobs.StartProject`

Operation ID: `startProjectJob`  
Route: `POST` `/v1/jobs`  
Detailed page: [`startProjectJob`](operations/jobs/startprojectjob.md)

#### Signature

```go
func (service *JobsService) StartProject(ctx context.Context, params JobsStartProjectParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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

## Resource `System`

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTeXN0ZW0uRGVzY3JpYmVBZ2VudE1vZHMiLCJtZXRob2QiOiJHRVQiLCJvcGVyYXRpb25faWQiOiJkZXNjcmliZUFnZW50TW9kcyIsInBhdGgiOiIvdjEvbW9kcyIsInJlc291cmNlIjoiU3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiI4ZmNjMmM4N2M2M2I0YWZkOWNmYWNkYTRiNzdiYjlkMGM5YTBhODUyYTBhYmZkNDc5Y2E5MDk0ODhjNzBmMTBiIiwic2lnbmF0dXJlX3NoYTI1NiI6IjBiNjRmYjMxYTA0ODE4MDNiZjAwNzE4NWVlNDgxNjYxYmUwNmZjNjNiYTg4MWU5YzhlZWU0MzFkNDJhNzYzMzEifQ -->
### `client.System.DescribeAgentMods`

Operation ID: `describeAgentMods`  
Route: `GET` `/v1/mods`  
Detailed page: [`describeAgentMods`](operations/system/describeagentmods.md)

#### Signature

```go
func (service *SystemService) DescribeAgentMods(ctx context.Context, params SystemDescribeAgentModsParams, opts ...option.RequestOption) (*Response[*ModsCatalogResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTeXN0ZW0uR2V0SGVhbHRoIiwibWV0aG9kIjoiR0VUIiwib3BlcmF0aW9uX2lkIjoiZ2V0SGVhbHRoIiwicGF0aCI6Ii9oZWFsdGgiLCJyZXNvdXJjZSI6IlN5c3RlbSIsInNlY3Rpb25fc2hhMjU2IjoiMTEzMzExYjU2Yzk2MDNiYjM1MmQ5MGE5YWJjMjc1MDMxYTkzNDdjZGVmOWQ2M2IzNzMxMzQ1NGMzNTZkZjUyMSIsInNpZ25hdHVyZV9zaGEyNTYiOiJlMjJlZjg5YjgwNzEzMmNmZGUwYzAwNGRiOGQyNjM4ZDE0YjgwYjY3NDI5NTdiNjY1N2MzZWFhMzMyYTIyNjU3In0 -->
### `client.System.GetHealth`

Operation ID: `getHealth`  
Route: `GET` `/health`  
Detailed page: [`getHealth`](operations/system/gethealth.md)

#### Signature

```go
func (service *SystemService) GetHealth(ctx context.Context, params SystemGetHealthParams, opts ...option.RequestOption) (*Response[*HealthResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTeXN0ZW0uTGlzdENhcGFiaWxpdGllcyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RDYXBhYmlsaXRpZXMiLCJwYXRoIjoiL3YxL2NhcGFiaWxpdGllcyIsInJlc291cmNlIjoiU3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiI4ZjlkZjkyZDcwMmI5NTE3MWU3YTBmYTFmOTRkYTZmZGQ1OWRhMDVlOTQ3NTcwODJkNTc5YWFhNmEzNDQ4OTFmIiwic2lnbmF0dXJlX3NoYTI1NiI6IjgyNjEzYmVlZjVmNTlhMTc0MzQzNmU4MDAzZGFmODM5YzM4NWUzMWRkNmRiNzQ4ZDczMTgzYmU2OTgzOTgxYmEifQ -->
### `client.System.ListCapabilities`

Operation ID: `listCapabilities`  
Route: `GET` `/v1/capabilities`  
Detailed page: [`listCapabilities`](operations/system/listcapabilities.md)

#### Signature

```go
func (service *SystemService) ListCapabilities(ctx context.Context, params SystemListCapabilitiesParams, opts ...option.RequestOption) (*Response[*CapabilitiesResponse], error)
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

<!-- omniwrap-api-operation eyJleGFtcGxlX3JlYXNvbiI6Imxhbmd1YWdlLWV4YW1wbGUtbm90LWdlbmVyYXRlZCIsImV4YW1wbGVfc3RhdHVzIjoidW5zdXBwb3J0ZWQiLCJtZW1iZXIiOiJTeXN0ZW0uTGlzdFByb3ZpZGVycyIsIm1ldGhvZCI6IkdFVCIsIm9wZXJhdGlvbl9pZCI6Imxpc3RQcm92aWRlcnMiLCJwYXRoIjoiL3YxL3Byb3ZpZGVycyIsInJlc291cmNlIjoiU3lzdGVtIiwic2VjdGlvbl9zaGEyNTYiOiI4NDc1YTU0OThiMjE2ZTEyOTM4Njc4NTYzZGU2YTJlZTJkM2UzMjAwZDYzM2IzNTE0Y2FjNDk1ODEwOTVmZGEyIiwic2lnbmF0dXJlX3NoYTI1NiI6IjAwNTUyNWY0NDVhNjE1MjAzMTNlOGE4YmJiYmJmNWZlMzU2MjQ3MTVkYjRlODRlZTY2NDUwZDI4YzhjMGY1MTYifQ -->
### `client.System.ListProviders`

Operation ID: `listProviders`  
Route: `GET` `/v1/providers`  
Detailed page: [`listProviders`](operations/system/listproviders.md)

#### Signature

```go
func (service *SystemService) ListProviders(ctx context.Context, params SystemListProvidersParams, opts ...option.RequestOption) (*Response[*ProvidersResponse], error)
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

