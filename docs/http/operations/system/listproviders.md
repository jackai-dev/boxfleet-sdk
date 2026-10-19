# listProviders

[All HTTP operations](../../index.md)

List configured local Firecracker and cloud/GPU sandbox providers and templates

Operation identity: `listProviders`  
Route: `GET` `/v1/providers`  
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
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

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
| dotnet | `client.ListProvidersAsync` | [dotnet reference](../../../dotnet/operations/system/listproviders.md) |
| go | `client.System.ListProviders` | [go reference](../../../go/operations/system/listproviders.md) |
| java | `client.listProviders` | [java reference](../../../java/operations/system/listproviders.md) |
| javascript | `client.system.listProviders` | [javascript reference](../../../javascript/operations/system/listproviders.md) |
| kotlin | `client.listProviders` | [kotlin reference](../../../kotlin/operations/system/listproviders.md) |
| python | `client.system.list_providers` | [python reference](../../../python/operations/system/listproviders.md) |
| rust | `client.list_providers` | [rust reference](../../../rust/operations/system/listproviders.md) |
| typescript | `client.system.listProviders` | [typescript reference](../../../typescript/operations/system/listproviders.md) |
