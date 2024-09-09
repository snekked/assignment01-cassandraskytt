import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { ClientsPage } from './pages/clients-page';

test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();

  });
});

test.describe('Test suite 02', () => {
  test('Test case 02', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);
    const clientsPage = new ClientsPage(page);

  }
  
  )
})




/* await dashboardPage.performLogout();
await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible(); 
await page.waitForTimeout(5000); 
*/


/*
test.describe('Test suite 01', () => {
  test('Test case 01', async ({ page }) => {
    // perform login
    await page.goto(`${process.env.BASE_URL}`);
    await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion
    await page.locator('input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
    await page.locator('input[type="password"]').fill(`${process.env.PASSWORD}`);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();


    // perform logout
   await page.getByRole('button', { name: 'Logout' }).click();
   await expect(page.url()).toBe('http://localhost:3000/login'); //assertion
   await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion
  });
});
*/