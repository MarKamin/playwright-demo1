const {PlaywrightTestConfig} = require('@playwright/test')

const config = {
    retries: 1,
    timeout: 5000,
    use: {
        headless: false,
        viewport: {width: 1200, height: 720},
        video: "off",
        screenshot: "off",
    },

    projects: [
        {
            name: 'Chrome',
            use: {browserName: 'chromium'}
        },
        {
            name: 'Firefox',
            use: {browserName: 'firefox'}
        },
    ]

}

module.exports = config;