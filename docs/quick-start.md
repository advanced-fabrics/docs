# Quick start

Use the source repositories to evaluate AdvFab while the 1.0 release remains gated.

!!! warning "Release status"
    Do not assume an unverified `latest` image or chart is a stable release. Check published signatures, provenance, and artifact digests before using a release.

## Evaluation path

1. **Read the contracts.** Start with the [API repository](https://github.com/advanced-fabrics/api): Observation API v1, portable configuration schema, and provider protocol. Read the [specification repository](https://github.com/advanced-fabrics/spec) for normative behavior.
2. **Choose an implementation.** Inspect the [reference runtime](https://github.com/advanced-fabrics/reference-runtime) and the [provider catalog](https://github.com/advanced-fabrics/providers). Review each repository's installation instructions and supported versions before deploying.
3. **Run conformance against an exact artifact.** Use the [conformance suite](https://github.com/advanced-fabrics/conformance) and record the image or package digest under test. A passing result applies to that artifact, not every build of the project.

## Next steps

Read [core concepts](concepts.md) to understand the data model, then [security and safety](security.md) before enabling operations that change network state. The [examples repository](https://github.com/advanced-fabrics/examples) contains sample integrations.
