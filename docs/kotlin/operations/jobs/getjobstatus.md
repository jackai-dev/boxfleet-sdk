# getJobStatus

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve current status, exit code, and cleanup receipt of a job

Route: `GET` `/v1/jobs/{jobId}`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`GET` `/v1/jobs/{jobId}`](../../../http/operations/jobs/getjobstatus.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobStatusAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobstatus.md) |
| go | `client.Jobs.GetStatus` | [go reference](../../../go/operations/jobs/getjobstatus.md) |
| java | `client.getJobStatus` | [java reference](../../../java/operations/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [javascript reference](../../../javascript/operations/jobs/getjobstatus.md) |
| python | `client.jobs.get_status` | [python reference](../../../python/operations/jobs/getjobstatus.md) |
| rust | `client.get_job_status` | [rust reference](../../../rust/operations/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [typescript reference](../../../typescript/operations/jobs/getjobstatus.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.getJobStatus` |

## Signature

```kotlin
suspend fun getJobStatus(params: GetJobStatusParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
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
