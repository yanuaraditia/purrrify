# 🙀 Purrify

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A Nuxt module that integrates [sanitize-html](https://github.com/apostrophecms/sanitize-html) for sanitizing HTML content. Protects your application from XSS attacks by sanitizing any potentially dangerous HTML inputs.

> Inspired by [`@radya/nuxt-dompurify`](https://github.com/radyakaze/nuxt-dompurify) by [Pringgo Radianto (Radya)](https://github.com/radyakaze). This project is a complete rewrite using a different sanitization engine (`sanitize-html` instead of `DOMPurify`) with native SSR support and typed directives.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)

## Features

- 🛡️ &nbsp;Sanitize HTML content using [sanitize-html](https://github.com/apostrophecms/sanitize-html)
- 🎯 &nbsp;`v-sanitize-html` directive for templates with full TypeScript support
- 📦 &nbsp;Support for multiple sanitization profiles
- 🖥️ &nbsp;Native SSR support — no `jsdom` or browser APIs required

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
  modules: ['purrify']
})
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
</div>`
</script>
```

## Profiles

Define different sanitization configurations for specific use cases using [sanitize-html options](https://github.com/apostrophecms/sanitize-html#readme):

```ts
export default defineNuxtConfig({
  modules: ['purrify'],
  dompurify: {
    profiles: {
      headingsOnly: {
        allowedTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
      },
      plainText: {
        allowedTags: [],
        allowedAttributes: {}
      }
    }
  }
})
```

### Using Profiles

Pass the profile name as an argument to the directive:

```vue
<template>
  <div v-sanitize-html:headingsOnly="dirtyHtml" />
</template>
```

## Acknowledgements

This module was inspired by [`@radya/nuxt-dompurify`](https://github.com/radyakaze/nuxt-dompurify) by [Pringgo Radianto (Radya)](https://github.com/radyakaze). The original module used DOMPurify with jsdom for SSR, which caused build issues in production. Purrify is a complete rewrite using [sanitize-html](https://github.com/apostrophecms/sanitize-html), which works natively on both server and client without requiring a DOM implementation.

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

[MIT](./LICENSE) — Copyright (c) 2026 Yanuar Aditia.

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/purrify/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/purrify
[npm-downloads-src]: https://img.shields.io/npm/dm/purrify.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/purrify
[license-src]: https://img.shields.io/npm/l/purrify.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/purrify
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com
