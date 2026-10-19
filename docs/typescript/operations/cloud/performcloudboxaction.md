# performCloudBoxAction

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

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
| rust | `client.perform_cloud_box_action` | [rust reference](../../../rust/operations/cloud/performcloudboxaction.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.performCloudBoxAction` |
| resource | `client.cloud.performBoxAction` |

## Signature

```typescript
client.cloud.performBoxAction<Raw extends boolean = false>(boxId: string, body: CloudBoxActionRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<CloudBoxActionResponse> : WithRequestId<CloudBoxActionResponse>>;
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.cloud.performBoxAction("example", {"action": "suspend"}, { contentType: "application/json" });
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cloud box action result | application/json (CloudBoxActionResponse) |
