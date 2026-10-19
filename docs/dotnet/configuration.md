# dotnet SDK configuration

[Overview](index.md) · [Configuration](configuration.md) · [Authentication](authentication.md) · [Errors](errors.md) · [Pagination](pagination.md) · [Streaming](streaming.md) · [Operations](operations/index.md) · [API index](api.md)

Configuration facts below come from the API contract; supported runtime controls come from the SDK artifact claims.

## Servers

| # | URL template | Description | Variables |
| --- | --- | --- | --- |
| 1 | `https://boxfleet.io` | BoxFleet Managed Cloud &amp; SaaS Control Plane (Cloudflare Edge) | none |
| 2 | `http://127.0.0.1:8787` | Local BoxFleet Workstation Controller &amp; Live Console | none |

## Artifact capability evidence

- `configurable-base-url`
- `dependency-free-dotnet-8-runtime`
- `httpclient-transport-injection`
- `path-query-header-cookie-serialization`
- `streaming-enforced-response-byte-limit`
- `timeouts-and-idempotent-retries`
- `typed-http-connection-timeout-errors`

## Artifact limitations

- `base-url-query-and-fragment-not-supported`
- `runtime-request-validation-not-generated`
- `websocket-transport-not-generated`
