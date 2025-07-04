import express from 'express';
import dotenv from "dotenv";
import {app} from "./app.js"
import connectDB from "./db/index.js";

// const app = express();

dotenv.config({
    path: './.env'
});

console.log("ACCESS TOKEN SECRET:", process.env.ACCESS_TOKEN_SECRET); 
console.log("REFRESH_TOKEN_SECRET:", process.env.REFRESH_TOKEN_SECRET);



connectDB()
.then(() =>{

    app.on("error", (error) => {
    console.log("ERRR: ", error);
    throw error;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, ()=>{
        console.log(`server is running at port : ${
            process.env.PORT
        }`);
    })
})
.catch((err) =>{
    console.log("Mongo db connection failed !!!",err);
})





















/*
import express from "express"
const app = express()

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI
        }/${DB_NAME}`)  

        app.on("error",(error)=>{
            console.log("ERRR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port $
                {process.env.PORT}`);
        })
    } catch (error) {
       console.error.apply("ERROR: ",error)
       throw err 
    }
})()
*/    