---
title: "listOrganizationMembers · rust"
html: "listorganizationmembers.html"
language: "rust"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listOrganizationMembers

List organization seats, RBAC roles, and per-user box quotas

HTTP reference: [GET /v1/organizations/{orgId}/members](../../../http/fleet/listorganizationmembers.md)

## Package

`boxfleet_sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.list_organization_members` async

## Signature

```
pub async fn list_organization_members(&self, org_id: String, request_options: Option<RequestOptions>) -> Result<OrganizationMembersResponse, ApiError>
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
| `200` | Organization members list | application/json (OrganizationMembersResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListOrganizationMembersAsync` | [Open](../../dotnet/fleet/listorganizationmembers.md) |
| go | `client.Fleet.ListOrganizationMembers` | [Open](../../go/fleet/listorganizationmembers.md) |
| java | `client.listOrganizationMembers` | [Open](../../java/fleet/listorganizationmembers.md) |
| javascript | `client.fleet.listOrganizationMembers` | [Open](../../javascript/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [Open](../../kotlin/fleet/listorganizationmembers.md) |
| python | `client.fleet.list_organization_members` | [Open](../../python/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [Open](../../typescript/fleet/listorganizationmembers.md) |
