var Lib = require("./lib");


function Pacman() {
    this.type = "Not implemented!";
}

/**
 * @return void
 */
Pacman.prototype.reset = function() {
    this.bullets = 0;
    this.score = 0;
    this.time = 0;
    this.goal = 0;
};

/**
 * @return void
 */
Pacman.prototype.toString = function() {
    return this.type + ":" + this.score + "p " + this.goal.toFixed(2) + "% " + this.time + "t";
};

/**
 * @return void
 */
Pacman.prototype.move = function(level) {
    var DIRS = [-level.cols, 1, level.cols, -1],
    prefs = this.think(level),
    dirs = [0,1,2,3],
    cost = 0,
    dir,
    pos,
    i;
    dirs.sort(function (a,b) {
        return prefs[a] - prefs[b];
    });
    for (i = 0; i < 4; i++) {
        dir = dirs[i];
        pos = level.pacman.pos + DIRS[dir];
        if (level.grid[pos] != level.WALL) {
            level.pacman.pos = pos;
            level.pacman.dir = dir;
            break;
        }
        // Hitting a wall costs 2  points, because it means that Pac-Man
        // is a dummy one.
        cost += 2;
    }
    switch (level.grid[pos]) {
        case level.GUM:
            // PacGum eaten! You got a shield for 50 steps!
            level.shield = 50;
            break;
        case level.BULLET:
            level.grid[pos] = level.EMPTY;
            cost -= 50;
            level.bullets--;
            this.bullets++;
            if (level.bullets < 1) {
                cost -= 5000;
            }
            this.goal = 100 * this.bullets / (level.bullets + this.bullets);
            break;
        default:
            cost++;
    }
    if (level.shield > 0) level.shield--;
    this.time++;
    this.score -= cost;
    return cost;
};

// WARNING!   "pacman.eye15"  requires   this  module.   Be  sure   that
// "module.exports = Pacman" comes first.
module.exports = Pacman;
Pacman.Eye15 = require("./pacman.eye15");
Pacman.Eye7 = require("./pacman.eye7");

