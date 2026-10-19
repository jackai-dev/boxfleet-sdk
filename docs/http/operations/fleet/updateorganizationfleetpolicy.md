# updateOrganizationFleetPolicy

[All HTTP operations](../../index.md)

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

Operation identity: `updateOrganizationFleetPolicy`  
Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `FleetPolicyUpdateRequest` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `FleetPolicyUpdateRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Updated fleet policy | application/json (OrganizationFleetResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "body": {},
  "content_type": "application/json",
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
| dotnet | `client.UpdateOrganizationFleetPolicyAsync` | [dotnet reference](../../../dotnet/operations/fleet/updateorganizationfleetpolicy.md) |
| go | `client.Fleet.UpdateOrganizationPolicy` | [go reference](../../../go/operations/fleet/updateorganizationfleetpolicy.md) |
| java | `client.updateOrganizationFleetPolicy` | [java reference](../../../java/operations/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [javascript reference](../../../javascript/operations/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [kotlin reference](../../../kotlin/operations/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [python reference](../../../python/operations/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [rust reference](../../../rust/operations/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [typescript reference](../../../typescript/operations/fleet/updateorganizationfleetpolicy.md) |
