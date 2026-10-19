# getJobExecution

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Retrieve full execution evidence, model rounds, verification output, and Git patch

Route: `GET` `/v1/jobs/{jobId}/execution`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`GET` `/v1/jobs/{jobId}/execution`](../../../http/operations/jobs/getjobexecution.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobExecutionAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobexecution.md) |
| go | `client.Jobs.GetExecution` | [go reference](../../../go/operations/jobs/getjobexecution.md) |
| java | `client.getJobExecution` | [java reference](../../../java/operations/jobs/getjobexecution.md) |
| kotlin | `client.getJobExecution` | [kotlin reference](../../../kotlin/operations/jobs/getjobexecution.md) |
| python | `client.jobs.get_execution` | [python reference](../../../python/operations/jobs/getjobexecution.md) |
| rust | `client.get_job_execution` | [rust reference](../../../rust/operations/jobs/getjobexecution.md) |
| typescript | `client.jobs.getExecution` | [typescript reference](../../../typescript/operations/jobs/getjobexecution.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.getJobExecution` |
| resource | `client.jobs.getExecution` |

## Signature

```javascript
client.jobs.getExecution(jobId, requestOptions?)
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

```javascript
const result = await client.jobs.getExecution("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |
