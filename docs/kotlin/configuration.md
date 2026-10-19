# kotlin SDK configuration

[Overview](index.md) · [Configuration](configuration.md) · [Authentication](authentication.md) · [Errors](errors.md) · [Pagination](pagination.md) · [Streaming](streaming.md) · [Operations](operations/index.md) · [API index](api.md)

Configuration facts below come from the API contract; supported runtime controls come from the SDK artifact claims.

## Servers

| # | URL template | Description | Variables |
| --- | --- | --- | --- |
| 1 | `https://boxfleet.io` | BoxFleet Managed Cloud &amp; SaaS Control Plane (Cloudflare Edge) | none |
| 2 | `http://127.0.0.1:8787` | Local BoxFleet Workstation Controller &amp; Live Console | none |

## Artifact capability evidence

- `configurable-base-url`
- `httpclient-transport-injection`
- `minimum-kotlin-2.0.21-runtime`
- `streaming-enforced-response-byte-limit`
- `timeouts-and-idempotent-retries`
- `timeouts-cancellation-and-idempotent-retries`

## Artifact limitations

- `base-url-query-and-fragment-not-supported`
- `runtime-schema-validation-not-generated`
- `streaming-and-websocket-runtime-not-generated`
