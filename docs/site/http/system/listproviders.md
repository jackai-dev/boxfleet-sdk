---
title: "listProviders"
html: "listproviders.html"
language: "http"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# listProviders

List configured local Firecracker and cloud/GPU sandbox providers and templates

GET `/v1/providers`

## Parameters

> This operation takes no parameters.

## Request body

> This operation takes no request body.

## Responses

| Status | Description | Content |
| --- | --- | --- |
| `200` | Provider list with runtime templates | application/json (ProvidersResponse) |

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
| dotnet | `client.ListProvidersAsync` | [Open](../../sdk/dotnet/system/listproviders.md) |
| go | `client.System.ListProviders` | [Open](../../sdk/go/system/listproviders.md) |
| java | `client.listProviders` | [Open](../../sdk/java/system/listproviders.md) |
| javascript | `client.system.listProviders` | [Open](../../sdk/javascript/system/listproviders.md) |
| kotlin | `client.listProviders` | [Open](../../sdk/kotlin/system/listproviders.md) |
| python | `client.system.list_providers` | [Open](../../sdk/python/system/listproviders.md) |
| rust | `client.list_providers` | [Open](../../sdk/rust/system/listproviders.md) |
| typescript | `client.system.listProviders` | [Open](../../sdk/typescript/system/listproviders.md) |
