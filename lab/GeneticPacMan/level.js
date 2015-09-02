require("../../node_modules/colors/lib/index");

var levels = [
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
];




var SYMBOLS = [' ', '.', '#', 'M'.red.bold, 'P'.yellow.bold];
levels.EMPTY = 0;
levels.BULLET = 1;
levels.WALL = 2;
levels.MONSTER = 3;
levels.PACMAN = 4;


function Level(levelIndex) {
    if (typeof levelIndex !== 'number') levelIndex = 0;
    levelIndex = levelIndex % levels.length;
    var data = levels[levelIndex];
    this.rows = data.length;
    this.cols = data[0].length;
    this.bullets = 0;
    this.pacman = {pos: 0};
    this.monsters = [];
    this.grid = [];
    this.EMPTY = levels.EMPTY;
    this.BULLET = levels.BULLET;
    this.WALL = levels.WALL;
    this.MONSTER = levels.MONSTER;
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
            else if (c == 'P') {
                v = levels.EMPTY;
                this.pacman.pos = position;
            }
            else if (c == 'M') {
                v = levels.EMPTY;
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
        var i, monster, symbol = '?'.cyan;
        if (v == this.MONSTER) {
            for (i = 0 ; i < this.monsters.length ; i++) {
                monster = this.monsters[i];
                if (monster.pos == idx) {
                    symbol = "^>v<".charAt(monster.dir).white.bold.bgRed;
                    break;
                }
            }
            out += symbol;
        } else {
            out += SYMBOLS[v];
        }
        if (idx % this.cols == this.cols - 1) {
            out += "\n";
        }
    }, this);
    return out;
};

/**
 * @return void
 */
Level.prototype.hideMonsters = function() {
    if (!Array.isArray(this.backup)) return this;
    this.grid[this.pacman.pos] = 0;
    this.backup.forEach(function (v, idx) {
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
        this.backup.push(this.grid[pos]);
        this.grid[pos] = 3;
    }, this);
    this.grid[this.pacman.pos] = 4;
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
