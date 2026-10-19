# getJobStatus

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve current status, exit code, and cleanup receipt of a job

Route: `GET` `/v1/jobs/{jobId}`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/go/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `978e5bf64816d75c36685ed60679a586b2970a0b267ccc222d0378ca3c6b3580`

HTTP reference: [`GET` `/v1/jobs/{jobId}`](../../../http/operations/jobs/getjobstatus.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobStatusAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobstatus.md) |
| java | `client.getJobStatus` | [java reference](../../../java/operations/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [javascript reference](../../../javascript/operations/jobs/getjobstatus.md) |
| kotlin | `client.getJobStatus` | [kotlin reference](../../../kotlin/operations/jobs/getjobstatus.md) |
| python | `client.jobs.get_status` | [python reference](../../../python/operations/jobs/getjobstatus.md) |
| rust | `client.get_job_status` | [rust reference](../../../rust/operations/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [typescript reference](../../../typescript/operations/jobs/getjobstatus.md) |

## Public members

| Surface | Callable |
| --- | --- |
| resource | `client.Jobs.GetStatus` |

## Signature

```go
func (service *JobsService) GetStatus(ctx context.Context, params JobsGetStatusParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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
