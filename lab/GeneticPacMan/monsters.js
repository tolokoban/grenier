var Lib = require("./lib");

// Theses  weights  are  in  decreasing  order  because  the  first  one
// represents  the direction  which  takes the  monster  the nearest  to
// pacman.
var WEIGHTS1 = [95,81,60,36];
// These weights represent  the current direction in  clockwise way. For
// example, [3,  2, 0,  2] means  that you have  a 3  bonus if  you keep
// continue in your previous direction, a 2 bonus if you turn right, a 0
// if you go back and a 1 if you turn left.
var WEIGHTS2 = [69,67,0,88];


/**
 * The top-left corner has col=0 and row=0. The directions are clockwise :
 *    0
 *  3-+-1
 *    2
 *
 */
function getPreferedDirections(level, srcRow, srcCol, dstRow, dstCol, currentDir, W1, W2) {
    var k, wall;
    var row = dstRow - srcRow;
    var col = dstCol - srcCol;
    if (row == 0) {
        wall = false;
        for (k = Math.min(srcCol, dstCol) + 1; k < Math.max(srcCol, dstCol); k++) {
            if (level.getByRC(srcRow, k) == level.WALL) {
                wall = true;
                break;
            }
        }
        if (!wall) {
            if (col > 0) return [1,2,0,3];
            return [3,0,2,1];
        }
    }
    if (col == 0) {
        wall = false;
        for (k = Math.min(srcRow, dstRow) + 1; k < Math.max(srcRow, dstRow); k++) {
            if (level.getByRC(k, srcCol) == level.WALL) {
                wall = true;
                break;
            }
        }
        if (!wall) {
            if (row > 0) return [2,3,1,0];
            return [0,1,3,2];
        }
    }
    var absRow = Math.abs(row);
    var absCol = Math.abs(col);
    if (absRow == absCol) absRow += 0.1;
    var weights;
    if (absCol > absRow) {
        if (col > 0) {
            if (row > 0) {
                //  \ 2 /
                //   \ /
                //  3 O 0
                //   / \ T
                //  / 1 \
                weights = [W1[2], W1[0], W1[1], W1[3]];
            } else {
                //  \ 1 /
                //   \ / T
                //  3 O 0
                //   / \
                //  / 2 \
                weights = [W1[1], W1[0], W1[2], W1[3]];
            }
        } else {
            if (row > 0) {
                //  \ 2 /
                //   \ /
                //  0 O 3
                // T / \
                //  / 1 \
                weights = [W1[2], W1[3], W1[1], W1[0]];
            } else {
                //  \ 1 /
                // T \ /
                //  0 O 3
                //   / \
                //  / 2 \
                weights = [W1[1], W1[3], W1[2], W1[0]];
            }
        }
    } else {
        if (col > 0) {
            if (row > 0) {
                //  \ 3 /
                //   \ /
                //  2 O 1
                //   / \
                //  / 0T\
                weights = [W1[3], W1[1], W1[0], W1[2]];
            } else {
                //  \ 0T/
                //   \ /
                //  2 O 1
                //   / \
                //  / 3 \
                weights = [W1[0], W1[1], W1[3], W1[2]];
            }
        } else {
            if (row > 0) {
                //  \ 3 /
                //   \ /
                //  1 O 2
                //   / \
                //  /T0 \
                weights = [W1[3], W1[2], W1[0], W1[1]];
            } else {
                //  \T0 /
                //   \ /
                //  1 O 2
                //   / \
                //  / 3 \
                weights = [W1[0], W1[2], W1[3], W1[1]];
            }
        }
    }
    // Add weights depending on current direction.
    W2.forEach(function(w, dir) {
        weights[(dir + currentDir) % 4] += w;
    });
    // Sorting directions by preference.
    var prefs = [0, 1, 2, 3];
    prefs.sort(function(a, b) {
        return weights[b] - weights[a];
    });
    return prefs;
}

function moveMonster(monster, pacmanRow, pacmanCol, level, W1, W2) {
    var monsterPos = monster.pos;
    var monsterRC = level.pos2rc(monsterPos);
    var monsterRow = monsterRC[0];
    var monsterCol = monsterRC[1];
    var prefs = getPreferedDirections(
        level,
        monsterRow, monsterCol, pacmanRow, pacmanCol,
        monster.dir, W1, W2);
    if (level.shield > 0) {
        // PacGum effect: reverse preferences.
        prefs = [prefs[3], prefs[2], prefs[1], prefs[0]];
    }
    var i, neighbour, vector, targetRow, targetCol;
    for (i = 0 ; i < prefs.length ; i++) {
        vector = Lib.getDirectionVector(prefs[i]);
        targetRow = monsterRow + vector[0];
        targetCol = monsterCol + vector[1];
        neighbour = level.getByRC(targetRow, targetCol);
        if (neighbour != level.WALL && neighbour != level.MONSTER) {
            monster.dir = prefs[i];
            monster.pos = level.rc2pos(targetRow, targetCol);
            break;
        }
    }
}

function moveAllMonsters(level, W1, W2) {
    if (typeof W1 === 'undefined') W1 = WEIGHTS1;
    if (typeof W2 === 'undefined') W2 = WEIGHTS2;

    var pacmanPos = level.pacman.pos;
    var pacmanRC = level.pos2rc(pacmanPos);
    var pacmanRow = pacmanRC[0];
    var pacmanCol = pacmanRC[1];
    level.monsters.forEach(function(monster) {
        moveMonster(monster, pacmanRow, pacmanCol, level, W1, W2);
    });
};


exports.moveAllMonsters = moveAllMonsters;
