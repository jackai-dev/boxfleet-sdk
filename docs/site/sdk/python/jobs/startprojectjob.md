---
title: "startProjectJob · python"
html: "startprojectjob.html"
language: "python"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startProjectJob

Start an isolated sandbox job for tests, builds, or custom commands

HTTP reference: [POST /v1/jobs](../../../http/jobs/startprojectjob.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.start_project_job` flat
- `client.with_raw_response.start_project_job` raw
- `client.jobs.start_project` resource

## Signature

```
client.jobs.start_project(body: StartProjectJobRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.jobs.start_project({'projectRoot': 'example'}, content_type='application/json')
```

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `201` | Job created and started | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartProjectJobAsync` | [Open](../../dotnet/jobs/startprojectjob.md) |
| go | `client.Jobs.StartProject` | [Open](../../go/jobs/startprojectjob.md) |
| java | `client.startProjectJob` | [Open](../../java/jobs/startprojectjob.md) |
| javascript | `client.jobs.startProject` | [Open](../../javascript/jobs/startprojectjob.md) |
| kotlin | `client.startProjectJob` | [Open](../../kotlin/jobs/startprojectjob.md) |
| rust | `client.start_project_job` | [Open](../../rust/jobs/startprojectjob.md) |
| typescript | `client.jobs.startProject` | [Open](../../typescript/jobs/startprojectjob.md) |
