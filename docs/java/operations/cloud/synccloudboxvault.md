# syncCloudBoxVault

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Mount secret key names into the RAM-backed tmpfs vault (/run/boxfleet/vault) excluded from disk snapshots

Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/cloud/boxes/{boxId}/vault`](../../../http/operations/cloud/synccloudboxvault.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.SyncCloudBoxVaultAsync` | [dotnet reference](../../../dotnet/operations/cloud/synccloudboxvault.md) |
| go | `client.Cloud.SyncBoxVault` | [go reference](../../../go/operations/cloud/synccloudboxvault.md) |
| javascript | `client.cloud.syncBoxVault` | [javascript reference](../../../javascript/operations/cloud/synccloudboxvault.md) |
| kotlin | `client.syncCloudBoxVault` | [kotlin reference](../../../kotlin/operations/cloud/synccloudboxvault.md) |
| python | `client.cloud.sync_box_vault` | [python reference](../../../python/operations/cloud/synccloudboxvault.md) |
| rust | `client.sync_cloud_box_vault` | [rust reference](../../../rust/operations/cloud/synccloudboxvault.md) |
| typescript | `client.cloud.syncBoxVault` | [typescript reference](../../../typescript/operations/cloud/synccloudboxvault.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.syncCloudBoxVault` |
| async | `client.syncCloudBoxVaultAsync` |

## Signature

```java
public SyncCloudBoxVaultResponse syncCloudBoxVault(String boxId, SyncCloudBoxVaultRequest body)
public ApiResponse<SyncCloudBoxVaultResponse> syncCloudBoxVaultWithResponse(String boxId, SyncCloudBoxVaultRequest body)
public CompletableFuture<ApiResponse<SyncCloudBoxVaultResponse>> syncCloudBoxVaultWithResponseAsync(String boxId, SyncCloudBoxVaultRequest body)
public CompletableFuture<SyncCloudBoxVaultResponse> syncCloudBoxVaultAsync(String boxId, SyncCloudBoxVaultRequest body)
public SyncCloudBoxVaultResponse syncCloudBoxVault(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
public CompletableFuture<SyncCloudBoxVaultResponse> syncCloudBoxVaultAsync(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
public ApiResponse<SyncCloudBoxVaultResponse> syncCloudBoxVaultWithResponse(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<SyncCloudBoxVaultResponse>> syncCloudBoxVaultWithResponseAsync(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
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
