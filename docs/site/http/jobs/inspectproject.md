---
title: "inspectProject"
html: "inspectproject.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# inspectProject

Inspect a project root to detect runtimes, package managers, and test/build commands

POST `/v1/inspect`

## Parameters

> This operation takes no parameters.

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `InspectProjectRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |

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
| dotnet | `client.InspectProjectAsync` | [Open](../../sdk/dotnet/jobs/inspectproject.md) |
| go | `client.Jobs.InspectProject` | [Open](../../sdk/go/jobs/inspectproject.md) |
| java | `client.inspectProject` | [Open](../../sdk/java/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [Open](../../sdk/javascript/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [Open](../../sdk/kotlin/jobs/inspectproject.md) |
| python | `client.jobs.inspect_project` | [Open](../../sdk/python/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [Open](../../sdk/rust/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [Open](../../sdk/typescript/jobs/inspectproject.md) |
