"use strict";

var FS = require("fs"),
Lib = require("./lib"),
Level = require("./level"),
Pacman = require("./pacman"),
Monsters = require("./monsters"),
FILENAME = "nursery.pacmans.json";

var PACMANS = {
    Eye7: Pacman.Eye7,
    Eye15: Pacman.Eye15
};

var newPacman = (function () {
    var keys = [],
    index = 0,
    key;

    for (key in PACMANS) {
        keys.push(key);
    }

    return function() {
        index = (index + 1) % keys.length;
        var pacman = PACMANS[keys[index]];
        return new pacman();
    };
})();



/**
 * Load  the last  saved nursery.  This is  usefull to  carry on  an old
 * selection process.  you can  turn off your  computer and  the process
 * will continue when you start this program again.
 */
function load() {
    var nursery = { generation: 1, pacmans: [] },
    data,
    i;
    try {
        data = JSON.parse(FS.readFileSync(FILENAME).toString());
        nursery.generation = data.generation;
        nursery.bestScore = data.bestScore;
        nursery.bestGoal = data.goal;
        data.pacmans.forEach(function(data) {
            var type = data.type,
            brain = data.brain;
            nursery.pacmans.push(new PACMANS[type](brain));
        });
    }
    catch (ex) {
        // The file does not exist! Initialite a virgin nursery.
        for (i = 0; i < 100; i++) {
            nursery.pacmans.push(newPacman());
        }
    }
    if (!nursery.bestScore) {
        nursery.bestScore = -999999999;
    }
    if (!nursery.bestGoal) {
        nursery.bestGoal = -9;
    }
    return nursery;
}

/**
 * Every new generation, we save the current nursery. Process selection
 */
function save(nursery) {
    var data = { generation: nursery.generation, pacmans: [], bestScore: nursery.bestScore };
    nursery.pacmans.forEach(function(pacman) {
        data.pacmans.push({type: pacman.type, brain: pacman.brain});
    });
    FS.writeFileSync(FILENAME, JSON.stringify(data));
}

/**
 * This is the evolution process. We call it "challenge". Each Pac-Man plays a game and we keep the resulting score.
 */
function challengeAll(nursery) {
    nursery.pacmans.forEach(function(pacman) {
        var level = new Level(),
        maxTime = 10000;
        pacman.reset();
        while (maxTime > 0) {
            Monsters.moveAllMonsters(level);
            if (level.pacmanIsTook()) return;
            pacman.move(level);
            if (level.pacmanIsTook()) return;
            maxTime--;
        }
    });
}

function nextGeneration(nursery) {
    nursery.pacmans.sort(function (a,b) {
        return b.score - a.score;
    });
    nursery.generation++;
    var highlight = 0;
    var bestPacman = nursery.pacmans[0];
    var bestScore = bestPacman.score;
    if (bestScore > nursery.bestScore) {
        nursery.bestScore = bestScore;
        highlight = 1;
        if (bestPacman.goal - nursery.bestGoal > .49) {
            nursery.bestGoal = bestPacman.goal;
            FS.writeFileSync(
                "generation." + Lib.pad(nursery.generation, 6) + ".json",
                JSON.stringify({type: bestPacman.type, brain: bestPacman.brain})
            );
            highlight = 2;
        }
    }

    var out = Lib.pad(nursery.generation, 6),
    pacman = nursery.pacmans[0];
    out += "  ->  " + pacman.toString();
    for (i = 1; i < 5; i++) {
        pacman = nursery.pacmans[i];
        out += ",  " + pacman.toString();
    }
    if (highlight > 0) {
        out = out.bold;
        if (highlight == 2) out = out.green;
    } else {
        out = out.grey;
    }
    console.log(out);

    var types = {},
    type;
    nursery.pacmans.forEach(function(pacman) {
        type = pacman.type;
        if (!types[type]) {
            types[type] = 1;
        } else {
            types[type]++;
        }
    });
    out = "";
    for (type in types) {
        if (out != "") {
            out += ", ";
        } else {
            out = "        ";
        }
        out += type + ": " + types[type];
    }
    console.log(out);



    // Keep only the 25 best. Make two  children for each and add 25 new
    // fresh random pacmans.
    nursery.pacmans.splice(25, 75);
    var i, parent;
    for (i = 0; i < 25; i++) {
        parent = nursery.pacmans[i];
        nursery.pacmans.push(parent.reproduce());
        nursery.pacmans.push(parent.reproduce());
    }
    for (i = 0; i < 25; i++) {
        nursery.pacmans.push(newPacman());
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
    }
}


start();
