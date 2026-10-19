# getHealth

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect control-plane and native core readiness

Route: `GET` `/health`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/health`](../../../http/operations/system/gethealth.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetHealthAsync` | [dotnet reference](../../../dotnet/operations/system/gethealth.md) |
| go | `client.System.GetHealth` | [go reference](../../../go/operations/system/gethealth.md) |
| javascript | `client.system.getHealth` | [javascript reference](../../../javascript/operations/system/gethealth.md) |
| kotlin | `client.getHealth` | [kotlin reference](../../../kotlin/operations/system/gethealth.md) |
| python | `client.system.get_health` | [python reference](../../../python/operations/system/gethealth.md) |
| rust | `client.get_health` | [rust reference](../../../rust/operations/system/gethealth.md) |
| typescript | `client.system.getHealth` | [typescript reference](../../../typescript/operations/system/gethealth.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.getHealth` |
| async | `client.getHealthAsync` |

## Signature

```java
public HealthResponse getHealth()
public ApiResponse<HealthResponse> getHealthWithResponse()
public CompletableFuture<ApiResponse<HealthResponse>> getHealthWithResponseAsync()
public CompletableFuture<HealthResponse> getHealthAsync()
public HealthResponse getHealth(RequestOptions requestOptions)
public CompletableFuture<HealthResponse> getHealthAsync(RequestOptions requestOptions)
public ApiResponse<HealthResponse> getHealthWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<HealthResponse>> getHealthWithResponseAsync(RequestOptions requestOptions)
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
| `200` | Service health status | application/json (HealthResponse) |
