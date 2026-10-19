---
title: "getJobLogs"
html: "getjoblogs.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobLogs

Read redacted stdout and stderr streams for a sandbox job

GET `/v1/jobs/{jobId}/logs`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Redacted job logs | application/json (JobLogsResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
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

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobLogsAsync` | [Open](../../sdk/dotnet/jobs/getjoblogs.md) |
| go | `client.Jobs.GetLogs` | [Open](../../sdk/go/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [Open](../../sdk/java/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [Open](../../sdk/javascript/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [Open](../../sdk/kotlin/jobs/getjoblogs.md) |
| python | `client.jobs.get_logs` | [Open](../../sdk/python/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [Open](../../sdk/rust/jobs/getjoblogs.md) |
| typescript | `client.jobs.getLogs` | [Open](../../sdk/typescript/jobs/getjoblogs.md) |
