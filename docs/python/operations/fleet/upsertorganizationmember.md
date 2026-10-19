# upsertOrganizationMember

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Add or update an organization member seat, RBAC role, and personal box quota

Route: `POST` `/v1/organizations/{orgId}/members`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`POST` `/v1/organizations/{orgId}/members`](../../../http/operations/fleet/upsertorganizationmember.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.UpsertOrganizationMemberAsync` | [dotnet reference](../../../dotnet/operations/fleet/upsertorganizationmember.md) |
| go | `client.Fleet.UpsertOrganizationMember` | [go reference](../../../go/operations/fleet/upsertorganizationmember.md) |
| java | `client.upsertOrganizationMember` | [java reference](../../../java/operations/fleet/upsertorganizationmember.md) |
| javascript | `client.fleet.upsertOrganizationMember` | [javascript reference](../../../javascript/operations/fleet/upsertorganizationmember.md) |
| kotlin | `client.upsertOrganizationMember` | [kotlin reference](../../../kotlin/operations/fleet/upsertorganizationmember.md) |
| rust | `client.upsert_organization_member` | [rust reference](../../../rust/operations/fleet/upsertorganizationmember.md) |
| typescript | `client.fleet.upsertOrganizationMember` | [typescript reference](../../../typescript/operations/fleet/upsertorganizationmember.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.upsert_organization_member` |
| raw | `client.with_raw_response.upsert_organization_member` |
| resource | `client.fleet.upsert_organization_member` |

## Signature

```python
client.fleet.upsert_organization_member(org_id: str, body: UpsertOrganizationMemberRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> OrganizationMember
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.fleet.upsert_organization_member('example', {'email': 'example', 'role': 'owner', 'userId': 'example'}, content_type='application/json')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Upserted organization member | application/json (OrganizationMember) |
