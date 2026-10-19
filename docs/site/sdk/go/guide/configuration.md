---
title: "Configuration · go"
html: "configuration.html"
language: "go"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# Configuration · go

Configuration facts below come from the API contract; supported runtime controls come from the SDK artifact claims.

## Servers

| # | URL template | Description | Variables |
| --- | --- | --- | --- |
| 1 | `https://boxfleet.io` | BoxFleet Managed Cloud &amp; SaaS Control Plane (Cloudflare Edge) | none |
| 2 | `http://127.0.0.1:8787` | Local BoxFleet Workstation Controller &amp; Live Console | none |

## Artifact capability evidence

- `configurable-base-url`
- `dependency-free-go-1.24-runtime`
- `generated-runtime-unit-tests`
- `httpclient-transport-injection`
- `path-query-header-cookie-serialization`
- `streaming-enforced-response-byte-limit`
- `structured-http-transport-timeout-errors`
- `timeouts-cancellation-and-idempotent-retries`

## Artifact limitations

- `runtime-schema-validation-not-generated`
- `streaming-and-websocket-runtime-not-generated`
