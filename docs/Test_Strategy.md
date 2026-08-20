# FleetPanda OMS Test Strategy


## 1. Objective

The objective of this test strategy is to validate the FleetPanda Order Management System (OMS) order lifecycle and ensure reliability, data consistency, and error handling across critical workflows.


## 2. Business Flow Covered

The primary order lifecycle covered:
Login
  |
  ↓
Create Order
  |
  ↓
Payment Processing
  |
  ↓
Order Confirmation
  |
  ↓
Database Validation


## 3. Testing Approach

The testing approach includes:

- Functional testing
- API testing
- Negative scenario testing
- Data validation
- Regression testing


### API Validation Scope

API validation includes:

- HTTP status code validation
- Response payload validation
- Error response validation
- Business rule validation
- Data consistency validation


## 4. Automation Strategy

Automation follows Page Object / Service Object design principles for maintainability.

Automation is implemented using:

- Playwright
- TypeScript
- API automation framework
- Playwright fixtures for dependency management

### Reporting

- Allure reporting for execution results
- Playwright HTML reports for test analysis


### Defect Management

- Defects are identified using logs, API responses and validation failures.


## 5. Test Coverage


### Positive Scenarios

- Valid user authentication
- Successful order creation
- Successful payment processing
- Order confirmation validation
- Database consistency validation


### Negative Scenarios

- Invalid login credentials
- Payment failure handling
- Validation of error responses


## 6. Data Validation Strategy

Data consistency is validated by comparing:

API Response
      |
      ↓
Database Record


Validated fields:

- Order ID
- Customer ID
- Amount
- Order Status


## 7. Risks and Edge Cases


| Risk | Mitigation |
|---|---|
| Order creation failure | Validate API response and error handling |
| Payment failure | Verify order status is not confirmed |
| Data mismatch | Validate API response against database |
| Invalid user access | Verify authentication error handling |
| Service dependency failure | Validate proper error responses |


## 8. Assumptions

- OMS APIs are simulated using a mock server.
- Database validation is implemented using a mock database layer.
- Test data is maintained separately from automation scripts.
- API contracts are based on available requirements.


## 9. Exit Criteria

Testing is considered complete when:

- All critical scenarios are automated.
- Positive and negative flows are validated.
- Database consistency checks pass.
- Automation execution completes successfully.