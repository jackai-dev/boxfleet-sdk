---
title: "getWhiteLabelCloudCatalog · kotlin"
html: "getwhitelabelcloudcatalog.html"
language: "kotlin"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getWhiteLabelCloudCatalog

Retrieve BoxFleet White-Label Cloud templates and zero-idle-cost wholesale backends

HTTP reference: [GET /v1/cloud/catalog](../../../http/cloud/getwhitelabelcloudcatalog.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.getWhiteLabelCloudCatalog` async

## Signature

```
suspend fun getWhiteLabelCloudCatalog(params: GetWhiteLabelCloudCatalogParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<WhiteLabelCloudCatalog>
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-Label Cloud catalog | application/json (WhiteLabelCloudCatalog) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetWhiteLabelCloudCatalogAsync` | [Open](../../dotnet/cloud/getwhitelabelcloudcatalog.md) |
| go | `client.Cloud.GetWhiteLabelCatalog` | [Open](../../go/cloud/getwhitelabelcloudcatalog.md) |
| java | `client.getWhiteLabelCloudCatalog` | [Open](../../java/cloud/getwhitelabelcloudcatalog.md) |
| javascript | `client.cloud.getWhiteLabelCatalog` | [Open](../../javascript/cloud/getwhitelabelcloudcatalog.md) |
| python | `client.cloud.get_white_label_catalog` | [Open](../../python/cloud/getwhitelabelcloudcatalog.md) |
| rust | `client.get_white_label_cloud_catalog` | [Open](../../rust/cloud/getwhitelabelcloudcatalog.md) |
| typescript | `client.cloud.getWhiteLabelCatalog` | [Open](../../typescript/cloud/getwhitelabelcloudcatalog.md) |
