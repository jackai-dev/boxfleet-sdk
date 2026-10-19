# listOrganizationMembers

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List organization seats, RBAC roles, and per-user box quotas

Route: `GET` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/listorganizationmembers.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListOrganizationMembersAsync` | [dotnet reference](../../../dotnet/operations/fleet/listorganizationmembers.md) |
| go | `client.Fleet.ListOrganizationMembers` | [go reference](../../../go/operations/fleet/listorganizationmembers.md) |
| java | `client.listOrganizationMembers` | [java reference](../../../java/operations/fleet/listorganizationmembers.md) |
| javascript | `client.fleet.listOrganizationMembers` | [javascript reference](../../../javascript/operations/fleet/listorganizationmembers.md) |
| kotlin | `client.listOrganizationMembers` | [kotlin reference](../../../kotlin/operations/fleet/listorganizationmembers.md) |
| rust | `client.list_organization_members` | [rust reference](../../../rust/operations/fleet/listorganizationmembers.md) |
| typescript | `client.fleet.listOrganizationMembers` | [typescript reference](../../../typescript/operations/fleet/listorganizationmembers.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.list_organization_members` |
| raw | `client.with_raw_response.list_organization_members` |
| resource | `client.fleet.list_organization_members` |

## Signature

```python
client.fleet.list_organization_members(org_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationMembersResponse
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
result = client.fleet.list_organization_members('example')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Organization members list | application/json (OrganizationMembersResponse) |
