/*
Copyright (c) 2024 Contributors to the  Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

  SPDX-License-Identifier: EPL-2.0

Contributors:
  Markus Hochstein - inital setup
  Stefan Bischof - inital setup
*/
import { fileURLToPath, URL } from 'node:url'
import path from "path";
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);


// https://vite.dev/config/
export default defineConfig({
  base: '',
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./packages', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/lib.core.ts'),
      name: 'lib.core',
      // the proper extensions will be added
      fileName: 'lib.core',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
