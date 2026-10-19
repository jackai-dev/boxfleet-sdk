# getJobLogs

[All HTTP operations](../../index.md)

Read redacted stdout and stderr streams for a sandbox job

Operation identity: `getJobLogs`  
Route: `GET` `/v1/jobs/{jobId}/logs`  
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
| `200` | Redacted job logs | application/json (JobLogsResponse) |

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
| dotnet | `client.GetJobLogsAsync` | [dotnet reference](../../../dotnet/operations/jobs/getjoblogs.md) |
| go | `client.Jobs.GetLogs` | [go reference](../../../go/operations/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [java reference](../../../java/operations/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [javascript reference](../../../javascript/operations/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [kotlin reference](../../../kotlin/operations/jobs/getjoblogs.md) |
| python | `client.jobs.get_logs` | [python reference](../../../python/operations/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [rust reference](../../../rust/operations/jobs/getjoblogs.md) |
| typescript | `client.jobs.getLogs` | [typescript reference](../../../typescript/operations/jobs/getjoblogs.md) |
