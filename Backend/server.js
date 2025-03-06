// console.log("Hello Backend is Setuped");


import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToMongoDb from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors())

connectToMongoDb();
app.get("/",(req,res)=>res.send("Server is running!"));



app.listen(PORT,()=>
console.log(`Server is running on port:${PORT}`));