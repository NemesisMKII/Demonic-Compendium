import React from "react";

const DemonTemplate = () => {
    return (
        <>
        <div className="h-full w-1/3">-
                <div className="w-full h-1/5 m-auto flex">
                    <div className="h-full w-1/4 flex">  
                        <div className="w-3/4 h-3/4 m-auto flex border-[3px] rounded-full">
                            <div className="w-5/6 h-5/6 m-auto border-4 rounded-full relative flex">                                        
                                <label htmlFor="lvl" className="absolute top-[-10px] left-[-5px] text-white textShadow font-bold text-2xl">Lvl.</label>
                                <input
                                    id="lvl"
                                    type="number"
                                    value={form.lvl}
                                    className="w-1/2 h-1/2 text-center text-2xl font-semibold m-auto"
                                    onChange={handleChange}
                                />    
                            </div>
                        </div>   
                    </div>
                    <div className="h-full w-4/5 flex flex-col justify-center space-y-1 overflow-hidden">
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
                            className="h-1/3 w-3/4 text-4xl font-bold"
                            placeholder="Nom du démon"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>                   
                </div>
                <div className="space-y-1 p-2">
                    <h1 className="text-2xl w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow mb-2">Condition</h1>
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
                        <DemonResistanceInput 
                            id="phys"
                            value={form.phys}
                            onChange={handleChange}
                        />
                        <DemonResistanceInput 
                            id="fire"
                            value={form.fire}
                            onChange={handleChange}
                        />
                        <DemonResistanceInput 
                            id="ice"
                            value={form.ice}
                            onChange={handleChange}
                        />
                        <DemonResistanceInput 
                            id="thunder"
                            value={form.thunder}
                            onChange={handleChange}
                        />
                        <DemonResistanceInput 
                            id="force"
                            value={form.force}
                            onChange={handleChange}
                        />
                        <DemonResistanceInput 
                            id="light"
                            value={form.light}
                            onChange={handleChange}
                        />
                        <DemonResistanceInput 
                            id="dark"
                            value={form.phys}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl mb-2 w-1/2 text-center text-white rounded-xl bg-black/50 boxStatsShadow">Stats</h1>
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
                </div>
        </div>
        <div className="h-full w-1/3 space-y-5">
            <img className="m-auto h-[90%]" src={unknownDemonImg} />
            <button className="text-2xl font-bold bg-green-500 boxStatsShadow p-1 block m-auto" type="submit">Ajouter démon</button>
        </div>
        <div className="h-full w-1/3 bg-blue-500">
        </div>
        </>
    )
}

export default DemonTemplate;