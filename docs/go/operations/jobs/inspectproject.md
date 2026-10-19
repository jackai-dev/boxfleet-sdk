# inspectProject

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect a project root to detect runtimes, package managers, and test/build commands

Route: `POST` `/v1/inspect`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/go/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `978e5bf64816d75c36685ed60679a586b2970a0b267ccc222d0378ca3c6b3580`

HTTP reference: [`POST` `/v1/inspect`](../../../http/operations/jobs/inspectproject.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.InspectProjectAsync` | [dotnet reference](../../../dotnet/operations/jobs/inspectproject.md) |
| java | `client.inspectProject` | [java reference](../../../java/operations/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [javascript reference](../../../javascript/operations/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [kotlin reference](../../../kotlin/operations/jobs/inspectproject.md) |
| python | `client.jobs.inspect_project` | [python reference](../../../python/operations/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [rust reference](../../../rust/operations/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [typescript reference](../../../typescript/operations/jobs/inspectproject.md) |

## Public members

| Surface | Callable |
| --- | --- |
| resource | `client.Jobs.InspectProject` |

## Signature

```go
func (service *JobsService) InspectProject(ctx context.Context, params JobsInspectProjectParams, opts ...option.RequestOption) (*Response[*ProjectInspectionPlan], error)
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
