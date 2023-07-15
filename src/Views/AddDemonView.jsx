import React from "react";
import Container from "../Components/Container";
import AddDemon from "../Components/AddDemon";
import { useParams } from "react-router-dom";
import { getGameData } from "../Services/gameServices";

const AddDemonView = () => {

    const gameName = useParams().game
    const gameData = getGameData(gameName)
    
    return (
        <Container>
            <AddDemon game={gameData}/>
        </Container>
    )
}

export default AddDemonView;