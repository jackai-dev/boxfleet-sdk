# updateOrganizationFleetPolicy

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Update organization-wide fleet governance policies (allowed providers, quotas, auto-stop, SSO)

Route: `PUT` `/v1/organizations/{orgId}/fleet/policy`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`PUT` `/v1/organizations/{orgId}/fleet/policy`](../../../http/operations/fleet/updateorganizationfleetpolicy.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpdateOrganizationFleetPolicyAsync` | [dotnet reference](../../../dotnet/operations/fleet/updateorganizationfleetpolicy.md) |
| go | `client.Fleet.UpdateOrganizationPolicy` | [go reference](../../../go/operations/fleet/updateorganizationfleetpolicy.md) |
| java | `client.updateOrganizationFleetPolicy` | [java reference](../../../java/operations/fleet/updateorganizationfleetpolicy.md) |
| javascript | `client.fleet.updateOrganizationPolicy` | [javascript reference](../../../javascript/operations/fleet/updateorganizationfleetpolicy.md) |
| kotlin | `client.updateOrganizationFleetPolicy` | [kotlin reference](../../../kotlin/operations/fleet/updateorganizationfleetpolicy.md) |
| rust | `client.update_organization_fleet_policy` | [rust reference](../../../rust/operations/fleet/updateorganizationfleetpolicy.md) |
| typescript | `client.fleet.updateOrganizationPolicy` | [typescript reference](../../../typescript/operations/fleet/updateorganizationfleetpolicy.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.update_organization_fleet_policy` |
| raw | `client.with_raw_response.update_organization_fleet_policy` |
| resource | `client.fleet.update_organization_policy` |

## Signature

```python
client.fleet.update_organization_policy(org_id: str, body: FleetPolicyUpdateRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationFleetResponse
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.fleet.update_organization_policy('example', {}, content_type='application/json')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Updated fleet policy | application/json (OrganizationFleetResponse) |
