---
title: "startProjectJob · dotnet"
html: "startprojectjob.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startProjectJob

Start an isolated sandbox job for tests, builds, or custom commands

HTTP reference: [POST /v1/jobs](../../../http/jobs/startprojectjob.md)

## Package

`BoxFleetSdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.StartProjectJobAsync` async

## Signature

```
public async Task<JobSummary> StartProjectJobAsync(
StartProjectJobRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
```

## Example

> No example is generated for this operation in this SDK.

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
| go | `client.Jobs.StartProject` | [Open](../../go/jobs/startprojectjob.md) |
| java | `client.startProjectJob` | [Open](../../java/jobs/startprojectjob.md) |
| javascript | `client.jobs.startProject` | [Open](../../javascript/jobs/startprojectjob.md) |
| kotlin | `client.startProjectJob` | [Open](../../kotlin/jobs/startprojectjob.md) |
| python | `client.jobs.start_project` | [Open](../../python/jobs/startprojectjob.md) |
| rust | `client.start_project_job` | [Open](../../rust/jobs/startprojectjob.md) |
| typescript | `client.jobs.startProject` | [Open](../../typescript/jobs/startprojectjob.md) |
