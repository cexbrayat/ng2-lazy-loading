# Ng2LazyLoading

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

## feat/admin

This branch introduces some admin components:

- `/admin` -> `AdminComponent`
- `/admin/dashboard` -> `DashboardComponent`

Running with `ng serve --aot --prod`, we have on home page:

    main.a09dfaa7e45ee43bd0f9.bundle.js	6.3 KB

## feat/lazy-loading

This branch introduces an admin module and lazy laods it.

Running with `ng serve --aot --prod`, we have on home page:

    main.10e084ae52eb070ee186.bundle.js	5.9 KB

and when navigating to `/admin`:

    0.fde8ede087bc325a73f4.chunk.js	2.6 KB

Small gain of course as we have really few components.

## feat/preload

This branch introduces a preload strategy (PreloadAllModules).
Same sizes, but the second bundle preloads automatically.
