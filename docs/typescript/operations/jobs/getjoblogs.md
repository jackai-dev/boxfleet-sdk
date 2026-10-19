# getJobLogs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Read redacted stdout and stderr streams for a sandbox job

Route: `GET` `/v1/jobs/{jobId}/logs`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`GET` `/v1/jobs/{jobId}/logs`](../../../http/operations/jobs/getjoblogs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobLogsAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjoblogs.md) |
| go | `client.Jobs.GetLogs` | [go reference](../../../go/operations/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [java reference](../../../java/operations/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [javascript reference](../../../javascript/operations/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [kotlin reference](../../../kotlin/operations/jobs/getjoblogs.md) |
| python | `client.jobs.get_logs` | [python reference](../../../python/operations/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [rust reference](../../../rust/operations/jobs/getjoblogs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.getJobLogs` |
| resource | `client.jobs.getLogs` |

## Signature

```typescript
client.jobs.getLogs<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobLogsResponse> : WithRequestId<JobLogsResponse>>;
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

```typescript
const result = await client.jobs.getLogs("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Redacted job logs | application/json (JobLogsResponse) |
