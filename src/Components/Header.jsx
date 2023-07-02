import React from "react";
import { gameList } from "../Services/gameServices";
import GameMenuElement from "./GameMenuElement";
import { Link } from "react-router-dom";
import { DEMON_LIST_URL, HOME_URL } from "../Constants/urls";

export default function Header() {
    return (
        <header className="relative h-[15%] border-b-2 border-white w-full">
            <Link to={HOME_URL}>
                <h1 className="text-4xl font-bold text-center textShadow">Compendium Démoniaque</h1>
            </Link>
            <ul className="absolute bottom-1 flex text-l font-semibold textShadow">
                {gameList.map(game => (
                    <Link to={DEMON_LIST_URL.replace(":game", game.slug)} key={game.slug}>
                        <GameMenuElement game={game} />
                    </Link>
                ))}
            </ul>
        </header>
    )
}