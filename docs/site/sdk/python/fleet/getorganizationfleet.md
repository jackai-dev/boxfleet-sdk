---
title: "getOrganizationFleet · python"
html: "getorganizationfleet.html"
language: "python"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getOrganizationFleet

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

HTTP reference: [GET /v1/organizations/{orgId}/fleet](../../../http/fleet/getorganizationfleet.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.get_organization_fleet` flat
- `client.with_raw_response.get_organization_fleet` raw
- `client.fleet.get_organization` resource

## Signature

```
client.fleet.get_organization(org_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationFleetResponse
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.fleet.get_organization('example')
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `orgId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetOrganizationFleetAsync` | [Open](../../dotnet/fleet/getorganizationfleet.md) |
| go | `client.Fleet.GetOrganization` | [Open](../../go/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [Open](../../java/fleet/getorganizationfleet.md) |
| javascript | `client.fleet.getOrganization` | [Open](../../javascript/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [Open](../../kotlin/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [Open](../../rust/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [Open](../../typescript/fleet/getorganizationfleet.md) |
