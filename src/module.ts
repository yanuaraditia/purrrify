import {
  defineNuxtModule,
  addPlugin,
  addTypeTemplate,
  createResolver
} from '@nuxt/kit'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'purrify',
    configKey: 'dompurify'
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if (options.profiles) {
      nuxt.options.runtimeConfig.public.dompurify = {
        profiles: options.profiles
      }
    }

    addTypeTemplate({
      filename: 'types/purrify.d.ts',
      getContents() {
        return `import type { ObjectDirective } from 'vue'
declare module 'vue' {
  interface GlobalDirectives {
    vSanitizeHtml: ObjectDirective<HTMLElement, string>
  }
}
export {}`
      }
    })

    addPlugin(resolver.resolve('./runtime/plugin'))
  }
})
