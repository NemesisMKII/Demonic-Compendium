import React from "react";
import Container from "../Components/Container";
import AddDemon from "../Components/AddDemon";
import { useLocation } from "react-router-dom";

const AddDemonView = () => {
    const game = useLocation().state
    return (
        <Container>
            <AddDemon game={game}/>
        </Container>
    )
}

export default AddDemonView;