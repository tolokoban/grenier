var FS = require("fs");
var Input = require('readline-sync');
var Level = require("./level");
var Monsters = require("./monsters");
var Pacman = require("./pacman");

function pad(v, size) {
    v = "" + v;
    while (v.length < size) {
        v = "0" + v;
    }
    return v;
}

var level = new Level();
//level.hideMonsters();
console.log(level.toString());

var isDead = false;
var generation = Input.question("Generation: ");
var filename = "generation." + pad(generation, 6) + ".json";
var data, brain, type = 'Eye15';
if (!FS.existsSync(filename)) {
    console.error("File not found! " + filename);
    filename = undefined;
} else {
    data = JSON.parse(FS.readFileSync(filename).toString());
    type = data.type;
    brain = data.brain;
    console.log("Pac-Man type: " + type.bold.yellow);
    console.log();
}
var pacman = new (Pacman[type])(brain);
var loops;
var prefs;
var dirs;
var i;
var dir;
var pos;
var cost;

while(!isDead) {
    loops = Input.question(
        pacman.toString() + ")  Move 'n' steps forward (0 to stop) [1]: "
    );
    if (loops == '') loops = 1;
    else loops = parseInt(loops);
    if (isNaN(loops) || loops < 1) break;

    for (var k = 0 ; k < loops ; k++) {
        level.showMonsters();
        console.log(level.toString());
        level.hideMonsters();
        Monsters.moveAllMonsters(level);
        if (level.pacmanIsTook()) {
            isDead = true;
            console.log("A monster has eaten Pac-Man!".red.bold);
            break;
        }
        // Moving Pac-Man.
        cost = pacman.move(level);
        if (level.pacmanIsTook()) {
            isDead = true;
            console.log("Pac-man tried to assault a monster!".red.bold);
            break;
        }
    }
}


level.showMonsters();
console.log(level.toString());
level.hideMonsters();
