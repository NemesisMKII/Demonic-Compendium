import React from "react";
import { setBackground, setCurrentGame } from "../Services/gameServices";

const GameMenuElement = ({game}) => {
    return (
        <li onClick={() => {
            setCurrentGame(game.slug)
            setBackground(game.background)
        }}>
            {game.name}
        </li>
    )
}

export default GameMenuElement;