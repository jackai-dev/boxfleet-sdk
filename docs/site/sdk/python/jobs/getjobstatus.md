---
title: "getJobStatus · python"
html: "getjobstatus.html"
language: "python"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getJobStatus

Retrieve current status, exit code, and cleanup receipt of a job

HTTP reference: [GET /v1/jobs/{jobId}](../../../http/jobs/getjobstatus.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.get_job_status` flat
- `client.with_raw_response.get_job_status` raw
- `client.jobs.get_status` resource

## Signature

```
client.jobs.get_status(job_id: str, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> JobSummary
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.jobs.get_status('example')
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `jobId` | path | yes | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Job status snapshot | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.GetJobStatusAsync` | [Open](../../dotnet/jobs/getjobstatus.md) |
| go | `client.Jobs.GetStatus` | [Open](../../go/jobs/getjobstatus.md) |
| java | `client.getJobStatus` | [Open](../../java/jobs/getjobstatus.md) |
| javascript | `client.jobs.getStatus` | [Open](../../javascript/jobs/getjobstatus.md) |
| kotlin | `client.getJobStatus` | [Open](../../kotlin/jobs/getjobstatus.md) |
| rust | `client.get_job_status` | [Open](../../rust/jobs/getjobstatus.md) |
| typescript | `client.jobs.getStatus` | [Open](../../typescript/jobs/getjobstatus.md) |
