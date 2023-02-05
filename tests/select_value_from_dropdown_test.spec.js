const{test, expect, chromium} = require('@playwright/test')

test('select value from dropdow', async()=>{
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
    const user_id = await page.$('#user-name')
    const password = await page.$('#password')
    const login_button = await page.$('[name="login-button"]')
    await user_id.type("standard_user", {delay:50})
    await password.type('secret_sauce')
    await login_button.click()
    const dropdown =  await page.$('.product_sort_container')
    // selecting by value
    await dropdown.selectOption({value: 'lohi'})
    //selecting by index
    await page.waitForTimeout(5000)
    const dropdown2 =  await page.$('.product_sort_container')
    await dropdown2.selectOption({index: 1})
    await page.waitForTimeout(5000)
    //selecting by visible text or label
    const dropdown3 =  await page.$('.product_sort_container')
    await dropdown3.selectOption({lable: 'Price (high to low)'})
    await page.waitForTimeout(5000)
    await browser.close()
})