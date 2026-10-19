# listSaasPlans

[All HTTP operations](../../index.md)

List JackAISaaS Connect &amp; BoxFleet subscription plans, quotas, and fleet entitlements

Operation identity: `listSaasPlans`  
Route: `GET` `/v1/saas/plans`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

## Request body

This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | SaaS plan catalog | application/json (SaasPlansResponse) |

## Security

No security requirement is declared for this operation.

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "parameters": []
}
```

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListSaasPlansAsync` | [dotnet reference](../../../dotnet/operations/fleet/listsaasplans.md) |
| go | `client.Fleet.ListSaasPlans` | [go reference](../../../go/operations/fleet/listsaasplans.md) |
| java | `client.listSaasPlans` | [java reference](../../../java/operations/fleet/listsaasplans.md) |
| javascript | `client.fleet.listSaasPlans` | [javascript reference](../../../javascript/operations/fleet/listsaasplans.md) |
| kotlin | `client.listSaasPlans` | [kotlin reference](../../../kotlin/operations/fleet/listsaasplans.md) |
| python | `client.fleet.list_saas_plans` | [python reference](../../../python/operations/fleet/listsaasplans.md) |
| rust | `client.list_saas_plans` | [rust reference](../../../rust/operations/fleet/listsaasplans.md) |
| typescript | `client.fleet.listSaasPlans` | [typescript reference](../../../typescript/operations/fleet/listsaasplans.md) |
