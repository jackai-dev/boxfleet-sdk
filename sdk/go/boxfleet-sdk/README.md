# Generated Go SDK

Module: `github.com/omniwrap/boxfleet-sdk`, package `boxfleet`, version `0.3.0`. Requires Go 1.24 or later; standard library only.

Construct with `NewClient(option.WithBaseURL(origin))`; use `NewClientWithError` to receive configuration errors instead of a panic. Every operation accepts context first and returns typed `Response[T]` data plus status, headers, request ID and a body-closed HTTP metadata record. A failed operation returns `*Error` with the status, headers, bounded body, request ID, operation ID, retryability and cause; `Error()` includes the cause's message but never the request URL. When the operation declares a JSON schema for the error status (the exact status, its class such as `4XX`, or `default`), `Model` holds the body decoded as that schema's generated type, and `ModelErr` records a body that does not decode or is JSON null. Models preserve declared optional/null/value distinctions with `param.Opt`; additional properties and declared unions retain their wire values. Unknown enum values remain accepted. Unconstrained schemas use the explicit `JSONValue` type; the Schema types section below maps every other shape. Unsupported schema/media/serialization combinations fail before any SDK is written.

The default operation timeout is 30 seconds. `option.WithTimeout(0)` disables that SDK timeout; a caller context deadline still applies. Client/request options are copied. Safe, replayable operations permit two retries by default, under the server-guided policy the Retries section describes. Configure zero retries with `option.WithMaxRetries(0)`. One-shot `ReaderBody` never retries; `BytesBody` supplies replayable binary bytes. Requests are limited to 16 MiB; response limits default to 8 MiB and are configurable up to 64 MiB. Cross-origin redirects and pagination continuations are rejected.

A validated semantic pagination trait adds `<Method>Page`, `NextPage(ctx)` and `Iterate(ctx, callback)` on typed page responses, bounded by page/item limits. A continuation can be consumed once. Cursor/offset/page and Link traits are supported.

Limitations: streaming protocol operations, dynamic schema references, `false` schemas outside a closed tuple, allOf members with no value in common, nested parameter structures and unmodeled media encodings are rejected. OAuth token acquisition, remote module publication and whole-language parity are not claimed. The date-time, date and decimal formats are typed by the `format` package; every other format annotation keeps its wire type and is not validated.

## Schema types

| JSON Schema | Go |
| --- | --- |
| `string` | `string`; `format: byte` or `binary` is `[]byte`, base64 on the wire |
| `string`, `format: date-time` | `format.DateTime`: the embedded `time.Time`, re-encoded as the exact text received until it changes, by the JSON, text, binary and gob encoders; a leap second (`23:59:60`) keeps its text, and text that is not an RFC 3339 date-time fails decoding |
| `string`, `format: date` | `format.Date`: midnight UTC of the day, re-encoded the same way; text that is not an RFC 3339 full-date fails decoding |
| `string`, `format: decimal` | `format.DecimalString`, the exact text; `Rat()` returns a `*big.Rat`. A decimal, as a number or a string, of more than 1024 characters or with an exponent beyond 4096 fails decoding and encoding |
| `integer` | `int64`; `int32`, `uint32` and `uint64` keep their width, `format: decimal` is `format.Decimal` |
| `number` | `float64`; `float` is `float32`, `format: decimal` is `format.Decimal`, the exact digits |
| `boolean` | `bool` |
| `enum` | a named type of the wire type with one constant per value; an undeclared value is kept as received |
| `const` | the wire type of its value |
| object with `properties` | a struct: an optional or nullable property is `param.Opt[T]`, and the members the schema does not declare stay in `AdditionalProperties` |
| object without `properties` | `map[string]T`, with `T` from `additionalProperties`, or `JSONValue` |
| array | `[]T`; an array without `items` is `[]JSONValue` |
| `prefixItems` | a struct with one `ItemN` field per position, `param.Opt` past `minItems`, and `Rest` for the items after them |
| `oneOf`, `anyOf`, a list of types | a union keeping the JSON it holds: `AsVariantN` reads an alternative, `New<Union>FromVariantN` builds one, `IsNull` tests JSON null and a discriminated union returns its discriminating property |
| `allOf` | the merged object or value; the bounds of every member apply |
| no type | `JSONValue`, which admits any JSON value |

A value that admits null is `param.Opt[T]` as a property and `*T` as an array item, a map value, a union alternative or a whole body, so a JSON null never becomes a zero value. The `format` types live in `github.com/omniwrap/boxfleet-sdk/format`.

