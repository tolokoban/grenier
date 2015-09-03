require("../../node_modules/colors/lib/index");

var levels = [
    [
        "########################################",
        "#O.............#...#..................O#",
        "#.############.#.#.##########.########.#",
        "#.............M#.#.....M....#........#.#",
        "#.######.#######.#.########.########.#.#",
        "#......................................#",
        "#####.#################.##############.#",
        "#......................................#",
        "#.#########.###.########.####.########.#",
        "#.#########.###.########.####.########.#",
        "#.......#.#.#..............##.##.......#",
        "#.#####.#.....############.....#.#####.#",
        "#.....#.#.###.......O..P...###.#.#.....#",
        "#####.#.#...#.############.#...#.#.#####",
        "#...#.#.###.#..............#.###.#.#...#",
        "#.#.#.....#.######.##.######.#.....#.#.#",
        "#.#M..#.#.#..................#.#.#..M#.#",
        "#.###.#.#.#####.########.#####.#.#.###.#",
        "#O....###......................###....O#",
        "########################################"
    ]
];




var SYMBOLS = [' ', '.', '#', 'M'.red.bold, 'O'.green.bold, 'P'.yellow.bold, 'x', 'y', 'z'];
levels.EMPTY = 0;
levels.BULLET = 1;
levels.WALL = 2;
levels.MONSTER = 3;
levels.GUM = 4;
levels.PACMAN = 5;


function Level(levelIndex) {
    if (typeof levelIndex !== 'number') levelIndex = 0;
    levelIndex = levelIndex % levels.length;
    var data = levels[levelIndex];
    this.rows = data.length;
    this.cols = data[0].length;
    this.bullets = 0;
    this.pacman = {pos: 0};
    this.monsters = [];
    this.shield = 0;
    this.grid = [];
    this.EMPTY = levels.EMPTY;
    this.BULLET = levels.BULLET;
    this.WALL = levels.WALL;
    this.MONSTER = levels.MONSTER;
    this.GUM = levels.GUM;
    this.PACMAN = levels.PACMAN;

    var position = 0;
    data.forEach(function (row) {
        var c, v;
        for (var i = 0 ; i < row.length ; i++) {
            c = row.charAt(i);
            v = levels.EMPTY;
            if (c == '.') {
                v = levels.BULLET;
                this.bullets++;
            }
            else if (c == '#') v = levels.WALL;
            else if (c == 'O') v = levels.GUM;
            else if (c == 'P') {
                v = levels.EMPTY;
                this.pacman.pos = position;
            }
            else if (c == 'M') {
                v = levels.BULLET;
                this.monsters.push({pos: position, dir: 0});
            }
            this.grid.push(v);
            if (v == levels.BULLET) this.bullets++;
            position++;
        }
    }, this);
}

/**
 * @return void
 */
Level.prototype.toString = function() {
    var out = '';
    this.grid.forEach(function (v, idx) {
        var i, monster, symbol = '?'.red.bold;
        if (v == this.MONSTER) {
            for (i = 0 ; i < this.monsters.length ; i++) {
                monster = this.monsters[i];
                if (monster.pos == idx) {
                    symbol = "^>v<".charAt(monster.dir).white.bold;
                    if (this.shield > 0) {
                        symbol = symbol.bgCyan;
                    } else {
                        symbol = symbol.bgRed;
                    }
                    break;
                }
            }
        }
        else if (v == this.PACMAN) {
            symbol = "^>v<".charAt(this.pacman.dir).white.bold.bgYellow;
        } else {
            symbol = SYMBOLS[v];
        }
        out += symbol;
        if (idx % this.cols == this.cols - 1) {
            out += "\n";
        }
    }, this);
    return out;
};

/**
 * @return void
 */
Level.prototype.pacmanIsTook = function() {
    for (var k = 0; k < this.monsters.length; k++) {
        if (this.monsters[k].pos == this.pacman.pos) {
            return true;
        }
    }
    return false;
};


/**
 * @return void
 */
Level.prototype.hideMonsters = function() {
    if (!Array.isArray(this.backup)) return this;
    this.grid[this.pacman.pos] = 0;
    this.backup.forEach(function (v, idx) {
        if (v == -1) {
            // In the case of monsters  overlapping, the second one will
            // not  replace  what  it  sawed, because  it  would  add  a
            // pseudo-monster.
            return;
        }
        var pos = this.monsters[idx].pos;
        this.grid[pos] = v;
    }, this);
    delete this.backup;
    return this;
};

/**
 * @return void
 */
Level.prototype.showMonsters = function() {
    this.hideMonsters();
    this.backup = [];
    this.monsters.forEach(function (monster) {
        var pos = monster.pos;
        this.backup.push(this.grid[pos] == this.MONSTER ? -1 : this.grid[pos]);
        this.grid[pos] = this.MONSTER;
    }, this);
    this.grid[this.pacman.pos] = this.PACMAN;
    return this;
};

/**
 * @return void
 */
Level.prototype.pos2rc = function(pos) {
    var col = pos % this.cols;
    var row = Math.floor((pos - col) / this.cols);
    return [row, col];
};

/**
 * @return void
 */
Level.prototype.rc2pos = function(row, col) {
    return row * this.cols + col;
};

/**
 * @return void
 */
Level.prototype.getByRC = function(row, col) {
    return this.grid[row * this.cols + col];
};


Level.count = levels.length;
module.exports = Level;
