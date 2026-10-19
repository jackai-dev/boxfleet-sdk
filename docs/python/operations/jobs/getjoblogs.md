# getJobLogs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Read redacted stdout and stderr streams for a sandbox job

Route: `GET` `/v1/jobs/{jobId}/logs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/jobs/{jobId}/logs`](../../../http/operations/jobs/getjoblogs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobLogsAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjoblogs.md) |
| go | `client.Jobs.GetLogs` | [go reference](../../../go/operations/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [java reference](../../../java/operations/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [javascript reference](../../../javascript/operations/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [kotlin reference](../../../kotlin/operations/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [rust reference](../../../rust/operations/jobs/getjoblogs.md) |
| typescript | `client.jobs.getLogs` | [typescript reference](../../../typescript/operations/jobs/getjoblogs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.get_job_logs` |
| raw | `client.with_raw_response.get_job_logs` |
| resource | `client.jobs.get_logs` |

## Signature

```python
client.jobs.get_logs(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobLogsResponse
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
result = client.jobs.get_logs('example')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Redacted job logs | application/json (JobLogsResponse) |
