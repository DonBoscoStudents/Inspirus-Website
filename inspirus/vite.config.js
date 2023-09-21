const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        Tour: 'Pages/Tour/index.html',
      }
    }
  }
})