"use strict";

var FS = require("fs"),
    Level = require("./level"),
    Pacman = require("./pacman"),
    Monsters = require("./monsters"),
    FILENAME = "nursery.pacmans.json";

function pad(v, size) {
    v = "" + v;
    while (v.length < size) {
        v = "0" + v;
    }
    return v;
}

function load() {
    var nursery = { generation: 1, pacmans: [] },
        data,
        i;
    try {
        data = JSON.parse(FS.readFileSync(FILENAME).toString());
        nursery.generation = data.generation;
        nursery.bestScore = data.bestScore;
        data.pacmans.forEach(function(brain) {
            nursery.pacmans.push(new Pacman.Eye15(brain));
        });
    }
    catch (ex) {
        for (i = 0; i < 100; i++) {
            nursery.pacmans.push(new Pacman.Eye15());
        }
    }
    if (!nursery.bestScore) {
        nursery.bestScore = -999999999;
    }
    return nursery;
}

function save(nursery) {
    var data = { generation: nursery.generation, pacmans: [], bestScore: nursery.bestScore };
    nursery.pacmans.forEach(function(pacman) {
        data.pacmans.push(pacman.brain);
    });
    FS.writeFileSync(FILENAME, JSON.stringify(data));
}

function challengeAll(nursery) {
    nursery.pacmans.forEach(function(pacman) {
        var level = new Level(),
            maxTime = 5000,
            score,
            k;
        pacman.score = 0;
        pacman.time = 0;
        while (maxTime > 0) {
            Monsters.moveAllMonsters(level);
            for (k = 0; k < level.monsters.length; k++) {
                if (level.monsters[k].pos == level.pacman.pos) {
                    return;
                }
            }
            score = Pacman.move(pacman, level);
            for (k = 0; k < level.monsters.length; k++) {
                if (level.monsters[k].pos == level.pacman.pos) {
                    return;
                }
            }
            pacman.score += 1 - score;
            maxTime--;
            pacman.time++;
        }
    });
}

function nextGeneration(nursery) {
    nursery.pacmans.sort(function (a,b) {
        return b.score - a.score;
    });
    nursery.generation++;
    var highlight = false;
    var bestPacman = nursery.pacmans[0];
    var bestScore = bestPacman.score;
    if (bestScore > nursery.bestScore) {
        nursery.bestScore = bestScore;
        FS.writeFileSync(
            "generation." + pad(nursery.generation, 6) + ".json",
            JSON.stringify(bestPacman.brain)
        );
        highlight = true;
    }
    nursery.pacmans.splice(25, 75);
    var i, parent;
    for (i = 0; i < 25; i++) {
        parent = nursery.pacmans[i];
        nursery.pacmans.push(parent.reproduce());
        nursery.pacmans.push(parent.reproduce());
    }
    for (i = 0; i < 25; i++) {
        nursery.pacmans.push(new Pacman.Eye15());
    }

    var out = "Generation #" + nursery.generation;
    var pacman = nursery.pacmans[0];
    out += "  ->  " + pacman.score + " (" + pacman.time + ")";
    for (i = 1; i < 5; i++) {
        pacman = nursery.pacmans[i];
        out += ",  " + pacman.score + " (" + pacman.time + ")";
    }
    if (highlight) out = out.bold;
    else out = out.grey;
    console.log(out);
}

function start() {
    var nursery = load(),
        i,
        pacman,
        out;
    while (true) {
        challengeAll(nursery);
        nextGeneration(nursery);
        save(nursery);
    }
}


start();
