import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "path";
import tsConfigPath from "vite-tsconfig-paths";
import antdViteImportPlugin from "antd-vite-import-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      antdViteImportPlugin(),
      tsConfigPath(),
      dts({
        insertTypesEntry: true,
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    },
    define: {
      "process.env": { ...env },
    },
  };
});
