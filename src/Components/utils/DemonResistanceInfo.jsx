import React from "react";

const DemonResistanceInfo = ({resistance = null}) => {
    return (
        <>
            <div className="w-full h-14 border border-black boxStatsShadow bg-black/40 mt-3 p-1">
                <p className="h-full w-1/4 text-4xl font-semibold text-white">{resistance}</p>
            </div>
        </>
    )
}

export default DemonResistanceInfo;