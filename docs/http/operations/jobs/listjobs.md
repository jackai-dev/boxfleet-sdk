# listJobs

[All HTTP operations](../../index.md)

List sandbox execution jobs with optional status or box filters

Operation identity: `listJobs`  
Route: `GET` `/v1/jobs`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `status` | `query` | no | `string` |  |
| `boxId` | `query` | no | `string` |  |
| `limit` | `query` | no | `integer` |  |

## Request body

This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Paginated job list | application/json (JobListResponse) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "parameters": []
}
```

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.ListJobsAsync` | [dotnet reference](../../../dotnet/operations/jobs/listjobs.md) |
| go | `client.Jobs.List` | [go reference](../../../go/operations/jobs/listjobs.md) |
| java | `client.listJobs` | [java reference](../../../java/operations/jobs/listjobs.md) |
| javascript | `client.jobs.list` | [javascript reference](../../../javascript/operations/jobs/listjobs.md) |
| kotlin | `client.listJobs` | [kotlin reference](../../../kotlin/operations/jobs/listjobs.md) |
| python | `client.jobs.list` | [python reference](../../../python/operations/jobs/listjobs.md) |
| rust | `client.list_jobs` | [rust reference](../../../rust/operations/jobs/listjobs.md) |
| typescript | `client.jobs.list` | [typescript reference](../../../typescript/operations/jobs/listjobs.md) |
