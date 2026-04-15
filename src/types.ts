import type { IOptions } from 'sanitize-html'
import type { ObjectDirective } from 'vue'

interface Profiles {
  [key: string]: IOptions
}

export interface ModuleOptions {
  profiles?: Profiles
}

declare module 'nuxt/schema' {
  interface PublicRuntimeConfig {
    dompurify: {
      profiles?: Profiles
    }
  }
}

declare module 'vue' {
  interface GlobalDirectives {
    vSanitizeHtml: ObjectDirective<HTMLElement, string>
  }
}

export {}
