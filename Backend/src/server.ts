import express from "express"
import { databaseInit } from "./connection";
import cors from "cors"
import  formRouter from "./route/form"

require("dotenv").config();


const PORT = process.env.PORT;

const app = express();
databaseInit()
app.use(express.json())
app.use(cors())

app.use("/api/v1", formRouter)

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))