## Names

A Go identifier is the PascalCase of its source name, with initialisms such as `ID`, `URL`, `HTTP`, `API`, `JSON` and `UUID` in capitals; a name that starts with a digit is prefixed with `Value`, and a name with no ASCII letter or digit becomes `Value` and the first 8 hexadecimal digits of its SHA-256. Names are allocated in a fixed order: component schemas and properties sorted by name, then operations sorted by operationId with their parameters in declaration order. A name that the runtime or an earlier source already holds in the same namespace takes the first free numeric suffix from 2. Method names come from the shared resource planner, which groups operations by the words of their first tag, or else their first path segment, whatever their case: a method is named by its operationId without the resource noun; operations of one group that would share that name keep all their operationId words, and one that still collides takes a numeric suffix from 2 in contract order. The client field of a resource is its tag, so tags that differ only in case are separate resources (`Users`, `Users2`) whose methods may carry their group's suffix. Every run produces the same names. A Go keyword never clashes because every generated identifier is exported, and the doc comment of each declaration names its source.

## Retries

`option.WithMaxRetries` (default 2, at most 10) bounds the retries. A call is retried only when its operation is idempotent or it carries an `Idempotency-Key` header, from `option.WithHeader` or from an `Idempotency-Key` header parameter the operation declares, whose value wins when both are set and is sent again by every attempt; a connection failure or a timeout of one attempt follows the same rule, and a one-shot `ReaderBody` is never retried. The server's own verdict wins: `x-should-retry: true` or `false` overrides the status policy (408, 409, 429 and every 5xx), and its wait is honoured from `retry-after-ms`, then `Retry-After` (seconds or an HTTP-date), then an IETF `RateLimit` reset (`t=` or `RateLimit-Reset`). Without one, waits back off exponentially with jitter, from `option.WithRetryBackoff(base, maximum)` (100 ms doubling, at most 2 s, by default). A server asking for longer than `option.WithMaxRetryDelay` (default 60 s) gets its `*Error` returned at once, with its headers and `Retryable` flag, since a retry it said would fail only adds load. `option.WithRetryBudget` caps a whole call, waits included (no budget by default), and `option.WithTimeout` still bounds the whole operation.

`option.WithFallbackBaseURLs(urls...)` lists ordered alternates to the base URL (none by default). Only idempotent operations use them, and only a connection failure, a timeout or a 5xx moves a call to the next one; a 4xx retry such as a 429 stays on its endpoint, and the last endpoint serves the remaining attempts. A per-call `option.WithBaseURL`, a server the operation declares and a Link continuation pin the target. `option.WithAttemptObserver` is called after every attempt with an `option.Attempt` naming the `BaseURL` it targeted, the `StatusCode` or connection `Err`, and whether a `Retry` follows after `RetryDelay`.

```go
client := boxfleet.NewClient(
	option.WithBaseURL("https://api.example.com"),
	option.WithMaxRetries(3),
	option.WithRetryBudget(20*time.Second),
	option.WithFallbackBaseURLs("https://eu.api.example.com"),
	option.WithAttemptObserver(func(attempt option.Attempt) { log.Println(attempt.BaseURL, attempt.StatusCode) }),
)
```

## Hooks and tracing

`option.WithHooks(option.Hooks{...})` observes every call, on the client or on one call. Each attempt starts with `BeforeRequest` and ends with exactly one of `OnRetry` (another attempt follows), `AfterResponse` (the success the call returns) or `OnError` (the error it returns): a call that succeeds after one retried 503 reports `BeforeRequest`, `OnRetry`, `BeforeRequest`, `AfterResponse`, and a connection failure that is not retried reports `BeforeRequest`, `OnError`. Each hook receives an `option.HookContext` with `OperationID`, `Method`, `URL`, `Header`, `Attempt` (from 1), `Elapsed` since the call started, `StatusCode` once the server answered, `Err` when the attempt or the call failed and `RetryDelay` on `OnRetry`.

The context holds copies, so no hook can change the request, and it never carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`, every API-key header and every API-key query parameter read `[redacted]` in `Header` and `URL`, and so does every configured credential value found anywhere else.

`option.WithTracer(tracer)` opens one span per call through the `option.Tracer` interface, with no tracing dependency: `StartSpan(ctx, operationID, attributes)` receives `http.request.method`, and `End(attributes)` receives `http.request.resend_count` (the retries) and, when the server answered, `http.response.status_code`. With `go.opentelemetry.io/otel` in your module, this adapter maps it onto OpenTelemetry:

```go
type otelTracer struct{ tracer trace.Tracer }

