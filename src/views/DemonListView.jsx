import React from "react";
import DemonList from "../components/DemonList";
import { getDemonList } from "../services/demonServices";
import { getCurrentGame } from "../services/gameServices";

const DemonListView = (props) => {    

    var demonList = getDemonList(props.game);
    console.log(demonList);

    return (
        <div id="demonListDiv">
            <DemonList list={demonList}/>
        </div>
    )
}

export default DemonListView;