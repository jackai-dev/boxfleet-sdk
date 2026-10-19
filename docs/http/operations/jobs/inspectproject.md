# inspectProject

[All HTTP operations](../../index.md)

Inspect a project root to detect runtimes, package managers, and test/build commands

Operation identity: `inspectProject`  
Route: `POST` `/v1/inspect`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `InspectProjectRequest` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `InspectProjectRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Project inspection plan | application/json (ProjectInspectionPlan) |

## Security

Any one of these alternatives is accepted: `bearerAuth`.

| Scheme | Type | Wire detail | Description |
| --- | --- | --- | --- |
| `bearerAuth` | `http` | bearer |  |

## Illustrative required input

Not executed. Values come from the contract's required-argument plan; no execution proof is attached.

```json
{
  "body": {
    "projectRoot": "example"
  },
  "content_type": "application/json",
  "parameters": []
}
```

No illustrative response body is generated for this operation.

## SDK symbols for this operation

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.InspectProjectAsync` | [dotnet reference](../../../dotnet/operations/jobs/inspectproject.md) |
| go | `client.Jobs.InspectProject` | [go reference](../../../go/operations/jobs/inspectproject.md) |
| java | `client.inspectProject` | [java reference](../../../java/operations/jobs/inspectproject.md) |
| javascript | `client.jobs.inspectProject` | [javascript reference](../../../javascript/operations/jobs/inspectproject.md) |
| kotlin | `client.inspectProject` | [kotlin reference](../../../kotlin/operations/jobs/inspectproject.md) |
| python | `client.jobs.inspect_project` | [python reference](../../../python/operations/jobs/inspectproject.md) |
| rust | `client.inspect_project` | [rust reference](../../../rust/operations/jobs/inspectproject.md) |
| typescript | `client.jobs.inspectProject` | [typescript reference](../../../typescript/operations/jobs/inspectproject.md) |
