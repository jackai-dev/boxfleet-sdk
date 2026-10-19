# updateOrganizationFleetPolicy

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`PUT` `/v1/organizations/{orgId}/fleet/policy`](../../../http/operations/fleet/updateorganizationfleetpolicy.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpdateOrganizationFleetPolicyAsync` | [dotnet reference](../../../dotnet/operations/fleet/updateorganizationfleetpolicy.md) |
| go | `client.Fleet.UpdateOrganizationPolicy` | [go reference](../../../go/operations/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [javascript reference](../../../javascript/operations/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [kotlin reference](../../../kotlin/operations/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [python reference](../../../python/operations/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [rust reference](../../../rust/operations/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [typescript reference](../../../typescript/operations/fleet/updateorganizationfleetpolicy.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.updateOrganizationFleetPolicy` |
| async | `client.updateOrganizationFleetPolicyAsync` |

## Signature

```java
public OrganizationFleetResponse updateOrganizationFleetPolicy(String orgId, FleetPolicyUpdateRequest body)
public ApiResponse<OrganizationFleetResponse> updateOrganizationFleetPolicyWithResponse(String orgId, FleetPolicyUpdateRequest body)
public CompletableFuture<ApiResponse<OrganizationFleetResponse>> updateOrganizationFleetPolicyWithResponseAsync(String orgId, FleetPolicyUpdateRequest body)
public CompletableFuture<OrganizationFleetResponse> updateOrganizationFleetPolicyAsync(String orgId, FleetPolicyUpdateRequest body)
public OrganizationFleetResponse updateOrganizationFleetPolicy(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
public CompletableFuture<OrganizationFleetResponse> updateOrganizationFleetPolicyAsync(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
public ApiResponse<OrganizationFleetResponse> updateOrganizationFleetPolicyWithResponse(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<OrganizationFleetResponse>> updateOrganizationFleetPolicyWithResponseAsync(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `FleetPolicyUpdateRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

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

## SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Updated fleet policy | application/json (OrganizationFleetResponse) |
