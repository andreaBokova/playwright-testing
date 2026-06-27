import { test, expect } from "../fixtures";
import {
  sortStringsAsc,
  sortStringsDesc,
  sortNumbersAsc,
  sortNumbersDesc,
} from "../helpers";

test.describe("Filter items in inventory @regression", () => {
  test("filter items by name (A to Z)", async ({
    inventoryPage,
    page,
  }) => {

    await page.goto("https://www.saucedemo.com/inventory.html");
    await inventoryPage.filterItemsBy("Name (A to Z)");

    const productNames = await inventoryPage.getProductNames();

    // compare
    expect(productNames).toEqual(sortStringsAsc(productNames));
  });
  test("filter items by name (Z to A)", async ({
    inventoryPage,
    page,
  }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.filterItemsBy("Name (Z to A)");

    const productNames = await inventoryPage.getProductNames();

    const sortedProductNamesZtoA = sortStringsDesc(productNames);
    // compare
    expect(productNames).toEqual(sortedProductNamesZtoA);
  });
  test("filter items by price (low to high)", async ({
    inventoryPage,
    page,
  }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.filterItemsBy("Price (low to high)");

    const displayedFilteredPrices = await inventoryPage.getProductPrices();
    const displayedFilteredPriceValues = displayedFilteredPrices.map((price) =>
      parseFloat(price.replace("$", "")),
    );
    const sortedProductPricesLowToHigh = sortNumbersAsc(
      displayedFilteredPriceValues,
    );
    // compare
    expect(displayedFilteredPriceValues).toEqual(sortedProductPricesLowToHigh);
  });
  test("filter items by price (high to low)", async ({
    inventoryPage,
    page,
  }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    await inventoryPage.filterItemsBy("Price (high to low)");

    const displayedFilteredPrices = await inventoryPage.getProductPrices();
    const displayedFilteredPriceValues = displayedFilteredPrices.map((price) =>
      parseFloat(price.replace("$", "")),
    );
    const sortedProductPricesHighToLow = sortNumbersDesc(
      displayedFilteredPriceValues,
    );
    // compare
    expect(displayedFilteredPriceValues).toEqual(sortedProductPricesHighToLow);
  });
});
