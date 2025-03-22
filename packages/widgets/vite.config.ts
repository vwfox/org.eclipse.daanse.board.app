// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Точка входа вашей библиотеки
      name: 'org.eclipse.daanse.board.app.ui.vue.widgets', // Название вашей библиотеки
      fileName: (format) => `org.eclipse.daanse.board.app.ui.vue.widgets.${format}.js`, // Название выходного файла
    },
    rollupOptions: {
      external: ['vue'], // Vue будет внешней зависимостью
      output: {
        globals: {
          vue: 'Vue', // Глобальное имя Vue
        },
      },
    },
  },
  plugins: [vue()],
});