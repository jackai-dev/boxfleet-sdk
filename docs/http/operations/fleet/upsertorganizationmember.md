# upsertOrganizationMember

[All HTTP operations](../../index.md)

Add or update an organization member seat, RBAC role, and personal box quota

Operation identity: `upsertOrganizationMember`  
Route: `POST` `/v1/organizations/{orgId}/members`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `UpsertOrganizationMemberRequest` |  |

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

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
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

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpsertOrganizationMemberAsync` | [dotnet reference](../../../dotnet/operations/fleet/upsertorganizationmember.md) |
| go | `client.Fleet.UpsertOrganizationMember` | [go reference](../../../go/operations/fleet/upsertorganizationmember.md) |
| java | `client.upsertOrganizationMember` | [java reference](../../../java/operations/fleet/upsertorganizationmember.md) |
| javascript | `client.fleet.upsertOrganizationMember` | [javascript reference](../../../javascript/operations/fleet/upsertorganizationmember.md) |
| kotlin | `client.upsertOrganizationMember` | [kotlin reference](../../../kotlin/operations/fleet/upsertorganizationmember.md) |
| python | `client.fleet.upsert_organization_member` | [python reference](../../../python/operations/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [rust reference](../../../rust/operations/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [typescript reference](../../../typescript/operations/fleet/upsertorganizationmember.md) |
