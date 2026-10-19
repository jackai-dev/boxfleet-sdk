# describeAgentMods

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

Route: `GET` `/v1/mods`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/kotlin/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `7762ac1ab4af5ec4025891cd61e2f81dcfd2a9ecbd2c2da9d65532e51918582a`

HTTP reference: [`GET` `/v1/mods`](../../../http/operations/system/describeagentmods.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [dotnet reference](../../../dotnet/operations/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [go reference](../../../go/operations/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [java reference](../../../java/operations/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [javascript reference](../../../javascript/operations/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [python reference](../../../python/operations/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [rust reference](../../../rust/operations/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [typescript reference](../../../typescript/operations/system/describeagentmods.md) |

## Runtime support

JSON or no-content success responses. Query parameters serialize in their declared style; a supplied content-based parameter, or a path, header or cookie parameter with an advanced style, fails before dispatch. The method decodes its canonical success response.

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.describeAgentMods` |

## Signature

```kotlin
suspend fun describeAgentMods(params: DescribeAgentModsParams, requestOptions: RequestOptions = RequestOptions()): ApiResult<ModsCatalogResponse>
```

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `target` | `query` | no | `string` |  |

## Canonical required-input example

Illustrative input, not executed.

```json
{
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
| `200` | Agent mods catalog | application/json (ModsCatalogResponse) |
