# listCloudBoxes

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List active and suspended BoxFleet White-Label Cloud boxes for the tenant

Route: `GET` `/v1/cloud/boxes`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/cloud/boxes`](../../../http/operations/cloud/listcloudboxes.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCloudBoxesAsync` | [dotnet reference](../../../dotnet/operations/cloud/listcloudboxes.md) |
| go | `client.Cloud.ListBoxes` | [go reference](../../../go/operations/cloud/listcloudboxes.md) |
| java | `client.listCloudBoxes` | [java reference](../../../java/operations/cloud/listcloudboxes.md) |
| javascript | `client.cloud.listBoxes` | [javascript reference](../../../javascript/operations/cloud/listcloudboxes.md) |
| kotlin | `client.listCloudBoxes` | [kotlin reference](../../../kotlin/operations/cloud/listcloudboxes.md) |
| rust | `client.list_cloud_boxes` | [rust reference](../../../rust/operations/cloud/listcloudboxes.md) |
| typescript | `client.cloud.listBoxes` | [typescript reference](../../../typescript/operations/cloud/listcloudboxes.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.list_cloud_boxes` |
| raw | `client.with_raw_response.list_cloud_boxes` |
| resource | `client.cloud.list_boxes` |

## Signature

```python
client.cloud.list_boxes(*, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> CloudBoxListResponse
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

```python
result = client.cloud.list_boxes()
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | White-label cloud boxes | application/json (CloudBoxListResponse) |
