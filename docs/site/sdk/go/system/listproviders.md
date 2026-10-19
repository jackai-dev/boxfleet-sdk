---
title: "listProviders · go"
html: "listproviders.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listProviders

List configured local Firecracker and cloud/GPU sandbox providers and templates

HTTP reference: [GET /v1/providers](../../../http/system/listproviders.md)

## Package

`boxfleet` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.System.ListProviders` resource

## Signature

```
func (service *SystemService) ListProviders(ctx context.Context, params SystemListProvidersParams, opts ...option.RequestOption) (*Response[*ProvidersResponse], error)
```

## Example

> No example is generated for this operation in this SDK.

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
| java | `client.listProviders` | [Open](../../java/system/listproviders.md) |
| javascript | `client.system.listProviders` | [Open](../../javascript/system/listproviders.md) |
| kotlin | `client.listProviders` | [Open](../../kotlin/system/listproviders.md) |
| python | `client.system.list_providers` | [Open](../../python/system/listproviders.md) |
| rust | `client.list_providers` | [Open](../../rust/system/listproviders.md) |
| typescript | `client.system.listProviders` | [Open](../../typescript/system/listproviders.md) |
