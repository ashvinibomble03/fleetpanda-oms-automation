import { test, expect } from '../fixtures/apiFixture';

import {
    invalidUser
} from '../utils/testDataNegative';


test.describe('FleetPanda OMS Negative Scenarios', () => {


    // Test 1: Invalid Login

    test('Invalid login should return 401', async ({ loginAPI }) => {


        const response =
            await loginAPI.login(
                invalidUser.email,
                invalidUser.password
            );


        console.log(
            "Invalid Login Status:",
            response.status()
        );


        console.log(
            "Invalid Login Response:",
            await response.text()
        );


        expect(response.status())
            .toBe(401);


    });



    // Test 2: Payment Failure

    test('Payment failure should not confirm order',
    async ({
        loginAPI,
        orderAPI,
        paymentAPI
    }) => {


        // Step 1: Login

        const loginResponse =
            await loginAPI.login(
                "test@test.com",
                "password"
            );


        expect(loginResponse.status())
            .toBe(200);



        // Step 2: Create Order

        const orderResponse =
            await orderAPI.createOrder({

                customerId:101,

                productId:501,

                quantity:1,

                amount:500

            });



        const order =
            await orderResponse.json();



        expect(order.status)
            .toBe("CREATED");



        // Step 3: Fail Payment

        const paymentResponse =
            await paymentAPI.processPayment({

                orderId: order.id,

                amount:500,

                paymentStatus:"FAILED"

            });



        console.log(
            "Payment Failure Status:",
            paymentResponse.status()
        );


        console.log(
            "Payment Failure Response:",
            await paymentResponse.text()
        );



        // Validation

        expect(paymentResponse.status())
            .toBe(400);


    });


});