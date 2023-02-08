import React from "react";
import { Link } from "react-router-dom";
import { games } from "../../constants/globals";
import * as URL from "../../constants/urls";

export const Header = (props) => {
    return (
        <header id="header">
            <h1>Compendium démoniaque</h1>
            <ul>
                {games.map(game => (
                    <Link to={URL.gameHome.replace(":game", game.slug)} key={game.slug} onClick={() => {props.onGameChange(game.slug)}}>
                        <li>{game.name}</li>
                    </Link>
                ))}
            </ul>
        </header>
    )
}