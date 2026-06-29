# Nivaas Design System

Version 1.0 for Expo React Native.

## Principles

Nivaas is India's AI-first neighborhood platform. The interface is modern, friendly,
trustworthy, minimal, premium and community-first. Use whitespace, rounded surfaces
and subtle shadows. Do not use loud gradients, glassmorphism, neumorphism or
excessive borders.

## Tokens

Use `src/constants/theme.ts` as the source of truth for app and Figma variables:

- Colors: primary, secondary, tertiary, surface, text, outline, error and AI-only purple.
- Typography: display, headlineLarge, headlineMedium, bodyLarge, bodyMedium and label.
- Spacing: 4, 8, 12, 16, 20, 24, 32, 40, 48 and 64.
- Radius: 8, 12, 16, 24 and pill.
- Shadows: level0, level1 and level2.
- Motion: fast 150ms, normal 250ms and slow 350ms.

`nivaasFigmaVariables` in `src/components/nivaas.tsx` exposes the same token groups
for Figma variable creation.

## Components

Use `src/components/nivaas.tsx` for all screens:

- Atoms: `NivaasText`, `Button`, `IconButton`, `Avatar`, `Badge`, `Chip`, `Divider`,
  `Input`, `ToggleRow`, `Progress`, `NivaasIcon`.
- Molecules: `SearchBar`, `ListItem`, `ChatBubble`, `StatCard`.
- Organisms: compose `NivaasScreen`, `Section` and `NivaasCard` for feeds, dashboards,
  marketplace items, events, emergency cards and AI response cards.

## Usage Guidelines

Never invent colors, radius or spacing in screens. Import tokens when layout spacing is
needed. Use AI purple only for AI experiences, responses, prompts and the floating AI
action. Community actions should use green. Body text should remain 14px or larger.

Bottom navigation has five tabs: Home, Marketplace, Ask AI, Community and Profile.
