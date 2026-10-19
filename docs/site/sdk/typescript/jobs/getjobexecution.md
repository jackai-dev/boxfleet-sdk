---
title: "getJobExecution · typescript"
html: "getjobexecution.html"
language: "typescript"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobExecution

Retrieve full execution evidence, model rounds, verification output, and Git patch

HTTP reference: [GET /v1/jobs/{jobId}/execution](../../../http/jobs/getjobexecution.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.getJobExecution` flat
- `client.jobs.getExecution` resource

## Signature

```
client.jobs.getExecution<Raw extends boolean = false>(jobId: string, requestOptions?: RequestOptions<Raw>): Promise<Raw extends true ? RawResponse<JobExecutionResponse> : WithRequestId<JobExecutionResponse>>;
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
const result = await client.jobs.getExecution("example");
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job execution evidence | application/json (JobExecutionResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobExecutionAsync` | [Open](../../dotnet/jobs/getjobexecution.md) |
| go | `client.Jobs.GetExecution` | [Open](../../go/jobs/getjobexecution.md) |
| java | `client.getJobExecution` | [Open](../../java/jobs/getjobexecution.md) |
| javascript | `client.jobs.getExecution` | [Open](../../javascript/jobs/getjobexecution.md) |
| kotlin | `client.getJobExecution` | [Open](../../kotlin/jobs/getjobexecution.md) |
| python | `client.jobs.get_execution` | [Open](../../python/jobs/getjobexecution.md) |
| rust | `client.get_job_execution` | [Open](../../rust/jobs/getjobexecution.md) |
