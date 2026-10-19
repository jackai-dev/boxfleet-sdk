# getOrganizationFleet

[All HTTP operations](../../index.md)

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

Operation identity: `getOrganizationFleet`  
Route: `GET` `/v1/organizations/{orgId}/fleet`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |

## Request body

This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "orgId",
      "value": "example"
    }
  ]
}
```

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetOrganizationFleetAsync` | [dotnet reference](../../../dotnet/operations/fleet/getorganizationfleet.md) |
| go | `client.Fleet.GetOrganization` | [go reference](../../../go/operations/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [java reference](../../../java/operations/fleet/getorganizationfleet.md) |
| javascript | `client.fleet.getOrganization` | [javascript reference](../../../javascript/operations/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [kotlin reference](../../../kotlin/operations/fleet/getorganizationfleet.md) |
| python | `client.fleet.get_organization` | [python reference](../../../python/operations/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [rust reference](../../../rust/operations/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [typescript reference](../../../typescript/operations/fleet/getorganizationfleet.md) |
