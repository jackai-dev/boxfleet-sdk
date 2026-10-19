---
title: "inspectProject · java"
html: "inspectproject.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# inspectProject

Inspect a project root to detect runtimes, package managers, and test/build commands

HTTP reference: [POST /v1/inspect](../../../http/jobs/inspectproject.md)

## Package

`boxfleet-sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.inspectProjectAsync` async
- `client.inspectProject` sync

## Signature

```
public ProjectInspectionPlan inspectProject(InspectProjectRequest body)
public ApiResponse<ProjectInspectionPlan> inspectProjectWithResponse(InspectProjectRequest body)
public CompletableFuture<ApiResponse<ProjectInspectionPlan>> inspectProjectWithResponseAsync(InspectProjectRequest body)
public CompletableFuture<ProjectInspectionPlan> inspectProjectAsync(InspectProjectRequest body)
public ProjectInspectionPlan inspectProject(InspectProjectRequest body, RequestOptions requestOptions)
public CompletableFuture<ProjectInspectionPlan> inspectProjectAsync(InspectProjectRequest body, RequestOptions requestOptions)
public ApiResponse<ProjectInspectionPlan> inspectProjectWithResponse(InspectProjectRequest body, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<ProjectInspectionPlan>> inspectProjectWithResponseAsync(InspectProjectRequest body, RequestOptions requestOptions)
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

> This operation takes no parameters.

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.InspectProjectAsync` | [Open](../../dotnet/jobs/inspectproject.md) |
| go | `client.Jobs.InspectProject` | [Open](../../go/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [Open](../../javascript/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [Open](../../kotlin/jobs/inspectproject.md) |
| python | `client.jobs.inspect_project` | [Open](../../python/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [Open](../../rust/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [Open](../../typescript/jobs/inspectproject.md) |
