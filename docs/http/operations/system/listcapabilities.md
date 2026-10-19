# listCapabilities

[All HTTP operations](../../index.md)

List BoxFleet capabilities and published job limits

Operation identity: `listCapabilities`  
Route: `GET` `/v1/capabilities`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `query` | `query` | no | `string` |  |
| `state` | `query` | no | `string` |  |

## Request body

This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "parameters": []
}
```

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListCapabilitiesAsync` | [dotnet reference](../../../dotnet/operations/system/listcapabilities.md) |
| go | `client.System.ListCapabilities` | [go reference](../../../go/operations/system/listcapabilities.md) |
| java | `client.listCapabilities` | [java reference](../../../java/operations/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [javascript reference](../../../javascript/operations/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [kotlin reference](../../../kotlin/operations/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [python reference](../../../python/operations/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [rust reference](../../../rust/operations/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [typescript reference](../../../typescript/operations/system/listcapabilities.md) |
