---
title: "createCloudBox · go"
html: "createcloudbox.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# createCloudBox

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

HTTP reference: [POST /v1/cloud/boxes](../../../http/cloud/createcloudbox.md)

## Package

`boxfleet` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.Cloud.NewBox` resource

## Signature

```
func (service *CloudService) NewBox(ctx context.Context, params CloudNewBoxParams, opts ...option.RequestOption) (*Response[*CloudBoxEnvelope], error)
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
| java | `client.createCloudBox` | [Open](../../java/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [Open](../../javascript/cloud/createcloudbox.md) |
| kotlin | `client.createCloudBox` | [Open](../../kotlin/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [Open](../../python/cloud/createcloudbox.md) |
| rust | `client.create_cloud_box` | [Open](../../rust/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [Open](../../typescript/cloud/createcloudbox.md) |
