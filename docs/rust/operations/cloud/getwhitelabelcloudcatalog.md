# getWhiteLabelCloudCatalog

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve BoxFleet White-Label Cloud templates and zero-idle-cost wholesale backends

Route: `GET` `/v1/cloud/catalog`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`GET` `/v1/cloud/catalog`](../../../http/operations/cloud/getwhitelabelcloudcatalog.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetWhiteLabelCloudCatalogAsync` | [dotnet reference](../../../dotnet/operations/cloud/getwhitelabelcloudcatalog.md) |
| go | `client.Cloud.GetWhiteLabelCatalog` | [go reference](../../../go/operations/cloud/getwhitelabelcloudcatalog.md) |
| java | `client.getWhiteLabelCloudCatalog` | [java reference](../../../java/operations/cloud/getwhitelabelcloudcatalog.md) |
| javascript | `client.cloud.getWhiteLabelCatalog` | [javascript reference](../../../javascript/operations/cloud/getwhitelabelcloudcatalog.md) |
| kotlin | `client.getWhiteLabelCloudCatalog` | [kotlin reference](../../../kotlin/operations/cloud/getwhitelabelcloudcatalog.md) |
| python | `client.cloud.get_white_label_catalog` | [python reference](../../../python/operations/cloud/getwhitelabelcloudcatalog.md) |
| typescript | `client.cloud.getWhiteLabelCatalog` | [typescript reference](../../../typescript/operations/cloud/getwhitelabelcloudcatalog.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.get_white_label_cloud_catalog` |

## Signature

```rust
pub async fn get_white_label_cloud_catalog(&self, request_options: Option<RequestOptions>) -> Result<WhiteLabelCloudCatalog, ApiError>
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

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-Label Cloud catalog | application/json (WhiteLabelCloudCatalog) |
