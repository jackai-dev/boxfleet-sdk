# createCloudBox

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

Route: `POST` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`POST` `/v1/cloud/boxes`](../../../http/operations/cloud/createcloudbox.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CreateCloudBoxAsync` | [dotnet reference](../../../dotnet/operations/cloud/createcloudbox.md) |
| go | `client.Cloud.NewBox` | [go reference](../../../go/operations/cloud/createcloudbox.md) |
| java | `client.createCloudBox` | [java reference](../../../java/operations/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [javascript reference](../../../javascript/operations/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [python reference](../../../python/operations/cloud/createcloudbox.md) |
| rust | `client.create_cloud_box` | [rust reference](../../../rust/operations/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [typescript reference](../../../typescript/operations/cloud/createcloudbox.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.createCloudBox` |

## Signature

```kotlin
suspend fun createCloudBox(params: CreateCloudBoxParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<CloudBoxEnvelope>
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
