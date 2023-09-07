# Learning UI Automation Testing
**1. Install Playwright package:**
```
npm init playwright@latest
```

**2. Install Allure Report:**
```
npm i -D @playwright/test allure-playwright
```
**3. Install Allure command**
```
npm i -D allure-commandline
```
**4. Run test with Allure report:**
```
npx playwright test --reporter=line,allure-playwright
```
**5. Generate Allure report:**
```
npx allure generate ./allure-results --clean
```
**6. Open HTML Allure report:**
```
npx allure open ./allure-report
```
