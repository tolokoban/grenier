var Levels = require("./levels");
var Monsters = require("./monsters");

var level = Levels[0];
level.hideMonsters();

for (var loops = 0 ; loops < 40 ; loops++) {
  level.showMonsters();
  console.log(Levels.toString(0));
  console.log();
  level.hideMonsters();
  Monsters.brain(level);
}
