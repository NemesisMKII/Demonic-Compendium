import neutral from "../assets/icons/resistances/neutral.png";
import absorb from "../assets/icons/resistances/absorb.png";
import repel from "../assets/icons/resistances/repel.png";
import nullRes from "../assets/icons/resistances/null.png";
import resistance from "../assets/icons/resistances/resistance.png";
import weak from "../assets/icons/resistances/weak.png";
import phys from "../assets/icons/elements/physical.png";
import thunder from "../assets/icons/elements/thunder.png";
import fire from "../assets/icons/elements/fire.png";
import ice from "../assets/icons/elements/ice.png";
import force from "../assets/icons/elements/force.png";
import light from "../assets/icons/elements/light.png";
import dark from "../assets/icons/elements/dark.png";

/* ============================================ 
            LOCAL STORAGE ACTIONS
*/

//GET
function getDemonFromLocalStorage() {
    var jsonList = localStorage.getItem("DemonList");
    if (jsonList)
        return JSON.parse(jsonList);
    return [];
}

//UPDATE
function setDemonLocalStorage(demonStorage) {
    if (!localStorage.getItem("DemonList")) {
        localStorage.setItem("DemonList", JSON.stringify([]));
    } else {
        localStorage.setItem("DemonList", JSON.stringify(demonStorage));
    }
}


/* ============================================ 
            DEMON LIST ACTIONS
*/

//GET
export function getDemonList(game) {
    const demonList = getDemonFromLocalStorage();
    return demonList.filter(demon => demon.game[game]);
}

//UPDATE
function updateDemonList(existingDemon, demonList) {
    demonList[getDemonIndex(existingDemon, demonList)] = existingDemon;
}


/* ============================================ 
                DEMON ACTIONS
*/

//GET
export function getDemon(DemonName) {
    const demonList = getDemonFromLocalStorage()
    return demonList.filter(demon => DemonName === demon.name)[0];
}

function getDemonIndex(demon, demonList) {
    for (let index = 0; index < demonList.length; index++) {
        if (demon.name === demonList[index].name) {
            return index;
        }
    }
}

//UPDATE
export function storeDemon (newDemon, game) {
    var demonList = getDemonFromLocalStorage();
    var existingDemon = getDemon(newDemon.name);
    if (existingDemon) {
        updateDemon(newDemon, existingDemon, game)
        updateDemonList(existingDemon, demonList)
    } else {
        demonList.push(newDemon);
    }
    setDemonLocalStorage(demonList);

    //Redirects to Demon Details Page
    setTimeout(() => {
        window.location.href = "/:game/:demon".replace(":game", game).replace(":demon", newDemon.name);
    })
}


function updateDemon(newDemon, existingDemon, game) {
    existingDemon.game[game] = newDemon.game[game]
}

/* ============================================ 
                DATA ACTIONS
*/

//GET
export function getResistanceIcons() {
    const resistances = {
        neutral: neutral,
        absorb: absorb,
        nullRes: nullRes,
        repel: repel,
        weak: weak,
        resistance: resistance
    }

    return resistances;
}

export function getElementsIcons() {
    return {
        phys: phys,
        fire: fire,
        ice: ice,
        thunder: thunder,
        force: force,
        light: light,
        dark: dark,
    }
}