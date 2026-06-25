# Playwright Automation Framework

This project was created for learning and practicing test automation with Playwright and TypeScript.

## Application Under Test

Tests are written against the demo e-commerce website:

https://www.saucedemo.com/

## Technologies Used

- Playwright
- TypeScript
- Node.js

## Framework Design

The project follows common test automation best practices:

- Page Object Model (POM)
- Reusable page classes
- Custom Playwright fixtures
- Separation of test logic and page interactions
- Meaningful test organization by feature
- Reusable helper methods

## Test Coverage

### Authentication
- Valid login
- Invalid login
- Locked-out user login
- Logout

### Inventory
- Add item to cart
- Remove item from cart
- Product sorting:
  - Name (A → Z)
  - Name (Z → A)
  - Price (Low → High)
  - Price (High → Low)

### Cart
- View cart
- Remove item from cart
- Continue shopping

### Checkout
- Complete checkout process
- Order confirmation validation

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/auth/login.spec.ts
```

Run a specific test:

```bash
npx playwright test -g "valid login"
```

## Reports

Open the Playwright HTML report:

```bash
npx playwright show-report
```
