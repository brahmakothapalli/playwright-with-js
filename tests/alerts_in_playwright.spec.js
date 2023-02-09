const{test, expect }= require('@playwright/test')

test('Handling the dailogs/alerts', async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    // creating the event listener
    page.on('dialog', async(dialog)=>{
        console.log(dialog.type())
        // to get the text on the dialog
        console.log('The message displayed is:',dialog.message())        
        dialog.accept()
    })
    // clicking on the alert button
    await page.click('#alertButton')    
    await page.waitForTimeout(5000)
})

test('Handling the confirm dialog', async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    // creating the event listener
    page.on('dialog', async(confirm)=>{
        console.log(confirm.type())
        // to get the text on the dialog
        console.log('The message displayed is:',confirm.message())        
        confirm.dismiss()
    })
    // clicking on the confirm alert button
    await page.click('#confirmButton') 
    expect(page.locator('id=confirmResult')).toContainText('Cancel')   
    await page.waitForTimeout(5000)
})

test.only('Handling the prompt dialog', async ({page})=>{
    await page.goto('https://demoqa.com/alerts')
    // creating the event listener
    page.on('dialog', async(prompt)=>{
        console.log(prompt.type())
        // to get the text on the dialog
        console.log('The message displayed is:',prompt.message()) 
        console.log('The defaul value is:',prompt.message())          
        prompt.accept('brahma kothapalli')
    })
    // clicking on the prompt alert button
    await page.click('#promtButton')    
    await page.waitForTimeout(5000)
    expect(page.locator('id=promptResult')).toHaveText('You entered brahma kothapalli')
})