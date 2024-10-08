const esbuild = require('esbuild');
const { dtsPlugin } = require('esbuild-plugin-d.ts');
const { dependencies } = require('./package.json');

async function build() {
  // make react lib
  await esbuild.build({
    logLevel: 'info',
    entryPoints: ['src/index.tsx'],
    bundle: true,
    minify: true,
    format: 'cjs',
    sourcemap: 'external',
    outdir: 'dist',
    // remove external libs from out file
    external: Object.keys(dependencies),
    plugins: [dtsPlugin()],
  });
}

build().catch((e) => {
  console.error('cannot build', e);
  process.exit(1);
});
