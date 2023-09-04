import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

// eslint-disable-next-line no-undef
const root = resolve(__dirname,'src')
// eslint-disable-next-line no-undef
// const outDir = resolve(__dirname,'dist')

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        loading: path.resolve(__dirname, "src/pages/LoadingPage/index.html"),
        home: path.resolve(__dirname, "src/pages/Home/index.html"),
        team: path.resolve(__dirname, "src/pages/Team/index.html"),
      },
    },
  },
  resolve: process.env.USE_SOURCE
  ? {
      alias: {
        "@remix-run/router": path.resolve(
          __dirname,
          "../../packages/router/index.ts"
        ),
        "react-router": path.resolve(
          __dirname,
          "../../packages/react-router/index.ts"
        ),
        "react-router-dom": path.resolve(
          __dirname,
          "../../packages/react-router-dom/index.tsx"
        ),
      },
    }
  : {},
});

