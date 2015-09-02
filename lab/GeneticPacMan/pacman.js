/**
 *
 */

var PacmanEye15 = require("./pacman.eye15");


function move(pacman, level) {
    var DIRS = [-level.cols, 1, level.cols, -1],
        prefs = pacman.think(level),
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
            break;
        }
        cost += 5;
    }
    if (level.grid[pos] == level.MONSTER) {
        cost += 1000;
    }
    else if (level.grid[pos] == level.BULLET) {
        level.grid[pos] = level.EMPTY;
        cost -= 50;
        level.bullets--;
        if (level.bullets < 1) {
            cost -= 5000;
        }
    }
    return cost;
}

exports.Eye15 = PacmanEye15;
exports.move = move;
