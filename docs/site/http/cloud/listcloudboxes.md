---
title: "listCloudBoxes"
html: "listcloudboxes.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listCloudBoxes

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

GET `/v1/cloud/boxes`

## Parameters

> This operation takes no parameters.

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-label cloud boxes | application/json (CloudBoxListResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCloudBoxesAsync` | [Open](../../sdk/dotnet/cloud/listcloudboxes.md) |
| go | `client.Cloud.ListBoxes` | [Open](../../sdk/go/cloud/listcloudboxes.md) |
| java | `client.listCloudBoxes` | [Open](../../sdk/java/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [Open](../../sdk/javascript/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [Open](../../sdk/kotlin/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [Open](../../sdk/python/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [Open](../../sdk/rust/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [Open](../../sdk/typescript/cloud/listcloudboxes.md) |
