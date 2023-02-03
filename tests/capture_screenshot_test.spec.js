const{test, expect} = require('@playwright/test')

test('take screenshot test', async({page})=>{
    await page.goto('https://www.saucedemo.com/')

})