# getJobLogs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Read redacted stdout and stderr streams for a sandbox job

Route: `GET` `/v1/jobs/{jobId}/logs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`GET` `/v1/jobs/{jobId}/logs`](../../../http/operations/jobs/getjoblogs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Jobs.GetLogs` | [go reference](../../../go/operations/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [java reference](../../../java/operations/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [javascript reference](../../../javascript/operations/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [kotlin reference](../../../kotlin/operations/jobs/getjoblogs.md) |
| python | `client.jobs.get_logs` | [python reference](../../../python/operations/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [rust reference](../../../rust/operations/jobs/getjoblogs.md) |
| typescript | `client.jobs.getLogs` | [typescript reference](../../../typescript/operations/jobs/getjoblogs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.GetJobLogsAsync` |

## Signature

```csharp
public async Task<JobLogsResponse> GetJobLogsAsync(
string jobId,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
