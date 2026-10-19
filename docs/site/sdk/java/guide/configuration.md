---
title: "Configuration · java"
html: "configuration.html"
language: "java"
source: "generated"
edition: "5e16c0150e0e"
build_id: "5e16c0150e0eb5af7a4ed86a0fa01dc08bc1aa416d727382b7d14a6ae579518e"
api_version: "0.3.0"
---
# Configuration · java

Configuration facts below come from the API contract; supported runtime controls come from the SDK artifact claims.

## Servers

| # | URL template | Description | Variables |
| --- | --- | --- | --- |
| 1 | `https://boxfleet.io` | BoxFleet Managed Cloud &amp; SaaS Control Plane (Cloudflare Edge) | none |
| 2 | `http://127.0.0.1:8787` | Local BoxFleet Workstation Controller &amp; Live Console | none |

## Artifact capability evidence

- `configurable-base-url`
- `dependency-free-java-17-runtime`
- `java-httpclient-transport-injection`
- `path-query-header-cookie-serialization`
- `streaming-enforced-response-byte-limit`
- `structured-http-transport-timeout-errors`
- `timeouts-cancellation-and-idempotent-retries`

## Artifact limitations

- `base-url-query-and-fragment-not-supported`
- `runtime-schema-validation-not-generated`
- `websocket-transport-not-generated`
