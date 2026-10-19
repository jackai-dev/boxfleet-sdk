---
title: "listOrganizationMembers"
html: "listorganizationmembers.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listOrganizationMembers

List organization seats, RBAC roles, and per-user box quotas

GET `/v1/organizations/{orgId}/members`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization members list | application/json (OrganizationMembersResponse) |

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
| dotnet | `client.ListOrganizationMembersAsync` | [Open](../../sdk/dotnet/fleet/listorganizationmembers.md) |
| go | `client.Fleet.ListOrganizationMembers` | [Open](../../sdk/go/fleet/listorganizationmembers.md) |
| java | `client.listOrganizationMembers` | [Open](../../sdk/java/fleet/listorganizationmembers.md) |
| javascript | `client.fleet.listOrganizationMembers` | [Open](../../sdk/javascript/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [Open](../../sdk/kotlin/fleet/listorganizationmembers.md) |
| python | `client.fleet.list_organization_members` | [Open](../../sdk/python/fleet/listorganizationmembers.md) |
| rust | `client.list_organization_members` | [Open](../../sdk/rust/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [Open](../../sdk/typescript/fleet/listorganizationmembers.md) |
