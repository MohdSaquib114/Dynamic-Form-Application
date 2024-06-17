import { Request, Response, Router } from "express";
import { executeQuery } from "../connection";
import { authenticate } from "./datasynchronize";
import { google, sheets_v4 } from "googleapis";

require("dotenv").config()




const route = Router()

type  rowType = {
    
        id: string,
        type: string,
        name: string,
        code: string,
        phone: string
    
}
route.post("/refresh",async (req:Request,res:Response) => {
    try{
        const auth = await authenticate()
        const selectQuery = `SELECT * FROM form;`
        const result = await executeQuery(selectQuery) as any
        const sheets = google.sheets({version: 'v4',auth})
        const spreadsheetId = process.env.SPREADSHEET_ID;
        const range = 'Sheet1!A:D'; 
        const valueInputOption = 'RAW';
        const values = result.map( (row:rowType)  => Object.values(row));
        const resource: sheets_v4.Schema$ValueRange = {
            values,
          };
        const response = await sheets.spreadsheets.values.update({
            spreadsheetId,
            range,
            valueInputOption,
            requestBody:resource
        })
        res.status(200).json({
            success:true,
            messgae:"Sheet updated"
        })

    }catch(e){
       
        console.log(e)
       res.status(400).json({
        success:false,
        messgae:"Update fail"
       })
    }
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
            success:true,
            messgae:"Insert succesful"
        })

    }catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            messgae:"Insert fail"
        })
    }

})

export default route