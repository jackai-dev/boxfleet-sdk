---
title: "syncCloudBoxVault"
html: "synccloudboxvault.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# syncCloudBoxVault

Mount secret key names into the RAM-backed tmpfs vault (/run/boxfleet/vault) excluded from disk snapshots

POST `/v1/cloud/boxes/{boxId}/vault`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | path | yes | `string` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `SyncCloudBoxVaultRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Vault sync receipt (key names only, zero secret values echoed) | application/json (SyncCloudBoxVaultResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {
    "keys": [
      "example"
    ]
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
| dotnet | `client.SyncCloudBoxVaultAsync` | [Open](../../sdk/dotnet/cloud/synccloudboxvault.md) |
| go | `client.Cloud.SyncBoxVault` | [Open](../../sdk/go/cloud/synccloudboxvault.md) |
| java | `client.syncCloudBoxVault` | [Open](../../sdk/java/cloud/synccloudboxvault.md) |
| javascript | `client.cloud.syncBoxVault` | [Open](../../sdk/javascript/cloud/synccloudboxvault.md) |
| kotlin | `client.syncCloudBoxVault` | [Open](../../sdk/kotlin/cloud/synccloudboxvault.md) |
| python | `client.cloud.sync_box_vault` | [Open](../../sdk/python/cloud/synccloudboxvault.md) |
| rust | `client.sync_cloud_box_vault` | [Open](../../sdk/rust/cloud/synccloudboxvault.md) |
| typescript | `client.cloud.syncBoxVault` | [Open](../../sdk/typescript/cloud/synccloudboxvault.md) |
