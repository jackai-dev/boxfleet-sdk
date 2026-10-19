# listOrganizationMembers

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List organization seats, RBAC roles, and per-user box quotas

Route: `GET` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/listorganizationmembers.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListOrganizationMembersAsync` | [dotnet reference](../../../dotnet/operations/fleet/listorganizationmembers.md) |
| go | `client.Fleet.ListOrganizationMembers` | [go reference](../../../go/operations/fleet/listorganizationmembers.md) |
| javascript | `client.fleet.listOrganizationMembers` | [javascript reference](../../../javascript/operations/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [kotlin reference](../../../kotlin/operations/fleet/listorganizationmembers.md) |
| python | `client.fleet.list_organization_members` | [python reference](../../../python/operations/fleet/listorganizationmembers.md) |
| rust | `client.list_organization_members` | [rust reference](../../../rust/operations/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [typescript reference](../../../typescript/operations/fleet/listorganizationmembers.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.listOrganizationMembers` |
| async | `client.listOrganizationMembersAsync` |

## Signature

```java
public OrganizationMembersResponse listOrganizationMembers(String orgId)
public ApiResponse<OrganizationMembersResponse> listOrganizationMembersWithResponse(String orgId)
public CompletableFuture<ApiResponse<OrganizationMembersResponse>> listOrganizationMembersWithResponseAsync(String orgId)
public CompletableFuture<OrganizationMembersResponse> listOrganizationMembersAsync(String orgId)
public OrganizationMembersResponse listOrganizationMembers(String orgId, RequestOptions requestOptions)
public CompletableFuture<OrganizationMembersResponse> listOrganizationMembersAsync(String orgId, RequestOptions requestOptions)
public ApiResponse<OrganizationMembersResponse> listOrganizationMembersWithResponse(String orgId, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<OrganizationMembersResponse>> listOrganizationMembersWithResponseAsync(String orgId, RequestOptions requestOptions)
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
