const {test, expect, chromium} = require('@playwright/test')

test('launching google in chrome', async()=>{
    const browser = await chromium.launch({headless:false})
    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
    console.log('test executed successfully')
    await browser.close()
    console.log('browser is closed')
    // await page.locator('name=q').fill("playwright with brahma")
})