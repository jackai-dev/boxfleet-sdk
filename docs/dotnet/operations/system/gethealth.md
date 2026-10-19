# getHealth

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect control-plane and native core readiness

Route: `GET` `/health`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`GET` `/health`](../../../http/operations/system/gethealth.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.System.GetHealth` | [go reference](../../../go/operations/system/gethealth.md) |
| java | `client.getHealth` | [java reference](../../../java/operations/system/gethealth.md) |
| javascript | `client.system.getHealth` | [javascript reference](../../../javascript/operations/system/gethealth.md) |
| kotlin | `client.getHealth` | [kotlin reference](../../../kotlin/operations/system/gethealth.md) |
| python | `client.system.get_health` | [python reference](../../../python/operations/system/gethealth.md) |
| rust | `client.get_health` | [rust reference](../../../rust/operations/system/gethealth.md) |
| typescript | `client.system.getHealth` | [typescript reference](../../../typescript/operations/system/gethealth.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.GetHealthAsync` |

## Signature

```csharp
public async Task<HealthResponse> GetHealthAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
