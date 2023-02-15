import React from "react";
import unknownDemon from "../assets/demons/unknown_demon.png";

const DemonAdd = () => {
    return (
        <div className="h-[90%] w-[95%] flex m-auto">
                <div className="w-[33%]">
                    <div id="demonLevel" className="flex">
                        <div className="w-1/6 flex justify-center items-center">
                            <p>Lvl. <input type="number" min={1} placeholder="1" className="w-8 text-black text-center"></input></p>
                        </div>
                        <div className="w-5/6">
                            <p>Type: <input type="text" name="type" className="w-1/2 text-black"></input></p>
                            <p>Name: <input type="text" name="name" className="w-1/2 text-black"></input></p>
                        </div>
                    </div>
                    <div>
                        <h2 className="border border-black p-1">Condition</h2>
                        <div className="flex justify-evenly">
                            <p className="text-green">HP</p>
                            <input type="number" min={0} placeholder="1" className="w-8 text-black text-center"></input>
                            <div className="bar bg-green"></div>
                        </div>
                        <div className="flex justify-evenly">
                            <p className="text-yellow">MP</p>
                            <input type="number" min={0} placeholder="1" className="w-8 text-black text-center"></input>
                            <div className="bar bg-yellow"></div>
                        </div>
                    </div>
                    <div className="">
                        <div className="border border-black">
                            <p>Resistances</p>
                        </div>
                        <div className="flex w-1/2 gap-x-1">
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                                <div>
                                    <div className="h-1/2 bg-white/50"><img className="h-full w-full" src="" alt="" /></div>
                                    <div className="h-1/2 bg-black/50"><img className="h-full w-full" src="" alt="" /></div>
                                </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Stats</p>
                        </div>
                        <div>
                            <div className="w-full flex justify-between items-center">
                                <p>Strength: </p>
                                <input type="number" name="str" className="text-black text-center w-16"></input>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p>Vitality: </p>
                                <input type="number" name="vit" className="text-black text-center w-16"></input>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p>Magic: </p>
                                <input type="number" name="mag" className="text-black text-center w-16"></input>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p>Agility: </p>
                                <input type="number" name="agi" className="text-black text-center w-16"></input>
                            </div>
                            <div className="w-full flex justify-between items-center">
                                <p>Luck: </p>
                                <input type="number" name="lu" className="text-black text-center w-16"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[33%]">
                    <img className="w-full h-full" src={unknownDemon} alt="demonImg"/>
                </div>
                <div className="w-[33%]">
                    <div id="demonSkills">
                        <p>Skills</p>
                        <div>
                            <div className="w-full flex justify-between items-center p-1 border border-black bg-white/50 rounded mt-1">
                                <div className="flex items-center gap-x-5">
                                    <img src="" alt="phys"></img>
                                    <p>Bufu</p>
                                </div>
                                <div className="flex justify-center items-center border border-white bg-black/50 rounded-xl w-20">
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center p-1 border border-black bg-white/50 rounded mt-1">
                                <div className="flex items-center gap-x-5">
                                    <img src="" alt="phys"></img>
                                    <p>Bufu</p>
                                </div>
                                <div className="flex justify-center items-center border border-white bg-black/50 rounded-xl w-20 mt-1">
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center p-1 border border-black bg-white/50 rounded mt-1">
                                <div className="flex items-center gap-x-5">
                                    <img src="" alt="phys"></img>
                                    <p>Bufu</p>
                                </div>
                                <div className="flex justify-center items-center border border-white bg-black/50 rounded-xl w-20">
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div className="w-full flex justify-between items-center p-1 border border-black bg-white/50 rounded mt-1">
                                <div className="flex items-center gap-x-5">
                                    <img src="" alt="phys"></img>
                                    <p>Bufu</p>
                                </div>
                                <div className="flex justify-center items-center border border-white bg-black/50 rounded-xl w-20">
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DemonAdd;