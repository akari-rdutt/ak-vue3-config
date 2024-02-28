import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// Parse the component path and name from a single argument
const parseComponentArg = () => {
  const arg =
    process.env.COMPONENT_ARG ||
    "default/path/to/your/component.vue:MyComponent"; // Default argument format
  const [path, name] = arg.split(":");
  return { path, name };
};

const { path: componentPath, name: componentName } = parseComponentArg();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    "process.env.NODE_ENV": "production",
  },
  build: {
    lib: {
      entry: componentPath, // Specify the path to your Vue component
      name: componentName, // Specify the name of your component library
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        dir: componentPath.replace(/\/[^\/]+$/, ""), // Output directory (same directory as the source)
        entryFileNames: `${componentName}.v3.js`, // Output file name
        format: ["umd", "es"], // Output format (ES module)
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  // configureServer: [
  //   ({ app }) => {
  //     // Register the component globally
  //     app.component('HelloWorld', HelloWorld);
  //   },
  // ],
});
