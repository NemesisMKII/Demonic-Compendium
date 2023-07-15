import React from "react";
import { Link } from "react-router-dom";
import { ADD_DEMON_URL, DEMON_URL } from "../Constants/urls";
import DemonBox from "./utils/DemonBox";

const DemonList = ({game, demonList}) => {

    return (
        <div className="h-full w-full bg-white/[65%] text-center text-black">
            <h1 className="text-5xl font-bold">{game.name}</h1>
            <h1 className="text-3xl">Liste des démons</h1>
            <div className="w-[95%] h-3/4 boxStatsShadow bg-black/20 mt-2 m-auto space-x-4 flex flex-wrap justify-center p-5">
                {demonList.map(demon => (
                    <Link 
                        to={DEMON_URL.replace(":game", game.slug).replace(":demon", demon.name)}
                        key={demon.name}
                    >
                        <DemonBox demon={demon} />
                    </Link>
                ))}
            </div>
            <div className="w-[95%] h-[10%] mt-4 m-auto flex justify-center items-center">
                <Link 
                    to={ADD_DEMON_URL.replace(":game", game.slug)} 
                >
                    <h1 className="p-2 font-bold text-2xl border-2 rounded-md bg-green-700">Ajouter un démon</h1>
                </Link>
            </div>
        </div>
    )
}

export default DemonList;