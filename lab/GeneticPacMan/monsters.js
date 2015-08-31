var Levels = require("./levels");

/**
 * [delta row, delta col]
 */
var DIRECTIONS = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];
var WEIGHTS1 = [5, 4, 3, 0];
var WEIGHTS2 = [3, 2, 2, 0];

exports.brain = function(level) {
  var pacmanIdDead = false;
  var pacmanPos = level.pacman;
  var pacmanRC = level.pos2rc(pacmanPos);
  var pacmanRow = pacmanRC[0];
  var pacmanCol = pacmanRC[1];
  level.monsters.forEach(
    function(monster) {
      var monsterPos = monster.pos;
      var monsterRC = level.pos2rc(monsterPos);
      var monsterRow = monsterRC[0];
      var monsterCol = monsterRC[1];
      var row = pacmanRow - monsterRow;
      var rowAbs = Math.abs(row);
      var col = pacmanCol - monsterCol;
      var colAbs = Math.abs(col);
      if (colAbs == rowAbs) {
        row += Math.random() - .5;
        rowAbs = Math.abs(rowAbs);
      }
      var values = [0, 0, 0, 0];
      if (rowAbs > colAbs) {
        // Up or down.
        if (row > 0) {
          // Down
          values = [WEIGHTS1[3], WEIGHTS1[col > 0 ? 1 : 2], WEIGHTS1[0], WEIGHTS1[col > 0 ? 2 : 1]];
        } else {
          // Up
          values = [WEIGHTS1[0], WEIGHTS1[col > 0 ? 1 : 2], WEIGHTS1[3], WEIGHTS1[col > 0 ? 2 : 1]];
        }
      } else {
        // Right or left.
        if (col > 0) {
          // Right
          values = [WEIGHTS1[row > 0 ? 2 : 1], WEIGHTS1[0], WEIGHTS1[row > 0 ? 1 : 2], WEIGHTS1[3]];
        } else {
          // Left
          values = [WEIGHTS1[row > 0 ? 2 : 1], WEIGHTS1[3], WEIGHTS1[row > 0 ? 1 : 2], WEIGHTS1[0]];
        }
      }
      var indexes = [0, 1, 2, 3];
      indexes.sort(function(a, b) {
        return values[b] - values[a];
      });
      var i, neighbour, vector, targetRow, targetCol;
      for (i = 0 ; i < indexes.length ; i++) {
        vector = DIRECTIONS[indexes[i]];
        targetRow = monsterRow + vector[0];
        targetCol = monsterCol + vector[1];
        neighbour = level.getByRC(targetRow, targetCol);
        if (neighbour != Levels.WALL && neighbour != Levels.MONSTER) {
          monster.dir = i;
          monster.pos = level.rc2pos(targetRow, targetCol);
          break;
        }
      }
    }
  );
};
