import { test, expect } from '@playwright/test';


/**
 * 1. Open the page
 * 2. Click at Get started
 * 3. Mouse hover the language dropdown
 * 4. Click at  Java
 * 5. Check the URL 
 * 6. Check the text "Installing Playwright" is not being displayed
 * 7. Check the text below is displayed
 * 
 * Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.
 * 
 */



test('check Java page', async ({ page }) => {

    //Open the page
    page.goto('https://playwright.dev/'); 
    
    //Click at Get started
    await page.getByRole('link', {name: 'Get started'}).click();
   
    //Mouse hover the language dropdown "Node.js"
    await page.getByRole('button', {name: 'Node.js'}).hover();
   
    //Click at  Java
    await page.getByRole('link', { name: 'Java', exact: true }).click();
      // In case the locator above doesn't work, you can use this line. Remove the line above and use this one instead.
      //await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); 


    //Check the URL 
    await expect (page).toHaveURL('https://playwright.dev/java/docs/intro');
        //await expect(page).toHaveURL(/.*intro/);
    
    //Check the text "Installing Playwright" is not being displayed
    await expect(page.getByText('Installing Playwright', {exact:true})).not.toBeVisible();

    //variable creation with text
    const javaDescription = `Playwright is distributed as a set of Maven modules. The easiest way to use it is to add one dependency to your project's pom.xml as described below. If you're not familiar with Maven please refer to its documentation.`;
   
    // Check the text below is displayed
    await expect(page.getByText(javaDescription)).toBeVisible();
});