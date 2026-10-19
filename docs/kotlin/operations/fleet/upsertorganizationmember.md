# upsertOrganizationMember

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Add or update an organization member seat, RBAC role, and personal box quota

Route: `POST` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`POST` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/upsertorganizationmember.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpsertOrganizationMemberAsync` | [dotnet reference](../../../dotnet/operations/fleet/upsertorganizationmember.md) |
| go | `client.Fleet.UpsertOrganizationMember` | [go reference](../../../go/operations/fleet/upsertorganizationmember.md) |
| java | `client.upsertOrganizationMember` | [java reference](../../../java/operations/fleet/upsertorganizationmember.md) |
| javascript | `client.fleet.upsertOrganizationMember` | [javascript reference](../../../javascript/operations/fleet/upsertorganizationmember.md) |
| python | `client.fleet.upsert_organization_member` | [python reference](../../../python/operations/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [rust reference](../../../rust/operations/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [typescript reference](../../../typescript/operations/fleet/upsertorganizationmember.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.upsertOrganizationMember` |

## Signature

```kotlin
suspend fun upsertOrganizationMember(params: UpsertOrganizationMemberParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<OrganizationMember>
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
