---
title: "describeAgentMods"
html: "describeagentmods.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# describeAgentMods

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

GET `/v1/mods`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `target` | query | no | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Agent mods catalog | application/json (ModsCatalogResponse) |

## Security

Any one of: `bearerAuth`

## Illustrative input

> Not executed. No execution proof is attached.

```
{
  "parameters": []
}
```

## SDK symbols

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [Open](../../sdk/dotnet/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [Open](../../sdk/go/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [Open](../../sdk/java/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [Open](../../sdk/javascript/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [Open](../../sdk/kotlin/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [Open](../../sdk/python/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [Open](../../sdk/rust/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [Open](../../sdk/typescript/system/describeagentmods.md) |
