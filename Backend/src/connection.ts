import { rejects } from "assert";
import { query } from "express";
import mysql from "mysql2"
import { resolve } from "path";
require("dotenv").config();

const url  = String(process.env.DATABASE_URL)

export const pool = mysql.createPool(url)

export function databaseInit(){ 
            pool.getConnection((err,connection)=>{
                if(err){
                    throw new Error("Error during connection");
                    return;
                }
            migrationDb()
            connection.release()

})
}

async function migrationDb(){
                try{
                            const checkTableExistQuery = `
                            SELECT COUNT(*)
                            FROM information_schema.tables
                            WHERE table_schema = DATABASE()
                            AND table_name = 'form'
                            `
                        
                        const result  = await executeQuery(checkTableExistQuery) as any
                        const isTableExist = result[0]["COUNT(*)"] == 1
                        if(!isTableExist){
                            const createQuery = `CREATE TABLE form(
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            type VARCHAR(1) NOT NULL,
                            name VARCHAR(255) NOT NULL,
                            code VARCHAR(16) NOT NULL,
                            phone VARCHAR(20) NOT NULL)`
                        await executeQuery(createQuery)

                        }else{
                            
                            return
                        }
            }catch(err){
                
                throw new Error("Error while migration")
            }
}

export async function executeQuery(query:string,value=[])  {
    return new Promise((resolve,rejects)=>{
        pool.query(query,value,(err,result)=>{
          if(err){
            rejects(err)
          }else{
            resolve(result)
          }
        })
    })

    }
