var FS = require("fs");
var Input = require('readline-sync');
var Level = require("./level");
var Monsters = require("./monsters");
var Pacman = require("./pacman");

var level = new Level();
//level.hideMonsters();
console.log(level.toString());

var isDead = false;
var generation = Input.question("Generation: ");
var filename = "generation." + generation + ".json";
if (!FS.existsSync(filename)) {
    console.error("File not found! " + filename);
    filename = undefined;
}
var pacman = new Pacman.Eye15(
    JSON.parse(FS.readFileSync(filename).toString())
);
var loops;
var prefs;
var dirs;
var i;
var dir;
var pos;
var cost;

level.pacman.score = 0;

while(!isDead) {
    loops = Input.question("Move 'n' steps forward (0 to stop) [1]: ");
    if (loops == '') loops = 1;
    else loops = parseInt(loops);
    if (isNaN(loops) || loops < 1) break;

    for (var k = 0 ; k < loops ; k++) {
        level.showMonsters();
        console.log(level.toString());
        level.hideMonsters();
        Monsters.moveAllMonsters(level);
        level.monsters.forEach(function(monster) {
            if (monster.pos == level.pacman.pos) {
                isDead = true;
            }
        });
        // Moving Pac-Man.
        cost = Pacman.move(pacman, level);
        level.monsters.forEach(function(monster) {
            if (monster.pos == level.pacman.pos) {
                isDead = true;
            }
        });
    }
}

level.showMonsters();
console.log(level.toString());
