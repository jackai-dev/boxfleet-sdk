# listOrganizationMembers

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List organization seats, RBAC roles, and per-user box quotas

Route: `GET` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`GET` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/listorganizationmembers.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListOrganizationMembersAsync` | [dotnet reference](../../../dotnet/operations/fleet/listorganizationmembers.md) |
| go | `client.Fleet.ListOrganizationMembers` | [go reference](../../../go/operations/fleet/listorganizationmembers.md) |
| java | `client.listOrganizationMembers` | [java reference](../../../java/operations/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [kotlin reference](../../../kotlin/operations/fleet/listorganizationmembers.md) |
| python | `client.fleet.list_organization_members` | [python reference](../../../python/operations/fleet/listorganizationmembers.md) |
| rust | `client.list_organization_members` | [rust reference](../../../rust/operations/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [typescript reference](../../../typescript/operations/fleet/listorganizationmembers.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.listOrganizationMembers` |
| resource | `client.fleet.listOrganizationMembers` |

## Signature

```javascript
client.fleet.listOrganizationMembers(orgId, requestOptions?)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |

## Canonical required-input example

Illustrative input, not executed.

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

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```javascript
const result = await client.fleet.listOrganizationMembers("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization members list | application/json (OrganizationMembersResponse) |
