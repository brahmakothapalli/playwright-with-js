import {test, chromium} from '@playwright/test'

test('enter login details test', async()=>{
    //launching the browser
    const browser = await chromium.launch({headless:false, slowMo: 200})
    //creating a page inside the browser
    const context = await browser.newContext({
        recordVideo:{
            dir: "./recordings"
        }
    })
    const page = await context.newPage()
    await page.goto('https://www.saucedemo.com/')
    console.log(await page.title())
    const user_id = await page.$('#user-name')
    const password = await page.$('#password')
    const login_button = await page.$('[name="login-button"]')
    await user_id.type("standard_user", {delay:50})
    await password.type('secret_sauce')
    await login_button.click()
    await browser.close()
})