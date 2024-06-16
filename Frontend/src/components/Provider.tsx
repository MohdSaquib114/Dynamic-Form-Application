import { createContext, useState } from "react"

const ContextProvider = createContext("context");
export default function Provider() {
    const [visibility,setVisibility] = useState(false);
  return (
    <ContextProvider.Provider value={{visibility,setVisibility}}>
      
    </ContextProvider.Provider>
  )
}
