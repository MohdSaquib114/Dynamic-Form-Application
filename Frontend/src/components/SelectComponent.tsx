import { useContext } from "react";
import Button from "./Button";
import { ContextProvider } from "./Provider";

export default function SelectComponent() {
    const context = useContext(ContextProvider)

  return  <div className={`${context?.visibility?"hidden":"block"} flex flex-col p-10  items-center h-1/2 justify-between gap-16 sm:gap-00 `}>
            <h1 className="text-5xl font-bold  ">
              SELECT A FORM
            </h1>
            <div className="flex gap-10 flex-col sm:flex-row">
              <Button title="Form" type="A" />
              <Button title="Form" type="B" />
            </div>
        </div>

}