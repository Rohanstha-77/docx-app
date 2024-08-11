import {withSentryConfig} from '@sentry/nextjs';
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'img.clerk.com' }]
  }
};

export default withSentryConfig(nextConfig, {


silent: !process.env.CI,

widenClientFileUpload: true,


hideSourceMaps: true,

disableLogger: true,

automaticVercelMonitors: true,
});