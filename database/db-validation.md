# Database Validation

Order creation response should be validated against database records.

Example:

SELECT * FROM orders WHERE order_id = 1001;

Validate:
- Order ID
- Customer ID
- Amount
- Status