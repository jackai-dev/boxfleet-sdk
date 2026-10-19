# upsertOrganizationMember

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Add or update an organization member seat, RBAC role, and personal box quota

Route: `POST` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/upsertorganizationmember.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpsertOrganizationMemberAsync` | [dotnet reference](../../../dotnet/operations/fleet/upsertorganizationmember.md) |
| go | `client.Fleet.UpsertOrganizationMember` | [go reference](../../../go/operations/fleet/upsertorganizationmember.md) |
| javascript | `client.fleet.upsertOrganizationMember` | [javascript reference](../../../javascript/operations/fleet/upsertorganizationmember.md) |
| kotlin | `client.upsertOrganizationMember` | [kotlin reference](../../../kotlin/operations/fleet/upsertorganizationmember.md) |
| python | `client.fleet.upsert_organization_member` | [python reference](../../../python/operations/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [rust reference](../../../rust/operations/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [typescript reference](../../../typescript/operations/fleet/upsertorganizationmember.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.upsertOrganizationMember` |
| async | `client.upsertOrganizationMemberAsync` |

## Signature

```java
public OrganizationMember upsertOrganizationMember(String orgId, UpsertOrganizationMemberRequest body)
public ApiResponse<OrganizationMember> upsertOrganizationMemberWithResponse(String orgId, UpsertOrganizationMemberRequest body)
public CompletableFuture<ApiResponse<OrganizationMember>> upsertOrganizationMemberWithResponseAsync(String orgId, UpsertOrganizationMemberRequest body)
public CompletableFuture<OrganizationMember> upsertOrganizationMemberAsync(String orgId, UpsertOrganizationMemberRequest body)
public OrganizationMember upsertOrganizationMember(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
public CompletableFuture<OrganizationMember> upsertOrganizationMemberAsync(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
public ApiResponse<OrganizationMember> upsertOrganizationMemberWithResponse(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<OrganizationMember>> upsertOrganizationMemberWithResponseAsync(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `UpsertOrganizationMemberRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

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

## SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Upserted organization member | application/json (OrganizationMember) |
