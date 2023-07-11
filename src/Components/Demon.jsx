import React, { useEffect, useState } from "react";
import { getResistanceIcons } from "../Services/demonServices";
import DemonTemplate from "./utils/DemonTemplate";

const Demon = ({game, demon}) => {

    const demonData = demon.game[game]
    const resistances = getResistanceIcons()
    const [resHoverData, setResHoverData] = useState("");

    useEffect(() => {
        console.log(resHoverData);
    }, [resHoverData])
    
    const LvlInfo = () => {
        return (
            <>
                <p className="absolute top-[-10px] left-[-5px] textShadow font-bold text-2xl">Lvl.</p>
                <p className="text-center text-white text-5xl font-semibold m-auto">{demonData.lvl}</p>  
            </>
        )
    }

    const BasicInfo = () => {
        return (
            <>
                <p className="h-1/3 w-3/4 text-3xl font-semibold">{demon.type}</p>
                <p className="h-1/3 w-3/4 text-4xl font-bold">{demon.name}</p>
            </>
        )
    }

    const ConditionInfo = () => {
        return (
            <>
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
            </>
        )
    }
    
    const ResistancesInfo = () => {
        return (
            <>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.phys]}
                        onMouseEnter={() => {setResHoverData(demonData.resistances.phys)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.fire]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.fire)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.ice]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.ice)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.thunder]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.thunder)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.force]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.force)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.light]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.light)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.dark]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.dark)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
            </>
        )
    }

    const StatsInfo = () => {
        return (
            <>
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
            </>
        )
    }

    return (
        <div className="h-full w-full flex space-x-2 text-white">
            <DemonTemplate 
                lvlDiv={<LvlInfo />}
                infoDiv={<BasicInfo />}
                conditionDiv={<ConditionInfo />}
                resDiv={<ResistancesInfo />}
                statsDiv={<StatsInfo />}
                resHoverData={resHoverData}
            />
        </div>
    )
}

export default Demon;