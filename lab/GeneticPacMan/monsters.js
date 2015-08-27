/**
 * [delta row, delta col]
 */
var DIRECTIONS = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];
var PREFERENCES = [
  [1, 3, 2],
  [0, 2, 3],
  [3, 1, 0],
  [2, 0, 1]
];
exports.brain = function(level) {
  var pacmanIdDead = false;
  var pacmanPos = level.pacman;
  var pacmanRC = level.pos2rc(pacmanPos);
  level.monsters.forEach(
    function(monsterPos) {
      var monsterRC = level.pos2rc(monsterPos);
      var row = pacmanPos[0] - monsterPos[0];
      var rowAbs = Math.abs(row);
      var col = pacmanPos[1] - monsterPos[1];
      var colAbs = Math.abs(col);
      if (colAbs == rowAbs) {
        row += Math.random() - .5;
        rowAbs = Math.abs(rowAbs);
      }
      var dir;
      if (rowAbs > colAbs) {
        // Haut ou bas.
        dir = row > 0 ? 2 : 0;
      } else {
        // Droite ou gauche.
        dir = col > 0 ? 1 : 3;
      }
      var preferences = PREFERENCES[dir];

      if (monsterPos == pacman) {
        pacmanIdDead = true;
        return;
      }
    }
  );

};