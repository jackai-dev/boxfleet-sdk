---
title: "performCloudBoxAction"
html: "performcloudboxaction.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# performCloudBoxAction

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

POST `/v1/cloud/boxes/{boxId}/action`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | path | yes | `string` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `CloudBoxActionRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cloud box action result | application/json (CloudBoxActionResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {
    "action": "suspend"
  },
  "content_type": "application/json",
  "parameters": [
    {
      "in": "path",
      "name": "boxId",
      "value": "example"
    }
  ]
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.PerformCloudBoxActionAsync` | [Open](../../sdk/dotnet/cloud/performcloudboxaction.md) |
| go | `client.Cloud.PerformBoxAction` | [Open](../../sdk/go/cloud/performcloudboxaction.md) |
| java | `client.performCloudBoxAction` | [Open](../../sdk/java/cloud/performcloudboxaction.md) |
| javascript | `client.cloud.performBoxAction` | [Open](../../sdk/javascript/cloud/performcloudboxaction.md) |
| kotlin | `client.performCloudBoxAction` | [Open](../../sdk/kotlin/cloud/performcloudboxaction.md) |
| python | `client.cloud.perform_box_action` | [Open](../../sdk/python/cloud/performcloudboxaction.md) |
| rust | `client.perform_cloud_box_action` | [Open](../../sdk/rust/cloud/performcloudboxaction.md) |
| typescript | `client.cloud.performBoxAction` | [Open](../../sdk/typescript/cloud/performcloudboxaction.md) |
