---
title: "listCapabilities · python"
html: "listcapabilities.html"
language: "python"
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

- `client.list_capabilities` flat
- `client.with_raw_response.list_capabilities` raw
- `client.system.list_capabilities` resource

## Signature

```
client.system.list_capabilities(query_2: Optional[str] = None, state: Optional[Literal['implemented', 'conditional', 'planned']] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CapabilitiesResponse
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.system.list_capabilities()
```

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
| java | `client.listCapabilities` | [Open](../../java/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [Open](../../javascript/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [Open](../../kotlin/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [Open](../../rust/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [Open](../../typescript/system/listcapabilities.md) |
