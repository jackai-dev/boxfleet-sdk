# updateOrganizationFleetPolicy

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`PUT` `/v1/organizations/{orgId}/fleet/policy`](../../../http/operations/fleet/updateorganizationfleetpolicy.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpdateOrganizationFleetPolicyAsync` | [dotnet reference](../../../dotnet/operations/fleet/updateorganizationfleetpolicy.md) |
| go | `client.Fleet.UpdateOrganizationPolicy` | [go reference](../../../go/operations/fleet/updateorganizationfleetpolicy.md) |
| java | `client.updateOrganizationFleetPolicy` | [java reference](../../../java/operations/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [javascript reference](../../../javascript/operations/fleet/updateorganizationfleetpolicy.md) |
| python | `client.fleet.update_organization_policy` | [python reference](../../../python/operations/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [rust reference](../../../rust/operations/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [typescript reference](../../../typescript/operations/fleet/updateorganizationfleetpolicy.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.updateOrganizationFleetPolicy` |

## Signature

```kotlin
suspend fun updateOrganizationFleetPolicy(params: UpdateOrganizationFleetPolicyParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<OrganizationFleetResponse>
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | `path` | yes | `string` |  |
| `body` | body | yes | `FleetPolicyUpdateRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {},
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
| `200` | Updated fleet policy | application/json (OrganizationFleetResponse) |
