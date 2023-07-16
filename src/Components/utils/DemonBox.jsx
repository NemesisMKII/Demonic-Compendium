import React, { useEffect, useId, useState } from "react";
import unknownDemon from "../../assets/demons/unknown_demon.png"

const DemonBox = ({demon, deleteMode = false, onChange}) => {
    let id = useId();
    const [boxChecked, setBoxChecked] = useState(false);
    const [boxColor, setBoxColor] = useState("bg-white/20");

    useEffect(() => {
        if (boxChecked) {
            setBoxColor("bg-red-500");
        } else {
            setBoxColor("bg-white/20");
        }
    }, [boxChecked])

    const handleClick = () => {
        if (deleteMode) {
            if (boxChecked) {
                setBoxChecked(false)
                onChange(demon.name, "splice")
            } else {
                setBoxChecked(true)
                onChange(demon.name, "push")
            }
        }
    }

    return(
        <div id={id} className={"w-48 h-48 border boxStatsShadow cursor-pointer " + boxColor} onClick={handleClick}>
            <div className="h-3/5 flex border">
                <img className="h-5/6 w-5/6 m-auto" src={unknownDemon} alt="" />
            </div>
            <div>
                <p className="text-xl font-semibold">{demon.type}</p>
                <p className="text-2xl font-semibold">{demon.name}</p>
            </div>
        </div>
    )
}

export default DemonBox;