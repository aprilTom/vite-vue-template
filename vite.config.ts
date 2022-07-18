import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      src: resolve('./src'),
    },
  },
  plugins: [
    vue(),
    // AutoImport({
    //   imports: [
    //     'vue',
    //     'vue-router',
    //   ],
    //   dts: true,
    // }),
    Components({
      dts: true,
      resolvers: [VantResolver()],
    }),
  ],
  esbuild: {
    drop: ['console', 'debugger'],
  },
})
