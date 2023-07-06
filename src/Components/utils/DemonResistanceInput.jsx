import React, { useEffect, useState } from "react";
import neutral from "../../assets/icons/resistances/neutral.png"
import absorb from "../../assets/icons/resistances/absorb.png"
import nullRes from "../../assets/icons/resistances/null.png"
import repel from "../../assets/icons/resistances/repel.png"
import weak from "../../assets/icons/resistances/weak.png"
import resistance from "../../assets/icons/resistances/resistance.png"

//CONTINUER POUR LA VALIDATION DE L'INPUT
const DemonResistanceInput = ({id, value, onChange}) => {
    const [inputValue, setInputValue] = useState(value)

    useEffect(() => {
        onChange({
            target: {
                id: id,
                value: inputValue
            }
        });
    }, [inputValue])

    const resistances = {
        neutral: neutral,
        absorb: absorb,
        nullRes: nullRes,
        repel: repel,
        weak: weak,
        resistance: resistance
    }

    const resKeys = Object.keys(resistances);
    var inputPos = resKeys.indexOf(inputValue);

    const handleClick = (event) => {
        inputPos = (inputPos + 1) % 6;
        setInputValue(resKeys[inputPos]);
    }

    return (
        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
            <img className="w-[60%] h-[60%] m-auto" src={resistances[inputValue]} onClick={handleClick} alt="test" />
        </div>
    )
}

export default DemonResistanceInput;