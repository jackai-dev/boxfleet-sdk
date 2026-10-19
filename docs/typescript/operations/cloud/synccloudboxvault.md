# syncCloudBoxVault

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Mount secret key names into the RAM-backed tmpfs vault (/run/boxfleet/vault) excluded from disk snapshots

Route: `POST` `/v1/cloud/boxes/{boxId}/vault`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

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
| rust | `client.sync_cloud_box_vault` | [rust reference](../../../rust/operations/cloud/synccloudboxvault.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.syncCloudBoxVault` |
| resource | `client.cloud.syncBoxVault` |

## Signature

```typescript
client.cloud.syncBoxVault<Raw extends boolean = false>(boxId: string, body: SyncCloudBoxVaultRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<SyncCloudBoxVaultResponse> : WithRequestId<SyncCloudBoxVaultResponse>>;
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.cloud.syncBoxVault("example", {"keys": ["example"]}, { contentType: "application/json" });
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Vault sync receipt (key names only, zero secret values echoed) | application/json (SyncCloudBoxVaultResponse) |
