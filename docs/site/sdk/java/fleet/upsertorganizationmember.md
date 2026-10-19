---
title: "upsertOrganizationMember · java"
html: "upsertorganizationmember.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# upsertOrganizationMember

Add or update an organization member seat, RBAC role, and personal box quota

HTTP reference: [POST /v1/organizations/{orgId}/members](../../../http/fleet/upsertorganizationmember.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.upsertOrganizationMemberAsync` async
- `client.upsertOrganizationMember` sync

## Signature

```
public OrganizationMember upsertOrganizationMember(String orgId, UpsertOrganizationMemberRequest body)
public ApiResponse<OrganizationMember> upsertOrganizationMemberWithResponse(String orgId, UpsertOrganizationMemberRequest body)
public CompletableFuture<ApiResponse<OrganizationMember>> upsertOrganizationMemberWithResponseAsync(String orgId, UpsertOrganizationMemberRequest body)
public CompletableFuture<OrganizationMember> upsertOrganizationMemberAsync(String orgId, UpsertOrganizationMemberRequest body)
public OrganizationMember upsertOrganizationMember(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
public CompletableFuture<OrganizationMember> upsertOrganizationMemberAsync(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
public ApiResponse<OrganizationMember> upsertOrganizationMemberWithResponse(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<OrganizationMember>> upsertOrganizationMemberWithResponseAsync(String orgId, UpsertOrganizationMemberRequest body, RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Upserted organization member | application/json (OrganizationMember) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpsertOrganizationMemberAsync` | [Open](../../dotnet/fleet/upsertorganizationmember.md) |
| go | `client.Fleet.UpsertOrganizationMember` | [Open](../../go/fleet/upsertorganizationmember.md) |
| javascript | `client.fleet.upsertOrganizationMember` | [Open](../../javascript/fleet/upsertorganizationmember.md) |
| kotlin | `client.upsertOrganizationMember` | [Open](../../kotlin/fleet/upsertorganizationmember.md) |
| python | `client.fleet.upsert_organization_member` | [Open](../../python/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [Open](../../rust/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [Open](../../typescript/fleet/upsertorganizationmember.md) |
