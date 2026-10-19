---
title: "updateOrganizationFleetPolicy · dotnet"
html: "updateorganizationfleetpolicy.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# updateOrganizationFleetPolicy

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

HTTP reference: [PUT /v1/organizations/{orgId}/fleet/policy](../../../http/fleet/updateorganizationfleetpolicy.md)

## Package

`BoxFleetSdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.UpdateOrganizationFleetPolicyAsync` async

## Signature

```
public async Task<OrganizationFleetResponse> UpdateOrganizationFleetPolicyAsync(
string orgId,
FleetPolicyUpdateRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
| go | `client.Fleet.UpdateOrganizationPolicy` | [Open](../../go/fleet/updateorganizationfleetpolicy.md) |
| java | `client.updateOrganizationFleetPolicy` | [Open](../../java/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [Open](../../javascript/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [Open](../../kotlin/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [Open](../../python/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [Open](../../rust/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [Open](../../typescript/fleet/updateorganizationfleetpolicy.md) |
