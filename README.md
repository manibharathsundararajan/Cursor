# SauceDemo Playwright Automation Framework

## Project Structure

```
Test/
├── config/
├── data/
│   └── loginData.json
├── pages/
│   ├── LoginPage.ts
│   └── InventoryPage.ts
├── tests/
│   └── login.spec.ts
├── utils/
│   └── helpers.ts
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run tests:**
   ```bash
   npx playwright test
   ```
3. **View Allure report:**
   ```bash
   npx allure generate ./allure-results --clean && npx allure open
   ```

## Best Practices
- Use Page Object Model (POM) for all page interactions.
- Store all test data in `data/loginData.json`.
- Use `beforeEach` and `afterEach` hooks for setup and teardown.
- Keep utility functions in `utils/`.
- Use environment variables via `.env` and `dotenv`.
- Integrate Allure for reporting.
- Ensure code is modular, commented, and scalable.

## Notes
- The framework supports Chromium, Firefox, and WebKit.
- All credentials and edge cases are externalized in JSON.
- Performance metrics are logged for login scenarios.

---
For any questions or improvements, please refer to the Playwright documentation or contact the framework maintainer. 