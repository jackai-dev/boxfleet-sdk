# getWhiteLabelCloudCatalog

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve BoxFleet White-Label Cloud templates and zero-idle-cost wholesale backends

Route: `GET` `/v1/cloud/catalog`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`GET` `/v1/cloud/catalog`](../../../http/operations/cloud/getwhitelabelcloudcatalog.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetWhiteLabelCloudCatalogAsync` | [dotnet reference](../../../dotnet/operations/cloud/getwhitelabelcloudcatalog.md) |
| go | `client.Cloud.GetWhiteLabelCatalog` | [go reference](../../../go/operations/cloud/getwhitelabelcloudcatalog.md) |
| java | `client.getWhiteLabelCloudCatalog` | [java reference](../../../java/operations/cloud/getwhitelabelcloudcatalog.md) |
| kotlin | `client.getWhiteLabelCloudCatalog` | [kotlin reference](../../../kotlin/operations/cloud/getwhitelabelcloudcatalog.md) |
| python | `client.cloud.get_white_label_catalog` | [python reference](../../../python/operations/cloud/getwhitelabelcloudcatalog.md) |
| rust | `client.get_white_label_cloud_catalog` | [rust reference](../../../rust/operations/cloud/getwhitelabelcloudcatalog.md) |
| typescript | `client.cloud.getWhiteLabelCatalog` | [typescript reference](../../../typescript/operations/cloud/getwhitelabelcloudcatalog.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.getWhiteLabelCloudCatalog` |
| resource | `client.cloud.getWhiteLabelCatalog` |

## Signature

```javascript
client.cloud.getWhiteLabelCatalog(requestOptions?)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": []
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```javascript
const result = await client.cloud.getWhiteLabelCatalog();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-Label Cloud catalog | application/json (WhiteLabelCloudCatalog) |
