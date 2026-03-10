import{test,expect,Locator} from"@playwright/test"

test('radio button', async({page})=>
{
    page.goto('https://testautomationpractice.blogspot.com/')
   /*  const malebutton=page.locator('#male')
    await malebutton.check() */

// both are fine
    await page.locator('#male').check()

    await page.waitForTimeout(5000)
})