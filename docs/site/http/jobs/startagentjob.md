---
title: "startAgentJob"
html: "startagentjob.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startAgentJob

Start an autonomous in-sandbox coding worker using the host model relay

POST `/v1/agent-jobs`

## Parameters

> This operation takes no parameters.

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `StartAgentJobRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Autonomous coding job started | application/json (JobSummary) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {
    "projectRoot": "example",
    "task": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [Open](../../sdk/dotnet/jobs/startagentjob.md) |
| go | `client.Jobs.StartAgent` | [Open](../../sdk/go/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [Open](../../sdk/java/jobs/startagentjob.md) |
| javascript | `client.jobs.startAgent` | [Open](../../sdk/javascript/jobs/startagentjob.md) |
| kotlin | `client.startAgentJob` | [Open](../../sdk/kotlin/jobs/startagentjob.md) |
| python | `client.jobs.start_agent` | [Open](../../sdk/python/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [Open](../../sdk/rust/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [Open](../../sdk/typescript/jobs/startagentjob.md) |
