<!-- Based on @radya/nuxt-dompurify by Pringgo Radianto (Radya) — https://github.com/radyakaze/nuxt-dompurify -->

# Purrify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module that integrates [DOMPurify](https://github.com/cure53/DOMPurify) for sanitizing HTML content. Protects your application from XSS attacks by sanitizing any potentially dangerous HTML inputs.

> This module is a maintained fork of [`@radya/nuxt-dompurify`](https://github.com/radyakaze/nuxt-dompurify) by [Pringgo Radianto (Radya)](https://github.com/radyakaze). Full credit to the original author.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

- 🛡️ &nbsp;Sanitize HTML content using DOMPurify
- 🎯 &nbsp;`v-sanitize-html` directive for templates
- 📦 &nbsp;Support for multiple sanitization profiles
- 🖥️ &nbsp;SSR compatible (uses jsdom on the server)

## Quick Setup

Install the module to your Nuxt application:

```bash
npx nuxt module add purrify
```

Or manually:

```bash
bun add -D purrify
```

Then add it to your `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ["purrify"],
});
```

## Usage

Use the `v-sanitize-html` directive to sanitize HTML content in your templates:

```vue
<template>
  <div v-sanitize-html="dirtyHtml" />
</template>

<script setup>
const dirtyHtml = `
<div>
  <h1>Welcome to My Website</h1>
  <p>This is a <strong>safe</strong> paragraph.</p>
  <img src="image.jpg" onerror="alert('Hacked!')" />
  <a href="https://example.com" onclick="stealCookies()">Click me!</a>
  <script>alert('XSS!')<\/script>
</div>`;
</script>
```

## Profiles

Define different DOMPurify configurations for specific use cases:

```ts
export default defineNuxtConfig({
  modules: ["purrify"],
  dompurify: {
    profiles: {
      headingsOnly: {
        ALLOWED_TAGS: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
    },
  },
});
```

### Using Profiles

Pass the profile name as an argument to the directive:

```vue
<template>
  <div v-sanitize-html:headingsOnly="dirtyHtml" />
</template>
```

## Acknowledgements

This module is based on [`@radya/nuxt-dompurify`](https://github.com/radyakaze/nuxt-dompurify) by [Pringgo Radianto (Radya)](https://github.com/radyakaze), licensed under MIT.

## Contribution

<details>
  <summary>Local development</summary>
  
  ```bash
  # Install dependencies
  bun install
  
  # Generate type stubs
  bun run dev:prepare
  
  # Develop with the playground
  bun run dev
  
  # Build the playground
  bun run dev:build
  
  # Run ESLint
  bun run lint
  
  # Run Vitest
  bun run test
  bun run test:watch
  
  # Release new version
  bun run release
  ```

</details>

## License

[MIT](./LICENSE) — Original work copyright (c) 2024 Pringgo Radianto (Radya). Modified work copyright (c) 2026 Yanuar Aditia.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/purrify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/purrify
[npm-downloads-src]: https://img.shields.io/npm/dm/purrify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/purrify
[license-src]: https://img.shields.io/npm/l/purrify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/purrify
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
