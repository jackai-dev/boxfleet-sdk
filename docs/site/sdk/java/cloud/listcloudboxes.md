---
title: "listCloudBoxes · java"
html: "listcloudboxes.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listCloudBoxes

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

HTTP reference: [GET /v1/cloud/boxes](../../../http/cloud/listcloudboxes.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.listCloudBoxesAsync` async
- `client.listCloudBoxes` sync

## Signature

```
public CloudBoxListResponse listCloudBoxes()
public ApiResponse<CloudBoxListResponse> listCloudBoxesWithResponse()
public CompletableFuture<ApiResponse<CloudBoxListResponse>> listCloudBoxesWithResponseAsync()
public CompletableFuture<CloudBoxListResponse> listCloudBoxesAsync()
public CloudBoxListResponse listCloudBoxes(RequestOptions requestOptions)
public CompletableFuture<CloudBoxListResponse> listCloudBoxesAsync(RequestOptions requestOptions)
public ApiResponse<CloudBoxListResponse> listCloudBoxesWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CloudBoxListResponse>> listCloudBoxesWithResponseAsync(RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-label cloud boxes | application/json (CloudBoxListResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCloudBoxesAsync` | [Open](../../dotnet/cloud/listcloudboxes.md) |
| go | `client.Cloud.ListBoxes` | [Open](../../go/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [Open](../../javascript/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [Open](../../kotlin/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [Open](../../python/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [Open](../../rust/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [Open](../../typescript/cloud/listcloudboxes.md) |
