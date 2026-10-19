# getJobExecution

[All HTTP operations](../../index.md)

Retrieve full execution evidence, model rounds, verification output, and Git patch

Operation identity: `getJobExecution`  
Route: `GET` `/v1/jobs/{jobId}/execution`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

## Request body

This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

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

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobExecutionAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobexecution.md) |
| go | `client.Jobs.GetExecution` | [go reference](../../../go/operations/jobs/getjobexecution.md) |
| java | `client.getJobExecution` | [java reference](../../../java/operations/jobs/getjobexecution.md) |
| javascript | `client.jobs.getExecution` | [javascript reference](../../../javascript/operations/jobs/getjobexecution.md) |
| kotlin | `client.getJobExecution` | [kotlin reference](../../../kotlin/operations/jobs/getjobexecution.md) |
| python | `client.jobs.get_execution` | [python reference](../../../python/operations/jobs/getjobexecution.md) |
| rust | `client.get_job_execution` | [rust reference](../../../rust/operations/jobs/getjobexecution.md) |
| typescript | `client.jobs.getExecution` | [typescript reference](../../../typescript/operations/jobs/getjobexecution.md) |
