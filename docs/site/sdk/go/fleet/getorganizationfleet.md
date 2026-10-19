---
title: "getOrganizationFleet · go"
html: "getorganizationfleet.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getOrganizationFleet

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

HTTP reference: [GET /v1/organizations/{orgId}/fleet](../../../http/fleet/getorganizationfleet.md)

## Package

`boxfleet` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.Fleet.GetOrganization` resource

## Signature

```
func (service *FleetService) GetOrganization(ctx context.Context, params FleetGetOrganizationParams, opts ...option.RequestOption) (*Response[*OrganizationFleetResponse], error)
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
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetOrganizationFleetAsync` | [Open](../../dotnet/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [Open](../../java/fleet/getorganizationfleet.md) |
| javascript | `client.fleet.getOrganization` | [Open](../../javascript/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [Open](../../kotlin/fleet/getorganizationfleet.md) |
| python | `client.fleet.get_organization` | [Open](../../python/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [Open](../../rust/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [Open](../../typescript/fleet/getorganizationfleet.md) |
