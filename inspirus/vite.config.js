import {resolve} from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// eslint-disable-next-line no-undef
const root = resolve(__dirname,'src')
// eslint-disable-next-line no-undef
// const outDir = resolve(__dirname,'dist')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    // outDir,
    // emptyOutDir:true,
    rollupOptions:{
      input:{
        // main:resolve(root,'main.jsx'),
        Loading:resolve(root,'pages','LoadingPage','App.jsx'),
        Home:resolve(root,'pages','Home','Home.jsx'),
      }
    }
  }
})
