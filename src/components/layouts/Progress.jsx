import React from "react";

export const Progress = (props) => {
    const progressWidth = props.stat ?? 0;
    return (
        <div className="w-2/4 h-3 border-1 border-black bg-white">
            <div className={`w-[${progressWidth}%] h-full bg-black`}></div>
        </div>
    )
}