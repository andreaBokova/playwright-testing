// PARAMETRIZED LOGIN TESTS>
import { test, expect } from "../fixtures";

const loginTests = [
  {
    name: "valid user",
    username: "standard_user",
    password: "secret_sauce",
    expectSuccess: true,
    error: "",
  },
  {
    name: "locked out user",
    username: "locked_out_user",
    password: "secret_sauce",
    expectSuccess: false,
    error: "Epic sadface: Sorry, this user has been locked out.",
  },
  {
    name: "invalid credentials",
    username: "invalid_user",
    password: "wrong_password",
    expectSuccess: false,
    error:
      "Epic sadface: Username and password do not match any user in this service",
  },
];

test.describe("Login tests", () => {
  test.use({ storageState: undefined });

  for (const data of loginTests) {
    test(`login - ${data.name} @login`, async ({ page, loginPage }) => {
      await loginPage.goto();
      await loginPage.login(data.username, data.password);

      if (data.expectSuccess) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        const error = await loginPage.getError();
        await expect(error).toBeVisible();
        await expect(error).toContainText(data.error);
      }
    });
  }
});

// STANDARD LOGIN TESTS>
// test.describe("Login Tests", () => {
//   test("valid login", async ({ loginPage, page }) => {
//     await loginPage.goto();

//     await loginPage.login("standard_user", "secret_sauce");

//     await expect(page).toHaveURL(/inventory/);
//   });

//   test("locked out user login", async ({ loginPage, page }) => {
//     await loginPage.goto();

//     await loginPage.login("locked_out_user", "secret_sauce");

//     await expect(page).not.toHaveURL(/inventory/);

//     const errorText = await page.locator('[data-test="error"]').textContent();

//     expect(errorText).toContain("user has been locked out");
//   });
// });
