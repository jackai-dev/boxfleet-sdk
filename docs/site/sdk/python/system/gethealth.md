---
title: "getHealth · python"
html: "gethealth.html"
language: "python"
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

- `client.get_health` flat
- `client.with_raw_response.get_health` raw
- `client.system.get_health` resource

## Signature

```
client.system.get_health(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> HealthResponse
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.system.get_health()
```

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
| java | `client.getHealth` | [Open](../../java/system/gethealth.md) |
| javascript | `client.system.getHealth` | [Open](../../javascript/system/gethealth.md) |
| kotlin | `client.getHealth` | [Open](../../kotlin/system/gethealth.md) |
| rust | `client.get_health` | [Open](../../rust/system/gethealth.md) |
| typescript | `client.system.getHealth` | [Open](../../typescript/system/gethealth.md) |
