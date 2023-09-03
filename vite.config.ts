import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path"
import vueJsx from "@vitejs/plugin-vue-jsx"
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),  
    vueJsx(),
    UnoCSS()
  ],
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    /** 是否开启 HTTPS */
    https: false,
    /** 设置 host: true 才可以使用 Network 的形式，以 IP 访问项目 */
    host: true, // host: "0.0.0.0"
    /** 端口号 */
    port: 3333,
    /** 是否自动打开浏览器 */
    open: false,
    /** 跨域设置允许 */
    cors: true,
    /** 端口被占用时，是否直接退出 */
    strictPort: false,
    /** 接口代理 */
    proxy: {
      "/api/v1": {
        // target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212",
        target: "https://www.fastmock.site/mock/761e2dda2b8890ab86c928a74e8f6538",
        ws: true,
        /** 是否允许跨域 */
        changeOrigin: true
      }
    }
  },
   /** 混淆器 */
   esbuild: {
    /** 打包时移除 console.log */
    pure: ["console.log"],
    /** 打包时移除 debugger */
    drop: ["debugger"],
    /** 打包时移除所有注释 */
    legalComments: "none"
  },
})
