/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            serverActions: true,
        },
    },
    reactStrictMode: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
