import React from "react";
import phys from "../assets/icons/elements/physical.png";
import thunder from "../assets/icons/elements/thunder.png";
import fire from "../assets/icons/elements/fire.png";
import ice from "../assets/icons/elements/ice.png";
import force from "../assets/icons/elements/force.png";
import light from "../assets/icons/elements/light.png";
import dark from "../assets/icons/elements/dark.png";
import unknownDemonImg from "../assets/demons/unknown_demon.png"
import { getResistanceIcons } from "../Services/demonServices";

const Demon = ({game, demon}) => {

    const demonData = demon.game[game]

    const resistances = getResistanceIcons()

    return (
        <div className="h-full w-full flex space-x-2 text-white">
            <div className="h-full w-1/3">
                <div className="w-full h-1/5 m-auto flex">
                    <div className="h-full w-1/4 flex">  
                        <div className="w-3/4 h-3/4 m-auto flex border-[3px] rounded-full">
                            <div className="w-5/6 h-5/6 m-auto border-4 rounded-full relative flex">  
                                <p className="absolute top-[-10px] left-[-5px] textShadow font-bold text-2xl">Lvl.</p>
                                <p className="text-center text-white text-5xl font-semibold m-auto">{demonData.lvl}</p>                                      
                            </div>
                        </div>   
                    </div>
                    <div className="h-full w-4/5 flex flex-col justify-center space-y-1 overflow-hidden">
                        <p className="h-1/3 w-3/4 text-3xl font-semibold">{demon.type}</p>
                        <p className="h-1/3 w-3/4 text-4xl font-bold">{demon.name}</p>
                    </div>                   
                </div>
                <div className="space-y-1 p-2">
                    <h1 className="text-2xl w-1/2 text-center rounded-xl bg-black/50 boxStatsShadow mb-2">Condition</h1>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">HP</p>
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">{demonData.stats.hp + "/" + demonData.stats.hp}</p>
                        <div className="w-1/3 h-5 bgColorGreen border border-black"></div>
                    </div>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textColorYellow textShadow h-3/4">MP</p>
                        <p className="text-xl font-bold textColorYellow textShadow h-3/4">{demonData.stats.mp + "/" + demonData.stats.mp}</p>
                        <div className="w-1/3 h-5 bgColorYellow border border-black"></div>
                    </div>
                </div>
                <div className="p-2">
                    <h1 className="text-2xl mb-2 w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow">Resistances</h1>
                    <div className="w-full flex space-x-2">
                        <img className="boxStatsShadow p-1 w-16 h-16" src={phys} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={fire} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={ice} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={thunder} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={force} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={light} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={dark} />
                    </div>
                    <div className="w-full flex space-x-2">
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.phys]} />
                        </div>
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.fire]} />
                        </div>
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.ice]} />
                        </div>
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.thunder]} />
                        </div>
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.force]} />
                        </div>
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.light]} />
                        </div>
                        <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                            <img className="w-[60%] h-[60%] m-auto" src={resistances[demonData.resistances.dark]} />
                        </div>
                    </div>
                    <div className="w-full h-14 border border-black boxStatsShadow bg-black/40 mt-3">

                    </div>
                </div>
                <div>
                    <h1 className="text-2xl mb-2 w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow">Stats</h1>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textStatsColor textShadow h-3/4">Force:</p>
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">{demonData.stats.str}</p>
                        <div className="w-1/3 h-5 bgColorGreen border border-black"></div>
                    </div>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textStatsColor textShadow h-3/4">Vitalité:</p>
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">{demonData.stats.vit}</p>
                    </div>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textStatsColor textShadow h-3/4">Magie:</p>
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">{demonData.stats.mag}</p>
                    </div>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textStatsColor textShadow h-3/4">Agilité:</p>
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">{demonData.stats.agi}</p>
                    </div>
                    <div className="w-full flex items-center justify-evenly border border-black boxStatsShadow rounded-xl">
                        <p className="text-xl font-bold textStatsColor textShadow h-3/4">Chance:</p>
                        <p className="text-xl font-bold textColorGreen textShadow h-3/4">{demonData.stats.lu}</p>
                    </div>
                </div>
            </div>
            <div className="h-full w-1/3 space-y-5">
                <img className="m-auto h-[90%]" src={unknownDemonImg} />
            </div>
            <div className="h-full w-1/3 bg-blue-500"></div>
        </div>
    )
}

export default Demon;