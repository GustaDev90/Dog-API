/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/old-page',
          destination: '/new-page',
          permanent: true,
        },
      ];
    },
  };
  
  export default nextConfig;
  