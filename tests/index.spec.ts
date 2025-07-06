import { test, expect } from '@playwright/test';
import { allowAllCookies } from './util/generics';

// Test to ensure the Pricing page has the correct title
test('Verify testsuite is running in right page', async ({ page }) => {
  await page.goto('https://www.channable.com/pricing');
  await expect(page).toHaveTitle("Pricing | Channable");
});

// Test to check if EUR is the default active currency and USD is inactive
test('Check default currency type', async ({ page }) => {
  await page.goto('https://www.channable.com/pricing');
  await allowAllCookies(page); // Accept cookies to interact with the page
  await expect(page.getByText(/EUR/)).toHaveAttribute("mode", "active"); // Check EUR is active
  await expect(page.getByText(/USD/)).toHaveAttribute("mode", "inactive"); // Check USD is inactive
});

// Test to select 15K items plan and verify that 15,000 items are displayed
test('Change items count to 15K', async ({ page }) => {
  await page.goto('https://www.channable.com/pricing');
  await allowAllCookies(page);
  const item15K = page.locator('button > p:has-text("15K")'); // Locate the 15K plan option
  await item15K.click(); // Select the plan
  await expect(page.locator(".dlGZia > p:nth-child(2)")).toContainText("15,000"); // Verify count
});

// Test to change to the Core Standard plan and confirm the total pricing
test('Change plan to Core standard', async ({ page }) => {
  await page.goto('https://www.channable.com/pricing');
  await allowAllCookies(page);

  // Click the first "Choose plan" button
  await page.getByText(/Choose plan/).first().click();

  // Locate the pricing block that contains "Total"
  const childElementWithTotal = page.locator("p:has-text('Total')").first();
  const parent = page.locator('.EYAZZ').filter({ has: childElementWithTotal });

  // Confirm the plan price reflects "59"
  await expect(parent.locator("p:nth-child(2)")).toContainText("59");
});

// Test to increase the number of CSS Shops and verify it updates on UI
test('Add additional CSS Standard', async ({ page }) => {
  await page.goto('https://www.channable.com/pricing');
  await allowAllCookies(page);

  // Locate and click the "+" button to add a CSS Shop
  const inputBox = page.locator('input[type="number"][min="0"]').first();
  await page.locator('.bACSqt > div:has-text("+")').click();

  // Confirm that the UI reflects 1 CSS Shop added
  await expect(page.getByText(/CSS Shop x 1/)).toBeVisible();
});
