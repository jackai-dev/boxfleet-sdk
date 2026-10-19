# listProviders

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List configured local Firecracker and cloud/GPU sandbox providers and templates

Route: `GET` `/v1/providers`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/providers`](../../../http/operations/system/listproviders.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListProvidersAsync` | [dotnet reference](../../../dotnet/operations/system/listproviders.md) |
| go | `client.System.ListProviders` | [go reference](../../../go/operations/system/listproviders.md) |
| java | `client.listProviders` | [java reference](../../../java/operations/system/listproviders.md) |
| javascript | `client.system.listProviders` | [javascript reference](../../../javascript/operations/system/listproviders.md) |
| kotlin | `client.listProviders` | [kotlin reference](../../../kotlin/operations/system/listproviders.md) |
| rust | `client.list_providers` | [rust reference](../../../rust/operations/system/listproviders.md) |
| typescript | `client.system.listProviders` | [typescript reference](../../../typescript/operations/system/listproviders.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.list_providers` |
| raw | `client.with_raw_response.list_providers` |
| resource | `client.system.list_providers` |

## Signature

```python
client.system.list_providers(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ProvidersResponse
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
result = client.system.list_providers()
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |
