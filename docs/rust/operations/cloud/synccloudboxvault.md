# syncCloudBoxVault

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Mount secret key names into the RAM-backed tmpfs vault (/run/boxfleet/vault) excluded from disk snapshots

Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`POST` `/v1/cloud/boxes/{boxId}/vault`](../../../http/operations/cloud/synccloudboxvault.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.SyncCloudBoxVaultAsync` | [dotnet reference](../../../dotnet/operations/cloud/synccloudboxvault.md) |
| go | `client.Cloud.SyncBoxVault` | [go reference](../../../go/operations/cloud/synccloudboxvault.md) |
| java | `client.syncCloudBoxVault` | [java reference](../../../java/operations/cloud/synccloudboxvault.md) |
| javascript | `client.cloud.syncBoxVault` | [javascript reference](../../../javascript/operations/cloud/synccloudboxvault.md) |
| kotlin | `client.syncCloudBoxVault` | [kotlin reference](../../../kotlin/operations/cloud/synccloudboxvault.md) |
| python | `client.cloud.sync_box_vault` | [python reference](../../../python/operations/cloud/synccloudboxvault.md) |
| typescript | `client.cloud.syncBoxVault` | [typescript reference](../../../typescript/operations/cloud/synccloudboxvault.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.sync_cloud_box_vault` |

## Signature

```rust
pub async fn sync_cloud_box_vault(&self, box_id: String, body: SyncCloudBoxVaultRequest, request_options: Option<RequestOptions>) -> Result<SyncCloudBoxVaultResponse, ApiError>
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | `path` | yes | `string` |  |
| `body` | body | yes | `SyncCloudBoxVaultRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

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

## SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Vault sync receipt (key names only, zero secret values echoed) | application/json (SyncCloudBoxVaultResponse) |
