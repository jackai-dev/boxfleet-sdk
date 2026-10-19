# startGithubJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Clone a GitHub repository in a sandbox and run tests or an autonomous coding task

Route: `POST` `/v1/github-jobs`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`POST` `/v1/github-jobs`](../../../http/operations/jobs/startgithubjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartGithubJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startgithubjob.md) |
| go | `client.Jobs.StartGithub` | [go reference](../../../go/operations/jobs/startgithubjob.md) |
| java | `client.startGithubJob` | [java reference](../../../java/operations/jobs/startgithubjob.md) |
| javascript | `client.jobs.startGithub` | [javascript reference](../../../javascript/operations/jobs/startgithubjob.md) |
| kotlin | `client.startGithubJob` | [kotlin reference](../../../kotlin/operations/jobs/startgithubjob.md) |
| python | `client.jobs.start_github` | [python reference](../../../python/operations/jobs/startgithubjob.md) |
| rust | `client.start_github_job` | [rust reference](../../../rust/operations/jobs/startgithubjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.startGithubJob` |
| resource | `client.jobs.startGithub` |

## Signature

```typescript
client.jobs.startGithub<Raw extends boolean = false>(body: StartGithubJobRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.jobs.startGithub({"repository": "example"}, { contentType: "application/json" });
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | GitHub sandbox job started | application/json (JobSummary) |
