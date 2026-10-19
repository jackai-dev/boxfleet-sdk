---
title: "listJobs · java"
html: "listjobs.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listJobs

List sandbox execution jobs with optional status or box filters

HTTP reference: [GET /v1/jobs](../../../http/jobs/listjobs.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.listJobsAsync` async
- `client.listJobs` sync

## Signature

```
public JobListResponse listJobs()
public ApiResponse<JobListResponse> listJobsWithResponse()
public CompletableFuture<ApiResponse<JobListResponse>> listJobsWithResponseAsync()
public CompletableFuture<JobListResponse> listJobsAsync()
public JobListResponse listJobs(RequestOptions requestOptions)
public ApiResponse<JobListResponse> listJobsWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobListResponse>> listJobsWithResponseAsync(RequestOptions requestOptions)
public CompletableFuture<JobListResponse> listJobsAsync(RequestOptions requestOptions)
public JobListResponse listJobs(String status, String boxId, Long limit)
public ApiResponse<JobListResponse> listJobsWithResponse(String status, String boxId, Long limit)
public CompletableFuture<ApiResponse<JobListResponse>> listJobsWithResponseAsync(String status, String boxId, Long limit)
public CompletableFuture<JobListResponse> listJobsAsync(String status, String boxId, Long limit)
public JobListResponse listJobs(String status, String boxId, Long limit, RequestOptions requestOptions)
public CompletableFuture<JobListResponse> listJobsAsync(String status, String boxId, Long limit, RequestOptions requestOptions)
public ApiResponse<JobListResponse> listJobsWithResponse(String status, String boxId, Long limit, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobListResponse>> listJobsWithResponseAsync(String status, String boxId, Long limit, RequestOptions requestOptions)
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
| dotnet | `client.ListJobsAsync` | [Open](../../dotnet/jobs/listjobs.md) |
| go | `client.Jobs.List` | [Open](../../go/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [Open](../../javascript/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [Open](../../kotlin/jobs/listjobs.md) |
| python | `client.jobs.list` | [Open](../../python/jobs/listjobs.md) |
| rust | `client.list_jobs` | [Open](../../rust/jobs/listjobs.md) |
| typescript | `client.jobs.list` | [Open](../../typescript/jobs/listjobs.md) |
