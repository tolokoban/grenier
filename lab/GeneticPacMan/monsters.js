var Lib = require("./lib");
var Levels = require("./levels");

// Theses  weights  are  in  decreasing  order  because  the  first  one
// represents  the direction  which  takes the  monster  the nearest  to
// pacman.
var WEIGHTS1 = [6, 4, 2, 0];
// These weights represent  the current direction in  clockwise way. For
// example, [3,  2, 0,  2] means  that you have  a 3  bonus if  you keep
// continue in your previous direction, a 2 bonus if you turn right, a 0
// if you go back and a 1 if you turn left.
var WEIGHTS2 = [4, 5, 0, 5];


function moveMonster(monster, pacmanRow, pacmanCol, level, W1, W2) {
  var monsterPos = monster.pos;
  var monsterRC = level.pos2rc(monsterPos);
  var monsterRow = monsterRC[0];
  var monsterCol = monsterRC[1];
  var prefs = Lib.getPreferedDirections(
    monsterRow, monsterCol, pacmanRow, pacmanCol,
    monster.dir, W1, W2);
  var i, neighbour, vector, targetRow, targetCol;
  for (i = 0 ; i < prefs.length ; i++) {
    vector = Lib.getDirectionVector(prefs[i]);
    targetRow = monsterRow + vector[0];
    targetCol = monsterCol + vector[1];
    neighbour = level.getByRC(targetRow, targetCol);
    if (neighbour != Levels.WALL && neighbour != Levels.MONSTER) {
      monster.dir = prefs[i];
      monster.pos = level.rc2pos(targetRow, targetCol);
      break;
    }
  }
}

function moveAllMonsters(level, W1, W2) {
  if (typeof W1 === 'undefined') W1 = WEIGHTS1;
  if (typeof W2 === 'undefined') W2 = WEIGHTS2;

  var pacmanIdDead = false;
  var pacmanPos = level.pacman;
  var pacmanRC = level.pos2rc(pacmanPos);
  var pacmanRow = pacmanRC[0];
  var pacmanCol = pacmanRC[1];
  level.monsters.forEach(function(monster) {
    moveMonster(monster, pacmanRow, pacmanCol, level, W1, W2);
  });
};


function getMonsterScore(level, monsterPos, W1, W2) {
  var pacmanPos = level.pacman;
  var pacmanRC = level.pos2rc(pacmanPos);
  var pacmanRow = pacmanRC[0];
  var pacmanCol = pacmanRC[1];
  var monster = {pos: monsterPos, dir: 0};
  var score = 0;
  while (score < 1000) {
    if (monsterPos == pacmanPos) return score;

    score++;
  }
  return score;
}

exports.moveAllMonsters = moveAllMonsters;
