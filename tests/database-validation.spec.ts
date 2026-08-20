import { test, expect } from '../fixtures/apiFixture';

import { MockDatabase } from '../database/mockDatabase';


test.describe('Database Validation', () => {


    test('Validate created order against database',
    async ({orderAPI}) => {


        const orderResponse =
            await orderAPI.createOrder({

                customerId:101,

                productId:501,

                quantity:2,

                amount:500,

                status:"CREATED"

            });



        expect(orderResponse.status())
            .toBe(201);



        const apiOrder =
            await orderResponse.json();



        // Save API response into mock database

        MockDatabase.saveOrder(apiOrder);



        // Fetch from database

        const dbOrder =
            MockDatabase.getOrder(apiOrder.id);



        // Database validation

        expect(dbOrder)
            .toBeTruthy();



        expect(dbOrder?.id)
            .toBe(apiOrder.id);



        expect(dbOrder?.customerId)
            .toBe(apiOrder.customerId);



        expect(dbOrder?.amount)
            .toBe(apiOrder.amount);



        expect(dbOrder?.status)
            .toBe("CREATED");


    });


});