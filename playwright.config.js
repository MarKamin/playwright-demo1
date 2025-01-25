const {PlaywrightTestConfig} = require('@playwright/test')

const config = {
    retries: 0,
    timeout: 60000,
    reporter: "./reporter.js",
    use: {
        // baseURL: "https://the-internet.herokuapp.com",
        headless: false,
        viewport: {width: 1200, height: 720},
        video: "off",
        screenshot: "only-on-failure",
        headless: true, // Ensures tests run headlessly
    },

    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        // {
        //     name: 'Firefox',
        //     use: {browserName: 'firefox'}
        // },
    ],
}

module.exports = config;