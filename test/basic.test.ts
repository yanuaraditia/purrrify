import { fileURLToPath } from 'node:url'
import { describe, it, expect } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils/e2e'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url))
  })

  it('sanitizes script tags', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<p>Hello</p>')
    expect(html).not.toContain('alert(1)')
  })

  it('strips onerror from img tags', async () => {
    const html = await $fetch('/')
    expect(html).not.toContain('onerror')
    expect(html).not.toContain("alert('xss')")
  })

  it('strips onclick event handlers', async () => {
    const html = await $fetch('/')
    expect(html).toContain('https://example.com')
    expect(html).not.toContain('onclick')
    expect(html).not.toContain('stealCookies')
  })

  it('preserves safe HTML', async () => {
    const html = await $fetch('/')
    expect(html).toContain('<p>This is <strong>safe</strong> HTML.</p>')
  })

  it('applies headingsOnly profile', async () => {
    const html = await $fetch('/')
    const match = html.match(/id="profile-headings"[^>]*>([\s\S]*?)<\/div>/)
    expect(match).toBeTruthy()
    const content = match![1]
    expect(content).toContain('<h1>Title</h1>')
    expect(content).toContain('<h3>Subtitle</h3>')
    expect(content).not.toContain('<p>')
    expect(content).not.toContain('<div>')
  })

  it('applies plainText profile', async () => {
    const html = await $fetch('/')
    const match = html.match(/id="profile-plain"[^>]*>([\s\S]*?)<\/div>/)
    expect(match).toBeTruthy()
    const content = match![1]
    expect(content).not.toContain('<h1>')
    expect(content).not.toContain('<p>')
    expect(content).toContain('Title')
    expect(content).toContain('Paragraph')
  })
})
