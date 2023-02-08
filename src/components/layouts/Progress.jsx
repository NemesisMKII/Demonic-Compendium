import React from "react";

export const Progress = (props) => {
    return (
        <progress max="100" value={props.stat ?? 25} />
    )
}