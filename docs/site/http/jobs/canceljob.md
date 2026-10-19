---
title: "cancelJob"
html: "canceljob.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# cancelJob

Cancel a running job and trigger immediate sandbox cleanup

POST `/v1/jobs/{jobId}/cancel`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |

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
| dotnet | `client.CancelJobAsync` | [Open](../../sdk/dotnet/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [Open](../../sdk/go/jobs/canceljob.md) |
| java | `client.cancelJob` | [Open](../../sdk/java/jobs/canceljob.md) |
| javascript | `client.jobs.cancel` | [Open](../../sdk/javascript/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [Open](../../sdk/kotlin/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [Open](../../sdk/python/jobs/canceljob.md) |
| rust | `client.cancel_job` | [Open](../../sdk/rust/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [Open](../../sdk/typescript/jobs/canceljob.md) |
