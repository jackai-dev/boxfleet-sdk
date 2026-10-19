# performCloudBoxAction

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`POST` `/v1/cloud/boxes/{boxId}/action`](../../../http/operations/cloud/performcloudboxaction.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Cloud.PerformBoxAction` | [go reference](../../../go/operations/cloud/performcloudboxaction.md) |
| java | `client.performCloudBoxAction` | [java reference](../../../java/operations/cloud/performcloudboxaction.md) |
| javascript | `client.cloud.performBoxAction` | [javascript reference](../../../javascript/operations/cloud/performcloudboxaction.md) |
| kotlin | `client.performCloudBoxAction` | [kotlin reference](../../../kotlin/operations/cloud/performcloudboxaction.md) |
| python | `client.cloud.perform_box_action` | [python reference](../../../python/operations/cloud/performcloudboxaction.md) |
| rust | `client.perform_cloud_box_action` | [rust reference](../../../rust/operations/cloud/performcloudboxaction.md) |
| typescript | `client.cloud.performBoxAction` | [typescript reference](../../../typescript/operations/cloud/performcloudboxaction.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.PerformCloudBoxActionAsync` |

## Signature

```csharp
public async Task<CloudBoxActionResponse> PerformCloudBoxActionAsync(
string boxId,
CloudBoxActionRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
