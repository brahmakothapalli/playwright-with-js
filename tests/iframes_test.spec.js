const{test, firefox} = require('@playwright/test')

test('check or uncheck checkboxes', async()=>{
    const browser = await firefox.launch()
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/iframe')
    await page.waitForTimeout(5000)
    // await page.frame()

    
    await page.waitForTimeout(5000)

})