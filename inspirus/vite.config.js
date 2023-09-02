import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Build two separate bundles, one for each app.
      input: {
        main: path.resolve(__dirname, "index.html"),
        loadingPage: path.resolve(__dirname, "src/pages/LoadingPage/index.html"),
      },
    },
  },
})
