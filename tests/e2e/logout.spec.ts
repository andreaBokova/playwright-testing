import { test, expect } from "../fixtures";

test.describe("Logout Flow @e2e", () => {

  test("user is redirected to login after logout @e2e @regression", async ({
    page,
    header,
  }) => {

    // start already authenticated via storageState
    await page.goto("https://www.saucedemo.com/inventory.html");

    // logout
    await header.logout();

    // verify redirect 
    await expect(page).toHaveURL("https://www.saucedemo.com/");

    // check that inventory is not be accessible anymore
    await page.goto("https://www.saucedemo.com/inventory.html");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
  });

});