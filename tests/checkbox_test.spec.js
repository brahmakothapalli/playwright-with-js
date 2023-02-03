const{test, firefox} = require('@playwright/test')

test('check or uncheck checkboxes', async()=>{
    const browser = await firefox.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    await page.waitForTimeout(5000)
    const all_checkboxes = await page.$$('input[type="checkbox"]')
    console.log('checkboxes count -', all_checkboxes.length)
    await all_checkboxes[0].check()
    if(await all_checkboxes[1].isChecked()){
        await all_checkboxes[1].uncheck()
    }
    await page.waitForTimeout(5000)

})