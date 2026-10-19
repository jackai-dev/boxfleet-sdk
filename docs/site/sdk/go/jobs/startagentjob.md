---
title: "startAgentJob · go"
html: "startagentjob.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# startAgentJob

Start an autonomous in-sandbox coding worker using the host model relay

HTTP reference: [POST /v1/agent-jobs](../../../http/jobs/startagentjob.md)

## Package

`boxfleet` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.Jobs.StartAgent` resource

## Signature

```
func (service *JobsService) StartAgent(ctx context.Context, params JobsStartAgentParams, opts ...option.RequestOption) (*Response[*JobSummary], error)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `201` | Autonomous coding job started | application/json (JobSummary) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.StartAgentJobAsync` | [Open](../../dotnet/jobs/startagentjob.md) |
| java | `client.startAgentJob` | [Open](../../java/jobs/startagentjob.md) |
| javascript | `client.jobs.startAgent` | [Open](../../javascript/jobs/startagentjob.md) |
| kotlin | `client.startAgentJob` | [Open](../../kotlin/jobs/startagentjob.md) |
| python | `client.jobs.start_agent` | [Open](../../python/jobs/startagentjob.md) |
| rust | `client.start_agent_job` | [Open](../../rust/jobs/startagentjob.md) |
| typescript | `client.jobs.startAgent` | [Open](../../typescript/jobs/startagentjob.md) |
