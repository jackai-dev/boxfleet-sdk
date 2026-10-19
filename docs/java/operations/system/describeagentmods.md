# describeAgentMods

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

Route: `GET` `/v1/mods`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/java/BoxFleetSdk/omniwrap-artifact.json), SHA-256 `f1b3105f7a9e1ba3ee8e164e1f1d64b8c22fd13e5ee04a0054d6a785918f2afe`

HTTP reference: [`GET` `/v1/mods`](../../../http/operations/system/describeagentmods.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [dotnet reference](../../../dotnet/operations/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [go reference](../../../go/operations/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [javascript reference](../../../javascript/operations/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [kotlin reference](../../../kotlin/operations/system/describeagentmods.md) |
| python | `client.system.describe_agent_mods` | [python reference](../../../python/operations/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [rust reference](../../../rust/operations/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [typescript reference](../../../typescript/operations/system/describeagentmods.md) |

## Public members

| Surface | Callable |
| --- | --- |
| sync | `client.describeAgentMods` |
| async | `client.describeAgentModsAsync` |

## Signature

```java
public ModsCatalogResponse describeAgentMods()
public ApiResponse<ModsCatalogResponse> describeAgentModsWithResponse()
public CompletableFuture<ApiResponse<ModsCatalogResponse>> describeAgentModsWithResponseAsync()
public CompletableFuture<ModsCatalogResponse> describeAgentModsAsync()
public ModsCatalogResponse describeAgentMods(RequestOptions requestOptions)
public ApiResponse<ModsCatalogResponse> describeAgentModsWithResponse(RequestOptions requestOptions)
public CompletableFuture<ApiResponse<ModsCatalogResponse>> describeAgentModsWithResponseAsync(RequestOptions requestOptions)
public CompletableFuture<ModsCatalogResponse> describeAgentModsAsync(RequestOptions requestOptions)
public ModsCatalogResponse describeAgentMods(String target)
public ApiResponse<ModsCatalogResponse> describeAgentModsWithResponse(String target)
public CompletableFuture<ApiResponse<ModsCatalogResponse>> describeAgentModsWithResponseAsync(String target)
public CompletableFuture<ModsCatalogResponse> describeAgentModsAsync(String target)
public ModsCatalogResponse describeAgentMods(String target, RequestOptions requestOptions)
public CompletableFuture<ModsCatalogResponse> describeAgentModsAsync(String target, RequestOptions requestOptions)
public ApiResponse<ModsCatalogResponse> describeAgentModsWithResponse(String target, RequestOptions requestOptions)
public CompletableFuture<ApiResponse<ModsCatalogResponse>> describeAgentModsWithResponseAsync(String target, RequestOptions requestOptions)
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
