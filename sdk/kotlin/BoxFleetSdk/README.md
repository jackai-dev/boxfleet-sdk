# BoxFleetSdk

Experimental Kotlin coroutine client generated from OmniWrap Semantic IR.

Requires Kotlin 2.0.21 and Java 17. `ApiClient` accepts explicit `ClientOptions`
and an injectable `Transport`; operations are `suspend` functions taking typed
`*Params`. Public response models retain unknown fields; enums and discriminated
unions include an `Unknown` branch. Optional model properties decode omitted and
explicit null values to `null`; those two input states are not distinguished.
Named strings retain their wire values through Kotlin typealiases. Other named scalar and array
components, cyclic/nullable aliases and non-string named enums are rejected
before generation; their typed wrapper models are not implemented.

Pass `ClientOptions(httpClient = client)` to inject a public JDK `HttpClient`.
Configure mTLS on that client with its `SSLContext`; its proxy, executor and
connection settings are used as supplied. SDK authentication headers,
`Idempotency-Key` handling and retries remain in the SDK. Cancelling the calling
coroutine cancels the in-flight JDK request and any cancellable retry delay.

## Supported operation boundary

JSON (`application/json` or `application/*+json`) and no-content success
responses are supported, along with operations explicitly declared as SSE or
NDJSON streams. A request body is JSON (maps, lists, scalar values and
generated models), `application/x-www-form-urlencoded` (a map or a generated
model; a list repeats its key), `application/octet-stream` (a `ByteArray`, an
`InputStream` read once so a retry resends the same bytes, or a `String` as
UTF-8), or `multipart/form-data`. Multipart operations accept maps or generated
`*MultipartBody` helpers with typed nested component fields. Binary parts accept
`ByteArray`, `java.nio.file.Path`, `InputStream` or an `Iterable<ByteArray>`;
`MultipartPart` overrides filename and content type. Declared array fields repeat
their wire name. `maxUploadBytes` (10 MiB by default; 1 byte through 64 MiB) bounds
the complete encoded body including framing. Streams are closed after reading;
reads and chunk boundaries check coroutine cancellation. A blocking source read
must return before cancellation can be observed. Encoding finishes before transport
and retries reuse the same bytes; uploads are buffered rather than streamed over
the network. An operation declaring several media takes the first supported kind
in the order JSON, form, binary, multipart. Methods for unsupported response or
request media remain visible but throw
`ApiUnsupportedOperationException` before any transport call. JSON methods
decode their canonical success response schema; SSE and NDJSON methods emit
decoded values as cold `Flow`s.

| Operation | Runtime support | Boundary |
| --- | --- | --- |
| `getHealth` | JSON / no-content | Declared parameter styles; canonical success response |
| `listCapabilities` | JSON / no-content | Declared parameter styles; canonical success response |
| `listProviders` | JSON / no-content | Declared parameter styles; canonical success response |
| `describeAgentMods` | JSON / no-content | Declared parameter styles; canonical success response |
| `inspectProject` | JSON / no-content | Declared parameter styles; canonical success response |
| `listJobs` | JSON / no-content | Declared parameter styles; canonical success response |
| `startProjectJob` | JSON / no-content | Declared parameter styles; canonical success response |
| `startAgentJob` | JSON / no-content | Declared parameter styles; canonical success response |
| `startGithubJob` | JSON / no-content | Declared parameter styles; canonical success response |
| `getJobStatus` | JSON / no-content | Declared parameter styles; canonical success response |
| `getJobLogs` | JSON / no-content | Declared parameter styles; canonical success response |
| `getJobExecution` | JSON / no-content | Declared parameter styles; canonical success response |
| `cancelJob` | JSON / no-content | Declared parameter styles; canonical success response |
| `getWhiteLabelCloudCatalog` | JSON / no-content | Declared parameter styles; canonical success response |
| `listCloudBoxes` | JSON / no-content | Declared parameter styles; canonical success response |
| `createCloudBox` | JSON / no-content | Declared parameter styles; canonical success response |
| `performCloudBoxAction` | JSON / no-content | Declared parameter styles; canonical success response |
| `syncCloudBoxVault` | JSON / no-content | Declared parameter styles; canonical success response |
| `listSaasPlans` | JSON / no-content | Declared parameter styles; canonical success response |
| `getOrganizationFleet` | JSON / no-content | Declared parameter styles; canonical success response |
| `updateOrganizationFleetPolicy` | JSON / no-content | Declared parameter styles; canonical success response |
| `listOrganizationMembers` | JSON / no-content | Declared parameter styles; canonical success response |
| `upsertOrganizationMember` | JSON / no-content | Declared parameter styles; canonical success response |

