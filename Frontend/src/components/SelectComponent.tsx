import Button from "./Button";

export default function SelectComponent() {
  return (
    <div className=" flex flex-col p-10  items-center h-1/2 justify-between gap-16 sm:gap-00 ">
            <h1 className="text-3xl font-semibold ">
              SELECT FORM
            </h1>
            <div className="flex gap-10 flex-col sm:flex-row">
              <Button type="A" />
              <Button type="B" />
            </div>
        </div>
  )
}
