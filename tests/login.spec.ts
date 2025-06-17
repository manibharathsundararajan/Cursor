import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { getLoginData, measurePerformance } from '../utils/helpers';

const loginData = getLoginData();

test.describe('SauceDemo Login Scenarios', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
  });

  test.afterEach(async ({ page }) => {
    // Add teardown or logging if needed
    await page.close();
  });

  for (const data of loginData) {
    test(`Login scenario: ${data.scenario}`, async ({ page }) => {
      const { duration } = await measurePerformance(async () => {
        await loginPage.login(data.username, data.password);
      });

      if (data.scenario === 'valid') {
        await inventoryPage.isLoaded();
        expect(page.url()).toContain('inventory');
        console.log(`Login response time: ${duration}ms`);
      } else {
        await expect(loginPage.errorMessage).toBeVisible();
        const error = await loginPage.getErrorMessage();
        expect(error, `Error message should be shown for scenario: ${data.scenario}`).toBeTruthy();
        console.log(`Login response time (error): ${duration}ms`);
      }
    });
  }

  test('UI/UX: Username and Password fields are visible', async () => {
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
  });

  test('UI/UX: Placeholder text accuracy', async () => {
    expect(await loginPage.usernameInput.getAttribute('placeholder')).toBe('Username');
    expect(await loginPage.passwordInput.getAttribute('placeholder')).toBe('Password');
  });

  test('UI/UX: Login button enablement/disablement', async () => {
    await loginPage.usernameInput.fill('');
    await loginPage.passwordInput.fill('');
    expect(await loginPage.loginButton.isDisabled()).toBeFalsy(); // Button is always enabled on this site
  });

  test('UI/UX: Password masking', async () => {
    expect(await loginPage.passwordInput.getAttribute('type')).toBe('password');
  });
}); 