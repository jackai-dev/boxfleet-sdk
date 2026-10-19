# cancelJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Cancel a running job and trigger immediate sandbox cleanup

Route: `POST` `/v1/jobs/{jobId}/cancel`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`POST` `/v1/jobs/{jobId}/cancel`](../../../http/operations/jobs/canceljob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [go reference](../../../go/operations/jobs/canceljob.md) |
| java | `client.cancelJob` | [java reference](../../../java/operations/jobs/canceljob.md) |
| javascript | `client.jobs.cancel` | [javascript reference](../../../javascript/operations/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [kotlin reference](../../../kotlin/operations/jobs/canceljob.md) |
| rust | `client.cancel_job` | [rust reference](../../../rust/operations/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [typescript reference](../../../typescript/operations/jobs/canceljob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.cancel_job` |
| raw | `client.with_raw_response.cancel_job` |
| resource | `client.jobs.cancel` |

## Signature

```python
client.jobs.cancel(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "jobId",
      "value": "example"
    }
  ]
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.jobs.cancel('example')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |
