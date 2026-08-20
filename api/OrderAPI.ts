import { APIRequestContext } from '@playwright/test';


export class OrderAPI {


constructor(private request: APIRequestContext){}



async createOrder(orderData:any){

    return await this.request.post('/orders',{
        data:orderData
    });

}



async getOrder(orderId:number){

    return await this.request.get(`/orders/${orderId}`);

}


}