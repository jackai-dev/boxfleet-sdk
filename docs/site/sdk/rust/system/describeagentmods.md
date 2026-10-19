---
title: "describeAgentMods · rust"
html: "describeagentmods.html"
language: "rust"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# describeAgentMods

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

HTTP reference: [GET /v1/mods](../../../http/system/describeagentmods.md)

## Package

`boxfleet_sdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.describe_agent_mods` async

## Signature

```
pub async fn describe_agent_mods(&self, target: Option<DescribeAgentModsTarget>, request_options: Option<RequestOptions>) -> Result<ModsCatalogResponse, ApiError>
```

## Example

> No example is generated for this operation in this SDK.

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `target` | query | no | `string` |  |

## Returns

| Status | Description | Content |
| --- | --- | --- |
| `200` | Agent mods catalog | application/json (ModsCatalogResponse) |

## Errors

> No error response is declared for this operation.

## Other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [Open](../../dotnet/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [Open](../../go/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [Open](../../java/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [Open](../../javascript/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [Open](../../kotlin/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [Open](../../python/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [Open](../../typescript/system/describeagentmods.md) |
