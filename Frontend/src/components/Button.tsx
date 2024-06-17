import { useContext } from "react"
import { ContextProvider } from "./Provider"

export default function Button({type,title}:{type:string,title:string}) {
    const context = useContext(ContextProvider)


    const handleClick = () =>{
      context?.setType(type);
      context?.setVisibility((currentVs:boolean) => !currentVs )
    }

  return (
   <button onClick={handleClick}

   className=" text-lg font-medium max-w-max
      border-2 border-slate-700
     bg-slate-300
     px-8 py-2
     rounded-sm
      shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] 
      
      hover:bg-slate-700
     hover:text-slate-300">

    {title} {type}

   </button>
  )
}
