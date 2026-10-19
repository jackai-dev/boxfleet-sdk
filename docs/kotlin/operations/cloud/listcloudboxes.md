# listCloudBoxes

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

Route: `GET` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`GET` `/v1/cloud/boxes`](../../../http/operations/cloud/listcloudboxes.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCloudBoxesAsync` | [dotnet reference](../../../dotnet/operations/cloud/listcloudboxes.md) |
| go | `client.Cloud.ListBoxes` | [go reference](../../../go/operations/cloud/listcloudboxes.md) |
| java | `client.listCloudBoxes` | [java reference](../../../java/operations/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [javascript reference](../../../javascript/operations/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [python reference](../../../python/operations/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [rust reference](../../../rust/operations/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [typescript reference](../../../typescript/operations/cloud/listcloudboxes.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.listCloudBoxes` |

## Signature

```kotlin
suspend fun listCloudBoxes(params: ListCloudBoxesParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<CloudBoxListResponse>
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
| `200` | White-label cloud boxes | application/json (CloudBoxListResponse) |
