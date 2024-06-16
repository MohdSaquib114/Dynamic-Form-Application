import  { ChangeEvent, useState } from 'react';
import { countryCodes } from '../utilities/countryCodes';

export default function CountryCodeSelector({ handleCodeSelect }:{handleCodeSelect:(code:string)=>void})  {
    const [selectedCode, setSelectedCode] = useState(countryCodes[0].code);

    const handleSelect = (event:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setSelectedCode(event.target.value);
        handleCodeSelect(event.target.value);
    };

    return (
        <div className='flex flex-col'>
        <label >Select Country Code</label>
        <select title='Country Code' value={selectedCode} onChange={handleSelect}>
            {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                    {country.name}   ({country.code})
                </option>
            ))}
        </select>
        </div>
    );
}
