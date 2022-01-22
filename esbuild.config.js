import { build } from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

build({
  entryPoints: ["./src/app.tsx"],
  bundle: true,
  outfile: "./dist/bundle.js",
  minify: true,
  target: "es2020",
  define: {
    "process.env.NODE_ENV": "production",
  },
  plugins: [nodeExternalsPlugin()],
});
