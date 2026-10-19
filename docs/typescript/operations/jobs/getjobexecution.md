# getJobExecution

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve full execution evidence, model rounds, verification output, and Git patch

Route: `GET` `/v1/jobs/{jobId}/execution`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

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
| rust | `client.get_job_execution` | [rust reference](../../../rust/operations/jobs/getjobexecution.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.getJobExecution` |
| resource | `client.jobs.getExecution` |

## Signature

```typescript
client.jobs.getExecution<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobExecutionResponse> : WithRequestId<JobExecutionResponse>>;
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
const result = await client.jobs.getExecution("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |
