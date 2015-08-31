require("../../node_modules/colors/lib/index");

var SYMBOLS = [' ', '.', '#', 'M'.red.bold, 'P'.yellow.bold];
var levels = [];
levels.EMPTY = 0;
levels.BULLET = 1;
levels.WALL = 2;
levels.MONSTER = 3;
levels.PACMAN = 4;


var toString = function(level) {
  return function() {
    var out = '';
    level.grid.forEach(
      function(v, idx) {
        out += SYMBOLS[v];
        if (idx % level.cols == level.cols - 1) {
          out += "\n";
        }
      }
    );
    return out;
  };
};


var hideMonsters = function(level) {
  return function() {
    if (!Array.isArray(level.backup)) return level;
    level.grid[level.pacman] = 0;
    level.backup.forEach(
      function(v, idx) {
        var pos = level.monsters[idx].pos;
        level.grid[pos] = v;
      }
    );
    delete level.backup;
    return level;
  };
};

var showMonsters = function(level) {
  return function() {
    level.hideMonsters();
    level.backup = [];
    level.monsters.forEach(
      function(monster) {
        var pos = monster.pos;
        level.backup.push(level.grid[pos]);
        level.grid[pos] = 3;
      }
    );
    level.grid[level.pacman] = 4;
    return level;
  };
};

var pos2rc = function(level) {
  return function(pos) {
    var col = pos % level.cols;
    var row = Math.floor((pos - col) / level.cols);
    return [row, col];
  };
};

var rc2pos = function(level) {
  return function(row, col) {
    return row * level.cols + col;
  };
};

var getByRC = function(level) {
  return function(row, col) {
    return level.grid[row * level.cols + col];
  };
};


function parse(rawLevels) {
  rawLevels.forEach(
    function(level) {
      var data = {
        rows: level.length,
        cols: level[0].length,
        bullets: 0,
        pacman: 0,
        monsters: [],
        grid: []
      };
      data.toString = toString(data);
      data.showMonsters = showMonsters(data);
      data.hideMonsters = hideMonsters(data);
      data.rc2pos = rc2pos(data);
      data.pos2rc = pos2rc(data);
      data.getByRC = getByRC(data);
      levels.push(data);
      var position = 0;
      level.forEach(
        function(row) {
          var c, v;
          for (var i = 0 ; i < row.length ; i++) {
            c = row.charAt(i);
            v = levels.EMPTY;
            if (c == '.') v = levels.BULLET;
            else if (c == '#') v = levels.WALL;
            else if (c == 'P') {
              v = levels.EMPTY;
              data.pacman = position;
            }
            else if (c == 'M') {
              v = levels.MONSTER;
              data.monsters.push({pos: position, dir: 0});
            }
            data.grid.push(v);
            if (v == levels.BULLET) data.bullets++;
            position++;
          }
        }
      );
    }
  );
}


parse([
  [
    "########################################",
    "#M.............#...#..................M#",
    "#.############.#.#.##########.########.#",
    "#..............#.#..........#........#.#",
    "#.######.#######.#.########.########.#.#",
    "#......................................#",
    "#####.#################.##############.#",
    "#......................................#",
    "#.#########.###.########.####.########.#",
    "#.#########.###.########.####.########.#",
    "#.......#.#.#..............##.##.......#",
    "#.#####.#.....############.....#.#####.#",
    "#.....#.#.###..........P...###.#.#.....#",
    "#####.#.#...#.############.#...#.#.#####",
    "#...#.#.###.#..............#.###.#.#...#",
    "#.#.#.....#.######.##.######.#.....#.#.#",
    "#.#...#.#.#..................#.#.#...#.#",
    "#.###.#.#.#####.########.#####.#.#.###.#",
    "#M....###......................###....M#",
    "########################################"
  ]
]);

module.exports = levels;
