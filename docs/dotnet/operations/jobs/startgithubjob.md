# startGithubJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Clone a GitHub repository in a sandbox and run tests or an autonomous coding task

Route: `POST` `/v1/github-jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`POST` `/v1/github-jobs`](../../../http/operations/jobs/startgithubjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Jobs.StartGithub` | [go reference](../../../go/operations/jobs/startgithubjob.md) |
| java | `client.startGithubJob` | [java reference](../../../java/operations/jobs/startgithubjob.md) |
| javascript | `client.jobs.startGithub` | [javascript reference](../../../javascript/operations/jobs/startgithubjob.md) |
| kotlin | `client.startGithubJob` | [kotlin reference](../../../kotlin/operations/jobs/startgithubjob.md) |
| python | `client.jobs.start_github` | [python reference](../../../python/operations/jobs/startgithubjob.md) |
| rust | `client.start_github_job` | [rust reference](../../../rust/operations/jobs/startgithubjob.md) |
| typescript | `client.jobs.startGithub` | [typescript reference](../../../typescript/operations/jobs/startgithubjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.StartGithubJobAsync` |

## Signature

```csharp
public async Task<JobSummary> StartGithubJobAsync(
StartGithubJobRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
