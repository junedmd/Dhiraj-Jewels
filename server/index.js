import express from "express";
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
app.use(cors());

import productRoutes from "./routes/productRoutes.js";


const PORT=process.env.PORT || 5000;

const connectMongoDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        if(conn){
            console.log("Api is working properly !! ")
        }
    }catch(e){
        console.log(e.message)
    }
}

connectMongoDB();

// api for Products 
app.use("/api", productRoutes);
app.listen(PORT,()=>{
    console.log("server is running on the Port 5000")
});