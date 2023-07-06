import React from "react";
import Container from "../Components/Container";
import { useLocation } from "react-router-dom";
import Demon from "../Components/Demon";

const DemonView = () => {
    const game = useLocation().state.game
    const demon = useLocation().state.demon
    return (
        <Container>
            <Demon game={game} demon={demon} />
        </Container>
    )
}

export default DemonView;