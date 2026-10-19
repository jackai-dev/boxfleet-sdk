---
title: "describeAgentMods · dotnet"
html: "describeagentmods.html"
language: "dotnet"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# describeAgentMods

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

HTTP reference: [GET /v1/mods](../../../http/system/describeagentmods.md)

## Package

`BoxFleetSdk` 0.3.0

> This documentation build does not publish the package to a registry; install it from the generated package artifact.

## Symbol

- `client.DescribeAgentModsAsync` async

## Signature

```
public async Task<ModsCatalogResponse> DescribeAgentModsAsync(
DescribeAgentModsTarget? target = null,
RequestOptions? requestOptions = null,
CancellationToken cancellationToken = default)
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
| go | `client.System.DescribeAgentMods` | [Open](../../go/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [Open](../../java/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [Open](../../javascript/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [Open](../../kotlin/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [Open](../../python/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [Open](../../rust/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [Open](../../typescript/system/describeagentmods.md) |
