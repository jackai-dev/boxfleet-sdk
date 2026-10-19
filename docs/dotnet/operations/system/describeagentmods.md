# describeAgentMods

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

Route: `GET` `/v1/mods`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/dotnet/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `278d03ceee3b201165ac979d3ff5e876888c7fab0bb0f52ec8ddb576a1f603dc`

HTTP reference: [`GET` `/v1/mods`](../../../http/operations/system/describeagentmods.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| go | `client.System.DescribeAgentMods` | [go reference](../../../go/operations/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [java reference](../../../java/operations/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [javascript reference](../../../javascript/operations/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [kotlin reference](../../../kotlin/operations/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [python reference](../../../python/operations/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [rust reference](../../../rust/operations/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [typescript reference](../../../typescript/operations/system/describeagentmods.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.DescribeAgentModsAsync` |

## Signature

```csharp
public async Task<ModsCatalogResponse> DescribeAgentModsAsync(
DescribeAgentModsTarget? target = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
