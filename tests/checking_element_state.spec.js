const{test, firefox} = require('@playwright/test')

test('checking state of the elements', async ()=>{
    const browser = await firefox.launch({headless: true})
    const page = await browser.newPage()

    await page.goto('https://demoqa.com/automation-practice-form')

    const mobile_number = await page.$('#userNumber')
    console.log('Mobile number - is it editable? ', await mobile_number.isEditable())

    const last_name = await page.$('#lastName')
    console.log('Last name - is it enabled? ', await last_name.isEnabled())
    console.log('Last name - is it disabled? ', await last_name.isDisabled())
    console.log('Last name - is it visible? ', await last_name.isVisible())

    const hobbie_sports_checkbox = await page.$('#hobbies-checkbox-1')
    console.log('Last name - is it checked? ', await hobbie_sports_checkbox.isChecked())
    console.log('Last name - is it hidden? ', await hobbie_sports_checkbox.isHidden())

})