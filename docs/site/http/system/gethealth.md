---
title: "getHealth"
html: "gethealth.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# getHealth

Inspect control-plane and native core readiness

GET `/health`

## Parameters

> This operation takes no parameters.

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Service health status | application/json (HealthResponse) |

## Security

> No security requirement is declared for this operation.

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
| dotnet | `client.GetHealthAsync` | [Open](../../sdk/dotnet/system/gethealth.md) |
| go | `client.System.GetHealth` | [Open](../../sdk/go/system/gethealth.md) |
| java | `client.getHealth` | [Open](../../sdk/java/system/gethealth.md) |
| javascript | `client.system.getHealth` | [Open](../../sdk/javascript/system/gethealth.md) |
| kotlin | `client.getHealth` | [Open](../../sdk/kotlin/system/gethealth.md) |
| python | `client.system.get_health` | [Open](../../sdk/python/system/gethealth.md) |
| rust | `client.get_health` | [Open](../../sdk/rust/system/gethealth.md) |
| typescript | `client.system.getHealth` | [Open](../../sdk/typescript/system/gethealth.md) |
