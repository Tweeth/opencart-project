import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',

  fullyParallel: true,
  forbidOnly: true,
  retries: 0,
  workers: 1,
  reporter: 'html',

  use: {
    baseURL: 'https://demo-opencart.com/index.php?',
    trace: 'retain-on-failure',
    headless: true
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});
// import type { PlaywrightTestConfig } from '@playwright/test'
// import { devices } from '@playwright/test'
// import path from 'path'
// import credsFile from '@test-data/creds.json'

// export const STORAGE_STATE = path.join(__dirname, 'test-data/storage-state.json');
// const creds = process.env.ENV === 'staging' ? credsFile.staging : credsFile.prod

// const config: PlaywrightTestConfig = {
//   workers: 1,
//   retries: 2,
//   timeout: 60 * 1000,
//   forbidOnly: true,
//   outputDir: 'test-results/',
//   reporter: [['html', { open: 'always', outputFolder: './test-report' }]],

//   // Ignores serial notation; consider disabling this in case of flakiness
//   fullyParallel: false,

//   expect: {
//     timeout: 15 * 1000,

//     // Allowed screenshot difference; should be supervised to prevent false positives
//     toHaveScreenshot: { maxDiffPixelRatio: 0.1 }
//   },

//   use: {
//     actionTimeout: 15 * 1000,
//     baseURL:
//       process.env.ENV === 'staging'
//         ? 'https://demo-opencart.com/'
//         : 'https://playwright.dev/docs/intro',
//     screenshot: 'only-on-failure',
//     trace: 'retain-on-failure',
//     video: 'retain-on-failure',

//     viewport: { height: 1600, width: 900 },

//     httpCredentials: {
//       username: creds.http_username,
//       password: creds.http_password
//     },
//   },

//   projects: [
//     {
//       name: 'setup',
//       testMatch: /global-setup\.ts/,
//       teardown: 'teardown',
//     },
//     {
//       name: 'teardown',
//       testMatch: /global-teardown\.ts/,
//       use: {
//         storageState: STORAGE_STATE
//       }
//     },
//     {
//       name: 'chrome',
//       use: {
//         ...devices['Desktop Chrome'],
//         storageState: STORAGE_STATE
//       },
//       dependencies: ['setup'],
//     }
//   ]
// }

// export default config
