import { games } from "../constants/globals";
import P3BG from "../assets/backgrounds/P3.jpg";
import SMTIIIBG from "../assets/backgrounds/SMTIII.png";
import P4BG from "../assets/backgrounds/P4.jpg";
import P5BG from "../assets/backgrounds/P5.jpg";

export function setGameBG(gameName) {
    switch(gameName) {
        case "P3":
            document.body.style.background = `url("${P3BG}")`
            break;
        case "SMTIII":
            document.body.style.background = `url("${SMTIIIBG}")`
            break;
        case "P4":
            document.body.style.background = `url("${P4BG}")`
            break;
        case "P5":
            document.body.style.background = `url("${P5BG}")`
            break;
        default:
            break;
    }
    document.body.style.backgroundRepeat = "no-repeat"
    document.body.style.backgroundSize = "cover"
}

export function getCurrentGame() {
    return window.location.pathname.split("/")[1]
}

export function setActiveGameTab(game) {
    sessionStorage.setItem('DemonicCompendiumCurrentGame', JSON.stringify(game));
}