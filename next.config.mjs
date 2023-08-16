import { join } from 'path';
import { fileURLToPath } from 'url';
import get_key from './aws-connector.js';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm'; // Make sure you have imported this if you are using it.

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

async function nextConfig() {
  const { CMS_API_KEY, CMS_API_BASE_URL, CMS_BASE_URL } = await get_key(
    'prod/ariadne/ariadne_web'
  );

  return withMDX({
    sassOptions: {
      includePaths: [join(__dirname, 'styles')],
    },
    env: {
      cmsApiKey: CMS_API_KEY ?? process.env?.CMS_API_KEY ?? '',
      cmsApiBaseUrl: CMS_API_BASE_URL ?? process.env.CMS_API_BASE_URL ?? '',
      cmsBaseUrl: CMS_BASE_URL ?? process.env.CMS_BASE_URL ?? '',
    },
    reactStrictMode: true,
    distDir: 'build',
    trailingSlash: true,
    optimizeFonts: false,
  });
}

export default nextConfig;
