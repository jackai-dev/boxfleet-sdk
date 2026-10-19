---
title: "getJobExecution"
html: "getjobexecution.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobExecution

Retrieve full execution evidence, model rounds, verification output, and Git patch

GET `/v1/jobs/{jobId}/execution`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |

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
| dotnet | `client.GetJobExecutionAsync` | [Open](../../sdk/dotnet/jobs/getjobexecution.md) |
| go | `client.Jobs.GetExecution` | [Open](../../sdk/go/jobs/getjobexecution.md) |
| java | `client.getJobExecution` | [Open](../../sdk/java/jobs/getjobexecution.md) |
| javascript | `client.jobs.getExecution` | [Open](../../sdk/javascript/jobs/getjobexecution.md) |
| kotlin | `client.getJobExecution` | [Open](../../sdk/kotlin/jobs/getjobexecution.md) |
| python | `client.jobs.get_execution` | [Open](../../sdk/python/jobs/getjobexecution.md) |
| rust | `client.get_job_execution` | [Open](../../sdk/rust/jobs/getjobexecution.md) |
| typescript | `client.jobs.getExecution` | [Open](../../sdk/typescript/jobs/getjobexecution.md) |
