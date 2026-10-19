# cancelJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Cancel a running job and trigger immediate sandbox cleanup

Route: `POST` `/v1/jobs/{jobId}/cancel`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`POST` `/v1/jobs/{jobId}/cancel`](../../../http/operations/jobs/canceljob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [go reference](../../../go/operations/jobs/canceljob.md) |
| java | `client.cancelJob` | [java reference](../../../java/operations/jobs/canceljob.md) |
| javascript | `client.jobs.cancel` | [javascript reference](../../../javascript/operations/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [python reference](../../../python/operations/jobs/canceljob.md) |
| rust | `client.cancel_job` | [rust reference](../../../rust/operations/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [typescript reference](../../../typescript/operations/jobs/canceljob.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.cancelJob` |

## Signature

```kotlin
suspend fun cancelJob(params: CancelJobParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
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
