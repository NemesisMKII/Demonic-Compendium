import React from "react";
import DemonList from "../Components/DemonList.";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import { getGameData, setBackground } from "../Services/gameServices";
import { getFilteredDemonList } from "../Services/demonServices";

const DemonListView = () => {
    
    const gameName = useParams().game;
    const gameData = getGameData(gameName);

    setBackground(gameData.background);

    const demonList = getFilteredDemonList(gameName);
    
    return (
        <Container>
            <DemonList game={gameData} demonList={demonList} />
        </Container>
    )
}

export default DemonListView;