# listCapabilities

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List BoxFleet capabilities and published job limits

Route: `GET` `/v1/capabilities`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`GET` `/v1/capabilities`](../../../http/operations/system/listcapabilities.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCapabilitiesAsync` | [dotnet reference](../../../dotnet/operations/system/listcapabilities.md) |
| go | `client.System.ListCapabilities` | [go reference](../../../go/operations/system/listcapabilities.md) |
| java | `client.listCapabilities` | [java reference](../../../java/operations/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [javascript reference](../../../javascript/operations/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [kotlin reference](../../../kotlin/operations/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [python reference](../../../python/operations/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [typescript reference](../../../typescript/operations/system/listcapabilities.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.list_capabilities` |

## Signature

```rust
pub async fn list_capabilities(&self, query_value: Option<String>, state: Option<ListCapabilitiesState>, request_options: Option<RequestOptions>) -> Result<CapabilitiesResponse, ApiError>
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `query` | `query` | no | `string` |  |
| `state` | `query` | no | `string` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
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
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |
