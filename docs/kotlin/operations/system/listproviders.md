# listProviders

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List configured local Firecracker and cloud/GPU sandbox providers and templates

Route: `GET` `/v1/providers`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`GET` `/v1/providers`](../../../http/operations/system/listproviders.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListProvidersAsync` | [dotnet reference](../../../dotnet/operations/system/listproviders.md) |
| go | `client.System.ListProviders` | [go reference](../../../go/operations/system/listproviders.md) |
| java | `client.listProviders` | [java reference](../../../java/operations/system/listproviders.md) |
| javascript | `client.system.listProviders` | [javascript reference](../../../javascript/operations/system/listproviders.md) |
| python | `client.system.list_providers` | [python reference](../../../python/operations/system/listproviders.md) |
| rust | `client.list_providers` | [rust reference](../../../rust/operations/system/listproviders.md) |
| typescript | `client.system.listProviders` | [typescript reference](../../../typescript/operations/system/listproviders.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.listProviders` |

## Signature

```kotlin
suspend fun listProviders(params: ListProvidersParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<ProvidersResponse>
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
