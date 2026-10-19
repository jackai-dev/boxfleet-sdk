---
title: "getHealth · java"
html: "gethealth.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getHealth

Inspect control-plane and native core readiness

HTTP reference: [GET /health](../../../http/system/gethealth.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.getHealthAsync` async
- `client.getHealth` sync

## Signature

```
public HealthResponse getHealth()
public ApiResponse<HealthResponse> getHealthWithResponse()
public CompletableFuture<ApiResponse<HealthResponse>> getHealthWithResponseAsync()
public CompletableFuture<HealthResponse> getHealthAsync()
public HealthResponse getHealth(RequestOptions requestOptions)
public CompletableFuture<HealthResponse> getHealthAsync(RequestOptions requestOptions)
public ApiResponse<HealthResponse> getHealthWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<HealthResponse>> getHealthWithResponseAsync(RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Service health status | application/json (HealthResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetHealthAsync` | [Open](../../dotnet/system/gethealth.md) |
| go | `client.System.GetHealth` | [Open](../../go/system/gethealth.md) |
| javascript | `client.system.getHealth` | [Open](../../javascript/system/gethealth.md) |
| kotlin | `client.getHealth` | [Open](../../kotlin/system/gethealth.md) |
| python | `client.system.get_health` | [Open](../../python/system/gethealth.md) |
| rust | `client.get_health` | [Open](../../rust/system/gethealth.md) |
| typescript | `client.system.getHealth` | [Open](../../typescript/system/gethealth.md) |
