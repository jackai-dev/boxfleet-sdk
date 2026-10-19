# startAgentJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Start an autonomous in-sandbox coding worker using the host model relay

Route: `POST` `/v1/agent-jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`POST` `/v1/agent-jobs`](../../../http/operations/jobs/startagentjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startagentjob.md) |
| go | `client.Jobs.StartAgent` | [go reference](../../../go/operations/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [java reference](../../../java/operations/jobs/startagentjob.md) |
| javascript | `client.jobs.startAgent` | [javascript reference](../../../javascript/operations/jobs/startagentjob.md) |
| python | `client.jobs.start_agent` | [python reference](../../../python/operations/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [rust reference](../../../rust/operations/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [typescript reference](../../../typescript/operations/jobs/startagentjob.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.startAgentJob` |

## Signature

```kotlin
suspend fun startAgentJob(params: StartAgentJobParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<JobSummary>
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartAgentJobRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {
    "projectRoot": "example",
    "task": "example"
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
| `201` | Autonomous coding job started | application/json (JobSummary) |
