# createCloudBox

[All HTTP operations](../../index.md)

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

Operation identity: `createCloudBox`  
Route: `POST` `/v1/cloud/boxes`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `CreateCloudBoxRequest` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `CreateCloudBoxRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Provisioned white-label box | application/json (CloudBoxEnvelope) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "body": {},
  "content_type": "application/json",
  "parameters": []
}
```

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CreateCloudBoxAsync` | [dotnet reference](../../../dotnet/operations/cloud/createcloudbox.md) |
| go | `client.Cloud.NewBox` | [go reference](../../../go/operations/cloud/createcloudbox.md) |
| java | `client.createCloudBox` | [java reference](../../../java/operations/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [javascript reference](../../../javascript/operations/cloud/createcloudbox.md) |
| kotlin | `client.createCloudBox` | [kotlin reference](../../../kotlin/operations/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [python reference](../../../python/operations/cloud/createcloudbox.md) |
| rust | `client.create_cloud_box` | [rust reference](../../../rust/operations/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [typescript reference](../../../typescript/operations/cloud/createcloudbox.md) |
