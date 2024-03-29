import React, { useEffect, useState } from "react";
import DemonBox from "./utils/DemonBox";
import { setDemonLocalStorage } from "../Services/demonServices";

const DeleteDemon = ({game, demonList}) => {

    const [demons, setDemonList] = useState(demonList);
    const [demonsToDelete, setDemonsToDelete] = useState([]);

    useEffect(() => {
        setDemonLocalStorage(demons);
    }, [demons])

    const handleChange = (demonName, action) => {
        switch(action) {
            case "push":
                setDemonsToDelete(demonsToDelete.concat(demonName));
                break;
            case "splice":
                setDemonsToDelete(demonsToDelete.filter(demon => demon !== demonName))
                break;
            default:
                break;
        }
    }

    const handleDelete = () => {
        demonsToDelete.forEach(demonsToDelete => {
            setDemonList(demons.map(demon => {
                if (demon.name === demonsToDelete) {
                    delete demon.game[game.slug];
                }
                return demon;
            }))
        })
    }

    return (
        <>
            <div className="h-full w-full bg-white/[65%] text-center text-black">
                <h1 className="text-5xl font-bold">{game.name}</h1>
                <h1 className="text-3xl">Liste des démons</h1>
                <div className="w-[95%] h-3/4 boxStatsShadow bg-black/20 mt-2 m-auto space-x-4 flex flex-wrap justify-center p-5">
                    {demons
                        .filter(demon => demon.game[game.slug])
                        .map(demon => (
                        <DemonBox key={demon.name} demon={demon} deleteMode={true} onChange={(demonName, action) => {handleChange(demonName, action)}}/>
                    ))}
                </div>
                <div className="w-[95%] h-[10%] mt-4 m-auto flex justify-center items-center space-x-5">
                        <h1 className="p-2 font-bold text-2xl border-2 rounded-md bg-red-600 cursor-pointer" onClick={handleDelete}>Confirmer</h1>
                </div>
            </div>
        </>
    )
}

export default DeleteDemon;