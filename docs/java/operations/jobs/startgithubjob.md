# startGithubJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Clone a GitHub repository in a sandbox and run tests or an autonomous coding task

Route: `POST` `/v1/github-jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/github-jobs`](../../../http/operations/jobs/startgithubjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartGithubJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startgithubjob.md) |
| go | `client.Jobs.StartGithub` | [go reference](../../../go/operations/jobs/startgithubjob.md) |
| javascript | `client.jobs.startGithub` | [javascript reference](../../../javascript/operations/jobs/startgithubjob.md) |
| kotlin | `client.startGithubJob` | [kotlin reference](../../../kotlin/operations/jobs/startgithubjob.md) |
| python | `client.jobs.start_github` | [python reference](../../../python/operations/jobs/startgithubjob.md) |
| rust | `client.start_github_job` | [rust reference](../../../rust/operations/jobs/startgithubjob.md) |
| typescript | `client.jobs.startGithub` | [typescript reference](../../../typescript/operations/jobs/startgithubjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.startGithubJob` |
| async | `client.startGithubJobAsync` |

## Signature

```java
public JobSummary startGithubJob(StartGithubJobRequest body)
public ApiResponse<JobSummary> startGithubJobWithResponse(StartGithubJobRequest body)
public CompletableFuture<ApiResponse<JobSummary>> startGithubJobWithResponseAsync(StartGithubJobRequest body)
public CompletableFuture<JobSummary> startGithubJobAsync(StartGithubJobRequest body)
public JobSummary startGithubJob(StartGithubJobRequest body, RequestOptions requestOptions)
public CompletableFuture<JobSummary> startGithubJobAsync(StartGithubJobRequest body, RequestOptions requestOptions)
public ApiResponse<JobSummary> startGithubJobWithResponse(StartGithubJobRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobSummary>> startGithubJobWithResponseAsync(StartGithubJobRequest body, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartGithubJobRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {
    "repository": "example"
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
| `201` | GitHub sandbox job started | application/json (JobSummary) |
