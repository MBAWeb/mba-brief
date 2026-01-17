/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects/mba-brief",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;