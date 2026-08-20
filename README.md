# FleetPanda OMS Automation Framework

## Overview

This project automates the FleetPanda Order Management System (OMS) workflow using Playwright with TypeScript.

The automation validates the complete order lifecycle:

```
Login
 |
Create Order
 |
Process Payment
 |
Confirm Order
 |
Database Validation
```

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- API Automation
- Allure Reporting
- GitHub Actions CI/CD


---

## Framework Architecture

The framework follows a layered architecture:

```
Tests
  |
Fixtures
  |
API Service Layer
  |
Mock OMS Server
  |
Database Validation
  |
Reports
```


---

## Project Structure

```
fleetpanda-oms-automation

├── api
│   ├── LoginAPI.ts
│   ├── OrderAPI.ts
│   └── PaymentAPI.ts
│
├── tests
│   ├── order-flow.spec.ts
│   ├── order-negative.spec.ts
│   └── database-validation.spec.ts
│
├── fixtures
│   └── apiFixture.ts
│
├── database
│   └── mockDatabase.ts
│
├── mock-server
│   ├── server.js
│   └── db.json
│
├── utils
│   ├── testData.ts
│   └── testDataNegative.ts
│
├── docs
│
└── .github
    └── workflows
        └── playwright.yml
```

---

# Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Execute Tests

Run complete test suite:

```bash
npx playwright test
```

Run specific test:

```bash
npx playwright test tests/order-flow.spec.ts
```

---

# Test Coverage

## Positive Scenarios

✅ Valid user login

✅ Create order successfully

✅ Process successful payment

✅ Validate order confirmation


## Negative Scenarios

✅ Invalid login validation

✅ Payment failure validation


## Database Validation

The framework validates:

```
Order API Response
        |
        ↓
Database Record
```

Validated fields:

- Order ID
- Customer ID
- Amount
- Order Status


---

# Reporting

## Playwright HTML Report

Open report:

```bash
npx playwright show-report
```


## Allure Report

Generate report:

```bash
allure generate allure-results --clean
```

Open report:

```bash
allure open allure-report
```

---

# CI/CD Integration

GitHub Actions is configured to execute Playwright tests automatically.

Pipeline Steps:

1. Checkout code
2. Install Node dependencies
3. Install Playwright browsers
4. Start Mock OMS service
5. Execute automation tests
6. Upload test reports


Workflow File:

```
.github/workflows/playwright.yml
```

---

# Assumptions

- OMS APIs are simulated using a mock server.
- Database validation is implemented using a mock database layer.
- Test data is maintained separately from test scripts.
- API contracts are assumed based on available requirements.


---

# Future Enhancements

- Real database integration
- Environment-based execution (QA/UAT/PROD)
- API schema validation
- Parallel execution optimization
- Docker execution support

## Repository

GitHub:
https://github.com/ashvinibomble03/fleetpanda-oms-automation
