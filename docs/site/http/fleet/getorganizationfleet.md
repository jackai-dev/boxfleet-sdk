---
title: "getOrganizationFleet"
html: "getorganizationfleet.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getOrganizationFleet

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

GET `/v1/organizations/{orgId}/fleet`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
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

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetOrganizationFleetAsync` | [Open](../../sdk/dotnet/fleet/getorganizationfleet.md) |
| go | `client.Fleet.GetOrganization` | [Open](../../sdk/go/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [Open](../../sdk/java/fleet/getorganizationfleet.md) |
| javascript | `client.fleet.getOrganization` | [Open](../../sdk/javascript/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [Open](../../sdk/kotlin/fleet/getorganizationfleet.md) |
| python | `client.fleet.get_organization` | [Open](../../sdk/python/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [Open](../../sdk/rust/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [Open](../../sdk/typescript/fleet/getorganizationfleet.md) |
