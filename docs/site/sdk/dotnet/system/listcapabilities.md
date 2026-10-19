---
title: "listCapabilities · dotnet"
html: "listcapabilities.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listCapabilities

List BoxFleet capabilities and published job limits

HTTP reference: [GET /v1/capabilities](../../../http/system/listcapabilities.md)

## Package

`BoxFleetSdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.ListCapabilitiesAsync` async

## Signature

```
public async Task<CapabilitiesResponse> ListCapabilitiesAsync(
string? queryXf1e9d09a9612 = null,
ListCapabilitiesState? state = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
```

## Example

> No example is generated for this operation in this SDK.

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
| go | `client.System.ListCapabilities` | [Open](../../go/system/listcapabilities.md) |
| java | `client.listCapabilities` | [Open](../../java/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [Open](../../javascript/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [Open](../../kotlin/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [Open](../../python/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [Open](../../rust/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [Open](../../typescript/system/listcapabilities.md) |
