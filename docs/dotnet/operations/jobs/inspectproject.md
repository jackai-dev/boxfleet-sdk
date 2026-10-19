# inspectProject

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect a project root to detect runtimes, package managers, and test/build commands

Route: `POST` `/v1/inspect`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`POST` `/v1/inspect`](../../../http/operations/jobs/inspectproject.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.Jobs.InspectProject` | [go reference](../../../go/operations/jobs/inspectproject.md) |
| java | `client.inspectProject` | [java reference](../../../java/operations/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [javascript reference](../../../javascript/operations/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [kotlin reference](../../../kotlin/operations/jobs/inspectproject.md) |
| python | `client.jobs.inspect_project` | [python reference](../../../python/operations/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [rust reference](../../../rust/operations/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [typescript reference](../../../typescript/operations/jobs/inspectproject.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.InspectProjectAsync` |

## Signature

```csharp
public async Task<ProjectInspectionPlan> InspectProjectAsync(
InspectProjectRequest body,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `InspectProjectRequest` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
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
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |
