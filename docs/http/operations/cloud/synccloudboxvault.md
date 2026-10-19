# syncCloudBoxVault

[All HTTP operations](../../index.md)

Mount secret key names into the RAM-backed tmpfs vault (/run/boxfleet/vault) excluded from disk snapshots

Operation identity: `syncCloudBoxVault`  
Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | `path` | yes | `string` |  |
| `body` | body | yes | `SyncCloudBoxVaultRequest` |  |

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

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
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

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.SyncCloudBoxVaultAsync` | [dotnet reference](../../../dotnet/operations/cloud/synccloudboxvault.md) |
| go | `client.Cloud.SyncBoxVault` | [go reference](../../../go/operations/cloud/synccloudboxvault.md) |
| java | `client.syncCloudBoxVault` | [java reference](../../../java/operations/cloud/synccloudboxvault.md) |
| javascript | `client.cloud.syncBoxVault` | [javascript reference](../../../javascript/operations/cloud/synccloudboxvault.md) |
| kotlin | `client.syncCloudBoxVault` | [kotlin reference](../../../kotlin/operations/cloud/synccloudboxvault.md) |
| python | `client.cloud.sync_box_vault` | [python reference](../../../python/operations/cloud/synccloudboxvault.md) |
| rust | `client.sync_cloud_box_vault` | [rust reference](../../../rust/operations/cloud/synccloudboxvault.md) |
| typescript | `client.cloud.syncBoxVault` | [typescript reference](../../../typescript/operations/cloud/synccloudboxvault.md) |
