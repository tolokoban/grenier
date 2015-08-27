var Levels = require("./levels");

var level = Levels[0];

console.log(JSON.stringify(level));
console.log();
console.log(level.toString());
console.log();
level.showMonsters();
console.log(Levels.toString(0));
console.log();
level.hideMonsters();
console.log(Levels.toString(0));
console.log();
