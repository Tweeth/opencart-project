
import { test, expect } from '@fixtures/authentification-fixture'
import routes from '@test-data/routes.json'

test('Check success Sign Up', async({page, signUpPage}) => {
    await signUpPage.successSignUp('FN1test', 'LN2test', 'emailtest7@dispostable.com', '050123456', 'Qwerty123' )
})

test('Check validations for Sign Up fields', async({page, signUpPage}) => {
    await page.goto(routes.authentication.sign_up)
    await page.waitForLoadState()
    await signUpPage.continueBtn.click()
    await expect(page).toHaveURL(routes.authentication.sign_up)
    await expect(signUpPage.warningError).toBeVisible()
    await expect(signUpPage.firstNameFldError).toBeVisible()
    await expect(signUpPage.lastNameFldError).toBeVisible()
    await expect(signUpPage.emailFldError).toBeVisible()
    await expect(signUpPage.telephoneFldError).toBeVisible()
    await expect(signUpPage.passwordFldError).toBeVisible()
})

test('Check success login to account', async({page, signInPage, signUpPage, header}) => {
    const email = 'mailtest8@dispostable.com'
    const password = 'Qwerty123'
    await signUpPage.successSignUp('FN1test', 'LN2test', email, '050123456', password )
    await header.logoutFromAccount()
    await page.goto(routes.authentication.sign_in)
    await page.waitForLoadState()
    await signInPage.logInToAccount(email, password)
    await expect(page).toHaveURL(routes.authentication.account)
})