"use strict";

var FS = require("fs"),
    Level = require("./level"),
    Pacman = require("./pacman"),
    Monsters = require("./monsters"),
    FILENAME = "nursery.pacmans.json";



function load() {
    var nursery = { generation: 1, pacmans: [] },
        data,
        i;
    try {
        data = JSON.parse(FS.readFileSync(FILENAME).toString());
        nursery.generation = data.generation;
        data.pacmans.forEach(function(brain) {
            nursery.pacmans.push(new Pacman.Eye15(brain));
        });
    }
    catch (ex) {
        for (i = 0; i < 100; i++) {
            nursery.pacmans.push(new Pacman.Eye15());
        }
    }
    return nursery;
}

function save(nursery) {
    var data = { generation: nursery.generation, pacmans: [] };
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
                    pacman.score -= 1000;
                    return;
                }
            }
            score = Pacman.move(pacman, level);
            pacman.score += 1 - score;
            if (score > 999) {
                return;
            }
            maxTime--;
            pacman.time++;
        }
        pacman.score -= 6666;
    });
}

function nextGeneration(nursery) {
    nursery.pacmans.sort(function (a,b) {
        return b.score - a.score;
    });
    nursery.generation++;
    if (nursery.generation % 50 == 0) {
        FS.writeFileSync(
            "generation." + nursery.generation + ".json", 
            JSON.stringify(nursery.pacmans[0].brain)
        );
    }
    nursery.pacmans.splice(25, 75);
    var i, parent;
    for (i = 0; i < 25; i++) {
        parent = nursery.pacmans[i];
        nursery.pacmans.push(parent.reproduce());
        nursery.pacmans.push(parent.reproduce());
        nursery.pacmans.push(new Pacman.Eye15());
    }
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
        out = "Generation #" + nursery.generation;
        pacman = nursery.pacmans[0];
        out += "  ->  " + pacman.score + " (" + pacman.time + ")";
        for (i = 1; i < 5; i++) {
            pacman = nursery.pacmans[i];
            out += ",  " + pacman.score + " (" + pacman.time + ")";
        }
        console.log(out);
    }
}


start();
