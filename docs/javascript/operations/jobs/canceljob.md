# cancelJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Cancel a running job and trigger immediate sandbox cleanup

Route: `POST` `/v1/jobs/{jobId}/cancel`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/javascript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `702de30e4f323326bc7dfd2c1397dcb8d9e21419fe1ac077c0fe95d4341c6e20`

HTTP reference: [`POST` `/v1/jobs/{jobId}/cancel`](../../../http/operations/jobs/canceljob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [go reference](../../../go/operations/jobs/canceljob.md) |
| java | `client.cancelJob` | [java reference](../../../java/operations/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [kotlin reference](../../../kotlin/operations/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [python reference](../../../python/operations/jobs/canceljob.md) |
| rust | `client.cancel_job` | [rust reference](../../../rust/operations/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [typescript reference](../../../typescript/operations/jobs/canceljob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.cancelJob` |
| resource | `client.jobs.cancel` |

## Signature

```javascript
client.jobs.cancel(jobId, requestOptions?)
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```javascript
const result = await client.jobs.cancel("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |
