import { Demon } from "../entities/demon";

export function getDemonList(gameName) {
    var games = JSON.parse(localStorage.getItem("demonList"));

    var demons = [];

    games.forEach(game => {
        if (game.game === gameName) {
            demons = game.demons;
        }
    });

    return demons;
}

export function getDemon(demonName, game) {
    var returnedDemon;

    getDemonList(game).forEach(demon => {
        if (demonName === demon.name) {
            returnedDemon = new Demon(demon);
        }
    })
    
    if (!returnedDemon) {
        return false;
    }
    return returnedDemon;
}

export function getDemonNameByURL() {
    return window.location.pathname.split("/")[2].replace("%20", " ");
}