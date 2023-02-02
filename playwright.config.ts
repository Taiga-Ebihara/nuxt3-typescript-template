import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    browserName: 'chromium',
    trace: 'retain-on-failure',
  },
  reporter: [['html', { open: 'on-failure' }]],
})
