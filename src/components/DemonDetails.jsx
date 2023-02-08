import React, { useState } from "react";
import { getDemon, getDemonNameByURL } from "../services/demonServices";
import { getCurrentGame } from "../services/gameServices";
import unknownDemon from "../assets/demons/unknown_demon.png";
import phys from "../assets/icons/elements/physical.png";
import fire from "../assets/icons/elements/fire.png";
import ice from "../assets/icons/elements/ice.png";
import thunder from "../assets/icons/elements/thunder.png";
import force from "../assets/icons/elements/force.png";
import light from "../assets/icons/elements/light.png";
import dark from "../assets/icons/elements/dark.png";
import absorb from "../assets/icons/resistances/absorb.png";
import neutral from "../assets/icons/resistances/neutral.png";
import nullRes from "../assets/icons/resistances/null.png";
import repel from "../assets/icons/resistances/repel.png";
import res from "../assets/icons/resistances/resistance.png";
import weak from "../assets/icons/resistances/weak.png";
import { Progress } from "./layouts/Progress";

const DemonDetails = () => {
    var demon = getDemon(getDemonNameByURL(), getCurrentGame());
    const [isModifying, setIsModifying] = useState(false)
    const elements = {
        phys: phys,
        fire: fire,
        ice: ice,
        thunder: thunder,
        force: force,
        light: light,
        dark: dark
    };
    const resistances = {
        absorb: absorb,
        neutral: neutral,
        null: nullRes,
        repel: repel,
        resistance: res,
        weak: weak,
    }

    function getElementImg(request) {
        var returned;
        Object.entries(elements).map(element => {
            if (element[0] == request) {
                returned = element[1];
            }
        })
        return returned;
    }

    function getResistanceImg(request) {
        var returned;
        Object.entries(resistances).map(resistance => {
            if (resistance[0] == request) {
                returned = resistance[1];
            }
        })
        return returned;
    }

    if (!isModifying) {
        return (
            <div className="demonDetailsDiv">
                <div>
                    <div id="demonName">
                        <div>
                            <p>Lvl. {demon.level}</p>
                        </div>
                        <div>
                            <p>{demon.type}</p>
                            <p>{demon.name}</p>
                        </div>
                    </div>
                    <div id="demonCondition">
                        <div id="demonHp">
                            <p>HP</p>
                            <p>{demon.stats.hp} / {demon.stats.hp}</p>
                            <div className="bar"></div>
                        </div>
                        <div id="demonMp">
                            <p>MP</p>
                            <p>{demon.stats.mp} / {demon.stats.mp}</p>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <div id="demonResistances">
                        <div>
                            <p>Resistances</p>
                        </div>
                        <div>
                            {Object.entries(demon.resistances).map(res => (
                                <div key={res[0]}>
                                    <div><img src={getElementImg(res[0])} /></div>
                                    <div><img src={getResistanceImg(res[1])} /></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div id="demonStats">
                        <div>
                            <p>Stats</p>
                        </div>
                        <div>
                            <div>
                                <p>Strength: </p>
                                <p>{demon.stats.str}</p>
                                <Progress stat={demon.stats.str}/>
                            </div>
                            <div>
                                <p>Vitality: </p>
                                <p>{demon.stats.str}</p>
                                <Progress stat={demon.stats.vit}/>
                            </div>
                            <div>
                                <p>Magic: </p>
                                <p>{demon.stats.str}</p>
                                <Progress stat={demon.stats.mag}/>
                            </div>
                            <div>
                                <p>Agility: </p>
                                <p>{demon.stats.str}</p>
                                <Progress stat={demon.stats.agi}/>
                            </div>
                            <div>
                                <p>Luck: </p>
                                <p>{demon.stats.str}</p>
                                <Progress stat={demon.stats.lu}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div><img src={unknownDemon} /></div>
                <div>
                    <div id="demonSkills">
                        <p>Skills</p>
                        <div id="skills">
                            <div>
                                <div>
                                    <img src={getElementImg("phys")}></img>
                                    <p>Bufu</p>
                                </div>
                                <div>
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={getElementImg("phys")}></img>
                                    <p>Bufu</p>
                                </div>
                                <div>
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={getElementImg("phys")}></img>
                                    <p>Bufu</p>
                                </div>
                                <div>
                                    <p>13MP</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={getElementImg("phys")}></img>
                                    <p>Bufu</p>
                                </div>
                                <div>
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
    } else {
        return (
            <div className="demonDetailsDiv">
                <div></div>
                <div>CA MODIFIE ICI</div>
                <div></div>
            </div>
        )
    }
}

export default DemonDetails;