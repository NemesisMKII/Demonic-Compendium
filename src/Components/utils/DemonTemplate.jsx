import React from "react";
import { getElementsIcons } from "../../Services/demonServices";
import unknownDemonImg from "../../assets/demons/unknown_demon.png";
import DemonResistanceInfo from "./DemonResistanceInfo";

const DemonTemplate = ({lvlDiv, infoDiv, conditionDiv, resDiv, statsDiv, submit = null, resHoverData = ""}) => {

    const elements = getElementsIcons();

    return (
        <>
            <div className="h-full w-1/3">
                <div className="w-full h-1/5 m-auto flex">
                    <div className="h-full w-1/4 flex">  
                        <div className="w-3/4 h-3/4 m-auto flex border-[3px] rounded-full">
                            <div className="w-5/6 h-5/6 m-auto border-4 rounded-full relative flex">                                        
                                {lvlDiv}  
                            </div>
                        </div>   
                    </div>
                    <div className="h-full w-4/5 flex flex-col justify-center space-y-1 overflow-hidden">
                        {infoDiv}
                    </div>                   
                </div>
                <div className="space-y-1 p-2">
                    <h1 className="text-2xl w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow mb-2">Condition</h1>
                    {conditionDiv}
                </div>
                <div className="p-2">
                    <h1 className="text-2xl mb-2 w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow">Resistances</h1>
                    <div className="w-full flex space-x-2">
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["phys"]} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["fire"]} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["ice"]} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["thunder"]} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["force"]} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["light"]} />
                        <img className="boxStatsShadow p-1 w-16 h-16" src={elements["dark"]} />
                    </div>
                    <div className="w-full flex space-x-2">
                        {resDiv}
                    </div>
                    <DemonResistanceInfo resistance={resHoverData}/>
                </div>
                <div>
                    <h1 className="text-2xl mb-2 w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow">Stats</h1>
                    {statsDiv}
                </div>
            </div>
            <div className="h-full w-1/3 space-y-5">
                <img className="m-auto h-[90%]" src={unknownDemonImg} />
                {submit}
            </div>
            <div className="h-full w-1/3 flex">
                <div className="w-full h-3/4 m-auto">
                    <h1 className="text-2xl mb-2 w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow">Skills</h1>
                    <div className="space-y-2">
                        <div className="w-full h-14 bg-white/30 boxStatsShadow flex items-center justify-between">
                            
                        </div>
                        <div className="w-full h-14 bg-white/30 boxStatsShadow"></div>
                        <div className="w-full h-14 bg-white/30 boxStatsShadow"></div>
                        <div className="w-full h-14 bg-white/30 boxStatsShadow"></div>
                        <div className="w-full h-14 bg-black/30 boxStatsShadow"></div>
                        <div className="w-full h-14 bg-black/30 boxStatsShadow"></div>
                        <div className="w-full h-14 bg-black/30 boxStatsShadow"></div>
                        <div className="w-full h-14 bg-black/30 boxStatsShadow"></div>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default DemonTemplate;