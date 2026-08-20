interface Order {

    id:number;

    customerId:number;

    productId:number;

    quantity:number;

    amount:number;

    status:string;

}


let orders:Order[] = [];



export class MockDatabase {



    static saveOrder(order:Order){

        orders.push(order);

    }



    static getOrder(orderId:number){


        return orders.find(

            order => order.id === orderId

        );


    }



    static clearDatabase(){

        orders=[];

    }


}