---
title: "updateOrganizationFleetPolicy · java"
html: "updateorganizationfleetpolicy.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# updateOrganizationFleetPolicy

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

HTTP reference: [PUT /v1/organizations/{orgId}/fleet/policy](../../../http/fleet/updateorganizationfleetpolicy.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.updateOrganizationFleetPolicyAsync` async
- `client.updateOrganizationFleetPolicy` sync

## Signature

```
public OrganizationFleetResponse updateOrganizationFleetPolicy(String orgId, FleetPolicyUpdateRequest body)
public ApiResponse<OrganizationFleetResponse> updateOrganizationFleetPolicyWithResponse(String orgId, FleetPolicyUpdateRequest body)
public CompletableFuture<ApiResponse<OrganizationFleetResponse>> updateOrganizationFleetPolicyWithResponseAsync(String orgId, FleetPolicyUpdateRequest body)
public CompletableFuture<OrganizationFleetResponse> updateOrganizationFleetPolicyAsync(String orgId, FleetPolicyUpdateRequest body)
public OrganizationFleetResponse updateOrganizationFleetPolicy(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
public CompletableFuture<OrganizationFleetResponse> updateOrganizationFleetPolicyAsync(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
public ApiResponse<OrganizationFleetResponse> updateOrganizationFleetPolicyWithResponse(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<OrganizationFleetResponse>> updateOrganizationFleetPolicyWithResponseAsync(String orgId, FleetPolicyUpdateRequest body, RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Updated fleet policy | application/json (OrganizationFleetResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpdateOrganizationFleetPolicyAsync` | [Open](../../dotnet/fleet/updateorganizationfleetpolicy.md) |
| go | `client.Fleet.UpdateOrganizationPolicy` | [Open](../../go/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [Open](../../javascript/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [Open](../../kotlin/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [Open](../../python/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [Open](../../rust/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [Open](../../typescript/fleet/updateorganizationfleetpolicy.md) |
