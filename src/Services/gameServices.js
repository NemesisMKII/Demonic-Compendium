import SMTIII from "../assets/backgrounds/SMTIII.png"
import P3 from "../assets/backgrounds/P3.jpg"
import P4 from "../assets/backgrounds/P4.jpg"
import P5 from "../assets/backgrounds/P5.jpg"
import base from "../assets/backgrounds/base.jpg"

export const gameList = [
    {
        name: "Shin Megami Tensei",
        slug: "SMT"
    },
    {
        name: "Shin Megami Tensei II",
        slug: "SMTII"
    },
    {
        name: "Shin Megami Tensei: If ...",
        slug: "SMTIF"
    },
    {
        name: "Shin Megami Tensei III: Nocturne",
        slug: "SMTIII",
        background: SMTIII
    },
    {
        name: "Persona 3",
        slug: "P3",
        background: P3
    },
    {
        name: "Persona 4",
        slug: "P4",
        background: P4
    },
    {
        name: "Persona 5",
        slug: "P5",
        background: P5
    }
]

export const getGameData = (game) => {
    return gameList.filter(gameElement => gameElement.slug === game)[0]
}

export const setCurrentGame = (gameSlug) => {
    localStorage.setItem("game", gameSlug)

    return gameSlug;
}

export const setBackground = (gameBackground = null) => {
    var root = document.getElementById("root");
    if (!gameBackground) {
        root.style.background = `url("${base}")`
    } else {
        root.style.background = `url("${gameBackground}")`
    }
    root.style.backgroundRepeat = "no-repeat"
    root.style.backgroundSize = "cover";

}