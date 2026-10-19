# startAgentJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Start an autonomous in-sandbox coding worker using the host model relay

Route: `POST` `/v1/agent-jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`POST` `/v1/agent-jobs`](../../../http/operations/jobs/startagentjob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startagentjob.md) |
| go | `client.Jobs.StartAgent` | [go reference](../../../go/operations/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [java reference](../../../java/operations/jobs/startagentjob.md) |
| javascript | `client.jobs.startAgent` | [javascript reference](../../../javascript/operations/jobs/startagentjob.md) |
| kotlin | `client.startAgentJob` | [kotlin reference](../../../kotlin/operations/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [rust reference](../../../rust/operations/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [typescript reference](../../../typescript/operations/jobs/startagentjob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.start_agent_job` |
| raw | `client.with_raw_response.start_agent_job` |
| resource | `client.jobs.start_agent` |

## Signature

```python
client.jobs.start_agent(body: StartAgentJobRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
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

```python
result = client.jobs.start_agent({'projectRoot': 'example', 'task': 'example'}, content_type='application/json')
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Autonomous coding job started | application/json (JobSummary) |
