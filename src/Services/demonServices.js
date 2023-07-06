function setDemonLocalStorage(demonStorage) {
    if (!localStorage.getItem("DemonList")) {
        localStorage.setItem("DemonList", JSON.stringify([]));
    } else {
        localStorage.setItem("DemonList", JSON.stringify(demonStorage));
    }
}

function getDemonFromLocalStorage() {
    var jsonList = localStorage.getItem("DemonList");
    if (jsonList)
        return JSON.parse(jsonList);
    return [];
}

export function getDemonList(game) {
    const demonList = getDemonFromLocalStorage();
    return demonList.filter(demon => demon.game[game]);
}

export function getDemon(DemonName, demonList) {
    return demonList.filter(demon => DemonName === demon.name);
}

export function storeDemon (newDemon, game) {
    var demonList = getDemonFromLocalStorage();
    if (checkDemonExists(newDemon, demonList)) {
        var existingDemon = getDemon(newDemon.name, demonList)[0]
        updateDemon(newDemon, existingDemon, game)
        updateDemonList(existingDemon, demonList)
    } else {
        demonList.push(newDemon);
    }
    setDemonLocalStorage(demonList);
}

//POSER LA QUESTION A MARC: pourquoi mes données se mettent à jour sans que j'ai besoin de faire un return dans mes fonctions
//HYPOTHESE: Les fonctions updateDemon et updateDemonList que j'appelle font partie de la portée de la fonction storeDemon,
//ce qui fait que lorsque je modifie une valeur dans une fonction,
function getDemonIndex(demon, demonList) {
    for (let index = 0; index < demonList.length; index++) {
        if (demon.name === demonList[index].name) {
            return index;
        }
    }
}

function updateDemon(newDemon, existingDemon, game) {
    existingDemon.game[game] = newDemon.game[game]
}

function updateDemonList(existingDemon, demonList) {
    demonList[getDemonIndex(existingDemon, demonList)] = existingDemon;
}

function checkDemonExists(newDemon, demonList) {
    return (demonList.filter(demon => demon.name === newDemon.name).length > 0)
}
