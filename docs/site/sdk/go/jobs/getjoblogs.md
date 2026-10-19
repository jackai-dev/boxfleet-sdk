---
title: "getJobLogs · go"
html: "getjoblogs.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobLogs

Read redacted stdout and stderr streams for a sandbox job

HTTP reference: [GET /v1/jobs/{jobId}/logs](../../../http/jobs/getjoblogs.md)

## Package

`boxfleet` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.Jobs.GetLogs` resource

## Signature

```
func (service *JobsService) GetLogs(ctx context.Context, params JobsGetLogsParams, opts ...option.RequestOption) (*Response[*JobLogsResponse], error)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Redacted job logs | application/json (JobLogsResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobLogsAsync` | [Open](../../dotnet/jobs/getjoblogs.md) |
| java | `client.getJobLogs` | [Open](../../java/jobs/getjoblogs.md) |
| javascript | `client.jobs.getLogs` | [Open](../../javascript/jobs/getjoblogs.md) |
| kotlin | `client.getJobLogs` | [Open](../../kotlin/jobs/getjoblogs.md) |
| python | `client.jobs.get_logs` | [Open](../../python/jobs/getjoblogs.md) |
| rust | `client.get_job_logs` | [Open](../../rust/jobs/getjoblogs.md) |
| typescript | `client.jobs.getLogs` | [Open](../../typescript/jobs/getjoblogs.md) |
