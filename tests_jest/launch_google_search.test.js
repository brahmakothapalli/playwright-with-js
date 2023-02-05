const{chromium, expect} = require('@playwright/test')

describe('UI Tests', ()=>{

    let browser = null
    let page = null
    let context = null

    beforeAll(async ()=>{
        browser = await chromium.launch()
        context = await browser.newContext()
        page = await context.newPage()
        await page.goto('https://playwright.dev/')
    })

    afterAll(async ()=>{
        await browser.close()
    })

    test('Page should not be null', async()=>{
        expect(page).not.toBeNull()
    })
})