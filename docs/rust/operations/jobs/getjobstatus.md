# getJobStatus

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve current status, exit code, and cleanup receipt of a job

Route: `GET` `/v1/jobs/{jobId}`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`GET` `/v1/jobs/{jobId}`](../../../http/operations/jobs/getjobstatus.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobStatusAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobstatus.md) |
| go | `client.Jobs.GetStatus` | [go reference](../../../go/operations/jobs/getjobstatus.md) |
| java | `client.getJobStatus` | [java reference](../../../java/operations/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [javascript reference](../../../javascript/operations/jobs/getjobstatus.md) |
| kotlin | `client.getJobStatus` | [kotlin reference](../../../kotlin/operations/jobs/getjobstatus.md) |
| python | `client.jobs.get_status` | [python reference](../../../python/operations/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [typescript reference](../../../typescript/operations/jobs/getjobstatus.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.get_job_status` |

## Signature

```rust
pub async fn get_job_status(&self, job_id: String, request_options: Option<RequestOptions>) -> Result<JobSummary, ApiError>
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

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job status snapshot | application/json (JobSummary) |
