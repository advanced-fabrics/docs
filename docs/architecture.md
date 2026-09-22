# Architecture

The public contracts sit between clients and replaceable implementations.

## System layers

| Layer | Role |
| --- | --- |
| Clients and integrations | CLI, SDKs, UI, and automation consume the same published contracts. |
| Contracts | OpenAPI, configuration schema, and provider protocol define interoperable boundaries. |
| Providers | Adapters report observations and expose only the operations they support. |
| Reference runtime | A concrete implementation demonstrates the contracts with Kubernetes, Cilium, and FRR. |

## Source of truth

[advanced-fabrics/api](https://github.com/advanced-fabrics/api) is the machine-readable API source. [advanced-fabrics/spec](https://github.com/advanced-fabrics/spec) contains normative behavior and AFEPs. Generated SDKs record the exact API commit they came from.

## Compatibility

Compatibility and deprecation rules are defined in the [specification](https://github.com/advanced-fabrics/spec/blob/main/compatibility.md). Check the contract version and implementation support together when integrating.
