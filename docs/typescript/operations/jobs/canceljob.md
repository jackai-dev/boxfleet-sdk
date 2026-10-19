# cancelJob

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Cancel a running job and trigger immediate sandbox cleanup

Route: `POST` `/v1/jobs/{jobId}/cancel`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`POST` `/v1/jobs/{jobId}/cancel`](../../../http/operations/jobs/canceljob.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [go reference](../../../go/operations/jobs/canceljob.md) |
| java | `client.cancelJob` | [java reference](../../../java/operations/jobs/canceljob.md) |
| javascript | `client.jobs.cancel` | [javascript reference](../../../javascript/operations/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [kotlin reference](../../../kotlin/operations/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [python reference](../../../python/operations/jobs/canceljob.md) |
| rust | `client.cancel_job` | [rust reference](../../../rust/operations/jobs/canceljob.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.cancelJob` |
| resource | `client.jobs.cancel` |

## Signature

```typescript
client.jobs.cancel<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobSummary> : WithRequestId<JobSummary>>;
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

```typescript
const result = await client.jobs.cancel("example");
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |
