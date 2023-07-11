import React, { useEffect, useState } from "react";
import { getElementsIcons, storeDemon } from "../Services/demonServices";
import unknownDemonImg from "../assets/demons/unknown_demon.png"
import DemonResistanceInput from "./utils/form/DemonResistanceInput";
import DemonTemplate from "./utils/DemonTemplate";

const LvlInput = ({form, handleChange}) => {
    return (
        <>
            <label htmlFor="lvl" className="absolute top-[-10px] left-[-5px] text-white textShadow font-bold text-2xl">Lvl.</label>
            <input
                id="lvl"
                type="number"
                value={form.lvl}
                className="w-1/2 h-1/2 text-center text-2xl font-semibold m-auto"
                onChange={handleChange}
            />    
        </>
    )
}

const InfoInput = ({form, handleChange}) => {
    return (
        <>
            <input
                id="type"
                type="text"
                value={form.type}
                className="h-1/3 w-3/4 text-3xl font-semibold"
                placeholder="Type du démon"
                onChange={handleChange}
            />
            <input
                id="name"
                type="text"
                value={form.name}
                className="h-1/3 w-3/4 text-3xl font-semibold"
                placeholder="Nom du démon"
                onChange={handleChange}
            />
        </>
    )
}

const ConditionInput = ({form, handleChange}) => {
    return (
        <>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="hp" className="text-xl font-bold text-green-500 textShadow h-3/4">HP</label>
                <input
                    id="hp"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.hp}
                    onChange={handleChange}
                />
                <div className="w-1/3 h-5 bg-green-500 border border-black"></div>
            </div>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="mp" className="text-xl font-bold text-yellow-500 textShadow h-3/4">MP</label>
                <input
                    id="mp"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.mp}
                    onChange={handleChange}
                />
                <div className="w-1/3 h-5 bg-yellow-500 border border-black"></div>
            </div>
        </>
    )
}

const StatsInput = ({form, handleChange}) => {
    return (
        <>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="str" className="text-xl font-bold text-green-500 textShadow h-3/4">Force:</label>
                <input
                    id="str"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.str}
                    onChange={handleChange}
                />
            </div>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="vit" className="text-xl font-bold text-green-500 textShadow h-3/4">Vitalité:</label>
                <input
                    id="vit"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.vit}
                    onChange={handleChange}
                />
            </div>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="mag" className="text-xl font-bold text-green-500 textShadow h-3/4">Magie:</label>
                <input
                    id="mag"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.mag}
                    onChange={handleChange}
                />
            </div>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="agi" className="text-xl font-bold text-green-500 textShadow h-3/4">Agilité:</label>
                <input
                    id="agi"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.agi}
                    onChange={handleChange}
                />
            </div>
            <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                <label htmlFor="lu" className="text-xl font-bold text-green-500 textShadow h-3/4">Chance:</label>
                <input
                    id="lu"
                    type="number"
                    className="h-5 text-center text-xl font-bold"
                    value={form.lu}
                    onChange={handleChange}
                />
            </div>
        </>
    )
}

//PROBLEME DE RENDU INFINI CAR USEFFECT PRESENT DANS RESISTANCEINPUT A REGLER
const ResistancesInput = ({form, handleChange, hoverChange}) => {
    return (
        <>
            <DemonResistanceInput 
                id="phys"
                value={form.phys}
                onChange={handleChange}
                onHover={hoverChange}
            />
            <DemonResistanceInput 
                id="fire"
                value={form.fire}
                onChange={handleChange}
                onHover={hoverChange}
            />
            <DemonResistanceInput 
                id="ice"
                value={form.ice}
                onChange={handleChange}
                onHover={hoverChange}
            />
            <DemonResistanceInput 
                id="thunder"
                value={form.thunder}
                onChange={handleChange}
                onHover={hoverChange}
            />
            <DemonResistanceInput 
                id="force"
                value={form.force}
                onChange={handleChange}
                onHover={hoverChange}
            />
            <DemonResistanceInput 
                id="light"
                value={form.light}
                onChange={handleChange}
                onHover={hoverChange}
            />
            <DemonResistanceInput 
                id="dark"
                value={form.phys}
                onChange={handleChange}
                onHover={hoverChange}
            />
        </>
    )
}

const AddDemonForm = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        lvl: 0,
        hp: 0,
        mp: 0,
        str: 0,
        vit: 0,
        mag: 0,
        agi: 0,
        lu: 0,
        phys: "neutral",
        fire: "neutral",
        ice: "neutral",
        thunder: "neutral",
        force: "neutral",
        light: "neutral",
        dark: "neutral",
    })

    const [resHoverData, setResHoverData] = useState("")

    const elements = getElementsIcons()

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onValidation(form)
    }

     
    return (
        <form className="h-full w-full flex space-x-2 text-black" onSubmit={handleSubmit}>
            <DemonTemplate 
                lvlDiv={<LvlInput form={form.lvl} handleChange={handleChange} />}
                infoDiv={<InfoInput form={form} handleChange={handleChange}/>}
                conditionDiv={<ConditionInput form={form} handleChange={handleChange} />}
                resDiv={<ResistancesInput form={form} handleChange={handleChange} hoverChange={(resData) => {setResHoverData(resData)}} />}
                statsDiv={<StatsInput form={form} handleChange={handleChange} />}
                resHoverData={resHoverData}
                submit={<button className="text-2xl font-bold bg-green-500 boxStatsShadow p-1 block m-auto" type="submit">Ajouter démon</button>}
            />
        </form>
    )
}

const AddDemon = ({game}) => {
    const createDemon = (form) => {
        const Demon = {
            name: form.name,
            type: form.type,
            game: {
                [game.slug]: {
                    lvl: form.lvl,
                    stats: {
                        hp: form.hp,
                        mp: form.mp,
                        str: form.str,
                        vit: form.vit,
                        mag: form.mag,
                        agi: form.agi,
                        lu: form.lu
                    },
                    resistances: {
                        phys: form.phys,
                        fire: form.fire,
                        ice: form.ice,
                        thunder: form.thunder,
                        force: form.force,
                        light: form.light,
                        dark: form.dark,
                    },
                    skills: [
                        {
                            name: "attaque",
                            mpCost: 5,
                            lvl: 1
                        }
                    ]
                }
            }
        }

        storeDemon(Demon, game.slug)
    }

    return  (
        <>
            <AddDemonForm onValidation={(form) => {createDemon(form)}}/>
        </>
    )
}

export default AddDemon;