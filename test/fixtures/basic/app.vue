<template>
  <div>
    <div id="sanitized" v-sanitize-html="dirtyHtml" />
    <div id="profile-headings" v-sanitize-html:headingsOnly="mixedHtml" />
    <div id="profile-plain" v-sanitize-html:plainText="mixedHtml" />
    <div id="xss-img" v-sanitize-html="xssImg" />
    <div id="xss-event" v-sanitize-html="xssEvent" />
    <div id="safe-html" v-sanitize-html="safeHtml" />
  </div>
</template>

<script setup>
const dirtyHtml = '<p>Hello</p>' + '<script>alert(1)<' + '/script>'
const mixedHtml =
  '<h1>Title</h1><p>Paragraph</p><h3>Subtitle</h3><div>Block</div>'
const xssImg = '<img src="x" onerror="alert(\'xss\')" />'
const xssEvent =
  '<a href="https://example.com" onclick="stealCookies()">Link</a>'
const safeHtml = '<p>This is <strong>safe</strong> HTML.</p>'
</script>
