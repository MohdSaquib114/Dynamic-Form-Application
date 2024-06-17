import express from "express"
import { databaseInit } from "./connection";
import exp from "constants";
import  formRouter from "./route/form"
require("dotenv").config();


const PORT = Number(process.env.PORT) | 3030;

const app = express();
databaseInit()
app.use(express.json())

app.use("/api/v1", formRouter)

app.listen(PORT,()=>console.log("Server is running"))