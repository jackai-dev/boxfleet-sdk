---
title: "upsertOrganizationMember · javascript"
html: "upsertorganizationmember.html"
language: "javascript"
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

- `client.upsertOrganizationMember` flat
- `client.fleet.upsertOrganizationMember` resource

## Signature

```
client.fleet.upsertOrganizationMember(orgId, body, requestOptions?)
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
const result = await client.fleet.upsertOrganizationMember("example", {"email": "example", "role": "owner", "userId": "example"}, { contentType: "application/json" });
```

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
| java | `client.upsertOrganizationMember` | [Open](../../java/fleet/upsertorganizationmember.md) |
| kotlin | `client.upsertOrganizationMember` | [Open](../../kotlin/fleet/upsertorganizationmember.md) |
| python | `client.fleet.upsert_organization_member` | [Open](../../python/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [Open](../../rust/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [Open](../../typescript/fleet/upsertorganizationmember.md) |
