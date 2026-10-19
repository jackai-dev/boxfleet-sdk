# createCloudBox

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

Route: `POST` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`POST` `/v1/cloud/boxes`](../../../http/operations/cloud/createcloudbox.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CreateCloudBoxAsync` | [dotnet reference](../../../dotnet/operations/cloud/createcloudbox.md) |
| go | `client.Cloud.NewBox` | [go reference](../../../go/operations/cloud/createcloudbox.md) |
| java | `client.createCloudBox` | [java reference](../../../java/operations/cloud/createcloudbox.md) |
| javascript | `client.cloud.createBox` | [javascript reference](../../../javascript/operations/cloud/createcloudbox.md) |
| kotlin | `client.createCloudBox` | [kotlin reference](../../../kotlin/operations/cloud/createcloudbox.md) |
| python | `client.cloud.create_box` | [python reference](../../../python/operations/cloud/createcloudbox.md) |
| typescript | `client.cloud.createBox` | [typescript reference](../../../typescript/operations/cloud/createcloudbox.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.create_cloud_box` |

## Signature

```rust
pub async fn create_cloud_box(&self, body: CreateCloudBoxRequest, request_options: Option<RequestOptions>) -> Result<CloudBoxEnvelope, ApiError>
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
