import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  console.log('heyaaa')
  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).not.toContain('Welcome');
});
