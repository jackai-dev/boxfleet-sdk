# startProjectJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Start an isolated sandbox job for tests, builds, or custom commands

Route: `POST` `/v1/jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/jobs`](../../../http/operations/jobs/startprojectjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartProjectJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startprojectjob.md) |
| go | `client.Jobs.StartProject` | [go reference](../../../go/operations/jobs/startprojectjob.md) |
| javascript | `client.jobs.startProject` | [javascript reference](../../../javascript/operations/jobs/startprojectjob.md) |
| kotlin | `client.startProjectJob` | [kotlin reference](../../../kotlin/operations/jobs/startprojectjob.md) |
| python | `client.jobs.start_project` | [python reference](../../../python/operations/jobs/startprojectjob.md) |
| rust | `client.start_project_job` | [rust reference](../../../rust/operations/jobs/startprojectjob.md) |
| typescript | `client.jobs.startProject` | [typescript reference](../../../typescript/operations/jobs/startprojectjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.startProjectJob` |
| async | `client.startProjectJobAsync` |

## Signature

```java
public JobSummary startProjectJob(StartProjectJobRequest body)
public ApiResponse<JobSummary> startProjectJobWithResponse(StartProjectJobRequest body)
public CompletableFuture<ApiResponse<JobSummary>> startProjectJobWithResponseAsync(StartProjectJobRequest body)
public CompletableFuture<JobSummary> startProjectJobAsync(StartProjectJobRequest body)
public JobSummary startProjectJob(StartProjectJobRequest body, RequestOptions requestOptions)
public CompletableFuture<JobSummary> startProjectJobAsync(StartProjectJobRequest body, RequestOptions requestOptions)
public ApiResponse<JobSummary> startProjectJobWithResponse(StartProjectJobRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobSummary>> startProjectJobWithResponseAsync(StartProjectJobRequest body, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartProjectJobRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
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
| `201` | Job created and started | application/json (JobSummary) |
