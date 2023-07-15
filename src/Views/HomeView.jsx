import React from "react";
import Container from "../Components/Container";
import Home from "../Components/Home";
import { setBackground } from "../Services/gameServices";

export default function HomeView() {

    setBackground()

    return (
        <Container>
            <Home />
        </Container>
    )
}