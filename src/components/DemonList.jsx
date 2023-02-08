import React from "react";
import { Link } from "react-router-dom";
import unknownDemon from "../assets/demons/unknown_demon.png";
import { demonDetails } from "../constants/urls";
import { getCurrentGame } from "../services/gameServices";

const DemonList = (props) => {
    console.log(props.list)
    return (
        <div id="demonList">
            {props.list.map(demon => (
                <Link to={demonDetails.replace(":game", getCurrentGame).replace(':demonName', demon.name)} key={1}>
                    <div className="demon">
                        <div className="demonPortrait">
                            <img src={unknownDemon} alt="demonImg" />
                        </div>
                        <div>
                            <p>{demon.name}</p>
                            <p>{demon.type}</p>
                            <p>Niveau</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default DemonList;