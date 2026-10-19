# getOrganizationFleet

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

Route: `GET` `/v1/organizations/{orgId}/fleet`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`GET` `/v1/organizations/{orgId}/fleet`](../../../http/operations/fleet/getorganizationfleet.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetOrganizationFleetAsync` | [dotnet reference](../../../dotnet/operations/fleet/getorganizationfleet.md) |
| go | `client.Fleet.GetOrganization` | [go reference](../../../go/operations/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [java reference](../../../java/operations/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [kotlin reference](../../../kotlin/operations/fleet/getorganizationfleet.md) |
| python | `client.fleet.get_organization` | [python reference](../../../python/operations/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [rust reference](../../../rust/operations/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [typescript reference](../../../typescript/operations/fleet/getorganizationfleet.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.getOrganizationFleet` |
| resource | `client.fleet.getOrganization` |

## Signature

```javascript
client.fleet.getOrganization(orgId, requestOptions?)
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
const result = await client.fleet.getOrganization("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |
