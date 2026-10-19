# listProviders

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List configured local Firecracker and cloud/GPU sandbox providers and templates

Route: `GET` `/v1/providers`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`GET` `/v1/providers`](../../../http/operations/system/listproviders.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListProvidersAsync` | [dotnet reference](../../../dotnet/operations/system/listproviders.md) |
| go | `client.System.ListProviders` | [go reference](../../../go/operations/system/listproviders.md) |
| java | `client.listProviders` | [java reference](../../../java/operations/system/listproviders.md) |
| javascript | `client.system.listProviders` | [javascript reference](../../../javascript/operations/system/listproviders.md) |
| kotlin | `client.listProviders` | [kotlin reference](../../../kotlin/operations/system/listproviders.md) |
| python | `client.system.list_providers` | [python reference](../../../python/operations/system/listproviders.md) |
| typescript | `client.system.listProviders` | [typescript reference](../../../typescript/operations/system/listproviders.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.list_providers` |

## Signature

```rust
pub async fn list_providers(&self, request_options: Option<RequestOptions>) -> Result<ProvidersResponse, ApiError>
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
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |
