# cancelJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Cancel a running job and trigger immediate sandbox cleanup

Route: `POST` `/v1/jobs/{jobId}/cancel`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`POST` `/v1/jobs/{jobId}/cancel`](../../../http/operations/jobs/canceljob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [go reference](../../../go/operations/jobs/canceljob.md) |
| javascript | `client.jobs.cancel` | [javascript reference](../../../javascript/operations/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [kotlin reference](../../../kotlin/operations/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [python reference](../../../python/operations/jobs/canceljob.md) |
| rust | `client.cancel_job` | [rust reference](../../../rust/operations/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [typescript reference](../../../typescript/operations/jobs/canceljob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.cancelJob` |
| async | `client.cancelJobAsync` |

## Signature

```java
public JobSummary cancelJob(String jobId)
public ApiResponse<JobSummary> cancelJobWithResponse(String jobId)
public CompletableFuture<ApiResponse<JobSummary>> cancelJobWithResponseAsync(String jobId)
public CompletableFuture<JobSummary> cancelJobAsync(String jobId)
public JobSummary cancelJob(String jobId, RequestOptions requestOptions)
public CompletableFuture<JobSummary> cancelJobAsync(String jobId, RequestOptions requestOptions)
public ApiResponse<JobSummary> cancelJobWithResponse(String jobId, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<JobSummary>> cancelJobWithResponseAsync(String jobId, RequestOptions requestOptions)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | `path` | yes | `string` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": [
    {
      "in": "path",
      "name": "jobId",
      "value": "example"
    }
  ]
}
```

## SDK call example

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |
