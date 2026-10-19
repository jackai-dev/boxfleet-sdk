# listProviders

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List configured local Firecracker and cloud/GPU sandbox providers and templates

Route: `GET` `/v1/providers`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`GET` `/v1/providers`](../../../http/operations/system/listproviders.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListProvidersAsync` | [dotnet reference](../../../dotnet/operations/system/listproviders.md) |
| go | `client.System.ListProviders` | [go reference](../../../go/operations/system/listproviders.md) |
| java | `client.listProviders` | [java reference](../../../java/operations/system/listproviders.md) |
| kotlin | `client.listProviders` | [kotlin reference](../../../kotlin/operations/system/listproviders.md) |
| python | `client.system.list_providers` | [python reference](../../../python/operations/system/listproviders.md) |
| rust | `client.list_providers` | [rust reference](../../../rust/operations/system/listproviders.md) |
| typescript | `client.system.listProviders` | [typescript reference](../../../typescript/operations/system/listproviders.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.listProviders` |
| resource | `client.system.listProviders` |

## Signature

```javascript
client.system.listProviders(requestOptions?)
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

```javascript
const result = await client.system.listProviders();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |
