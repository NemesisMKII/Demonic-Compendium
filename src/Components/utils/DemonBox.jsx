import React from "react";
import unknownDemon from "../../assets/demons/unknown_demon.png"

const DemonBox = ({demon}) => {
    return(
        <div className="w-48 h-48 bg-white/20 border boxStatsShadow">
            <div className="h-3/5 flex border">
                <img className="h-5/6 w-5/6 m-auto" src={unknownDemon} />
            </div>
            <div>
                <p className="text-xl font-semibold">{demon.type}</p>
                <p className="text-2xl font-semibold">{demon.name}</p>
            </div>
        </div>
    )
}

export default DemonBox;