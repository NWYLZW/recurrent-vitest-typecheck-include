import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.ts'],
    typecheck: {
      include: ['src/**/*.spec-d.ts']
    }
  }
})
