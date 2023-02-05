const{test, firefox} = require('@playwright/test')

test('checking state of the elements', async ()=>{

    const browser = await firefox.launch()
    const page = await browser.newPage()

    await page.goto('https://paint.js.org/')

    // moving mouse to 200, 200     
    await page.mouse.move(200, 200)
    // pressing mouse donw
    await page.mouse.down()
    // drawing the square    
    await page.mouse.move(400, 200)
    await page.mouse.move(400, 400)
    await page.mouse.move(200, 400)
    await page.mouse.move(200, 200)
    // releasing the mouse
    await page.mouse.up()
    await page.waitForTimeout(5000)



})