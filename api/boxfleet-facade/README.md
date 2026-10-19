# BoxFleet REST facade

Run `boxfleet_facade.app:app` with Uvicorn after setting `OMNIWRAP_FACADE_HANDLER=module:callable`. Secured operations fail closed unless `OMNIWRAP_FACADE_CREDENTIALS_JSON` or a custom `CredentialVerifier` supplies credentials. SSE and NDJSON handlers return a finite sync or async iterable; configured event and byte bounds are enforced. `facade-contract-tests.json` is the deterministic provider test pack consumed by OmniWrap's facade gate.
