import React, { useState } from "react";
import { getResistanceIcons } from "../Services/demonServices";
import DemonTemplate from "./templates/DemonTemplate";
import Progress from "./utils/Progress";
import { Link } from "react-router-dom";
import { MODIFY_DEMON_URL } from "../Constants/urls";

const Demon = ({gameName, demon}) => {
    console.log(gameName);

    const demonData = demon.game[gameName]
    const resistances = getResistanceIcons()
    const [resHoverData, setResHoverData] = useState("");

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
                <p className="h-1/3 w-3/4 text-3xl font-semibold textColorGreen textShadow">{demon.type}</p>
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
                        alt=""
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.phys]}
                        onMouseEnter={() => {setResHoverData(demonData.resistances.phys)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        alt=""
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.fire]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.fire)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        alt=""
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.ice]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.ice)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        alt=""
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.thunder]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.thunder)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        alt=""
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.force]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.force)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        alt=""
                        className="w-[60%] h-[60%] m-auto" 
                        src={resistances[demonData.resistances.light]} 
                        onMouseEnter={() => {setResHoverData(demonData.resistances.light)}}
                        onMouseLeave={() => {setResHoverData(null)}}
                    />
                </div>
                <div className="p-1 w-16 h-16 bg-black/70 boxStatsShadow flex">
                    <img 
                        alt=""
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
            <div className="w-full h-9 flex items-center border border-black bg-black/50 boxStatsShadow rounded-xl space-x-2">
                <p className="w-3/12 text-2xl font-bold textStatsColor textShadow text-end">Force:</p>
                <p className="w-1/12 text-2xl text-end font-bold textColorGreen textShadow">{demonData.stats.str}</p>
                <div className="w-8/12 h-3.5">
                    <Progress progress={demonData.stats.str}/>
                </div>
            </div>
            <div className="w-full h-9 flex items-center border border-black bg-black/50 boxStatsShadow rounded-xl space-x-2">
                <p className="w-3/12 text-2xl font-bold textStatsColor textShadow text-end">Vitalité:</p>
                <p className="w-1/12 text-2xl text-end font-bold textColorGreen textShadow">{demonData.stats.vit}</p>
                <div className="w-8/12 h-3.5">
                    <Progress progress={demonData.stats.vit}/>
                </div>
            </div>
            <div className="w-full h-9 flex items-center border border-black bg-black/50 boxStatsShadow rounded-xl space-x-2">
                <p className="w-3/12 text-2xl font-bold textStatsColor textShadow text-end">Magie:</p>
                <p className="w-1/12 text-2xl text-end font-bold textColorGreen textShadow">{demonData.stats.mag}</p>
                <div className="w-8/12 h-3.5">
                    <Progress progress={demonData.stats.mag} />
                </div>
            </div>
            <div className="w-full h-9 flex items-center border border-black bg-black/50 boxStatsShadow rounded-xl space-x-2">
                <p className="w-3/12 text-2xl font-bold textStatsColor textShadow text-end">Agilité:</p>
                <p className="w-1/12 text-2xl text-end font-bold textColorGreen textShadow">{demonData.stats.agi}</p>
                <div className="w-8/12 h-3.5">
                    <Progress progress={demonData.stats.agi} />
                </div>
            </div>
            <div className="w-full h-9 flex items-center border border-black bg-black/50 boxStatsShadow rounded-xl space-x-2">
                <p className="w-3/12 text-2xl font-bold textStatsColor textShadow text-end">Chance:</p>
                <p className="w-1/12 text-2xl text-end font-bold textColorGreen textShadow">{demonData.stats.lu}</p>
                <div className="w-8/12 h-3.5">
                    <Progress progress={demonData.stats.lu} />
                </div>
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
                button={
                <Link 
                    to={MODIFY_DEMON_URL.replace(":game", gameName).replace(":demon", demon.name)}
                >
                    <button className="text-2xl font-bold bg-orange-500 boxStatsShadow p-1 block m-auto textShadow">Modifier démon</button>
                </Link>
                }
            />
        </div>
    )
}

export default Demon;