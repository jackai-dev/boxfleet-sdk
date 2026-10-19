# listOrganizationMembers

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List organization seats, RBAC roles, and per-user box quotas

Route: `GET` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`GET` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/listorganizationmembers.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Fleet.ListOrganizationMembers` | [go reference](../../../go/operations/fleet/listorganizationmembers.md) |
| java | `client.listOrganizationMembers` | [java reference](../../../java/operations/fleet/listorganizationmembers.md) |
| javascript | `client.fleet.listOrganizationMembers` | [javascript reference](../../../javascript/operations/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [kotlin reference](../../../kotlin/operations/fleet/listorganizationmembers.md) |
| python | `client.fleet.list_organization_members` | [python reference](../../../python/operations/fleet/listorganizationmembers.md) |
| rust | `client.list_organization_members` | [rust reference](../../../rust/operations/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [typescript reference](../../../typescript/operations/fleet/listorganizationmembers.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.ListOrganizationMembersAsync` |

## Signature

```csharp
public async Task<OrganizationMembersResponse> ListOrganizationMembersAsync(
string orgId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization members list | application/json (OrganizationMembersResponse) |
