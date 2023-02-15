import React from "react";
import {Routes, Route} from "react-router-dom";
import { Header } from "./components/layouts/Header";
import * as URL from "./constants/urls"
import { useState } from "react";
import { getCurrentGame, setActiveGameTab, setGameBG } from "./services/gameServices";
import { useEffect } from "react";
import DemonListView from "./views/DemonListView";
import DemonDetailsView from "./views/DemonDetailsView";
import DemonAddView from "./views/DemonAddView";

export default function App() {
    const [currentGame, setCurrentGame] = useState(getCurrentGame);
    useEffect(() => {
        setGameBG(currentGame);
        setActiveGameTab(currentGame);
    }, [currentGame])


    return (
        <div className="App text-white h-full">
            <Header onGameChange={(value) => {setCurrentGame(value)}} />
            <main className="h-[88%] flex">
                <Routes>
                    <Route path={URL.gameHome} element={<DemonListView game={currentGame} />} />
                    <Route path={URL.demonDetails} element={<DemonDetailsView />} />
                    <Route path={URL.addDemon} element={<DemonAddView />} />
                </Routes>
            </main>
        </div>
    )
}