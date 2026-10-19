# CI templates

Copy `github-actions.yml` to `.github/workflows/omniwrap.yml` or merge `gitlab-ci.yml` into the repository pipeline. The templates pin the generating OmniWrap version, run full-flow doctor, regenerate the complete workspace transactionally, and execute its generated tests. Adjust `OMNIWRAP_SOURCE` if the input is not at the repository root.

The GitHub template provisions the selected built-in SDK toolchains. The GitLab template intentionally runs full-flow doctor first; use a runner image containing every selected toolchain when generating a non-Python SDK.

The generated workflow requests `--verify` compilation and generated facade tests. Package and clean-consumer verification require the additional `--verify-consumer` option and its explicit local dependency inputs. The template has not executed a remote CI job.

## Native SDK verification

Go SDKs require Go 1.24 or later and include executable runtime tests. From the generated Go module directory, run `gofmt -l .` (no output means the files are formatted) and `go test -race -json -count=1 ./...`. The race detector also requires a native C compiler. The package and consumer gates inspect the exact deterministic module ZIP and initialize its local replacement in a fresh offline consumer.

Kotlin SDK verification uses compiler 2.0.21 and JVM target 17. Standalone compilation uses the selected JDK and compiler. Package and consumer verification additionally require Gradle 8.10.2 or later and an explicitly supplied read-only cache containing the matching Kotlin plugin and standard library. Those gates compile offline and initialize the exact inspected JAR in a fresh consumer.

Use `omniwrap create --verify-consumer` with the selected SDKs and explicit local tool configuration to request compilation, packaging and clean-consumer checks. Generated facade tests exercise the ASGI provider contract with a stub handler. Remote CI execution and registry publication are separate operator actions.
