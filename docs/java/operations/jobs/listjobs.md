# listJobs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List sandbox execution jobs with optional status or box filters

Route: `GET` `/v1/jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/v1/jobs`](../../../http/operations/jobs/listjobs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListJobsAsync` | [dotnet reference](../../../dotnet/operations/jobs/listjobs.md) |
| go | `client.Jobs.List` | [go reference](../../../go/operations/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [javascript reference](../../../javascript/operations/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [kotlin reference](../../../kotlin/operations/jobs/listjobs.md) |
| python | `client.jobs.list` | [python reference](../../../python/operations/jobs/listjobs.md) |
| rust | `client.list_jobs` | [rust reference](../../../rust/operations/jobs/listjobs.md) |
| typescript | `client.jobs.list` | [typescript reference](../../../typescript/operations/jobs/listjobs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.listJobs` |
| async | `client.listJobsAsync` |

## Signature

```java
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

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | `query` | no | `string` |  |
| `boxId` | `query` | no | `string` |  |
| `limit` | `query` | no | `integer` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": []
}
```

## SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |
