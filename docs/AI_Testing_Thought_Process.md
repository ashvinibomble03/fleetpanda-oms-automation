# AI Testing Thought Process


## 1. How would you test a system where outputs are non-deterministic (AI-based)?

For AI-based systems, I would focus on validating the quality, accuracy, consistency, and safety of responses rather than expecting exact output matches.

Testing approach:

- Define expected behavior using test scenarios and acceptance criteria.
- Validate response relevance, correctness, completeness, and format.
- Execute the same input multiple times to check response consistency.
- Perform boundary and negative testing with invalid, ambiguous, and unexpected inputs.
- Validate AI responses against reference data or expected business rules.
- Monitor metrics like accuracy, response time, hallucination rate, and reliability.


## 2. What challenges do you foresee vs traditional testing?

Challenges compared to traditional testing:

- AI outputs may vary for the same input, making exact validation difficult.
- Defining expected results is more complex than traditional applications.
- Validation focuses on quality, context, and relevance instead of only pass/fail results.
- AI models can generate incorrect or unexpected responses (hallucinations).
- Continuous testing is required as models and data evolve.
- Additional validation is required for bias, security, and data privacy.