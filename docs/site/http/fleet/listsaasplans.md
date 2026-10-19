---
title: "listSaasPlans"
html: "listsaasplans.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listSaasPlans

List JackAISaaS Connect & BoxFleet subscription plans, quotas, and fleet entitlements

GET `/v1/saas/plans`

## Parameters

> This operation takes no parameters.

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | SaaS plan catalog | application/json (SaasPlansResponse) |

## Security

> No security requirement is declared for this operation.

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListSaasPlansAsync` | [Open](../../sdk/dotnet/fleet/listsaasplans.md) |
| go | `client.Fleet.ListSaasPlans` | [Open](../../sdk/go/fleet/listsaasplans.md) |
| java | `client.listSaasPlans` | [Open](../../sdk/java/fleet/listsaasplans.md) |
| javascript | `client.fleet.listSaasPlans` | [Open](../../sdk/javascript/fleet/listsaasplans.md) |
| kotlin | `client.listSaasPlans` | [Open](../../sdk/kotlin/fleet/listsaasplans.md) |
| python | `client.fleet.list_saas_plans` | [Open](../../sdk/python/fleet/listsaasplans.md) |
| rust | `client.list_saas_plans` | [Open](../../sdk/rust/fleet/listsaasplans.md) |
| typescript | `client.fleet.listSaasPlans` | [Open](../../sdk/typescript/fleet/listsaasplans.md) |
