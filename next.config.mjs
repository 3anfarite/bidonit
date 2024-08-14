/** @type {import('next').NextConfig} */
const nextConfig = {
   images:{
      remotePatterns: [
         {
            hostname: 'pub-57fdc2622e8f417387ddd4c9e1c930ae.r2.dev',
            protocol: 'https',
            port:'',
         }
      ]
   }
};

export default nextConfig;
