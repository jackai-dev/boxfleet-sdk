# listJobs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List sandbox execution jobs with optional status or box filters

Route: `GET` `/v1/jobs`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`GET` `/v1/jobs`](../../../http/operations/jobs/listjobs.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListJobsAsync` | [dotnet reference](../../../dotnet/operations/jobs/listjobs.md) |
| go | `client.Jobs.List` | [go reference](../../../go/operations/jobs/listjobs.md) |
| java | `client.listJobs` | [java reference](../../../java/operations/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [javascript reference](../../../javascript/operations/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [kotlin reference](../../../kotlin/operations/jobs/listjobs.md) |
| python | `client.jobs.list` | [python reference](../../../python/operations/jobs/listjobs.md) |
| rust | `client.list_jobs` | [rust reference](../../../rust/operations/jobs/listjobs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.listJobs` |
| resource | `client.jobs.list` |

## Signature

```typescript
client.jobs.list<Raw extends boolean = false>(requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(boxId?: string, limit?: number, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(status?: "queued" | "running" | "succeeded" | "failed" | "cancelled", limit?: number, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(status?: "queued" | "running" | "succeeded" | "failed" | "cancelled", boxId?: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
client.jobs.list<Raw extends boolean = false>(status?: "queued" | "running" | "succeeded" | "failed" | "cancelled", boxId?: string, limit?: number, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobListResponse> : WithRequestId<JobListResponse>>;
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | `query` | no | `string` |  |
| `boxId` | `query` | no | `string` |  |
| `limit` | `query` | no | `integer` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "parameters": []
}
```

## SDK call example

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.jobs.list();
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |
