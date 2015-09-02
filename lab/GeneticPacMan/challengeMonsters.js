/*jslint plusplus: true */
"use strict";

var FS = require("fs"),
    Level = require("./level"),
    Monsters = require("./monsters");


function limit(v) {
    return Math.min(9999, Math.max(0, Math.floor(0.5 + v)));
}

function rnd() {
    return Math.floor(Math.random() * 10000);
}

function newMonster() {
    return {
        W1: [limit(rnd()), limit(rnd()), limit(rnd()), limit(rnd())],
        W2: [limit(rnd()), limit(rnd()), limit(rnd()), limit(rnd())]
    };
}

function cloneMonster(parent) {
    var W1 = parent.W1.slice(),
        W2 = parent.W2.slice();
    W1 = W1.map(function (v) {
        return limit(v + (Math.random() * 100 - 50));
    });
    W2 = W2.map(function (v) {
        return limit(v + (Math.random() * 100 - 50));
    });
    return {W1: W1, W2: W2};
}

function load() {
    var nursery = {
        generation: 1,
        monsters: []
    },
        i;
    for (i = 0; i < 100; i++) {
        nursery.monsters.push(newMonster());
    }
    return nursery;
}

function save(nursery) {
    FS.writeFileSync("nursery.monsters.json", JSON.stringify(nursery));
}

/**
 * Get random starting positions for monsters.
 */
function getStartingPositions(level, count) {
    var positions = [],
        pos,
        bullets = [];
    level.grid.forEach(function(v, pos) {
        if (v == level.BULLET || v == level.EMPTY) {
            bullets.push(pos);
        }
    });

    while (count > 0) {
        positions.push(bullets[Math.floor(Math.random() * bullets.length)]);
        count--;
    }
    return positions;
}

function challenge(monster, level, pos, dir) {
    level.monsters = [{pos: pos, dir: dir}];
    var score,
        max = 1000;
    for (score = 0; score < max; score++) {
        Monsters.moveAllMonsters(level, monster.W1, monster.W2);
        if (level.monsters[0].pos == level.pacman.pos) {
            // Pac-Man has been eaten.
            return score;
        }
    }
    return score;
}

function challengeAll(nursery, level, positions) {
    var i,
        monsters = nursery.monsters;
    monsters.forEach(function (monster, index) {
        monster.score = 0;
        positions.forEach(function (pos, dir) {
            monster.score += challenge(monster, level, pos, dir & 3);
        });
    });
    monsters.sort(function (m1, m2) {
      return m1.score - m2.score;
    });
}

function nextGeneration(nursery) {
    nursery.generation++;
    nursery.monsters.splice(25, 75);
    var i, parent;
    for (i = 0; i < 25; i++) {
        parent = nursery.monsters[i];
        nursery.monsters.push(cloneMonster(parent));
        nursery.monsters.push(cloneMonster(parent));
        nursery.monsters.push(newMonster());
    }
}

function start(level) {
    var nursery = load(),
        positions = getStartingPositions(level, 10),
        bestMonster,
        i;
    while (true) {
        challengeAll(nursery, level, positions);
        console.log("Generation #" + nursery.generation);
        for (i = 0; i < 5; i++) {
            bestMonster = nursery.monsters[i];
            console.log("    " + bestMonster.score + "  " 
                + JSON.stringify(bestMonster.W1) + ", " + JSON.stringify(bestMonster.W2));
        }
        nextGeneration(nursery);
        save(nursery);
    }
};


start(new Level());
