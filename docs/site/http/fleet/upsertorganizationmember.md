---
title: "upsertOrganizationMember"
html: "upsertorganizationmember.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# upsertOrganizationMember

Add or update an organization member seat, RBAC role, and personal box quota

POST `/v1/organizations/{orgId}/members`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `UpsertOrganizationMemberRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Upserted organization member | application/json (OrganizationMember) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {
    "email": "example",
    "role": "owner",
    "userId": "example"
  },
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
| dotnet | `client.UpsertOrganizationMemberAsync` | [Open](../../sdk/dotnet/fleet/upsertorganizationmember.md) |
| go | `client.Fleet.UpsertOrganizationMember` | [Open](../../sdk/go/fleet/upsertorganizationmember.md) |
| java | `client.upsertOrganizationMember` | [Open](../../sdk/java/fleet/upsertorganizationmember.md) |
| javascript | `client.fleet.upsertOrganizationMember` | [Open](../../sdk/javascript/fleet/upsertorganizationmember.md) |
| kotlin | `client.upsertOrganizationMember` | [Open](../../sdk/kotlin/fleet/upsertorganizationmember.md) |
| python | `client.fleet.upsert_organization_member` | [Open](../../sdk/python/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [Open](../../sdk/rust/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [Open](../../sdk/typescript/fleet/upsertorganizationmember.md) |
