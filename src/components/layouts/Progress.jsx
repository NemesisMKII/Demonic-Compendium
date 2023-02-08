import React from "react";

export const Progress = (props) => {
    return (
        <div className="w-75 h-100 border-1 bg-white">
            <div className={`w-[${props.stat}] h-100 bg-white`}></div>
        </div>
    )
}