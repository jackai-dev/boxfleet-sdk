# listOrganizationMembers

[All HTTP operations](../../index.md)

List organization seats, RBAC roles, and per-user box quotas

Operation identity: `listOrganizationMembers`  
Route: `GET` `/v1/organizations/{orgId}/members`  
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
| `200` | Organization members list | application/json (OrganizationMembersResponse) |

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
| dotnet | `client.ListOrganizationMembersAsync` | [dotnet reference](../../../dotnet/operations/fleet/listorganizationmembers.md) |
| go | `client.Fleet.ListOrganizationMembers` | [go reference](../../../go/operations/fleet/listorganizationmembers.md) |
| java | `client.listOrganizationMembers` | [java reference](../../../java/operations/fleet/listorganizationmembers.md) |
| javascript | `client.fleet.listOrganizationMembers` | [javascript reference](../../../javascript/operations/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [kotlin reference](../../../kotlin/operations/fleet/listorganizationmembers.md) |
| python | `client.fleet.list_organization_members` | [python reference](../../../python/operations/fleet/listorganizationmembers.md) |
| rust | `client.list_organization_members` | [rust reference](../../../rust/operations/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [typescript reference](../../../typescript/operations/fleet/listorganizationmembers.md) |
