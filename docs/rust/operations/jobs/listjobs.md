# listJobs

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

List sandbox execution jobs with optional status or box filters

Route: `GET` `/v1/jobs`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

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
| typescript | `client.jobs.list` | [typescript reference](../../../typescript/operations/jobs/listjobs.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.list_jobs` |

## Signature

```rust
pub async fn list_jobs(&self, status_value: Option<ListJobsStatus>, box_id: Option<String>, limit: Option<i64>, request_options: Option<RequestOptions>) -> Result<JobListResponse, ApiError>
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

Example status: `unsupported`  
Unsupported reason: `language-example-not-generated`

No language call is emitted without an attested callable and a provably valid required-argument plan.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |
