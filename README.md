# Relay Chat

A production-oriented real-time chat frontend built with React, TypeScript, Vite, TanStack Query, Zustand, Socket.IO, Tailwind CSS, and accessible Radix UI primitives.

## Architecture

Relay uses feature ownership rather than file-type grouping. Each domain (`auth`, `chats`, `messages`, `users`, and `profile`) owns its API, hooks, components, and types. Shared code is limited to domain-agnostic UI and infrastructure.

- **TanStack Query** owns remote data: current user, users, chats, and message pages.
- **Zustand** owns ephemeral UI state: theme, sidebar, connection state, typing presence, and unread overrides.
- **Socket.IO** is initialized once after authentication. Central handlers translate events into focused query-cache updates; components never subscribe to incoming events.
- **React Router** owns active-chat selection, preserving deep links, refresh behavior, and browser history.
- **Axios** centralizes credentials, token refresh, request replay, and error normalization.

## Local development

```bash
cp .env.example .env
npm install
npm run dev
```

The default environment expects the API at `http://localhost:3000/api/v1` and Socket.IO at `http://localhost:3000`.

## Quality checks

```bash
npm run typecheck
npm run lint
npm run build
```

## Expected API surface

The API adapter modules in `src/features/*/api` isolate endpoint paths from UI code. If backend route names differ, update only these adapters. Authentication uses secure cookies and all requests are sent with credentials.
