import React, { useEffect, useState } from "react";
import { getResistanceIcons } from "../../../Services/demonServices";

//CONTINUER POUR LA VALIDATION DE L'INPUT
const DemonResistanceInput = ({id, value, onChange, onHover}) => {
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        onChange({
            target: {
                id: id,
                value: inputValue
            }
        });
    }, [inputValue])

    const resistances = getResistanceIcons()

    const resKeys = Object.keys(resistances);
    var inputPos = resKeys.indexOf(inputValue);

    const handleClick = (event) => {
        inputPos = (inputPos + 1) % 6;
        setInputValue(resKeys[inputPos]);
        onHover(resKeys[inputPos])
    }

    return (
        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
            <img className="w-[60%] h-[60%] m-auto" 
            src={resistances[inputValue]} 
            onClick={handleClick} 
            alt="test"
            onMouseEnter={() => onHover(inputValue)}
            onMouseLeave={() => onHover("")}
            />
        </div>
    )
}

export default DemonResistanceInput;