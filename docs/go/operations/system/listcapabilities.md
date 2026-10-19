# listCapabilities

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List BoxFleet capabilities and published job limits

Route: `GET` `/v1/capabilities`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/go/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `978e5bf64816d75c36685ed60679a586b2970a0b267ccc222d0378ca3c6b3580`

HTTP reference: [`GET` `/v1/capabilities`](../../../http/operations/system/listcapabilities.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCapabilitiesAsync` | [dotnet reference](../../../dotnet/operations/system/listcapabilities.md) |
| java | `client.listCapabilities` | [java reference](../../../java/operations/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [javascript reference](../../../javascript/operations/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [kotlin reference](../../../kotlin/operations/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [python reference](../../../python/operations/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [rust reference](../../../rust/operations/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [typescript reference](../../../typescript/operations/system/listcapabilities.md) |

## Public members

| Surface | Callable |
| --- | --- |
| resource | `client.System.ListCapabilities` |

## Signature

```go
func (service *SystemService) ListCapabilities(ctx context.Context, params SystemListCapabilitiesParams, opts ...option.RequestOption) (*Response[*CapabilitiesResponse], error)
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
