const{test, firefox} = require('@playwright/test')

test('checking state of the elements', async ()=>{
    const browser = await firefox.launch()
    const page = await browser.newPage()

    await page.goto('https://www.google.co.in/')
    await page.click('[name="q"]')
    // typing the text in the search box
    await page.keyboard.type("brahma kothapalli")
    await page.waitForTimeout(3000)
    // pressing enter
    await page.keyboard.press('Enter')
    await page.waitForTimeout(5000)

    // ctrl + A

    await page.keyboard.down('Control')
    await page.keyboard.down('A')

    await page.keyboard.up('Control')
    await page.keyboard.up('A')

    

    await page.waitForTimeout(5000)
})
