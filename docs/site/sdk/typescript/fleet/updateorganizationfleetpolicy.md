---
title: "updateOrganizationFleetPolicy · typescript"
html: "updateorganizationfleetpolicy.html"
language: "typescript"
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

- `client.updateOrganizationFleetPolicy` flat
- `client.fleet.updateOrganizationPolicy` resource

## Signature

```
client.fleet.updateOrganizationPolicy<Raw extends boolean = false>(orgId: string, body: FleetPolicyUpdateRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<OrganizationFleetResponse> : WithRequestId<OrganizationFleetResponse>>;
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
const result = await client.fleet.updateOrganizationPolicy("example", {}, { contentType: "application/json" });
```

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
| java | `client.updateOrganizationFleetPolicy` | [Open](../../java/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [Open](../../javascript/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [Open](../../kotlin/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [Open](../../python/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [Open](../../rust/fleet/updateorganizationfleetpolicy.md) |
