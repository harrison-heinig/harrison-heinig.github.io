# 1022-website Agent Guide

## Repository purpose
This repository powers a GitHub Pages site mapped to a custom domain.
The site is a static marketing and promotional hub for apps built by Harrison Heinig.

## Current apps
- Prase
- Space Watch

More apps will be added over time. Structure and content decisions should support easy expansion.

## Primary site responsibilities
- Present clear promotional/marketing content for each app.
- Provide app download calls-to-action (App Store links or equivalent).
- Provide a press/media-kit area for each app for writers, reviewers, and partners.
- Host app-specific legal documents, including:
  - Privacy Policy
  - Terms of Agreement / Terms of Use

## Content architecture expectations
- Keep content app-scoped, not mixed:
  - Each app should have its own promotional section/page.
  - Each app should have its own media-kit location.
  - Each app should have its own legal-document pages.
- New apps should be addable with minimal restructuring.
- Avoid hardcoding assumptions that only two apps exist.

## Suggested URL/content pattern
Use consistent, scalable paths where possible:
- `/<app-slug>/` for app landing/promo content
- `/<app-slug>/media-kit/` for press assets
- `/<app-slug>/privacy/` for privacy policy
- `/<app-slug>/terms/` for terms

If the current site remains single-page for now, preserve this separation through clear sections and anchors, and migrate to dedicated pages as content grows.

## Implementation guidance
- Keep the site fully static (HTML/CSS/assets) and GitHub Pages compatible.
- Favor simple, maintainable markup and predictable file organization.
- Reuse shared styles/components where practical, while allowing app-specific branding blocks.
- Ensure links to downloads, media kits, and legal docs are visible and easy to find.

## Maintenance notes for agents
- When adding a new app, add all three content surfaces at minimum:
  - Promotional content
  - Media kit
  - Legal docs (privacy + terms)
- When editing legal text, treat it as app-specific unless explicitly stated otherwise.
- Preserve existing custom-domain deployment assumptions; do not introduce tooling that conflicts with static hosting.

---

## Rules
- This is a static site, do not implement dynamic logic
  - If asked to implement a feature the requires non-static logic, suggest alternatives to keep the site static