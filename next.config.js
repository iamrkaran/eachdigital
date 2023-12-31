/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
    },
    images: {
        domains: ['localhost', 'eachdigital.s3.amazonaws.com'],
    },
    images:{
        remotePatterns: [{
            hostname: 'eachdigital.s3.amazonaws.com',
            protocol: 'https',
        }],
        
    }
}

module.exports = nextConfig
