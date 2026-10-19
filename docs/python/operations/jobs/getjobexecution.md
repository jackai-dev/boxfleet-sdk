# getJobExecution

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve full execution evidence, model rounds, verification output, and Git patch

Route: `GET` `/v1/jobs/{jobId}/execution`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/jobs/{jobId}/execution`](../../../http/operations/jobs/getjobexecution.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobExecutionAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobexecution.md) |
| go | `client.Jobs.GetExecution` | [go reference](../../../go/operations/jobs/getjobexecution.md) |
| java | `client.getJobExecution` | [java reference](../../../java/operations/jobs/getjobexecution.md) |
| javascript | `client.jobs.getExecution` | [javascript reference](../../../javascript/operations/jobs/getjobexecution.md) |
| kotlin | `client.getJobExecution` | [kotlin reference](../../../kotlin/operations/jobs/getjobexecution.md) |
| rust | `client.get_job_execution` | [rust reference](../../../rust/operations/jobs/getjobexecution.md) |
| typescript | `client.jobs.getExecution` | [typescript reference](../../../typescript/operations/jobs/getjobexecution.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.get_job_execution` |
| raw | `client.with_raw_response.get_job_execution` |
| resource | `client.jobs.get_execution` |

## Signature

```python
client.jobs.get_execution(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobExecutionResponse
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
result = client.jobs.get_execution('example')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |
