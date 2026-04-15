import { fileURLToPath } from "node:url";
import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils/e2e";

describe("ssr", async () => {
  await setup({
    rootDir: fileURLToPath(new URL("./fixtures/basic", import.meta.url)),
  });

  it("renders sanitized HTML", async () => {
    const html = await $fetch("/");
    expect(html).toContain("<p>Hello</p>");
    expect(html).not.toContain("alert(1)");
  });
});
