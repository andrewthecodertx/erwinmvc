## Release v0.8.5

### Changes

- fix: complete the `@andrewthecoder/erwinmvc` rename across `src/`, `templates/`, and docs
  (the published 0.8.4 scaffold still emitted `@erwininteractive/mvc` imports, so generated
  apps referenced a package that no longer exists)
- fix: wire `method-override` into `createMvcApp` so generated resource forms can issue
  PUT/PATCH/DELETE. Restricted to `methods: ["POST"]` so a GET link can never be turned
  into a mutation
- fix: wire `cookie-parser` into the framework (JWT cookie auth) instead of relying on every
  scaffold to add it by hand
- fix: add `connect-flash` after session setup so flash messages work out of the box
- fix: generated resource controllers resolve the Prisma client lazily, so a missing generated
  client no longer crashes the app at module import
- fix: scaffold `tsconfig.json` uses `CommonJS` to match the framework
- fix: export `hasFieldError` / `getFieldError` from `Validation`
- fix: CLI `--version` now reads `package.json` instead of a stale hardcoded value
- docs: scaffold README documents the real API (removed the non-existent `disableViewEngine`)
- chore: scaffold dependency pinned to `^0.8.5`

---

See [CONTRIBUTING.md](CONTRIBUTING.md) for commit message guidelines.
