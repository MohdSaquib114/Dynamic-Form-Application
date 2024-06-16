import { ChangeEvent, useContext, useState } from "react"
import { ContextProvider } from "./Provider"
import Button from "./Button";
import Input from "./Input";
import CountryCodeSelector from "./CountryCodeSelector";

 interface FormType {
    fullName:string,
    code:string,
    phoneNumber:string

 }
export default function Form() {
    const context = useContext(ContextProvider);
    const [formState, setFormState] = useState<FormType>({
        fullName: '',
        code: '',
        phoneNumber: '',
        
    });

    const handleNameInput = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState(
          {  ...formState,
            fullName:event.target.value
        }
        )
    }

    const handlePhoneInput = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormState(
          {  ...formState,
            phoneNumber:event.target.value
        }
        )
    }

    const handleCodeSelect = (code:string) => {
        setFormState(
          {  ...formState,
            code:code}
        )
    }
   
    
return (
    <div className={`${context?.visibility?"block":"hidden"} `}>
     <Button title="Back" type={""} />
    <form  className="border-2 border-slate-700 bg-slate-300 p-5   flex flex-col gap-10  shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-semibold text-center ">FORM {context?.type}</h1>
        <Input label="Full Name" placeholderValue="Steve Smith" handleChange={handleNameInput}  />
        <CountryCodeSelector handleCodeSelect={handleCodeSelect} />
        <Input label="Phone" placeholderValue="95889-62031" handleChange={handlePhoneInput}  />
    </form>
    <div>
        <button className="text-lg font-medium max-w-max
      border-2 border-slate-700
     bg-slate-300
     
      shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] 
      md:px-14 md:py-4 
      hover:bg-slate-700
     hover:text-slate-300">Submit</button>
        <button className="text-lg font-medium max-w-max
      border-2 border-slate-700
     bg-slate-300
     px-14 py-1
      shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)] 
      md:px-14 md:py-4 
      hover:bg-slate-700
     hover:text-slate-300">Refresh</button>
    </div>
    </div>
  )
}


