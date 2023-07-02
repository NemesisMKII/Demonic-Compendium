import React from "react";
import DemonList from "../Components/DemonList.";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";

const DemonListView = () => {
    return (
        <Container>
            <DemonList game={useParams().game} />
        </Container>
    )
}

export default DemonListView;