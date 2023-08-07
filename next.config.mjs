import { join } from 'path';
import { fileURLToPath } from 'url';
import get_key from './aws-connector.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default async function nextConfig() {
  const { CMS_API_KEY, CMS_API_BASE_URL, CMS_BASE_URL } = await get_key(
    'prod/ariadne/ariadne_web'
  );

  return {
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
  };
};
