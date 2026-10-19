---
title: "listJobs"
html: "listjobs.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listJobs

List sandbox execution jobs with optional status or box filters

GET `/v1/jobs`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | query | no | `string` |  |
| `boxId` | query | no | `string` |  |
| `limit` | query | no | `integer` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListJobsAsync` | [Open](../../sdk/dotnet/jobs/listjobs.md) |
| go | `client.Jobs.List` | [Open](../../sdk/go/jobs/listjobs.md) |
| java | `client.listJobs` | [Open](../../sdk/java/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [Open](../../sdk/javascript/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [Open](../../sdk/kotlin/jobs/listjobs.md) |
| python | `client.jobs.list` | [Open](../../sdk/python/jobs/listjobs.md) |
| rust | `client.list_jobs` | [Open](../../sdk/rust/jobs/listjobs.md) |
| typescript | `client.jobs.list` | [Open](../../sdk/typescript/jobs/listjobs.md) |
