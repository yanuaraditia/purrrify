import type { DirectiveBinding } from 'vue'
import sanitizeHtml from 'sanitize-html'
import { defineNuxtPlugin } from '#app'
import { useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(({ vueApp }) => {
  const {
    public: { purrrify }
  } = useRuntimeConfig()

  function sanitize(binding: DirectiveBinding) {
    if (binding.arg && purrrify?.profiles?.[binding.arg]) {
      return sanitizeHtml(binding.value, purrrify.profiles[binding.arg])
    }

    return sanitizeHtml(binding.value)
  }

  vueApp.directive('sanitize-html', {
    created(el, binding) {
      el.innerHTML = sanitize(binding)
    },
    updated(el, binding) {
      el.innerHTML = sanitize(binding)
    },
    getSSRProps(binding) {
      return {
        innerHTML: sanitize(binding)
      }
    }
  })
})
