# AI Financial Review Workspace

An evidence-first interface that helps credit analysts verify AI-extracted financial data and make informed approval decisions.

**[Live Demo](https://thara-messeroux.github.io/review-workspace/)** · **[Storybook](https://thara-messeroux.github.io/review-workspace/storybook/)** · **[Design System](https://thara-messeroux.github.io/review-workspace/system/)**

## The Challenge

AI can extract financial information quickly, but high confidence doesn't always mean accuracy. Analysts need to verify evidence, resolve discrepancies, and document decisions before approving results.

## My Approach

I designed an evidence-first workflow around four principles:

- **Verify before trusting:** Connect extracted values to supporting evidence and identify missing citations.
- **Keep humans in control:** Separate AI outputs, source documents, and analyst decisions.
- **Simplify complex reviews:** Prioritize discrepancies, conflicting definitions, and dependent calculations.
- **Design for uncertainty:** Make loading, partial results, errors, and approval states clear and actionable.

## What I Built

I designed, developed, and deployed an interactive prototype using **React, TypeScript, Vite, and Claude Code**.

The experience includes responsive interfaces, source-document verification, field-level decisions, approval workflows, and handling for incomplete or failed extraction results.

I built reusable UI components and a token-based design system, incorporating established Material Design patterns where appropriate.

I explored **13 design iterations**, preserved in [`/prototypes`](./prototypes), before refining the final experience.

## Project Context

Built as a design engineering take-home for an AI lending startup, using fictional financial data reconstructed from supplied excerpts.

This repository hosts the deployed application. Development source code is maintained separately.
