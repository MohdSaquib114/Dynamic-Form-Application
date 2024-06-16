import { ChangeEvent, useContext, useState } from "react"
import { ContextProvider } from "./Provider"
import Input from "./Input";
import CountryCodeSelector from "./CountryCodeSelector";
import Button from "./Button";

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
   
    const handleSubmitClick = () =>{
        console.log("object")
    }
    const handleRefreshClick = () =>{
        console.log("object1")
    }
    
return (
    <div className={`${context?.visibility?"block":"hidden"} grid gird-rows-2 gap-3 md:gap-5  justify-center pt-20 md:pt-32 `}>
    
    <form  className="border-2 rounded-sm border-slate-700 bg-slate-300 p-5   flex flex-col gap-5  shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-bold text-center ">FORM {context?.type}</h1>
        <Input label="Full Name" placeholderValue="Steve Smith" handleChange={handleNameInput}  />
        <CountryCodeSelector handleCodeSelect={handleCodeSelect} />
        <Input label="Phone" placeholderValue="95889-62031" handleChange={handlePhoneInput}  />
   
    </form>
    <div className="flex justify-around gap-10 md:gap-20">
        
        <Button title="Submit" handleClickProp={handleSubmitClick} />
        <Button title="Refresh" handleClickProp={handleRefreshClick} />
            </div>
    </div>
    
  )
}


