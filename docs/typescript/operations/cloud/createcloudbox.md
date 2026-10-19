# createCloudBox

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Provision a zero-idle-cost BoxFleet White-Label Cloud VM, GUI desktop, or GPU box

Route: `POST` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

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
| rust | `client.create_cloud_box` | [rust reference](../../../rust/operations/cloud/createcloudbox.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.createCloudBox` |
| resource | `client.cloud.createBox` |

## Signature

```typescript
client.cloud.createBox<Raw extends boolean = false>(body: CreateCloudBoxRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<CloudBoxEnvelope> : WithRequestId<CloudBoxEnvelope>>;
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.cloud.createBox({}, { contentType: "application/json" });
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Provisioned white-label box | application/json (CloudBoxEnvelope) |
