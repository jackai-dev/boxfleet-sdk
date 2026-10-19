---
title: "listJobs · dotnet"
html: "listjobs.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listJobs

List sandbox execution jobs with optional status or box filters

HTTP reference: [GET /v1/jobs](../../../http/jobs/listjobs.md)

## Package

`BoxFleetSdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.ListJobsAsync` async

## Signature

```
public async Task<JobListResponse> ListJobsAsync(
ListJobsStatus? status = null,
string? boxId = null,
long? limit = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | query | no | `string` |  |
| `boxId` | query | no | `string` |  |
| `limit` | query | no | `integer` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Jobs.List` | [Open](../../go/jobs/listjobs.md) |
| java | `client.listJobs` | [Open](../../java/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [Open](../../javascript/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [Open](../../kotlin/jobs/listjobs.md) |
| python | `client.jobs.list` | [Open](../../python/jobs/listjobs.md) |
| rust | `client.list_jobs` | [Open](../../rust/jobs/listjobs.md) |
| typescript | `client.jobs.list` | [Open](../../typescript/jobs/listjobs.md) |
