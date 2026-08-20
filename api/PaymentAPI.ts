import { APIRequestContext } from '@playwright/test';


export class PaymentAPI {


constructor(private request:APIRequestContext){}



async processPayment(paymentData:any){


return await this.request.post('/payment',{

data:paymentData

});


}


}