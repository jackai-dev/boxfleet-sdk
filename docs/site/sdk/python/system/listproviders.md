---
title: "listProviders · python"
html: "listproviders.html"
language: "python"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listProviders

List configured local Firecracker and cloud/GPU sandbox providers and templates

HTTP reference: [GET /v1/providers](../../../http/system/listproviders.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.list_providers` flat
- `client.with_raw_response.list_providers` raw
- `client.system.list_providers` resource

## Signature

```
client.system.list_providers(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ProvidersResponse
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.system.list_providers()
```

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListProvidersAsync` | [Open](../../dotnet/system/listproviders.md) |
| go | `client.System.ListProviders` | [Open](../../go/system/listproviders.md) |
| java | `client.listProviders` | [Open](../../java/system/listproviders.md) |
| javascript | `client.system.listProviders` | [Open](../../javascript/system/listproviders.md) |
| kotlin | `client.listProviders` | [Open](../../kotlin/system/listproviders.md) |
| rust | `client.list_providers` | [Open](../../rust/system/listproviders.md) |
| typescript | `client.system.listProviders` | [Open](../../typescript/system/listproviders.md) |
