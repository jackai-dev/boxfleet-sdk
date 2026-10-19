---
title: "getJobStatus"
html: "getjobstatus.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobStatus

Retrieve current status, exit code, and cleanup receipt of a job

GET `/v1/jobs/{jobId}`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job status snapshot | application/json (JobSummary) |

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
| dotnet | `client.GetJobStatusAsync` | [Open](../../sdk/dotnet/jobs/getjobstatus.md) |
| go | `client.Jobs.GetStatus` | [Open](../../sdk/go/jobs/getjobstatus.md) |
| java | `client.getJobStatus` | [Open](../../sdk/java/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [Open](../../sdk/javascript/jobs/getjobstatus.md) |
| kotlin | `client.getJobStatus` | [Open](../../sdk/kotlin/jobs/getjobstatus.md) |
| python | `client.jobs.get_status` | [Open](../../sdk/python/jobs/getjobstatus.md) |
| rust | `client.get_job_status` | [Open](../../sdk/rust/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [Open](../../sdk/typescript/jobs/getjobstatus.md) |
