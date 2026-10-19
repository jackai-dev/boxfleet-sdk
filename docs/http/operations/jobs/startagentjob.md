# startAgentJob

[All HTTP operations](../../index.md)

Start an autonomous in-sandbox coding worker using the host model relay

Operation identity: `startAgentJob`  
Route: `POST` `/v1/agent-jobs`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartAgentJobRequest` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `StartAgentJobRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Autonomous coding job started | application/json (JobSummary) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

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

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startagentjob.md) |
| go | `client.Jobs.StartAgent` | [go reference](../../../go/operations/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [java reference](../../../java/operations/jobs/startagentjob.md) |
| javascript | `client.jobs.startAgent` | [javascript reference](../../../javascript/operations/jobs/startagentjob.md) |
| kotlin | `client.startAgentJob` | [kotlin reference](../../../kotlin/operations/jobs/startagentjob.md) |
| python | `client.jobs.start_agent` | [python reference](../../../python/operations/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [rust reference](../../../rust/operations/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [typescript reference](../../../typescript/operations/jobs/startagentjob.md) |
