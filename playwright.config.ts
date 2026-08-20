import { defineConfig } from '@playwright/test';


export default defineConfig({

    testDir: './tests',

    reporter: [
        ['html'],
        ['allure-playwright']
    ],

    use: {
        baseURL: 'http://localhost:3000'
    }

});