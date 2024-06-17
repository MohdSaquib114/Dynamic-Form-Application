import  { ChangeEvent, useState } from 'react';
import { countryCodes } from '../utilities/countryCodes';

export default function CountryCodeSelector({ handleCodeSelect }:{handleCodeSelect:(code:string,countryCode:string)=>void})  {
    const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);

    const handleSelect = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const [code,countryCode] = event.target.value.split(" ")
        setSelectedCode(event.target.value);
        handleCodeSelect(code,countryCode);
    };

    return (
        <div className='flex flex-col gap-1'>
        <label className='text-md font-medium' >Country Code</label>
        <select className= 'rounded-sm p-1 border-2 focus:outline-none border-slate-700  shadow-[5px_5px_0px_0px_rgba(0,0,0,0.3)]' title='Country Code' value={selectedCode} onChange={handleSelect}>
            {countryCodes.map((country) => (
                <option  key={country.code} value={`${country.code} ${country.countryCode}`}>
                    {country.name}   ({country.code})
                </option>
            ))}
        </select>
        </div>
    );
}
