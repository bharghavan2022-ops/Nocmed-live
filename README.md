# MET-Agent — Informational Website

An informational/marketing site for MET-Agent, a 24-hour-hackathon prototype for multimodal
emergency triage decision support. This is **not** the product itself — it's a companion site
that explains the architecture, shows real example outputs, and simulates the workflow using
pre-computed, already-verified data. No live model calls, no backend dependency.

> **Hackathon prototype — not validated clinical software.**

## Stack

React + Vite + TypeScript + Tailwind CSS v4 + React Router. No backend.

## Pages

- `/` — Overview and pitch
- `/how-it-works` — Pipeline architecture (Perception → Reasoning → Safety → Narration)
- `/features` — What's actually built, tech stack, evaluation targets
- `/simulation` — Interactive scripted replay of real, verified pipeline outputs
- `/video` — Demo video embed (placeholder until the team supplies an `.mp4`)
- `/business-model` — Business Model Canvas structure
- `/about` — Hackathon context and disclaimer

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
