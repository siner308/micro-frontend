import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [
    topLevelAwait({
      promiseExportName: "__tla",
      promiseImportName: i => `__tla_${i}`,
    }),
    react(),
    federation({
      name: "vite",
      filename: "remoteEntry.js",

      // Modules to expose
      exposes: {
        "./vite": "./src/App",
        // "./Button": "./src/components/Button",
        // "./store/countStore": "./src/store/countStore",
      },
      shared: ["react", "react-dom", "jotai"],
    }),
  ],
  // build: {
  //   modulePreload: false,
  //   target: "modules",
  //   minify: false,
  //   cssCodeSplit: false,
  // },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     target: "esnext",
  //   }
  // }
});
