import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";


export default defineConfig({

  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        home: path.resolve(__dirname, "src/pages/Home/index.html"),
        team: path.resolve(__dirname, "src/pages/Team/index.html"),
      },
    },
  },
});

