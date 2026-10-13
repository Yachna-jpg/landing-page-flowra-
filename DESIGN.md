---
name: Flowra Design System
description: Ultra-clean, hardware-grade light mode design system for revenue conversation infrastructure
colors:
  primary: "#10B981"
  primary-hover: "#059669"
  primary-subtle: "#ECFDF5"
  neutral-bg: "#FAFAFA"
  neutral-card: "#FFFFFF"
  neutral-surface: "#F8FAFC"
  neutral-border: "#E2E8F0"
  neutral-subtle: "#F1F5F9"
  border-subtle: "#CBD5E1"
  border-dark: "#1E293B"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  text-muted: "#94A3B8"
  accent-blue: "#2563EB"
  accent-rose: "#E11D48"
typography:
  display:
    fontFamily: "var(--font-comfortaa), cursive, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "var(--font-inter), sans-serif"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.text-primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-emerald:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-secondary:
    backgroundColor: "{colors.neutral-card}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
---

# Design System

## Overview

Flowra's visual identity balances clean Scandinavian minimalism with high-precision hardware product aesthetics. Every section communicates engineering rigor, speed, and reliability without SaaS clichés, bloated aurora gradients, or AI slop.

## Colors

- **Canvas & Surfaces:**
  - Base page background: `#FAFAFA`
  - High-elevation cards & modules: `#FFFFFF`
  - Secondary containers & tracks: `#F8FAFC`
  - Subtle architectural borders: `#E2E8F0`
- **Typography Palette:**
  - Headings & dominant metrics: `#0F172A` (deep slate)
  - Body descriptions & paragraphs: `#475569` (slate 600)
  - Monospace tags, labels & eyebrows: `#64748B` / `#94A3B8`
- **Functional Accents:**
  - Brand Emerald: `#10B981` (primary action & active indicators)
  - Emerald Soft: `#ECFDF5` (pills, badges, verified tags)
  - Telecom Blue: `#2563EB` (inbound / Meta channels)
  - Voice Purple: `#9333EA` (AI speech & telephony)

## Typography

- **Headings & Brand Title:** `Comfortaa` with tight letter spacing (`-0.02em`). Gives Flowra a friendly, approachable yet distinctive technological voice.
- **Body & UI Elements:** `Inter` for optimal readability at small sizes, data tables, form fields, and dense dashboards.
- **Telemetry & Technical Specs:** Monospace (`font-mono`) uppercase with wide tracking (`0.14em` to `0.18em`).

## Layout

- **Grid Systems:** Max-width containers constrained to `max-w-7xl` or `max-w-6xl` with `px-6 sm:px-12`.
- **Rhythm & Spacing:** Generous vertical section padding (`py-24 sm:py-28`) with clear visual hierarchy separating distinct conversational pillars.
- **Asymmetric Composition:** Alternating media-left and media-right layouts in product tours; pinned 3D mascot on the hero stage.

## Elevation & Depth

- **Hardware Bezel Frame:** Widescreen product tour recordings are framed in dark floating glass bezels (`bg-[#0F172A] border border-slate-800 shadow-[0_20px_50px_rgba(15,23,42,0.12)]`).
- **Cards & Dialogs:** Pure white surfaces resting on `#FAFAFA` with crisp `1px solid #E2E8F0` borders and soft diffuse shadows (`shadow-sm`, `shadow-md`).

## Shapes

- Pill buttons (`rounded-full`) for high-intent conversion actions.
- Rounded corners (`rounded-2xl` and `rounded-xl`) for cards, ensuring structural softness without bubbly exaggeration.

## Components

- **Pill Buttons:**
  - Black Pill: `#0F172A` with white text and subtle elevation.
  - Emerald Pill: `#10B981` with white text for primary revenue CTAs.
  - Secondary Pill: Pure white with `#E2E8F0` border and slate hover state.
- **Product Media Frame:** Uncropped native 16:9 videos (`block w-full h-auto object-contain`) sitting inside an inner mask with subtle outer ambient blur.
- **Telemetry Indicators:** Structured key-value pairs with dimmed uppercase labels and bold white/slate readouts.

## Do's and Don'ts

### Do's
- Keep 100% of video content visible (use `object-contain` and natural aspect ratio).
- Use generous white space and high text-to-background contrast.
- Ground all conversational assistant copy in real business workflows.
- Provide explicit keyboard-accessible focus rings and respect `prefers-reduced-motion`.

### Don'ts
- Do not use generic purple/indigo AI gradients or clip-text headlines.
- Do not use fake Mac browser window dots (red/yellow/green circles).
- Do not use decorative emoji in place of clean vector icons.
- Do not crop interface recordings with arbitrary aspect ratios.
