# startAgentJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Start an autonomous in-sandbox coding worker using the host model relay

Route: `POST` `/v1/agent-jobs`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`POST` `/v1/agent-jobs`](../../../http/operations/jobs/startagentjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startagentjob.md) |
| go | `client.Jobs.StartAgent` | [go reference](../../../go/operations/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [java reference](../../../java/operations/jobs/startagentjob.md) |
| kotlin | `client.startAgentJob` | [kotlin reference](../../../kotlin/operations/jobs/startagentjob.md) |
| python | `client.jobs.start_agent` | [python reference](../../../python/operations/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [rust reference](../../../rust/operations/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [typescript reference](../../../typescript/operations/jobs/startagentjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.startAgentJob` |
| resource | `client.jobs.startAgent` |

## Signature

```javascript
client.jobs.startAgent(body, requestOptions?)
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```javascript
const result = await client.jobs.startAgent({"projectRoot": "example", "task": "example"}, { contentType: "application/json" });
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Autonomous coding job started | application/json (JobSummary) |
