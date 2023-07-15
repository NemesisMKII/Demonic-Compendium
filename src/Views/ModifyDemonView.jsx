import React from "react";
import Container from "../Components/Container";
import { useParams } from "react-router-dom";
import AddDemon from "../Components/AddDemon";
import { getGameData } from "../Services/gameServices";
import { getDemon } from "../Services/demonServices";

const ModifyDemonView = () => {

    const gameName = useParams().game
    const gameData = getGameData(gameName)

    const demonName = useParams().demon
    const demon = getDemon(demonName)

    const existingDemon = {
        name: demon.name,
        type: demon.type,
        lvl: demon.game[gameData.slug].lvl,
        hp: demon.game[gameData.slug].stats.hp,
        mp: demon.game[gameData.slug].stats.mp,
        str: demon.game[gameData.slug].stats.str,
        vit: demon.game[gameData.slug].stats.vit,
        mag: demon.game[gameData.slug].stats.mag,
        agi: demon.game[gameData.slug].stats.agi,
        lu: demon.game[gameData.slug].stats.lu,
        phys: demon.game[gameData.slug].resistances.phys,
        fire: demon.game[gameData.slug].resistances.fire,
        ice: demon.game[gameData.slug].resistances.ice,
        thunder: demon.game[gameData.slug].resistances.thunder,
        force: demon.game[gameData.slug].resistances.force,
        light: demon.game[gameData.slug].resistances.light,
        dark: demon.game[gameData.slug].resistances.dark,
    }

    return (
        <Container>
            <AddDemon game={gameData} existingDemon={existingDemon} modify={true}/>
        </Container>
    )
}

export default ModifyDemonView;