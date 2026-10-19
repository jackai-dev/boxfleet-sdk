# getHealth

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect control-plane and native core readiness

Route: `GET` `/health`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`GET` `/health`](../../../http/operations/system/gethealth.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetHealthAsync` | [dotnet reference](../../../dotnet/operations/system/gethealth.md) |
| go | `client.System.GetHealth` | [go reference](../../../go/operations/system/gethealth.md) |
| java | `client.getHealth` | [java reference](../../../java/operations/system/gethealth.md) |
| javascript | `client.system.getHealth` | [javascript reference](../../../javascript/operations/system/gethealth.md) |
| kotlin | `client.getHealth` | [kotlin reference](../../../kotlin/operations/system/gethealth.md) |
| python | `client.system.get_health` | [python reference](../../../python/operations/system/gethealth.md) |
| rust | `client.get_health` | [rust reference](../../../rust/operations/system/gethealth.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.getHealth` |
| resource | `client.system.getHealth` |

## Signature

```typescript
client.system.getHealth<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<HealthResponse> : WithRequestId<HealthResponse>>;
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

```typescript
const result = await client.system.getHealth();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Service health status | application/json (HealthResponse) |
