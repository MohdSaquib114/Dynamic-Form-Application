import { Request, Response, Router } from "express";
import { executeQuery } from "../connection";

const route = Router()

route.get("/refresh",async (req:Request,res:Response) => {
    
})

route.post("/form", async (req:Request,res:Response)=>{
    try{
        const {name,code,phone,type} = req.body;
        const insertQuery = `
        INSERT INTO form (name,type,code,phone) VALUES (?,?,?,?)
        `
        const values = [name,type,code,phone];
        await executeQuery(insertQuery,values as never)

        res.status(200).json({
            succesful:true,
            messgae:"Insert succesful"
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            succesful:false,
            messgae:"Insert fail"
        })
    }

})

export default route