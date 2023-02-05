const{test, expect, chromium} = require('@playwright/test')

test('enter login details test', async()=>{
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://www.saucedemo.com/')
    console.log(await page.title())
    const user_id = await page.$('#user-name')
    const password = await page.$('#password')
    // await search_box.type("Brahma Kothapalli")
    await user_id.type("standard_user", {delay:50})
    await password.type('password')
    await browser.close()
})