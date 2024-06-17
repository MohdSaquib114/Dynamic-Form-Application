import { ChangeEvent, } from "react";


export default function Input({label,handleChange,placeholderValue,value}:{label:string,handleChange:(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void,placeholderValue:string,value:string}) {
   
  return (
    <div className="flex flex-col gap-1">
       <label className="text-md font-medium" htmlFor="name">{label}</label>
       <input value={value}  className="focus:outline-none p-1 border-2 rounded-sm border-slate-700  shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]  " onChange={handleChange}  type="text"  id="name" placeholder={placeholderValue} />
    </div>
  )
}
