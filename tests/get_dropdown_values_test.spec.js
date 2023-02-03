const{test, expect, chromium} = require('@playwright/test')

test('get values from dropdown', async()=>{
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
    const user_id = await page.$('#user-name')
    const password = await page.$('#password')
    const login_button = await page.$('[name="login-button"]')
    await user_id.type("standard_user", {delay:50})
    await password.type('secret_sauce')
    await login_button.click()
    const dropdown =  await page.$('.product_sort_container')
    // read dropdown values
    const dropdown_options = await dropdown.$$('option')
    for(let i=0; i < dropdown_options.length; i++){
        console.log(await dropdown_options[i].innerText())
    }
    await browser.close()
})