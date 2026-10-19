# inspectProject

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect a project root to detect runtimes, package managers, and test/build commands

Route: `POST` `/v1/inspect`  
Deprecated: **no**  
SDK maturity: **verified**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/typescript/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `d5665c3d8251ed00b9de47d7b373a980c336cc00c03282fa16bf07070d213aeb`

HTTP reference: [`POST` `/v1/inspect`](../../../http/operations/jobs/inspectproject.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.InspectProjectAsync` | [dotnet reference](../../../dotnet/operations/jobs/inspectproject.md) |
| go | `client.Jobs.InspectProject` | [go reference](../../../go/operations/jobs/inspectproject.md) |
| java | `client.inspectProject` | [java reference](../../../java/operations/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [javascript reference](../../../javascript/operations/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [kotlin reference](../../../kotlin/operations/jobs/inspectproject.md) |
| python | `client.jobs.inspect_project` | [python reference](../../../python/operations/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [rust reference](../../../rust/operations/jobs/inspectproject.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.inspectProject` |
| resource | `client.jobs.inspectProject` |

## Signature

```typescript
client.jobs.inspectProject<Raw extends boolean = false>(body: InspectProjectRequest, requestOptions?: RequestOptions<Raw> & { contentType?: "application/json" }): Promise<Raw extends true ? RawResponse<ProjectInspectionPlan> : WithRequestId<ProjectInspectionPlan>>;
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```typescript
const result = await client.jobs.inspectProject({"projectRoot": "example"}, { contentType: "application/json" });
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |
