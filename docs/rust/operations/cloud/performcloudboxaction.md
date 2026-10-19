# performCloudBoxAction

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`POST` `/v1/cloud/boxes/{boxId}/action`](../../../http/operations/cloud/performcloudboxaction.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.PerformCloudBoxActionAsync` | [dotnet reference](../../../dotnet/operations/cloud/performcloudboxaction.md) |
| go | `client.Cloud.PerformBoxAction` | [go reference](../../../go/operations/cloud/performcloudboxaction.md) |
| java | `client.performCloudBoxAction` | [java reference](../../../java/operations/cloud/performcloudboxaction.md) |
| javascript | `client.cloud.performBoxAction` | [javascript reference](../../../javascript/operations/cloud/performcloudboxaction.md) |
| kotlin | `client.performCloudBoxAction` | [kotlin reference](../../../kotlin/operations/cloud/performcloudboxaction.md) |
| python | `client.cloud.perform_box_action` | [python reference](../../../python/operations/cloud/performcloudboxaction.md) |
| typescript | `client.cloud.performBoxAction` | [typescript reference](../../../typescript/operations/cloud/performcloudboxaction.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.perform_cloud_box_action` |

## Signature

```rust
pub async fn perform_cloud_box_action(&self, box_id: String, body: CloudBoxActionRequest, request_options: Option<RequestOptions>) -> Result<CloudBoxActionResponse, ApiError>
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
