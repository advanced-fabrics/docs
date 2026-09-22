# Security and safety

AdvFab starts with observation and requires explicit authority before network state changes.

## Read-only default

Observation should report evidence as it exists. Missing values are unavailable, not silently replaced with estimates or a healthy state.

## Apply authorization

Change operations require four boundaries to pass: provider capability, explicit policy, RBAC, and authenticated identity. A provider's ability to perform an operation alone is not authorization to use it.

## Artifact trust

The 1.0 roadmap calls for signed images and charts, provenance, and SPDX and CycloneDX SBOMs. Verify the exact digest and available attestations for any artifact you evaluate.

## Report a vulnerability

Follow the [organization security policy](https://github.com/advanced-fabrics/.github/blob/main/SECURITY.md) for private reporting instructions. The public [security self-assessment](https://github.com/advanced-fabrics/community/blob/main/SECURITY-SELF-ASSESSMENT.md) documents the project's security posture.
