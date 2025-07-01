const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/Login_Page');

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.login('Admin', 'admin123');
  await loginPage.assertLoginSuccess();
});
