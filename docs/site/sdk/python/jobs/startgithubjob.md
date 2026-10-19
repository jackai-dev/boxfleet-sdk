---
title: "startGithubJob · python"
html: "startgithubjob.html"
language: "python"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startGithubJob

Clone a GitHub repository in a sandbox and run tests or an autonomous coding task

HTTP reference: [POST /v1/github-jobs](../../../http/jobs/startgithubjob.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.start_github_job` flat
- `client.with_raw_response.start_github_job` raw
- `client.jobs.start_github` resource

## Signature

```
client.jobs.start_github(body: StartGithubJobRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.jobs.start_github({'repository': 'example'}, content_type='application/json')
```

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `201` | GitHub sandbox job started | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartGithubJobAsync` | [Open](../../dotnet/jobs/startgithubjob.md) |
| go | `client.Jobs.StartGithub` | [Open](../../go/jobs/startgithubjob.md) |
| java | `client.startGithubJob` | [Open](../../java/jobs/startgithubjob.md) |
| javascript | `client.jobs.startGithub` | [Open](../../javascript/jobs/startgithubjob.md) |
| kotlin | `client.startGithubJob` | [Open](../../kotlin/jobs/startgithubjob.md) |
| rust | `client.start_github_job` | [Open](../../rust/jobs/startgithubjob.md) |
| typescript | `client.jobs.startGithub` | [Open](../../typescript/jobs/startgithubjob.md) |
