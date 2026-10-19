# listSaasPlans

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List JackAISaaS Connect &amp; BoxFleet subscription plans, quotas, and fleet entitlements

Route: `GET` `/v1/saas/plans`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/v1/saas/plans`](../../../http/operations/fleet/listsaasplans.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListSaasPlansAsync` | [dotnet reference](../../../dotnet/operations/fleet/listsaasplans.md) |
| go | `client.Fleet.ListSaasPlans` | [go reference](../../../go/operations/fleet/listsaasplans.md) |
| javascript | `client.fleet.listSaasPlans` | [javascript reference](../../../javascript/operations/fleet/listsaasplans.md) |
| kotlin | `client.listSaasPlans` | [kotlin reference](../../../kotlin/operations/fleet/listsaasplans.md) |
| python | `client.fleet.list_saas_plans` | [python reference](../../../python/operations/fleet/listsaasplans.md) |
| rust | `client.list_saas_plans` | [rust reference](../../../rust/operations/fleet/listsaasplans.md) |
| typescript | `client.fleet.listSaasPlans` | [typescript reference](../../../typescript/operations/fleet/listsaasplans.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.listSaasPlans` |
| async | `client.listSaasPlansAsync` |

## Signature

```java
public SaasPlansResponse listSaasPlans()
public ApiResponse<SaasPlansResponse> listSaasPlansWithResponse()
public CompletableFuture<ApiResponse<SaasPlansResponse>> listSaasPlansWithResponseAsync()
public CompletableFuture<SaasPlansResponse> listSaasPlansAsync()
public SaasPlansResponse listSaasPlans(RequestOptions requestOptions)
public CompletableFuture<SaasPlansResponse> listSaasPlansAsync(RequestOptions requestOptions)
public ApiResponse<SaasPlansResponse> listSaasPlansWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<SaasPlansResponse>> listSaasPlansWithResponseAsync(RequestOptions requestOptions)
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

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | SaaS plan catalog | application/json (SaasPlansResponse) |
