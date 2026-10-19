# listCloudBoxes

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

Route: `GET` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`GET` `/v1/cloud/boxes`](../../../http/operations/cloud/listcloudboxes.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Cloud.ListBoxes` | [go reference](../../../go/operations/cloud/listcloudboxes.md) |
| java | `client.listCloudBoxes` | [java reference](../../../java/operations/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [javascript reference](../../../javascript/operations/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [kotlin reference](../../../kotlin/operations/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [python reference](../../../python/operations/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [rust reference](../../../rust/operations/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [typescript reference](../../../typescript/operations/cloud/listcloudboxes.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.ListCloudBoxesAsync` |

## Signature

```csharp
public async Task<CloudBoxListResponse> ListCloudBoxesAsync(
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
