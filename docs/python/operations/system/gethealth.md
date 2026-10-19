# getHealth

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect control-plane and native core readiness

Route: `GET` `/health`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/health`](../../../http/operations/system/gethealth.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetHealthAsync` | [dotnet reference](../../../dotnet/operations/system/gethealth.md) |
| go | `client.System.GetHealth` | [go reference](../../../go/operations/system/gethealth.md) |
| java | `client.getHealth` | [java reference](../../../java/operations/system/gethealth.md) |
| javascript | `client.system.getHealth` | [javascript reference](../../../javascript/operations/system/gethealth.md) |
| kotlin | `client.getHealth` | [kotlin reference](../../../kotlin/operations/system/gethealth.md) |
| rust | `client.get_health` | [rust reference](../../../rust/operations/system/gethealth.md) |
| typescript | `client.system.getHealth` | [typescript reference](../../../typescript/operations/system/gethealth.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.get_health` |
| raw | `client.with_raw_response.get_health` |
| resource | `client.system.get_health` |

## Signature

```python
client.system.get_health(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> HealthResponse
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

```python
result = client.system.get_health()
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Service health status | application/json (HealthResponse) |
