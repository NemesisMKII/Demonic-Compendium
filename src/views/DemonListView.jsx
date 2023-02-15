import React from "react";
import DemonList from "../components/DemonList";
import { getDemonList } from "../services/demonServices";
import { getCurrentGame } from "../services/gameServices";

const DemonListView = (props) => {    

    var demonList = getDemonList(props.game);

    return (
        <div className="h-full w-full flex justify-center items-center">
            <DemonList list={demonList}/>
        </div>
    )
}

export default DemonListView;