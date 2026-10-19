# getOrganizationFleet

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect the complete Business/Enterprise organization park (boxes, seats, quotas, and policies)

Route: `GET` `/v1/organizations/{orgId}/fleet`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/organizations/{orgId}/fleet`](../../../http/operations/fleet/getorganizationfleet.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetOrganizationFleetAsync` | [dotnet reference](../../../dotnet/operations/fleet/getorganizationfleet.md) |
| go | `client.Fleet.GetOrganization` | [go reference](../../../go/operations/fleet/getorganizationfleet.md) |
| java | `client.getOrganizationFleet` | [java reference](../../../java/operations/fleet/getorganizationfleet.md) |
| javascript | `client.fleet.getOrganization` | [javascript reference](../../../javascript/operations/fleet/getorganizationfleet.md) |
| kotlin | `client.getOrganizationFleet` | [kotlin reference](../../../kotlin/operations/fleet/getorganizationfleet.md) |
| rust | `client.get_organization_fleet` | [rust reference](../../../rust/operations/fleet/getorganizationfleet.md) |
| typescript | `client.fleet.getOrganization` | [typescript reference](../../../typescript/operations/fleet/getorganizationfleet.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.get_organization_fleet` |
| raw | `client.with_raw_response.get_organization_fleet` |
| resource | `client.fleet.get_organization` |

## Signature

```python
client.fleet.get_organization(org_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationFleetResponse
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

```python
result = client.fleet.get_organization('example')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization fleet park overview | application/json (OrganizationFleetResponse) |
