# Advanced Fabrics documentation

**Build network fabrics you can understand.** Advanced Fabrics (AdvFab) defines portable APIs to observe, compose, and change cloud-native network fabrics across replaceable providers.

!!! note "Project status"
    AdvFab is under active development. The 1.0 release gates are still open. This is an independent open source project and is **not a CNCF project**.

## Start here

- [Quick start](quick-start.md) evaluate the current source and verify what you run.
- [Concepts](concepts.md) learn topology, observation, evidence, configuration, and providers.
- [Architecture](architecture.md) see how contracts and implementations fit together.
- [Security and safety](security.md) understand the boundary around network changes.
- [Specifications](specifications.md) find normative material and conformance work.
- [Community](community.md) follow governance, releases, and contribution.

## Design principles

- **API first.** Machine-readable contracts are versioned separately from implementations.
- **Observe first.** Missing evidence remains unknown; the system does not invent healthy observations.
- **Replaceable providers.** The core contract does not depend on one CNI, router, or metrics backend.
- **Public decisions.** AFEPs record standards changes, while conformance claims bind to exact artifacts.
