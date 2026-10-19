---
title: "cancelJob · java"
html: "canceljob.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# cancelJob

Cancel a running job and trigger immediate sandbox cleanup

HTTP reference: [POST /v1/jobs/{jobId}/cancel](../../../http/jobs/canceljob.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.cancelJobAsync` async
- `client.cancelJob` sync

## Signature

```
public JobSummary cancelJob(String jobId)
public ApiResponse<JobSummary> cancelJobWithResponse(String jobId)
public CompletableFuture<ApiResponse<JobSummary>> cancelJobWithResponseAsync(String jobId)
public CompletableFuture<JobSummary> cancelJobAsync(String jobId)
public JobSummary cancelJob(String jobId, RequestOptions requestOptions)
public CompletableFuture<JobSummary> cancelJobAsync(String jobId, RequestOptions requestOptions)
public ApiResponse<JobSummary> cancelJobWithResponse(String jobId, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobSummary>> cancelJobWithResponseAsync(String jobId, RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [Open](../../dotnet/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [Open](../../go/jobs/canceljob.md) |
| javascript | `client.jobs.cancel` | [Open](../../javascript/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [Open](../../kotlin/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [Open](../../python/jobs/canceljob.md) |
| rust | `client.cancel_job` | [Open](../../rust/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [Open](../../typescript/jobs/canceljob.md) |
