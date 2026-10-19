# performCloudBoxAction

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/cloud/boxes/{boxId}/action`](../../../http/operations/cloud/performcloudboxaction.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.PerformCloudBoxActionAsync` | [dotnet reference](../../../dotnet/operations/cloud/performcloudboxaction.md) |
| go | `client.Cloud.PerformBoxAction` | [go reference](../../../go/operations/cloud/performcloudboxaction.md) |
| javascript | `client.cloud.performBoxAction` | [javascript reference](../../../javascript/operations/cloud/performcloudboxaction.md) |
| kotlin | `client.performCloudBoxAction` | [kotlin reference](../../../kotlin/operations/cloud/performcloudboxaction.md) |
| python | `client.cloud.perform_box_action` | [python reference](../../../python/operations/cloud/performcloudboxaction.md) |
| rust | `client.perform_cloud_box_action` | [rust reference](../../../rust/operations/cloud/performcloudboxaction.md) |
| typescript | `client.cloud.performBoxAction` | [typescript reference](../../../typescript/operations/cloud/performcloudboxaction.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.performCloudBoxAction` |
| async | `client.performCloudBoxActionAsync` |

## Signature

```java
public CloudBoxActionResponse performCloudBoxAction(String boxId, CloudBoxActionRequest body)
public ApiResponse<CloudBoxActionResponse> performCloudBoxActionWithResponse(String boxId, CloudBoxActionRequest body)
public CompletableFuture<ApiResponse<CloudBoxActionResponse>> performCloudBoxActionWithResponseAsync(String boxId, CloudBoxActionRequest body)
public CompletableFuture<CloudBoxActionResponse> performCloudBoxActionAsync(String boxId, CloudBoxActionRequest body)
public CloudBoxActionResponse performCloudBoxAction(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
public CompletableFuture<CloudBoxActionResponse> performCloudBoxActionAsync(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
public ApiResponse<CloudBoxActionResponse> performCloudBoxActionWithResponse(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CloudBoxActionResponse>> performCloudBoxActionWithResponseAsync(String boxId, CloudBoxActionRequest body, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | `path` | yes | `string` |  |
| `body` | body | yes | `CloudBoxActionRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {
    "action": "suspend"
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
| `200` | Cloud box action result | application/json (CloudBoxActionResponse) |
