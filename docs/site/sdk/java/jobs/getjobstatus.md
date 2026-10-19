---
title: "getJobStatus · java"
html: "getjobstatus.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobStatus

Retrieve current status, exit code, and cleanup receipt of a job

HTTP reference: [GET /v1/jobs/{jobId}](../../../http/jobs/getjobstatus.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.getJobStatusAsync` async
- `client.getJobStatus` sync

## Signature

```
public JobSummary getJobStatus(String jobId)
public ApiResponse<JobSummary> getJobStatusWithResponse(String jobId)
public CompletableFuture<ApiResponse<JobSummary>> getJobStatusWithResponseAsync(String jobId)
public CompletableFuture<JobSummary> getJobStatusAsync(String jobId)
public JobSummary getJobStatus(String jobId, RequestOptions requestOptions)
public CompletableFuture<JobSummary> getJobStatusAsync(String jobId, RequestOptions requestOptions)
public ApiResponse<JobSummary> getJobStatusWithResponse(String jobId, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobSummary>> getJobStatusWithResponseAsync(String jobId, RequestOptions requestOptions)
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
| `200` | Job status snapshot | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobStatusAsync` | [Open](../../dotnet/jobs/getjobstatus.md) |
| go | `client.Jobs.GetStatus` | [Open](../../go/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [Open](../../javascript/jobs/getjobstatus.md) |
| kotlin | `client.getJobStatus` | [Open](../../kotlin/jobs/getjobstatus.md) |
| python | `client.jobs.get_status` | [Open](../../python/jobs/getjobstatus.md) |
| rust | `client.get_job_status` | [Open](../../rust/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [Open](../../typescript/jobs/getjobstatus.md) |
