# startAgentJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Start an autonomous in-sandbox coding worker using the host model relay

Route: `POST` `/v1/agent-jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/go/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `978e5bf64816d75c36685ed60679a586b2970a0b267ccc222d0378ca3c6b3580`

HTTP reference: [`POST` `/v1/agent-jobs`](../../../http/operations/jobs/startagentjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [java reference](../../../java/operations/jobs/startagentjob.md) |
| javascript | `client.jobs.startAgent` | [javascript reference](../../../javascript/operations/jobs/startagentjob.md) |
| kotlin | `client.startAgentJob` | [kotlin reference](../../../kotlin/operations/jobs/startagentjob.md) |
| python | `client.jobs.start_agent` | [python reference](../../../python/operations/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [rust reference](../../../rust/operations/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [typescript reference](../../../typescript/operations/jobs/startagentjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| resource | `client.Jobs.StartAgent` |

## Signature

```go
func (service *JobsService) StartAgent(ctx context.Context, params JobsStartAgentParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
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
