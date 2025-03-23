import { fileURLToPath, URL } from 'node:url'

import {defineConfig, searchForWorkspaceRoot} from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias:
      [
        {find:'@',replacement: "/src" },
       // {find:'org.eclipse.daanse.board.app.lib.module1',replacement: "packages/lib/module1/" }
      ],

  },
  server: {
    host:'0.0.0.0',
    proxy:{
      "^/bundles/.*":{
        target:"http://localhost:5173",
        changeOrigin: true,
        rewrite:(path) =>{
           console.log(path)
           return  "/@fs/mnt/be46e9e8-fa36-463c-8885-99892ace2ab9/org.eclipse.daanse.board.app/packages/lib/module1/dist/lib.module1.js"
        },
      }
    },
    fs: {
      // Allow serving files from one level up to the project root
      strict:false,
      allow: [
        searchForWorkspaceRoot(process.cwd())+'../../lib/core',
        searchForWorkspaceRoot(process.cwd())+'../../lib/module1',
        searchForWorkspaceRoot(process.cwd()),
      ],
    },
  },
})
