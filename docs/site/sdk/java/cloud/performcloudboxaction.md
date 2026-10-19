---
title: "performCloudBoxAction · java"
html: "performcloudboxaction.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# performCloudBoxAction

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

HTTP reference: [POST /v1/cloud/boxes/{boxId}/action](../../../http/cloud/performcloudboxaction.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.performCloudBoxActionAsync` async
- `client.performCloudBoxAction` sync

## Signature

```
public CloudBoxActionResponse performCloudBoxAction(String boxId, CloudBoxActionRequest body)
public ApiResponse<CloudBoxActionResponse> performCloudBoxActionWithResponse(String boxId, CloudBoxActionRequest body)
public CompletableFuture<ApiResponse<CloudBoxActionResponse>> performCloudBoxActionWithResponseAsync(String boxId, CloudBoxActionRequest body)
public CompletableFuture<CloudBoxActionResponse> performCloudBoxActionAsync(String boxId, CloudBoxActionRequest body)
public CloudBoxActionResponse performCloudBoxAction(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
public CompletableFuture<CloudBoxActionResponse> performCloudBoxActionAsync(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
public ApiResponse<CloudBoxActionResponse> performCloudBoxActionWithResponse(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CloudBoxActionResponse>> performCloudBoxActionWithResponseAsync(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cloud box action result | application/json (CloudBoxActionResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.PerformCloudBoxActionAsync` | [Open](../../dotnet/cloud/performcloudboxaction.md) |
| go | `client.Cloud.PerformBoxAction` | [Open](../../go/cloud/performcloudboxaction.md) |
| javascript | `client.cloud.performBoxAction` | [Open](../../javascript/cloud/performcloudboxaction.md) |
| kotlin | `client.performCloudBoxAction` | [Open](../../kotlin/cloud/performcloudboxaction.md) |
| python | `client.cloud.perform_box_action` | [Open](../../python/cloud/performcloudboxaction.md) |
| rust | `client.perform_cloud_box_action` | [Open](../../rust/cloud/performcloudboxaction.md) |
| typescript | `client.cloud.performBoxAction` | [Open](../../typescript/cloud/performcloudboxaction.md) |
