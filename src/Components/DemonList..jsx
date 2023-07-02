import React from "react";
import { gameList } from "../Services/gameServices";
import { Link } from "react-router-dom";
import { ADD_DEMON_URL } from "../Constants/urls";

const DemonList = ({game}) => {
    const currentGame = gameList.filter(gameElement => gameElement.slug == game)[0]
    return (
        <div className="h-full w-full bg-white/[65%] text-center text-black">
            <h1 className="text-5xl font-bold">{currentGame.name}</h1>
            <h1 className="text-3xl">Liste des démons</h1>
            <div className="w-[95%] h-3/4 bg-red-500 mt-2 m-auto">
                
            </div>
            <div className="w-[95%] h-[10%] mt-4 m-auto flex justify-center items-center">
                <Link to={ADD_DEMON_URL.replace(":game", currentGame.slug)} state={currentGame}>
                    <h1 className="p-2 font-bold text-2xl border-2 rounded-md bg-green-700">Ajouter un démon</h1>
                </Link>
            </div>
        </div>
    )
}

export default DemonList;