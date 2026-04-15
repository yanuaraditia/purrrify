<template>
  <div>
    <h2>Purrify Playground</h2>

    <h3>Default sanitization:</h3>
    <div v-sanitize-html="dirtyHtml" />

    <h3>Headings-only profile:</h3>
    <div v-sanitize-html:headingsOnly="dirtyHtml" />
  </div>
</template>

<script setup>
const dirtyHtml = `
<div>
  <h1>Welcome to My Website</h1>
  <h3>This is H3 heading</h3>
  <p>This is a <strong>simple</strong> paragraph.</p>
  <img src="image.jpg" onerror="alert('Hacked!')" />
  <a href="https://example.com" onclick="stealCookies()">Click me!</a>
</div>`
</script>
