
import SelectComponent from "./components/SelectComponent";
import Provider from "./components/Provider";
import Form from "./components/Form";

   

export default function App() {
  
  return (

    <Provider>
       <div className="h-screen text-slate-700 bg-slate-200">
        <SelectComponent  />
        <Form />
      </div>
     </Provider>
  )
}
