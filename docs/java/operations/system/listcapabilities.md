# listCapabilities

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List BoxFleet capabilities and published job limits

Route: `GET` `/v1/capabilities`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/v1/capabilities`](../../../http/operations/system/listcapabilities.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCapabilitiesAsync` | [dotnet reference](../../../dotnet/operations/system/listcapabilities.md) |
| go | `client.System.ListCapabilities` | [go reference](../../../go/operations/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [javascript reference](../../../javascript/operations/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [kotlin reference](../../../kotlin/operations/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [python reference](../../../python/operations/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [rust reference](../../../rust/operations/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [typescript reference](../../../typescript/operations/system/listcapabilities.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.listCapabilities` |
| async | `client.listCapabilitiesAsync` |

## Signature

```java
public CapabilitiesResponse listCapabilities()
public ApiResponse<CapabilitiesResponse> listCapabilitiesWithResponse()
public CompletableFuture<ApiResponse<CapabilitiesResponse>> listCapabilitiesWithResponseAsync()
public CompletableFuture<CapabilitiesResponse> listCapabilitiesAsync()
public CapabilitiesResponse listCapabilities(RequestOptions requestOptions)
public ApiResponse<CapabilitiesResponse> listCapabilitiesWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CapabilitiesResponse>> listCapabilitiesWithResponseAsync(RequestOptions requestOptions)
public CompletableFuture<CapabilitiesResponse> listCapabilitiesAsync(RequestOptions requestOptions)
public CapabilitiesResponse listCapabilities(String queryValue, String state)
public ApiResponse<CapabilitiesResponse> listCapabilitiesWithResponse(String queryValue, String state)
public CompletableFuture<ApiResponse<CapabilitiesResponse>> listCapabilitiesWithResponseAsync(String queryValue, String state)
public CompletableFuture<CapabilitiesResponse> listCapabilitiesAsync(String queryValue, String state)
public CapabilitiesResponse listCapabilities(String queryValue, String state, RequestOptions requestOptions)
public CompletableFuture<CapabilitiesResponse> listCapabilitiesAsync(String queryValue, String state, RequestOptions requestOptions)
public ApiResponse<CapabilitiesResponse> listCapabilitiesWithResponse(String queryValue, String state, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CapabilitiesResponse>> listCapabilitiesWithResponseAsync(String queryValue, String state, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `query` | `query` | no | `string` |  |
| `state` | `query` | no | `string` |  |

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
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |
