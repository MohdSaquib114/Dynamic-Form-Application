import { useContext } from "react";
import Button from "./Button";
import { ContextProvider } from "./Provider";
import axios from "axios";

export default function SelectComponent() {
    const context = useContext(ContextProvider)
    
    async function handleRefresh(){
      try{
        await axios.get("http://localhost:4000/api/v1/refresh")
        alert("Sheet synchronized with database succesfully")

      }catch(e){
        alert("Error in server")
      }
    }
    
 

  return  <div className={`${context?.visibility?"hidden":"block"} flex flex-col p-10  items-center h-1/2 justify-between gap-20 sm:gap-00 `}>
            <button onClick={handleRefresh} className=" text-lg font-medium max-w-max border-2 border-slate-700 bg-slate-300  px-8 py-2 rounded-sm shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]  hover:bg-slate-700 hover:text-slate-300">Refresh</button>
            <h1 className="md:text-5xl font-bold text-3xl ">
              SELECT A FORM
            </h1>
            <div className="flex gap-10 flex-col sm:flex-row">
              <Button  title="FORM" type="A"  />
              <Button  title="FORM" type="B"  />
            </div>
        </div>

}