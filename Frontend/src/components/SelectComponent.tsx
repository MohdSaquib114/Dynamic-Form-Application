import { useContext } from "react";
import Button from "./Button";
import { ContextProvider } from "./Provider";

export default function SelectComponent() {
    const context = useContext(ContextProvider)
  
    const handleClick = (type:string) =>{
      context?.setType(type);
      context?.setVisibility((currentVs:boolean) => !currentVs )
    }
 

  return  <div className={`${context?.visibility?"hidden":"block"} flex flex-col p-10  items-center h-1/2 justify-between gap-16 sm:gap-00 `}>
            <h1 className="md:text-5xl font-bold text-3xl ">
              SELECT A FORM
            </h1>
            <div className="flex gap-10 flex-col sm:flex-row">
              <Button handleClickProp = {handleClick} title="FORM" type="A"  />
              <Button handleClickProp={handleClick} title="FORM" type="B"  />
            </div>
        </div>

}