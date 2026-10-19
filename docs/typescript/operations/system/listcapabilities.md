# listCapabilities

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List BoxFleet capabilities and published job limits

Route: `GET` `/v1/capabilities`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

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
| rust | `client.list_capabilities` | [rust reference](../../../rust/operations/system/listcapabilities.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.listCapabilities` |
| resource | `client.system.listCapabilities` |

## Signature

```typescript
client.system.listCapabilities<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
client.system.listCapabilities<Raw extends boolean = false>(state?: "implemented" | "conditional" | "planned", requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
client.system.listCapabilities<Raw extends boolean = false>(query?: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
client.system.listCapabilities<Raw extends boolean = false>(query?: string, state?: "implemented" | "conditional" | "planned", requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<CapabilitiesResponse> : WithRequestId<CapabilitiesResponse>>;
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.system.listCapabilities();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |
