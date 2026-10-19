# listCloudBoxes

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

Route: `GET` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/v1/cloud/boxes`](../../../http/operations/cloud/listcloudboxes.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCloudBoxesAsync` | [dotnet reference](../../../dotnet/operations/cloud/listcloudboxes.md) |
| go | `client.Cloud.ListBoxes` | [go reference](../../../go/operations/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [javascript reference](../../../javascript/operations/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [kotlin reference](../../../kotlin/operations/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [python reference](../../../python/operations/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [rust reference](../../../rust/operations/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [typescript reference](../../../typescript/operations/cloud/listcloudboxes.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.listCloudBoxes` |
| async | `client.listCloudBoxesAsync` |

## Signature

```java
public CloudBoxListResponse listCloudBoxes()
public ApiResponse<CloudBoxListResponse> listCloudBoxesWithResponse()
public CompletableFuture<ApiResponse<CloudBoxListResponse>> listCloudBoxesWithResponseAsync()
public CompletableFuture<CloudBoxListResponse> listCloudBoxesAsync()
public CloudBoxListResponse listCloudBoxes(RequestOptions requestOptions)
public CompletableFuture<CloudBoxListResponse> listCloudBoxesAsync(RequestOptions requestOptions)
public ApiResponse<CloudBoxListResponse> listCloudBoxesWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CloudBoxListResponse>> listCloudBoxesWithResponseAsync(RequestOptions requestOptions)
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
