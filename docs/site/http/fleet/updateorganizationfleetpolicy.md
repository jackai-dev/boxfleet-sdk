---
title: "updateOrganizationFleetPolicy"
html: "updateorganizationfleetpolicy.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# updateOrganizationFleetPolicy

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

PUT `/v1/organizations/{orgId}/fleet/policy`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

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

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
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

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpdateOrganizationFleetPolicyAsync` | [Open](../../sdk/dotnet/fleet/updateorganizationfleetpolicy.md) |
| go | `client.Fleet.UpdateOrganizationPolicy` | [Open](../../sdk/go/fleet/updateorganizationfleetpolicy.md) |
| java | `client.updateOrganizationFleetPolicy` | [Open](../../sdk/java/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [Open](../../sdk/javascript/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [Open](../../sdk/kotlin/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [Open](../../sdk/python/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [Open](../../sdk/rust/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [Open](../../sdk/typescript/fleet/updateorganizationfleetpolicy.md) |
