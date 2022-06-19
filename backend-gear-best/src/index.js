
const express=require('express');
const connect=require("./configs/db.js")
const Port = process.env.PORT || 2001
const app=express();
app.use(express.json());

const frontPagecontroller=require("./controller/frontPage.controller.js");
app.use("/frontpage",frontPagecontroller)

const watchController=require("./controller/watches.controller.js");
app.use("/watch",watchController)

const loginAuth=require("./controller/auth.controller.js")
app.use("/",loginAuth)
const RegisterAuth=require("./controller/auth.controller.js")
app.use("/",RegisterAuth)


const cart= require("./controller/cart.controller.js")
app.use("/cart",cart)


app.listen(Port,async function(){
    try {
        await connect();
           console.log(`Listening on ${Port}` )
    } catch (error) {
         console.log(err)
    }
})