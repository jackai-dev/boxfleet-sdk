# getWhiteLabelCloudCatalog

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve BoxFleet White-Label Cloud templates and zero-idle-cost wholesale backends

Route: `GET` `/v1/cloud/catalog`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`GET` `/v1/cloud/catalog`](../../../http/operations/cloud/getwhitelabelcloudcatalog.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetWhiteLabelCloudCatalogAsync` | [dotnet reference](../../../dotnet/operations/cloud/getwhitelabelcloudcatalog.md) |
| go | `client.Cloud.GetWhiteLabelCatalog` | [go reference](../../../go/operations/cloud/getwhitelabelcloudcatalog.md) |
| java | `client.getWhiteLabelCloudCatalog` | [java reference](../../../java/operations/cloud/getwhitelabelcloudcatalog.md) |
| javascript | `client.cloud.getWhiteLabelCatalog` | [javascript reference](../../../javascript/operations/cloud/getwhitelabelcloudcatalog.md) |
| python | `client.cloud.get_white_label_catalog` | [python reference](../../../python/operations/cloud/getwhitelabelcloudcatalog.md) |
| rust | `client.get_white_label_cloud_catalog` | [rust reference](../../../rust/operations/cloud/getwhitelabelcloudcatalog.md) |
| typescript | `client.cloud.getWhiteLabelCatalog` | [typescript reference](../../../typescript/operations/cloud/getwhitelabelcloudcatalog.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.getWhiteLabelCloudCatalog` |

## Signature

```kotlin
suspend fun getWhiteLabelCloudCatalog(params: GetWhiteLabelCloudCatalogParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<WhiteLabelCloudCatalog>
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
