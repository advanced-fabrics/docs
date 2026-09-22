# Concepts

AdvFab gives operators a shared language for intent, observations, and controlled change.

## Fabric and topology

A fabric is the set of network relationships managed or observed through AdvFab. Topology describes nodes, connections, and routing relationships. Provider-specific details remain at the boundary, so clients can reason across implementations.

## Observation and evidence

The read-only Observation API exposes what a provider can actually report. A missing or unavailable observation remains unknown. Consumers should distinguish measured state, declared intent, and inferred explanations.

## Portable configuration

The `config.advfab.org/v1` schema defines portable configuration input. It is kept in the [API repository](https://github.com/advanced-fabrics/api/tree/main/schemas), along with the Observation API and provider protocol.

## Providers

Providers connect the stable contract to a CNI, router, host network, or telemetry source. The reference runtime uses Kubernetes, Cilium, and FRR, but those choices do not define the core API.

## Controlled change

Observation is the default posture. An apply operation requires provider capability, explicit policy, RBAC, and authenticated identity. See [security and safety](security.md) for the full boundary.
