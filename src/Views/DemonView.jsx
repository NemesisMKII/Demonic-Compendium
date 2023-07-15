import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import Demon from "../Components/Demon";
import { getDemon } from "../Services/demonServices";

const DemonView = () => {

    const gameName = useParams().game
    
    const demonName = useParams().demon
    const demonData = getDemon(demonName)

    return (
        <Container>
            <Demon gameName={gameName} demon={demonData} />
        </Container>
    )
}

export default DemonView;