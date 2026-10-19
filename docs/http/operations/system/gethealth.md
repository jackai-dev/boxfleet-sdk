# getHealth

[All HTTP operations](../../index.md)

Inspect control-plane and native core readiness

Operation identity: `getHealth`  
Route: `GET` `/health`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| _none_ | | | | |

## Request body

This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Service health status | application/json (HealthResponse) |

## Security

No security requirement is declared for this operation.

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
| dotnet | `client.GetHealthAsync` | [dotnet reference](../../../dotnet/operations/system/gethealth.md) |
| go | `client.System.GetHealth` | [go reference](../../../go/operations/system/gethealth.md) |
| java | `client.getHealth` | [java reference](../../../java/operations/system/gethealth.md) |
| javascript | `client.system.getHealth` | [javascript reference](../../../javascript/operations/system/gethealth.md) |
| kotlin | `client.getHealth` | [kotlin reference](../../../kotlin/operations/system/gethealth.md) |
| python | `client.system.get_health` | [python reference](../../../python/operations/system/gethealth.md) |
| rust | `client.get_health` | [rust reference](../../../rust/operations/system/gethealth.md) |
| typescript | `client.system.getHealth` | [typescript reference](../../../typescript/operations/system/gethealth.md) |
