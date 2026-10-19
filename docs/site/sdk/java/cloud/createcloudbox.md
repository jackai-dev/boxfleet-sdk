---
title: "createCloudBox · java"
html: "createcloudbox.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# createCloudBox

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

HTTP reference: [POST /v1/cloud/boxes](../../../http/cloud/createcloudbox.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.createCloudBoxAsync` async
- `client.createCloudBox` sync

## Signature

```
public CloudBoxEnvelope createCloudBox(CreateCloudBoxRequest body)
public ApiResponse<CloudBoxEnvelope> createCloudBoxWithResponse(CreateCloudBoxRequest body)
public CompletableFuture<ApiResponse<CloudBoxEnvelope>> createCloudBoxWithResponseAsync(CreateCloudBoxRequest body)
public CompletableFuture<CloudBoxEnvelope> createCloudBoxAsync(CreateCloudBoxRequest body)
public CloudBoxEnvelope createCloudBox(CreateCloudBoxRequest body, RequestOptions requestOptions)
public CompletableFuture<CloudBoxEnvelope> createCloudBoxAsync(CreateCloudBoxRequest body, RequestOptions requestOptions)
public ApiResponse<CloudBoxEnvelope> createCloudBoxWithResponse(CreateCloudBoxRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CloudBoxEnvelope>> createCloudBoxWithResponseAsync(CreateCloudBoxRequest body, RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `201` | Provisioned white-label box | application/json (CloudBoxEnvelope) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CreateCloudBoxAsync` | [Open](../../dotnet/cloud/createcloudbox.md) |
| go | `client.Cloud.NewBox` | [Open](../../go/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [Open](../../javascript/cloud/createcloudbox.md) |
| kotlin | `client.createCloudBox` | [Open](../../kotlin/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [Open](../../python/cloud/createcloudbox.md) |
| rust | `client.create_cloud_box` | [Open](../../rust/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [Open](../../typescript/cloud/createcloudbox.md) |
