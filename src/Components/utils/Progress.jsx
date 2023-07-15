import React from "react";

const Progress = ({progress = 0}) => {
    var progressClass = "h-full bg-white"

    var test = React.createElement("div", {
        className: progressClass,
        style: {
            width: progress+"%",
        }
    });


    return (
        <div className="w-[95%] h-full border border-black bg-black/20">
            {test}
        </div>
    )
}

export default Progress;