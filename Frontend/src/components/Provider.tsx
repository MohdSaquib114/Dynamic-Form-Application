import { createContext, useState, ReactNode } from "react"

interface ContextType {
    visibility: boolean;
    setVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
}


export const ContextProvider = createContext<ContextType|undefined>(undefined);


export default function Provider({children}:{children:ReactNode}) {
    const [visibility,setVisibility] = useState<boolean>(false);
    const [type,setType] = useState<string>("");
    
  return (
    <ContextProvider.Provider value={{visibility,setVisibility,type,setType}}>
      {children}
    </ContextProvider.Provider>
  )
}
