# listJobs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List sandbox execution jobs with optional status or box filters

Route: `GET` `/v1/jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/jobs`](../../../http/operations/jobs/listjobs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListJobsAsync` | [dotnet reference](../../../dotnet/operations/jobs/listjobs.md) |
| go | `client.Jobs.List` | [go reference](../../../go/operations/jobs/listjobs.md) |
| java | `client.listJobs` | [java reference](../../../java/operations/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [javascript reference](../../../javascript/operations/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [kotlin reference](../../../kotlin/operations/jobs/listjobs.md) |
| rust | `client.list_jobs` | [rust reference](../../../rust/operations/jobs/listjobs.md) |
| typescript | `client.jobs.list` | [typescript reference](../../../typescript/operations/jobs/listjobs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.list_jobs` |
| raw | `client.with_raw_response.list_jobs` |
| resource | `client.jobs.list` |

## Signature

```python
client.jobs.list(status: Optional[Literal['queued', 'running', 'succeeded', 'failed', 'cancelled']] = None, box_id: Optional[str] = None, limit: Optional[int] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobListResponse
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | `query` | no | `string` |  |
| `boxId` | `query` | no | `string` |  |
| `limit` | `query` | no | `integer` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": []
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.jobs.list()
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |
