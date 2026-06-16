import esbuild from "esbuild";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const publicDir = path.join(root, "public");
const basePath = normalizeBase(process.env.SITE_BASE ?? "/6-months/");

function normalizeBase(base) {
  const withLeadingSlash = base.startsWith("/") ? base : `/${base}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

function outputUrl(outputPath) {
  const absoluteOutput = path.resolve(root, outputPath);
  const relativeOutput = path.relative(distDir, absoluteOutput).split(path.sep).join("/");
  return `${basePath}${relativeOutput}`;
}

await rm(distDir, { force: true, recursive: true });
await mkdir(distDir, { recursive: true });

if (existsSync(publicDir)) {
  await cp(publicDir, distDir, { recursive: true });
}

const build = await esbuild.build({
  assetNames: "[name]-[hash]",
  bundle: true,
  chunkNames: "[name]-[hash]",
  define: {
    "import.meta.env.BASE_URL": JSON.stringify(basePath),
    "import.meta.env.DEV": "false",
    "import.meta.env.MODE": JSON.stringify("production"),
    "import.meta.env.PROD": "true",
  },
  entryNames: "[name]-[hash]",
  entryPoints: [path.join(root, "src/main.tsx")],
  format: "esm",
  jsx: "automatic",
  loader: {
    ".gif": "file",
    ".jpeg": "file",
    ".jpg": "file",
    ".png": "file",
    ".svg": "file",
    ".webp": "file",
    ".woff": "file",
    ".woff2": "file",
  },
  logLevel: "info",
  metafile: true,
  minify: false,
  outdir: path.join(distDir, "assets"),
  splitting: true,
  target: ["es2020"],
});

const outputs = Object.entries(build.metafile.outputs);
const entryScript = outputs.find(([, output]) => output.entryPoint?.endsWith("src/main.tsx"))?.[0];
const entryStyle = outputs.find(([outputPath]) => outputPath.endsWith(".css"))?.[0];

if (!entryScript) {
  throw new Error("Build did not produce an entry script.");
}

const sourceHtml = await readFile(path.join(root, "index.html"), "utf8");
const styleTag = entryStyle ? `    <link rel="stylesheet" href="${outputUrl(entryStyle)}" />\n` : "";
const html = sourceHtml.replace(
  '    <script type="module" src="/src/main.tsx"></script>',
  `${styleTag}    <script type="module" src="${outputUrl(entryScript)}"></script>`,
);

await writeFile(path.join(distDir, "index.html"), html);
