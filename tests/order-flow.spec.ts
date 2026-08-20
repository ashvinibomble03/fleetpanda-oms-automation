import { test, expect } from '../fixtures/apiFixture';
import { validUser, orderData } from '../utils/testData';
import * as allure from "allure-js-commons";


test.describe('FleetPanda OMS Flow', () => {


test('Create order successful flow', async ({
    loginAPI,
    orderAPI,
    paymentAPI

}) => {
  
await allure.epic("FleetPanda OMS");

await allure.feature("Order Management");

await allure.story("Create Order Successful Flow");


let orderBody:any;


await allure.step("Login to OMS application", async () => {

    const loginResponse =
        await loginAPI.login(
            validUser.email,
            validUser.password
        );

    expect(loginResponse.status())
        .toBe(200);

});




await allure.step("Create Order", async () => {

    const orderResponse =
        await orderAPI.createOrder(orderData);


    expect([200,201])
        .toContain(orderResponse.status());


    orderBody =
        await orderResponse.json();


    expect(orderBody.id)
        .toBeTruthy();


    expect(orderBody.status)
        .toBe("CREATED");


});




await allure.step("Process Payment Successfully", async () => {

    const paymentResponse =
        await paymentAPI.processPayment({

            orderId: orderBody.id,
            amount: orderBody.amount,
            paymentStatus:"SUCCESS"

        });


    expect(paymentResponse.status())
        .toBe(200);

});



await allure.step('Validate Order Confirmation', async () => {


    const confirmationResponse =
        await orderAPI.getOrder(orderBody.id);



    expect(confirmationResponse.status())
        .toBe(200);



    const confirmation =
        await confirmationResponse.json();



    expect(confirmation.status)
        .toBe("CONFIRMED");



    expect(confirmation.id)
        .toBe(orderBody.id);



});



});


});