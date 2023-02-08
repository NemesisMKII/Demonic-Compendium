export class Demon {
    constructor(demon) { 
        this.type = demon.type;
        this.name = demon.name;
        this.level = demon.level;
        this.stats = {
            hp: demon.stats.hp,
            mp: demon.stats.mp,
            str: demon.stats.str,
            vit: demon.stats.vit,
            mag: demon.stats.mag,
            agi: demon.stats.agi,
            lu: demon.stats.lu
        };
        this.resistances = {
            phys: demon.resistances.physical,
            fire: demon.resistances.fire,
            ice: demon.resistances.ice,
            thunder: demon.resistances.thunder,
            force: demon.resistances.wind,
            light: demon.resistances.holy,
            dark: demon.resistances.dark,
        };
    }

    //TYPE
    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }

    //NAME
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    //LEVEL
    get level() {
        return this._level;
    }

    set level(level) {
        this._level = level;
    }

    //STATS
    get stats() {
        return this._stats;
    }

    set stats(stats) {
        this._stats = stats;
    }

    //Fonction permettant de changer une stat du démon
    setStat(stat, newValue) {
        for (var [key, value] of Object.entries(this.stats)) {
            if (stat === key) {
                this.stats[key] = newValue;
            }
        }
    }

    //RESISTANCES
    get resistances() {
        return this._resistances;
    }

    set resistances(resistances) {
        this._resistances = resistances;
    }

    toJson() {
        return JSON.stringify({
            type: this.type,
            name: this.name,
            level: this.level,
            stats: this.stats,
            resistances: this.resistances
        })
    }
}