# describeAgentMods

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

Route: `GET` `/v1/mods`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/rust/boxfleet_sdk/omniwrap-artifact.json), SHA-256 `fb52aca7bc940e2fec790bdf037e228ee814a853084573b6949021f62fc7ef47`

HTTP reference: [`GET` `/v1/mods`](../../../http/operations/system/describeagentmods.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [dotnet reference](../../../dotnet/operations/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [go reference](../../../go/operations/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [java reference](../../../java/operations/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [javascript reference](../../../javascript/operations/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [kotlin reference](../../../kotlin/operations/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [python reference](../../../python/operations/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [typescript reference](../../../typescript/operations/system/describeagentmods.md) |

## Public members

| Surface | Callable |
| --- | --- |
| async | `client.describe_agent_mods` |

## Signature

```rust
pub async fn describe_agent_mods(&self, target: Option<DescribeAgentModsTarget>, request_options: Option<RequestOptions>) -> Result<ModsCatalogResponse, ApiError>
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
