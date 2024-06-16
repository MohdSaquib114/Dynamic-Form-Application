
export default function Button({type}:{type:string}) {
  return (
   <button onClick={()=>console.log("object")}
   className=" text-lg font-medium 
      border-2 border-slate-900
     bg-slate-300
    text-slate-900 px-10 py-2
      shadow-[8px_8px_0px_1px_rgba(0,0,0,0.3)] 
      md:px-14 md:py-4 
      hover:bg-sky-950
     hover:text-slate-300">

    Form {type}

   </button>
  )
}
