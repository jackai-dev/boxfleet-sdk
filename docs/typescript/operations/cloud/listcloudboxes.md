# listCloudBoxes

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

Route: `GET` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`GET` `/v1/cloud/boxes`](../../../http/operations/cloud/listcloudboxes.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCloudBoxesAsync` | [dotnet reference](../../../dotnet/operations/cloud/listcloudboxes.md) |
| go | `client.Cloud.ListBoxes` | [go reference](../../../go/operations/cloud/listcloudboxes.md) |
| java | `client.listCloudBoxes` | [java reference](../../../java/operations/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [javascript reference](../../../javascript/operations/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [kotlin reference](../../../kotlin/operations/cloud/listcloudboxes.md) |
| python | `client.cloud.list_boxes` | [python reference](../../../python/operations/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [rust reference](../../../rust/operations/cloud/listcloudboxes.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.listCloudBoxes` |
| resource | `client.cloud.listBoxes` |

## Signature

```typescript
client.cloud.listBoxes<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CloudBoxListResponse> : WithRequestId<CloudBoxListResponse>>;
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": []
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.cloud.listBoxes();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-label cloud boxes | application/json (CloudBoxListResponse) |
