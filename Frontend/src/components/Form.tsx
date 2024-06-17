import { ChangeEvent, useContext, useEffect, useState } from "react"
import { ContextProvider } from "./Provider"
import Input from "./Input";
import CountryCodeSelector from "./CountryCodeSelector";
import { parsePhoneNumberFromString, CountryCode } from 'libphonenumber-js';
import axios from "axios";


 

 function isValidPhoneNumber(phoneNumber: string, countryCode: string): boolean {
    const parsedNumber = parsePhoneNumberFromString(phoneNumber, countryCode as CountryCode);
    return parsedNumber?.isValid() ?? false;
  }

export default function Form() {
  
    
    const context = useContext(ContextProvider);
    const [formState, setFormState] = useState(
        () => {
            const storedData = localStorage.getItem('form');
            if(storedData === null) return {name: '',
                code: '',
                countryCode: '',
                phone: '',
            };
            const formData = JSON.parse(storedData )
            if(formData.type === context?.type){
               return formData
            }else{
                return {name: '',
                    code: '',
                    countryCode: '',
                    phone: '',
                };
            }
              
          }
        
        
          );
          
          
          useEffect(() => {

            localStorage.setItem('form',JSON.stringify( formState));
          }, [formState]);
        
          const handleNameInput = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        
        setFormState(
          {  ...formState,
            name:event.target.value
        }
        )
    }

    const handlePhoneInput = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      
        setFormState(
          {  ...formState,
            phone:event.target.value
        }
        )
    }

    const handleCodeSelect = (code:string,countryCode:string) => {
        setFormState(
          {  ...formState,
            code:code,
            countryCode:countryCode
        }
        )
    }
   
    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const {code,name,phone} = formState
          if(code == "" || name == "" || phone == "" ) throw new Error("Fields are empty")
          if(!isValidPhoneNumber(phone,formState.countryCode)) throw new Error("Number is not in valid form")
        await axios.post('http://localhost:4062/api/v1/form',{ ...formState,type:context?.type});
        
        
          alert('Data submitted successfully!');

        } catch (error) {
            if(error instanceof Error){
                alert(error.message);
            }
        
          alert('Failed to submit data.');
        }
      };
  

return (
    <div className={`${context?.visibility?"block":"hidden"} grid gird-rows-2 gap-3 md:gap-5  justify-center pt-20 md:pt-32 `}>
    
    <form onSubmit={handleSubmit}  className="border-2 rounded-sm border-slate-700 bg-slate-300 p-5   flex flex-col gap-5  shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]">
        <h1 className="text-3xl font-bold text-center ">FORM {context?.type}</h1>
        <Input label="Name" placeholderValue="Steve Smith" handleChange={handleNameInput} value={formState.name}  />
        <CountryCodeSelector handleCodeSelect={handleCodeSelect} />
        <Input label="Phone" placeholderValue="95889-62031" handleChange={handlePhoneInput} value={formState.phone} />
   
      <button type="submit" className=" text-lg font-medium max-w-max border-2 border-slate-700 bg-slate-300 px-8 py-2 rounded-sm shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]  hover:bg-slate-700 hover:text-slate-300">Submit</button>
    </form>
    </div>
    
  )
}


