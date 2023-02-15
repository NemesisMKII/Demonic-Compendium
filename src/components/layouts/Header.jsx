import React from "react";
import { Link } from "react-router-dom";
import { games } from "../../constants/globals";
import * as URL from "../../constants/urls";

export const Header = (props) => {
    return (
        <header className="h-[12%] border-b-2 flex flex-col justify-between">
            <Link to={URL.Home}><h1 className="text-center text-5xl m-0">Compendium démoniaque</h1></Link>
            <ul className="flex gap-x-8">
                {games.map(game => (
                    <Link to={URL.gameHome.replace(":game", game.slug)} key={game.slug} onClick={() => {props.onGameChange(game.slug)}}>
                        <li className="text-2xl hover:bg-white/25 p-1">{game.name}</li>
                    </Link>
                ))}
            </ul>
        </header>
    )
}