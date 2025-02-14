import type { NextConfig } from "next";


const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEnfNav: true,
  agressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false, 
  workboxOptions: {
    disableDevLogs: true,
    
  }
});

const nextConfig: NextConfig = {};

export default withPWA(nextConfig);
