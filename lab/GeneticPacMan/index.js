var Input = require('readline-sync');
var Levels = require("./levels");
var Monsters = require("./monsters");

var level = Levels[0];
//level.hideMonsters();
console.log(Levels.toString(0));

while(1) {
  var loops = Input.question("Move 'n' steps forward (0 to stop) [1]: ");
  if (loops == '') loops = 1;
  else loops = parseInt(loops);
  if (isNaN(loops) || loops < 1) break;

  for (var k = 0 ; k < loops ; k++) {
    level.showMonsters();
    console.log(Levels.toString(0));
    level.hideMonsters();
    Monsters.moveAllMonsters(level);
  }
}
