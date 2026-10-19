# listCapabilities

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List BoxFleet capabilities and published job limits

Route: `GET` `/v1/capabilities`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/capabilities`](../../../http/operations/system/listcapabilities.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCapabilitiesAsync` | [dotnet reference](../../../dotnet/operations/system/listcapabilities.md) |
| go | `client.System.ListCapabilities` | [go reference](../../../go/operations/system/listcapabilities.md) |
| java | `client.listCapabilities` | [java reference](../../../java/operations/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [javascript reference](../../../javascript/operations/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [kotlin reference](../../../kotlin/operations/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [rust reference](../../../rust/operations/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [typescript reference](../../../typescript/operations/system/listcapabilities.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.list_capabilities` |
| raw | `client.with_raw_response.list_capabilities` |
| resource | `client.system.list_capabilities` |

## Signature

```python
client.system.list_capabilities(query_2: Optional[str] = None, state: Optional[Literal['implemented', 'conditional', 'planned']] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CapabilitiesResponse
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.system.list_capabilities()
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |
