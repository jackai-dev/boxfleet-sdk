# getJobLogs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Read redacted stdout and stderr streams for a sandbox job

Route: `GET` `/v1/jobs/{jobId}/logs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/go/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `978e5bf64816d75c36685ed60679a586b2970a0b267ccc222d0378ca3c6b3580`

HTTP reference: [`GET` `/v1/jobs/{jobId}/logs`](../../../http/operations/jobs/getjoblogs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobLogsAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [java reference](../../../java/operations/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [javascript reference](../../../javascript/operations/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [kotlin reference](../../../kotlin/operations/jobs/getjoblogs.md) |
| python | `client.jobs.get_logs` | [python reference](../../../python/operations/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [rust reference](../../../rust/operations/jobs/getjoblogs.md) |
| typescript | `client.jobs.getLogs` | [typescript reference](../../../typescript/operations/jobs/getjoblogs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| resource | `client.Jobs.GetLogs` |

## Signature

```go
func (service *JobsService) GetLogs(ctx context.Context, params JobsGetLogsParams, opts ...option.RequestOption) (*Response[*JobLogsResponse], error)
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
| `200` | Redacted job logs | application/json (JobLogsResponse) |
