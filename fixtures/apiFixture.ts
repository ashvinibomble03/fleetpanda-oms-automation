import { test as base, expect } from '@playwright/test';

import { LoginAPI } from '../api/LoginAPI';
import { OrderAPI } from '../api/OrderAPI';
import { PaymentAPI } from '../api/PaymentAPI';


type APIFixtures = {

    loginAPI: LoginAPI;

    orderAPI: OrderAPI;

    paymentAPI: PaymentAPI;

};


export const test =
base.extend<APIFixtures>({

    loginAPI: async ({request}, use) => {

        await use(new LoginAPI(request));

    },


    orderAPI: async ({request}, use) => {

        await use(new OrderAPI(request));

    },


    paymentAPI: async ({request}, use) => {

        await use(new PaymentAPI(request));

    }

});


export { expect };