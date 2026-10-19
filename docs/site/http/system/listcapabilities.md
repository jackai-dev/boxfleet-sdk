---
title: "listCapabilities"
html: "listcapabilities.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listCapabilities

List BoxFleet capabilities and published job limits

GET `/v1/capabilities`

## Parameters

| Name | In | Required | Contract type | Description |
| --- | --- | --- | --- | --- |
| `query` | query | no | `string` |  |
| `state` | query | no | `string` |  |

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Capability catalog and job limits | application/json (CapabilitiesResponse) |

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
| dotnet | `client.ListCapabilitiesAsync` | [Open](../../sdk/dotnet/system/listcapabilities.md) |
| go | `client.System.ListCapabilities` | [Open](../../sdk/go/system/listcapabilities.md) |
| java | `client.listCapabilities` | [Open](../../sdk/java/system/listcapabilities.md) |
| javascript | `client.system.listCapabilities` | [Open](../../sdk/javascript/system/listcapabilities.md) |
| kotlin | `client.listCapabilities` | [Open](../../sdk/kotlin/system/listcapabilities.md) |
| python | `client.system.list_capabilities` | [Open](../../sdk/python/system/listcapabilities.md) |
| rust | `client.list_capabilities` | [Open](../../sdk/rust/system/listcapabilities.md) |
| typescript | `client.system.listCapabilities` | [Open](../../sdk/typescript/system/listcapabilities.md) |
