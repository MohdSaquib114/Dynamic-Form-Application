import { useContext } from "react"
import { ContextProvider } from "./Provider"
import Button from "./Button";


export default function Form() {
    const context = useContext(ContextProvider);
   
    
return (
    <div className={`${context?.visibility?"block":"hidden"} flex flex-col`}>
     <Button title="Back" type={""} />
    <form >
      <label htmlFor="name">Full Name</label>
      <input type="text" name="" id="name" placeholder="Steve Smith" />

      <label htmlFor="code">Country Code</label>
    </form>
    </div>
  )
}


