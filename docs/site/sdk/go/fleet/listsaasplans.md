---
title: "listSaasPlans · go"
html: "listsaasplans.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listSaasPlans

List JackAISaaS Connect & BoxFleet subscription plans, quotas, and fleet entitlements

HTTP reference: [GET /v1/saas/plans](../../../http/fleet/listsaasplans.md)

## Package

`boxfleet` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.Fleet.ListSaasPlans` resource

## Signature

```
func (service *FleetService) ListSaasPlans(ctx context.Context, params FleetListSaasPlansParams, opts ...option.RequestOption) (*Response[*SaasPlansResponse], error)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | SaaS plan catalog | application/json (SaasPlansResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListSaasPlansAsync` | [Open](../../dotnet/fleet/listsaasplans.md) |
| java | `client.listSaasPlans` | [Open](../../java/fleet/listsaasplans.md) |
| javascript | `client.fleet.listSaasPlans` | [Open](../../javascript/fleet/listsaasplans.md) |
| kotlin | `client.listSaasPlans` | [Open](../../kotlin/fleet/listsaasplans.md) |
| python | `client.fleet.list_saas_plans` | [Open](../../python/fleet/listsaasplans.md) |
| rust | `client.list_saas_plans` | [Open](../../rust/fleet/listsaasplans.md) |
| typescript | `client.fleet.listSaasPlans` | [Open](../../typescript/fleet/listsaasplans.md) |
