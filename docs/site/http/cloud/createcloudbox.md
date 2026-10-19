---
title: "createCloudBox"
html: "createcloudbox.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# createCloudBox

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

POST `/v1/cloud/boxes`

## Parameters

> This operation takes no parameters.

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `CreateCloudBoxRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Provisioned white-label box | application/json (CloudBoxEnvelope) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {},
  "content_type": "application/json",
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CreateCloudBoxAsync` | [Open](../../sdk/dotnet/cloud/createcloudbox.md) |
| go | `client.Cloud.NewBox` | [Open](../../sdk/go/cloud/createcloudbox.md) |
| java | `client.createCloudBox` | [Open](../../sdk/java/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [Open](../../sdk/javascript/cloud/createcloudbox.md) |
| kotlin | `client.createCloudBox` | [Open](../../sdk/kotlin/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [Open](../../sdk/python/cloud/createcloudbox.md) |
| rust | `client.create_cloud_box` | [Open](../../sdk/rust/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [Open](../../sdk/typescript/cloud/createcloudbox.md) |
