# Generated contract tests

Run `python -m unittest discover -s tests` from the generated workspace root. `facade-contract-tests.json` is the provider-neutral case pack; the Python suite imports the generated ASGI facade (never the inspected target source), binds a stub handler, and drives every case through the ASGI interface: declared success statuses, 404 for undeclared routes, 405 for undeclared methods, 415 for undeclared request media types, 401 without credentials, and 400 for primitive parameter type mismatches.
