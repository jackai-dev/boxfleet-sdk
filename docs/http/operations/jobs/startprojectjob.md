# startProjectJob

[All HTTP operations](../../index.md)

Start an isolated sandbox job for tests, builds, or custom commands

Operation identity: `startProjectJob`  
Route: `POST` `/v1/jobs`  
Deprecated: **no**

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `body` | body | yes | `StartProjectJobRequest` |  |

## Request body

Required: **yes**

| Media type | Contract type |
| --- | --- |
| `application/json` | `StartProjectJobRequest` |

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `201` | Job created and started | application/json (JobSummary) |

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
| dotnet | `client.StartProjectJobAsync` | [dotnet reference](../../../dotnet/operations/jobs/startprojectjob.md) |
| go | `client.Jobs.StartProject` | [go reference](../../../go/operations/jobs/startprojectjob.md) |
| java | `client.startProjectJob` | [java reference](../../../java/operations/jobs/startprojectjob.md) |
| javascript | `client.jobs.startProject` | [javascript reference](../../../javascript/operations/jobs/startprojectjob.md) |
| kotlin | `client.startProjectJob` | [kotlin reference](../../../kotlin/operations/jobs/startprojectjob.md) |
| python | `client.jobs.start_project` | [python reference](../../../python/operations/jobs/startprojectjob.md) |
| rust | `client.start_project_job` | [rust reference](../../../rust/operations/jobs/startprojectjob.md) |
| typescript | `client.jobs.startProject` | [typescript reference](../../../typescript/operations/jobs/startprojectjob.md) |
