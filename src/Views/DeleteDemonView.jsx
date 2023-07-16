import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import { getGameData } from "../Services/gameServices";
import { getDemonList } from "../Services/demonServices";
import DeleteDemon from "../Components/DeleteDemon";

const DeleteDemonView = () => {
    
    const gameName = useParams().game;
    const gameData = getGameData(gameName);

    const demonList = getDemonList();

    return (
        <Container>
            <DeleteDemon game={gameData} demonList={demonList}/>
        </Container>
    )
}

export default DeleteDemonView;