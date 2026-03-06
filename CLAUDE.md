# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A responsive informational website about Peggy Ashcroft, built for the HFIAD Responsive Design & Accessibility module. Deployed to GitHub Pages at https://aarkro.github.io/peggy-ashcroft.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — typecheck with `tsc -b` then build with Vite
- `npm run lint` — run ESLint
- `npm run deploy` — build and deploy to GitHub Pages via `gh-pages`

## Architecture

React 19 + TypeScript + Vite single-page app with SCSS styling. No routing — the app is a vertically stacked set of full-page sections (Title, Life, Works, Awards) rendered in `App.tsx`.

**Key patterns:**
- `Page` component (`src/components/page/Page.tsx`) wraps each section, providing the `<section>` element and a `Header`. The `Page` type union (`'Title' | 'Life' | 'Works' | 'Awards'`) is the shared type for page identity.
- `Header` component adapts between mobile (burger menu + page title) and desktop (nav links) using the `useDesktopLayout` hook.
- `useDesktopLayout` hook uses `window.matchMedia` to detect the desktop breakpoint (576px).
- SVGs are imported as React components via `vite-plugin-svgr` (configured for all `*.svg` files).

**Styling:**
- SCSS with BEM naming convention
- Shared variables in `src/styles/variables.scss`, typography/responsive mixins in `src/styles/mixins.scss`
- Desktop breakpoint: `$breakpoint-sm: 576px` — use the `media-desktop` mixin for responsive styles
- Typography mixins: `typo-hero`, `typo-h1`, `typo-h2`, `typo-p`
- Fonts: Playfair Display (headings), Libre Franklin (body)

## Deployment

Base path is set to `/peggy-ashcroft/` in `vite.config.ts` for GitHub Pages.
