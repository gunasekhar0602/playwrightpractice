import {test,expect,Locator}from"@playwright/test"

test('inputbox',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("//input[@id='name']").fill('Dhoni');
    await page.waitForTimeout(3000)
    await page.getByPlaceholder('Enter EMail').fill('Dhoni@gmail.com');
    await page.waitForTimeout(3000)
    await page.locator('//input[@id="phone"]').fill('9876543210');
    await page.waitForTimeout(3000)
    await page.locator('//textarea[@id="textarea"]').fill('India');
    await page.waitForTimeout(3000)
})
