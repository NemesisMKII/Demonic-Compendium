import React from "react";
import { gameList } from "../Services/gameServices";
import GameMenuElement from "./GameMenuElement";

export default function Header() {
    return (
        <div className="Header relative h-[15%] border-b-2 border-white w-full">
            <h1 className="text-4xl font-bold">Compendium Démoniaque</h1>
            <ul className="absolute bottom-1 flex text-l font-semibold">
                {gameList.map(game => (
                    <GameMenuElement key={game.slug} game={game} />
                ))}
            </ul>
        </div>
    )
}