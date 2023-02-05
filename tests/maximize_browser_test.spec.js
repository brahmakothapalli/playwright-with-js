const{test, chromium} = require('@playwright/test')

test('maximizing the beowser', async()=>{
    const browse = await chromium.launch()
    const page = await browse.newPage()
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(5000)
    console.log('page height- ', page.viewportSize().height)
    console.log('page width- ', page.viewportSize().width)  
})