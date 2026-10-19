# createCloudBox

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

Route: `POST` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/cloud/boxes`](../../../http/operations/cloud/createcloudbox.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CreateCloudBoxAsync` | [dotnet reference](../../../dotnet/operations/cloud/createcloudbox.md) |
| go | `client.Cloud.NewBox` | [go reference](../../../go/operations/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [javascript reference](../../../javascript/operations/cloud/createcloudbox.md) |
| kotlin | `client.createCloudBox` | [kotlin reference](../../../kotlin/operations/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [python reference](../../../python/operations/cloud/createcloudbox.md) |
| rust | `client.create_cloud_box` | [rust reference](../../../rust/operations/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [typescript reference](../../../typescript/operations/cloud/createcloudbox.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.createCloudBox` |
| async | `client.createCloudBoxAsync` |

## Signature

```java
public CloudBoxEnvelope createCloudBox(CreateCloudBoxRequest body)
public ApiResponse<CloudBoxEnvelope> createCloudBoxWithResponse(CreateCloudBoxRequest body)
public CompletableFuture<ApiResponse<CloudBoxEnvelope>> createCloudBoxWithResponseAsync(CreateCloudBoxRequest body)
public CompletableFuture<CloudBoxEnvelope> createCloudBoxAsync(CreateCloudBoxRequest body)
public CloudBoxEnvelope createCloudBox(CreateCloudBoxRequest body, RequestOptions requestOptions)
public CompletableFuture<CloudBoxEnvelope> createCloudBoxAsync(CreateCloudBoxRequest body, RequestOptions requestOptions)
public ApiResponse<CloudBoxEnvelope> createCloudBoxWithResponse(CreateCloudBoxRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<CloudBoxEnvelope>> createCloudBoxWithResponseAsync(CreateCloudBoxRequest body, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `CreateCloudBoxRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {},
  "content_type": "application/json",
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
| `201` | Provisioned white-label box | application/json (CloudBoxEnvelope) |
