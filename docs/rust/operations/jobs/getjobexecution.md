# getJobExecution

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve full execution evidence, model rounds, verification output, and Git patch

Route: `GET` `/v1/jobs/{jobId}/execution`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`GET` `/v1/jobs/{jobId}/execution`](../../../http/operations/jobs/getjobexecution.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobExecutionAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobexecution.md) |
| go | `client.Jobs.GetExecution` | [go reference](../../../go/operations/jobs/getjobexecution.md) |
| java | `client.getJobExecution` | [java reference](../../../java/operations/jobs/getjobexecution.md) |
| javascript | `client.jobs.getExecution` | [javascript reference](../../../javascript/operations/jobs/getjobexecution.md) |
| kotlin | `client.getJobExecution` | [kotlin reference](../../../kotlin/operations/jobs/getjobexecution.md) |
| python | `client.jobs.get_execution` | [python reference](../../../python/operations/jobs/getjobexecution.md) |
| typescript | `client.jobs.getExecution` | [typescript reference](../../../typescript/operations/jobs/getjobexecution.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.get_job_execution` |

## Signature

```rust
pub async fn get_job_execution(&self, job_id: String, request_options: Option<RequestOptions>) -> Result<JobExecutionResponse, ApiError>
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
| `200` | Job execution evidence | application/json (JobExecutionResponse) |
