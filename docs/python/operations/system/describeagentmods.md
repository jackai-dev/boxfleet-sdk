# describeAgentMods

[Overview](../../index.md) · [Configuration](../../configuration.md) · [Authentication](../../authentication.md) · [Errors](../../errors.md) · [Pagination](../../pagination.md) · [Streaming](../../streaming.md) · [Operations](../../operations/index.md) · [API index](../../api.md)

[All operations](../index.md)

Inspect installable mods, plugins, hooks, slash commands, subagents, and skills for 9 AI coding clients

Route: `GET` `/v1/mods`  
Deprecated: **no**  
SDK maturity: **experimental**  
Artifact evidence: [`omniwrap-artifact.json`](../../../../sdk/python/boxfleet-sdk/omniwrap-artifact.json), SHA-256 `77884d18d6d6642294f813f3462feeb2e38e02b472ccfcef9d00a604f99eb185`

HTTP reference: [`GET` `/v1/mods`](../../../http/operations/system/describeagentmods.md)

## The same operation in other SDKs

| SDK | Symbol | Reference |
| --- | --- | --- |
| dotnet | `client.DescribeAgentModsAsync` | [dotnet reference](../../../dotnet/operations/system/describeagentmods.md) |
| go | `client.System.DescribeAgentMods` | [go reference](../../../go/operations/system/describeagentmods.md) |
| java | `client.describeAgentMods` | [java reference](../../../java/operations/system/describeagentmods.md) |
| javascript | `client.system.describeAgentMods` | [javascript reference](../../../javascript/operations/system/describeagentmods.md) |
| kotlin | `client.describeAgentMods` | [kotlin reference](../../../kotlin/operations/system/describeagentmods.md) |
| rust | `client.describe_agent_mods` | [rust reference](../../../rust/operations/system/describeagentmods.md) |
| typescript | `client.system.describeAgentMods` | [typescript reference](../../../typescript/operations/system/describeagentmods.md) |

## Public members

| Surface | Callable |
| --- | --- |
| flat | `client.describe_agent_mods` |
| raw | `client.with_raw_response.describe_agent_mods` |
| resource | `client.system.describe_agent_mods` |

## Signature

```python
client.system.describe_agent_mods(target: Optional[Literal['all', 'claude-code', 'claude-desktop', 'codex', 'agy', 'gemini-cli', 'cursor', 'windsurf', 'vscode', 'zed']] = None, *, headers: Optional[Mapping[str, str]] = None, query: Optional[Mapping[str, Any]] = None, cookies: Optional[Mapping[str, str]] = None, timeout: Optional[float] = None, max_retries: Optional[int] = None, max_response_bytes: Optional[int] = None, idempotency_key: Optional[str] = None) -> ModsCatalogResponse
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

Example status: `generated`  
Illustrative code, not executed; no execution proof is attached to this example.

```python
result = client.system.describe_agent_mods()
```

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Agent mods catalog | application/json (ModsCatalogResponse) |
