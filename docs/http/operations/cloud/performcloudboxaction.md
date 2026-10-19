# performCloudBoxAction

[All HTTP operations](../../index.md)

Suspend, resume, wake, publish a port preview URL, stream X11 desktop, snapshot, or terminate a cloud box

Operation identity: `performCloudBoxAction`  
Route: `POST` `/v1/cloud/boxes/{boxId}/action`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `boxId` | `path` | yes | `string` |  |
| `body` | body | yes | `CloudBoxActionRequest` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `CloudBoxActionRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cloud box action result | application/json (CloudBoxActionResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

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

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.PerformCloudBoxActionAsync` | [dotnet reference](../../../dotnet/operations/cloud/performcloudboxaction.md) |
| go | `client.Cloud.PerformBoxAction` | [go reference](../../../go/operations/cloud/performcloudboxaction.md) |
| java | `client.performCloudBoxAction` | [java reference](../../../java/operations/cloud/performcloudboxaction.md) |
| javascript | `client.cloud.performBoxAction` | [javascript reference](../../../javascript/operations/cloud/performcloudboxaction.md) |
| kotlin | `client.performCloudBoxAction` | [kotlin reference](../../../kotlin/operations/cloud/performcloudboxaction.md) |
| python | `client.cloud.perform_box_action` | [python reference](../../../python/operations/cloud/performcloudboxaction.md) |
| rust | `client.perform_cloud_box_action` | [rust reference](../../../rust/operations/cloud/performcloudboxaction.md) |
| typescript | `client.cloud.performBoxAction` | [typescript reference](../../../typescript/operations/cloud/performcloudboxaction.md) |