type otelSpan struct{ span trace.Span }

func (t otelTracer) StartSpan(ctx context.Context, name string, attributes map[string]any) option.TraceSpan {
	_, span := t.tracer.Start(ctx, name, trace.WithAttributes(otelAttributes(attributes)...))
	return otelSpan{span}
}

func (s otelSpan) End(attributes map[string]any) {
	s.span.SetAttributes(otelAttributes(attributes)...)
	s.span.End()
}

func otelAttributes(values map[string]any) []attribute.KeyValue {
	result := make([]attribute.KeyValue, 0, len(values))
	for key, value := range values {
		switch typed := value.(type) {
		case int:
			result = append(result, attribute.Int(key, typed))
		case string:
			result = append(result, attribute.String(key, typed))
		}
	}
	return result
}

func newObservedClient() *boxfleet.Client {
	return boxfleet.NewClient(
		option.WithTracer(otelTracer{otel.Tracer("my-service")}),
		option.WithHooks(option.Hooks{OnRetry: func(hook option.HookContext) { log.Println(hook.OperationID, hook.Attempt, hook.StatusCode) }}),
	)
}
```

The adapter imports `context`, `log`, `go.opentelemetry.io/otel`, `go.opentelemetry.io/otel/attribute` and `go.opentelemetry.io/otel/trace`.

## Runtime validation

This package was generated with `runtime_validation=off`, the default. A response, a stream item and a request value are decoded into, or encoded from, their Go types, and never checked against the constraints the contract declares: a required property the server omits decodes to its zero value, and a bound, a pattern or an enumeration is not enforced. A union's `AsVariantN` accessors still return only the alternative the value matches. Generate with `runtime_validation=tolerant` or `strict` to check payloads.

## Operations

- `client.Jobs.Cancel(ctx, params, opts...)`: `cancelJob`
- `client.Cloud.NewBox(ctx, params, opts...)`: `createCloudBox`
- `client.System.DescribeAgentMods(ctx, params, opts...)`: `describeAgentMods`
- `client.System.GetHealth(ctx, params, opts...)`: `getHealth`
- `client.Jobs.GetExecution(ctx, params, opts...)`: `getJobExecution`
- `client.Jobs.GetLogs(ctx, params, opts...)`: `getJobLogs`
- `client.Jobs.GetStatus(ctx, params, opts...)`: `getJobStatus`
- `client.Fleet.GetOrganization(ctx, params, opts...)`: `getOrganizationFleet`
- `client.Cloud.GetWhiteLabelCatalog(ctx, params, opts...)`: `getWhiteLabelCloudCatalog`
- `client.Jobs.InspectProject(ctx, params, opts...)`: `inspectProject`
- `client.System.ListCapabilities(ctx, params, opts...)`: `listCapabilities`
- `client.Cloud.ListBoxes(ctx, params, opts...)`: `listCloudBoxes`
- `client.Jobs.List(ctx, params, opts...)`: `listJobs`
- `client.Fleet.ListOrganizationMembers(ctx, params, opts...)`: `listOrganizationMembers`
- `client.System.ListProviders(ctx, params, opts...)`: `listProviders`
- `client.Fleet.ListSaasPlans(ctx, params, opts...)`: `listSaasPlans`
- `client.Cloud.PerformBoxAction(ctx, params, opts...)`: `performCloudBoxAction`
- `client.Jobs.StartAgent(ctx, params, opts...)`: `startAgentJob`
- `client.Jobs.StartGithub(ctx, params, opts...)`: `startGithubJob`
- `client.Jobs.StartProject(ctx, params, opts...)`: `startProjectJob`
- `client.Cloud.SyncBoxVault(ctx, params, opts...)`: `syncCloudBoxVault`
- `client.Fleet.UpdateOrganizationPolicy(ctx, params, opts...)`: `updateOrganizationFleetPolicy`
- `client.Fleet.UpsertOrganizationMember(ctx, params, opts...)`: `upsertOrganizationMember`

## Verify

`gofmt -l .` must print no changed files. `go test -race -json -count=1 ./...` runs the included runtime behavior checks with owned loopback servers and injected failures. The descriptor binds every emitted source file, and package verification uses its exact deterministic module ZIP in a clean offline consumer.
