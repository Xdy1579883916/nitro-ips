//https://nitro.unjs.io/config
export default defineNitroConfig({
    srcDir: "server",
    experimental: {
        asyncContext: true,
        openAPI: true,
    },
    openAPI: {
        // http://localhost:3000/_scalar
        // http://localhost:3000/_swagger
        meta: {
            title: 'My Awesome Project',
            description: 'This might become the next big thing.',
            version: '1.0',
        },
        ui: {
            scalar: {
                theme: 'kepler'
            },
            swagger: false,
        }
    },
    // debug: true,
    runtimeConfig: {},
    compatibilityDate: '2024-08-30',
});
