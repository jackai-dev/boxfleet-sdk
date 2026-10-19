# getJobStatus

[All HTTP operations](../../index.md)

Retrieve current status, exit code, and cleanup receipt of a job

Operation identity: `getJobStatus`  
Route: `GET` `/v1/jobs/{jobId}`  
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
| `200` | Job status snapshot | application/json (JobSummary) |

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
| dotnet | `client.GetJobStatusAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjobstatus.md) |
| go | `client.Jobs.GetStatus` | [go reference](../../../go/operations/jobs/getjobstatus.md) |
| java | `client.getJobStatus` | [java reference](../../../java/operations/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [javascript reference](../../../javascript/operations/jobs/getjobstatus.md) |
| kotlin | `client.getJobStatus` | [kotlin reference](../../../kotlin/operations/jobs/getjobstatus.md) |
| python | `client.jobs.get_status` | [python reference](../../../python/operations/jobs/getjobstatus.md) |
| rust | `client.get_job_status` | [rust reference](../../../rust/operations/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [typescript reference](../../../typescript/operations/jobs/getjobstatus.md) |
