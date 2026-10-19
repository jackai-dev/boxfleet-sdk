# inspectProject

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect a project root to detect runtimes, package managers, and test/build commands

Route: `POST` `/v1/inspect`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`POST` `/v1/inspect`](../../../http/operations/jobs/inspectproject.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.InspectProjectAsync` | [dotnet reference](../../../dotnet/operations/jobs/inspectproject.md) |
| go | `client.Jobs.InspectProject` | [go reference](../../../go/operations/jobs/inspectproject.md) |
| java | `client.inspectProject` | [java reference](../../../java/operations/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [javascript reference](../../../javascript/operations/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [kotlin reference](../../../kotlin/operations/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [rust reference](../../../rust/operations/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [typescript reference](../../../typescript/operations/jobs/inspectproject.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.inspect_project` |
| raw | `client.with_raw_response.inspect_project` |
| resource | `client.jobs.inspect_project` |

## Signature

```python
client.jobs.inspect_project(body: InspectProjectRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ProjectInspectionPlan
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `InspectProjectRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.jobs.inspect_project({'projectRoot': 'example'}, content_type='application/json')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |
