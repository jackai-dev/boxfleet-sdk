---
title: "listCloudBoxes · dotnet"
html: "listcloudboxes.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listCloudBoxes

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

HTTP reference: [GET /v1/cloud/boxes](../../../http/cloud/listcloudboxes.md)

## Package

`BoxFleetSdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.ListCloudBoxesAsync` async

## Signature

```
public async Task<CloudBoxListResponse> ListCloudBoxesAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
| go | `client.Cloud.ListBoxes` | [Open](../../go/cloud/listcloudboxes.md) |
| java | `client.listCloudBoxes` | [Open](../../java/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [Open](../../javascript/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [Open](../../kotlin/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [Open](../../python/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [Open](../../rust/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [Open](../../typescript/cloud/listcloudboxes.md) |
