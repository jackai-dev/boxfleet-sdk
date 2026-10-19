---
title: "syncCloudBoxVault · java"
html: "synccloudboxvault.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# syncCloudBoxVault

Mount secret key names into the RAM-backed tmpfs vault (/run/boxfleet/vault) excluded from disk snapshots

HTTP reference: [POST /v1/cloud/boxes/{boxId}/vault](../../../http/cloud/synccloudboxvault.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.syncCloudBoxVaultAsync` async
- `client.syncCloudBoxVault` sync

## Signature

```
public SyncCloudBoxVaultResponse syncCloudBoxVault(String boxId, SyncCloudBoxVaultRequest body)
public ApiResponse<SyncCloudBoxVaultResponse> syncCloudBoxVaultWithResponse(String boxId, SyncCloudBoxVaultRequest body)
public CompletableFuture<ApiResponse<SyncCloudBoxVaultResponse>> syncCloudBoxVaultWithResponseAsync(String boxId, SyncCloudBoxVaultRequest body)
public CompletableFuture<SyncCloudBoxVaultResponse> syncCloudBoxVaultAsync(String boxId, SyncCloudBoxVaultRequest body)
public SyncCloudBoxVaultResponse syncCloudBoxVault(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
public CompletableFuture<SyncCloudBoxVaultResponse> syncCloudBoxVaultAsync(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
public ApiResponse<SyncCloudBoxVaultResponse> syncCloudBoxVaultWithResponse(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<SyncCloudBoxVaultResponse>> syncCloudBoxVaultWithResponseAsync(String boxId, SyncCloudBoxVaultRequest body, RequestOptions requestOptions)
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
| `200` | Vault sync receipt (key names only, zero secret values echoed) | application/json (SyncCloudBoxVaultResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.SyncCloudBoxVaultAsync` | [Open](../../dotnet/cloud/synccloudboxvault.md) |
| go | `client.Cloud.SyncBoxVault` | [Open](../../go/cloud/synccloudboxvault.md) |
| javascript | `client.cloud.syncBoxVault` | [Open](../../javascript/cloud/synccloudboxvault.md) |
| kotlin | `client.syncCloudBoxVault` | [Open](../../kotlin/cloud/synccloudboxvault.md) |
| python | `client.cloud.sync_box_vault` | [Open](../../python/cloud/synccloudboxvault.md) |
| rust | `client.sync_cloud_box_vault` | [Open](../../rust/cloud/synccloudboxvault.md) |
| typescript | `client.cloud.syncBoxVault` | [Open](../../typescript/cloud/synccloudboxvault.md) |
