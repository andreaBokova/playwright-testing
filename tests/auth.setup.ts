import { test as setup, expect } from "@playwright/test";
import path from "path";

const authFile = path.join(__dirname, "../playwright/.auth/user.json");
setup("authenticate standard user", async ({ page }) => {
  // 2. LOGIN
  await page.goto("https://www.saucedemo.com/");

  await page.fill("#user-name", "standard_user");
  await page.fill("#password", "secret_sauce");
  await page.click("#login-button");

  // 3. VERIFY LOGIN SUCCESS
  await expect(page).toHaveURL(/inventory/);

  // 4. SAVE STATE
  await page.context().storageState({ path: authFile });
  
});
