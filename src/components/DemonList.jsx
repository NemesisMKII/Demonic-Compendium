import React from "react";
import { Link } from "react-router-dom";
import unknownDemon from "../assets/demons/unknown_demon.png";
import { addDemon, demonDetails } from "../constants/urls";
import { getCurrentGame } from "../services/gameServices";

const DemonList = (props) => {
    return (
        <div className="bg-white/40 h-5/6 w-4/5">
            <div className="h-[90%]">
                {props.list.map(demon => (
                    <Link className="h-1" to={demonDetails.replace(":game", getCurrentGame).replace(':demonName', demon.name)} key={1}>
                        <div className="bg-white/40 text-black w-[200px] h-[125px] flex border border-black">
                            <div className="w-2/6 h-full">
                                <img className="h-full w-full" src={unknownDemon} alt="demonImg" />
                            </div>
                            <div className="w-4/6 h-full flex flex-col items-center justify-center">
                                <p>{demon.name}</p>
                                <p>{demon.type}</p>
                                <p>Niveau</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="h-[10%] flex justify-center items-center">
                <Link to={addDemon.replace(":game", getCurrentGame)}><button className="border p-3 rounded-lg bg-green font-bold text-xl text-black">Ajouter un démon</button></Link>
            </div>
        </div>
    )
}

export default DemonList;