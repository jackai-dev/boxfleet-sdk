---
title: "inspectProject · python"
html: "inspectproject.html"
language: "python"
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

- `client.inspect_project` flat
- `client.with_raw_response.inspect_project` raw
- `client.jobs.inspect_project` resource

## Signature

```
client.jobs.inspect_project(body: InspectProjectRequest, *, content_type: Optional[str] = None, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ProjectInspectionPlan
```

## Example

> Illustrative code, not executed. No execution proof is attached.

```
result = client.jobs.inspect_project({'projectRoot': 'example'}, content_type='application/json')
```

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
| java | `client.inspectProject` | [Open](../../java/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [Open](../../javascript/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [Open](../../kotlin/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [Open](../../rust/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [Open](../../typescript/jobs/inspectproject.md) |
