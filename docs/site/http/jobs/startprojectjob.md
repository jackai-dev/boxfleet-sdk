---
title: "startProjectJob"
html: "startprojectjob.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startProjectJob

Start an isolated sandbox job for tests, builds, or custom commands

POST `/v1/jobs`

## Parameters

> This operation takes no parameters.

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `StartProjectJobRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Job created and started | application/json (JobSummary) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartProjectJobAsync` | [Open](../../sdk/dotnet/jobs/startprojectjob.md) |
| go | `client.Jobs.StartProject` | [Open](../../sdk/go/jobs/startprojectjob.md) |
| java | `client.startProjectJob` | [Open](../../sdk/java/jobs/startprojectjob.md) |
| javascript | `client.jobs.startProject` | [Open](../../sdk/javascript/jobs/startprojectjob.md) |
| kotlin | `client.startProjectJob` | [Open](../../sdk/kotlin/jobs/startprojectjob.md) |
| python | `client.jobs.start_project` | [Open](../../sdk/python/jobs/startprojectjob.md) |
| rust | `client.start_project_job` | [Open](../../sdk/rust/jobs/startprojectjob.md) |
| typescript | `client.jobs.startProject` | [Open](../../sdk/typescript/jobs/startprojectjob.md) |
