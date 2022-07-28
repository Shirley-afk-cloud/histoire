import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstScreenshot } from '@histoire/plugin-screenshot'

export default defineConfig({
  plugins: [
    HstVue(),
    HstScreenshot({
      ignored: ({ file }) => file.includes('tailwind-tokens'),
    }),
  ],
})
