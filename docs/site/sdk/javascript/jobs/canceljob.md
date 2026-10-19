---
title: "cancelJob · javascript"
html: "canceljob.html"
language: "javascript"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# cancelJob

Cancel a running job and trigger immediate sandbox cleanup

HTTP reference: [POST /v1/jobs/{jobId}/cancel](../../../http/jobs/canceljob.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.cancelJob` flat
- `client.jobs.cancel` resource

## Signature

```
client.jobs.cancel(jobId, requestOptions?)
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
const result = await client.jobs.cancel("example");
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Cancellation result | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.CancelJobAsync` | [Open](../../dotnet/jobs/canceljob.md) |
| go | `client.Jobs.Cancel` | [Open](../../go/jobs/canceljob.md) |
| java | `client.cancelJob` | [Open](../../java/jobs/canceljob.md) |
| kotlin | `client.cancelJob` | [Open](../../kotlin/jobs/canceljob.md) |
| python | `client.jobs.cancel` | [Open](../../python/jobs/canceljob.md) |
| rust | `client.cancel_job` | [Open](../../rust/jobs/canceljob.md) |
| typescript | `client.jobs.cancel` | [Open](../../typescript/jobs/canceljob.md) |
