/** @type {import('next').NextConfig} */
const withSass = require('@zeit/next-sass');
const nextConfig = {
  reactStrictMode: true,
  styledComponents: {
    ssr: true, // Enable server-side rendering
    displayName: process.env.NODE_ENV !== "development", // Display component names in development
    preprocess: false, // Disable styled-components' built-in CSS minification
    // Add any other options you want here
  },
  
};
module.exports = nextConfig;
