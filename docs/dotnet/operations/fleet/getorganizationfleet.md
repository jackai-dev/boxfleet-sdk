# getOrganizationFleet

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

Route: `GET` `/v1/organizations/{orgId}/fleet`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`GET` `/v1/organizations/{orgId}/fleet`](../../../http/operations/fleet/getorganizationfleet.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Fleet.GetOrganization` | [go reference](../../../go/operations/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [java reference](../../../java/operations/fleet/getorganizationfleet.md) |
| javascript | `client.fleet.getOrganization` | [javascript reference](../../../javascript/operations/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [kotlin reference](../../../kotlin/operations/fleet/getorganizationfleet.md) |
| python | `client.fleet.get_organization` | [python reference](../../../python/operations/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [rust reference](../../../rust/operations/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [typescript reference](../../../typescript/operations/fleet/getorganizationfleet.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.GetOrganizationFleetAsync` |

## Signature

```csharp
public async Task<OrganizationFleetResponse> GetOrganizationFleetAsync(
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
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |
