import { ChangeEvent } from "react";


export default function Input({label,handleChange,placeholderValue}:{label:string,handleChange:(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void,placeholderValue:string}) {
  return (
    <div className="flex flex-col ">
       <label htmlFor="name">{label}</label>
       <input onChange={handleChange}  type="text"  id="name" placeholder={placeholderValue} />
    </div>
  )
}
