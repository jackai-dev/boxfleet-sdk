# listSaasPlans

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List JackAISaaS Connect &amp; BoxFleet subscription plans, quotas, and fleet entitlements

Route: `GET` `/v1/saas/plans`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`GET` `/v1/saas/plans`](../../../http/operations/fleet/listsaasplans.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListSaasPlansAsync` | [dotnet reference](../../../dotnet/operations/fleet/listsaasplans.md) |
| go | `client.Fleet.ListSaasPlans` | [go reference](../../../go/operations/fleet/listsaasplans.md) |
| java | `client.listSaasPlans` | [java reference](../../../java/operations/fleet/listsaasplans.md) |
| javascript | `client.fleet.listSaasPlans` | [javascript reference](../../../javascript/operations/fleet/listsaasplans.md) |
| kotlin | `client.listSaasPlans` | [kotlin reference](../../../kotlin/operations/fleet/listsaasplans.md) |
| python | `client.fleet.list_saas_plans` | [python reference](../../../python/operations/fleet/listsaasplans.md) |
| rust | `client.list_saas_plans` | [rust reference](../../../rust/operations/fleet/listsaasplans.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.listSaasPlans` |
| resource | `client.fleet.listSaasPlans` |

## Signature

```typescript
client.fleet.listSaasPlans<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<SaasPlansResponse> : WithRequestId<SaasPlansResponse>>;
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": []
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.fleet.listSaasPlans();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | SaaS plan catalog | application/json (SaasPlansResponse) |
