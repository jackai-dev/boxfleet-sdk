---
title: "listCapabilities · java"
html: "listcapabilities.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listCapabilities

List BoxFleet capabilities and published job limits

HTTP reference: [GET /v1/capabilities](../../../http/system/listcapabilities.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.listCapabilitiesAsync` async
- `client.listCapabilities` sync

## Signature

```
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

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `query` | query | no | `string` |  |
| `state` | query | no | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCapabilitiesAsync` | [Open](../../dotnet/system/listcapabilities.md) |
| go | `client.System.ListCapabilities` | [Open](../../go/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [Open](../../javascript/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [Open](../../kotlin/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [Open](../../python/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [Open](../../rust/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [Open](../../typescript/system/listcapabilities.md) |
