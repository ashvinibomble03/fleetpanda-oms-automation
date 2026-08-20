const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;


// Mock database

const users = [
    {
        id: 1,
        email: "test@test.com",
        password: "password",
        token: "abc123token"
    }
];


let orders = [];

let payments = [];


// ==========================
// LOGIN API
// ==========================

app.post("/login", (req, res) => {

    const { email, password } = req.body;


    const user = users.find(
        u =>
            u.email === email &&
            u.password === password
    );


    if (!user) {

        return res.status(401).json({

            message: "Invalid credentials"

        });

    }


    res.status(200).json({

        token: user.token,
        message: "Login successful"

    });


});



// ==========================
// CREATE ORDER API
// ==========================

app.post("/orders", (req, res) => {


    const {
        customerId,
        productId,
        quantity,
        amount
    } = req.body;



    if (!customerId || !productId || !quantity || !amount) {


        return res.status(400).json({

            message: "Missing mandatory order fields"

        });


    }



    const order = {


        id: orders.length + 1,

        customerId,

        productId,

        quantity,

        amount,

        status: "CREATED",

        createdDate: new Date()


    };



    orders.push(order);



    res.status(201).json(order);


});



// ==========================
// GET ALL ORDERS
// ==========================

app.get("/orders", (req, res) => {


    res.status(200).json(orders);


});



// ==========================
// GET ORDER BY ID
// ==========================

app.get("/orders/:id", (req, res) => {


    const order = orders.find(

        o => o.id == req.params.id

    );


    if (!order) {


        return res.status(404).json({

            message:"Order not found"

        });


    }


    res.status(200).json(order);


});



// ==========================
// PAYMENT API
// ==========================

app.post("/payment", (req, res) => {


    const {

        orderId,

        amount,

        paymentStatus

    } = req.body;



    if (!orderId || !amount) {


        return res.status(400).json({

            message:"Invalid payment request"

        });


    }



    // Simulate payment failure

    if(paymentStatus === "FAILED"){


        return res.status(400).json({

            paymentStatus:"FAILED",

            message:"Payment declined"

        });


    }



    const payment = {


        id: payments.length + 1,

        orderId,

        amount,

        paymentStatus:"SUCCESS"


    };



    payments.push(payment);



    // Update order status

    const order = orders.find(

        o => o.id == orderId

    );


    if(order){

        order.status="CONFIRMED";

    }



    res.status(200).json(payment);


});



// ==========================
// HEALTH CHECK
// ==========================

app.get("/", (req,res)=>{


    res.send("FleetPanda Mock OMS API is running");


});



// START SERVER

app.listen(PORT,()=>{


    console.log(
        `Mock OMS API running on port ${PORT}`
    );


});