var SYMBOLS = " .#MP";

var toString = function(level) {
  return function() {
    var out = '';
    level.grid.forEach(
      function(v, idx) {
        out += SYMBOLS.charAt(v);
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
    var row = Math.floor((pos - col) / levels.cols);
    return [row, col];
  };
};

var rc2pos = function(level) {
  return function(row, col) {
    return row * level.cols + col;
  };
};


function parse(levels) {
  var result = [];
  levels.forEach(
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
      data.rc2col = rc2col(data);
      data.col2rc = col2rc(data);
      result.push(data);
      var position = 0;
      level.forEach(
        function(row) {
          var c, v;
          for (var i = 0 ; i < row.length ; i++) {
            c = row.charAt(i);
            v = 0;
            if (c == '.') v = 1;
            else if (c == '#') v = 2;
            else if (c == 'P') {
              v = 0;
              data.pacman = position;
            }
            else if (c == 'M') {
              v = 1;
              data.monsters.push({pos: position, dir: 0});
            }
            data.grid.push(v);
            if (v == 1) data.bullets++;
            position++;
          }
        }
      );

    }
  );

  return result;
}


var levels = parse([
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

levels.EMPTY = 0;
levels.BULLET = 1;
levels.WALL = 2;
levels.MONSTER = 3;
levels.PACMAN = 4;

module.exports = levels;
