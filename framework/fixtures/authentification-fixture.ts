import Header from '@models/authentication/header'
import SignInPage from '@models/authentication/sign-in-page'
import SignUpPage from '@models/authentication/sign-up-page'
import { test as authenticationFixture } from '@playwright/test'

type Pages = {
  signInPage: SignInPage
  signUpPage: SignUpPage
  header: Header
}

const testPages = authenticationFixture.extend<Pages>({
  signInPage: async ({ page }, use) => {
    await use(new SignInPage(page))
  },
  signUpPage: async ({ page }, use) => {
    await use(new SignUpPage(page))
  },
  header: async ({ page }, use) => {
    await use(new Header(page))
  }
})

export const test = testPages
export const expect = testPages.expect