Query parameters serialize as the contract declares them: `form` (exploded or
not), `spaceDelimited`, `pipeDelimited` or `deepObject`, with `allowReserved`,
for scalars, lists, maps and generated models, percent-encoded as the Python
lane encodes them. Path, header and cookie parameters are scalars; they and
every scalar are bounded to 65,536 characters. A supplied content-based
parameter, or a path, header or cookie parameter with a nondefault style or
`allowReserved`, fails before dispatch. Proven cursor, offset and page plans add
lazy `Pages` and `Items` flows to the operation resource. Each collection fetches
one page at a time, detects repeated cursors, stops on an empty page or the
server's continuation signal, follows Link continuations only on the same
origin, and accepts `maxPages` and `maxItems` bounds.
Operations returning `text/event-stream` or NDJSON return cold coroutine `Flow`s;
SSE events retain `data`, `id`, `event` and `retry`. `StreamOptions` bounds event
and line sizes and controls Last-Event-ID resumption with `maxReconnects`,
`reconnectDelay` and `onReconnect`. Collecting a flow starts network I/O;
cancelling collection closes the active response. WebSocket transport is not
generated. HTTP responses are buffered up to `ClientOptions.maxResponseBytes`
(10 MiB by default, at most 64 MiB); a longer body throws
`ApiResponseTooLargeException`.

## Retries

`ClientOptions.maxRetries` (default 2) bounds the retries. A call is retried
only when its operation is idempotent or it carries an `Idempotency-Key`: pass
one per call as `RequestOptions(idempotencyKey = ...)`, or let the client mint
a UUID for a POST the contract marks idempotent, or for every POST with
`autoIdempotencyKey = true`; every attempt of the call sends the same key. The
server's verdict wins: `x-should-retry: true` or `false` overrides the status
policy (408, 409, 429 and every 5xx). The wait is the server's own, from
`retry-after-ms`, then `Retry-After` (seconds or an HTTP-date), then an IETF
`RateLimit` reset; without one it backs off exponentially from 500 ms with
jitter, at most 60 s. A server asking for longer than `maxRetryDelay`
(default 60 s) gets its error thrown at once, and `retryBudget` caps a whole
call, waits included. Connection failures and timeouts are retried under the
same rule.

## Hooks and tracing

`ClientOptions(hooks = RequestHooks(...))` observes every call. Each attempt
starts with `beforeRequest` and ends with exactly one of `onRetry` (another
attempt follows), `afterResponse` (the success the call returns) or `onError`
(the failure the call throws): a call that succeeds after one retried 503
reports `beforeRequest`, `onRetry`, `beforeRequest`, `afterResponse`, and a
connection failure that is not retried reports `beforeRequest`, `onError`. Each
callback receives a `HookContext` with `operationId`, `method`, `url`,
`headers`, `attempt` (from 1), `elapsed` since the call started, `statusCode`
once the server answered, `error` when the attempt or the call failed and
`retryDelay` on `onRetry`. Streaming `Flow`s open their connections outside
the hooks and the tracer.

The context is an immutable data class: no hook can change the request. It
never carries a credential: `Authorization`, `Proxy-Authorization`, `Cookie`,
every API-key header and every API-key query parameter read `[redacted]` in
`headers` and `url`, and so does every configured credential value found
anywhere else. A hook's own exception ends the call with it.

`ClientOptions(tracer = ...)` opens one span per call through the `RequestTracer`
interface this SDK defines, with no tracing dependency: `startSpan(operationId,
attributes)` receives `http.request.method`, and the returned `TraceSpan` is
ended with `http.request.resend_count` (the retries) and, when the server
answered, `http.response.status_code`. With `io.opentelemetry:opentelemetry-api`
on the classpath, this adapter maps it onto OpenTelemetry:

```kotlin
import io.opentelemetry.api.GlobalOpenTelemetry
import io.opentelemetry.api.common.AttributeKey
import io.opentelemetry.api.trace.Span
import io.opentelemetry.api.trace.Tracer

fun openTelemetryTracer(otel: Tracer): RequestTracer = RequestTracer { name, attributes ->
    val span = otel.spanBuilder(name).startSpan()
    span.record(attributes)
    TraceSpan { ended ->
        span.record(ended)
        span.end()
    }
}

private fun Span.record(attributes: Map<String, Any>) = attributes.forEach { (key, value) ->
    if (value is Number) setAttribute(AttributeKey.longKey(key), value.toLong())
    else setAttribute(AttributeKey.stringKey(key), value.toString())
}

val observedOptions = ClientOptions(
    tracer = openTelemetryTracer(GlobalOpenTelemetry.getTracer("my-service")),
    hooks = RequestHooks(onRetry = { context -> println(context.operationId + " " + context.attempt + " " + context.statusCode) }),
)
```

## Errors

Every non-2xx response throws an `ApiHttpException` that keeps the response:
`status`, `headers` (looked up case-insensitively), `requestId` (`x-request-id`,
else `request-id`), `rawBody`, `body` (the parsed JSON, else the raw text) and,
when the operation declares an error schema for that status, `typedBody` and
`bodyAs<T>()`. The status picks the subclass: `BadRequestException` (400),
`AuthenticationException` (401), `PermissionDeniedException` (403),
`NotFoundException` (404), `ConflictException` (409),
`UnprocessableEntityException` (422), `RateLimitException` (429) and
`InternalServerException` (5xx). A connection failure throws
`ApiTransportException` and a timeout `ApiTimeoutException`. All of them are
`ApiException`s.

## Local qualification

The standalone compiler supports an offline source compilation check. Gradle 8.10.2+
plus a separately provisioned read-only dependency cache are required for offline
JAR packaging and a fresh consumer check. A successful source compile does not
establish either of those results. Android publishing and Maven publication
provenance remain unqualified.
