const{test, firefox} = require('@playwright/test')

test('checking state of the elements', async ()=>{

    const browser = await firefox.launch()
    const page = await browser.newPage()

    await page.goto('https://brahmakothapalli.hashnode.dev/')

    // screenshot of visible page
    await page.screenshot({path: 'hasnode-brahma.png'})
    
    const name = await page.$('.blog-author-area-name css-11d2tuj')
    // screenshot of web element
    //name.screenshot({path: 'dp.png'})

    // full page screenshot
    await page.screenshot({path: 'full_page.png', fullPage:true})

})