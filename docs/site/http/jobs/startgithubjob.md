---
title: "startGithubJob"
html: "startgithubjob.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startGithubJob

Clone a GitHub repository in a sandbox and run tests or an autonomous coding task

POST `/v1/github-jobs`

## Parameters

> This operation takes no parameters.

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `StartGithubJobRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | GitHub sandbox job started | application/json (JobSummary) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "body": {
    "repository": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartGithubJobAsync` | [Open](../../sdk/dotnet/jobs/startgithubjob.md) |
| go | `client.Jobs.StartGithub` | [Open](../../sdk/go/jobs/startgithubjob.md) |
| java | `client.startGithubJob` | [Open](../../sdk/java/jobs/startgithubjob.md) |
| javascript | `client.jobs.startGithub` | [Open](../../sdk/javascript/jobs/startgithubjob.md) |
| kotlin | `client.startGithubJob` | [Open](../../sdk/kotlin/jobs/startgithubjob.md) |
| python | `client.jobs.start_github` | [Open](../../sdk/python/jobs/startgithubjob.md) |
| rust | `client.start_github_job` | [Open](../../sdk/rust/jobs/startgithubjob.md) |
| typescript | `client.jobs.startGithub` | [Open](../../sdk/typescript/jobs/startgithubjob.md) |
