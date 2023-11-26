import { test, expect } from "@playwright/test"

import SignUpPage from "@/framework/models/authentication/sign-up-page"
import routes from '@test-data/routes.json'



// test('Check success Sign Up', async({page}) => {
//     await page.goto(routes.authentication.sign_up)
//     await page.waitForLoadState()
//     const signUpPage = new SignUpPage(page)
//     await signUpPage.successSignUp('FN1test', 'LN2test', 'emailtest2@dispostable.com', '050123456', 'Qwerty123' )
// })

test('Check validations for Sign Up fields', async({page}) => {
    await page.goto(routes.authentication.sign_up)
    await page.waitForLoadState()
    const signUpPage = new SignUpPage(page)
    await signUpPage.continueBtn.click()
    await expect(page).toHaveURL(routes.authentication.sucsess)
    await expect(signUpPage.warningError).toBeVisible()
    await expect(signUpPage.firstNameFldError).toBeVisible()
    await expect(signUpPage.lastNameFldError).toBeVisible()
    await expect(signUpPage.emailFldError).toBeVisible()
    await expect(signUpPage.telephoneFldError).toBeVisible()
    await expect(signUpPage.passwordFldError).toBeVisible()
})