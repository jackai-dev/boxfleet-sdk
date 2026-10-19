# BoxFleet developer workspace

This workspace documents the selected generated artifacts from one input fingerprint.

The REST facade uses an explicit `OMNIWRAP_FACADE_HANDLER` binding. For source-derived input, generation never imports, executes, or silently binds the inspected source tree.

## Generated components

- SDKs: `dotnet`, `go`, `java`, `javascript`, `kotlin`, `python`, `rust`, `typescript`
- Per-SDK API reference: [`API_REFERENCE.md`](API_REFERENCE.md)
- REST facade: `../api/`
- Contract tests: `../tests/`
- CI templates: `../ci/`

Run the generated structural contract suite from the workspace root:

```console
python -m unittest discover -s tests
```

## Native SDK verification

Go SDKs require Go 1.24 or later and include executable runtime tests. From the generated Go module directory, run `gofmt -l .` (no output means the files are formatted) and `go test -race -json -count=1 ./...`. The race detector also requires a native C compiler. The package and consumer gates inspect the exact deterministic module ZIP and initialize its local replacement in a fresh offline consumer.

Kotlin SDK verification uses compiler 2.0.21 and JVM target 17. Standalone compilation uses the selected JDK and compiler. Package and consumer verification additionally require Gradle 8.10.2 or later and an explicitly supplied read-only cache containing the matching Kotlin plugin and standard library. Those gates compile offline and initialize the exact inspected JAR in a fresh consumer.

Use `omniwrap create --verify-consumer` with the selected SDKs and explicit local tool configuration to request compilation, packaging and clean-consumer checks. Generated facade tests exercise the ASGI provider contract with a stub handler. Remote CI execution and registry publication are separate operator actions.
