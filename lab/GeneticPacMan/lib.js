/**
 * [[delta row, delta col], ...]
 */
var DIRECTIONS = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];


function manhattant(srcRow, srcCol, dstRow, dstCol) {
    return Math.abs(srcRow - dstRow) + Math.abs(srcCol - dstCol);
}
/*
 function findShortestWay(srcRow, srcCol, dstRow, dstCol, maxLength) {
 var cache = {},
 fringe = [srcRow, srcCol, 0, manhattant(srcRow, srcCol, dstRow, dstCol) + maxLength],
 state,
 key,
 row,
 col,
 bestDist = 1000000000,
 h;
 while (fringe.length > 0) {
 state = fringe.pop();
 key = "" + srcRow + "," + srcCol;
 if (!cache[key]) {
 row = state[0];
 col = state[1];
 h = state[2] +
 if (srcRow == dstRow && srcCol == dstCol) {
 // Goal!

 }
 cache[key] = 1;

 }
 }
 return maxLength + 1;
 }
 */

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
            if (col > 0) return [1,1,1,1];
            return [3,3,3,3];
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
            if (row > 0) return [2,2,2,2];
            return [0,0,0,0];
        }
    }
    var absRow = Math.abs(row);
    var absCol = Math.abs(col);
    if (absRow == absCol) absRow += Math.random() - .5;
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


function getDirectionVector(dir) {
    return DIRECTIONS[dir & 3];
};

function limit(v, min, max) {
    if (typeof min === 'undefined') min = -1;
    if (typeof max === 'undefined') max = 1;
    if (v < min) { return min; }
    if (v > max) { return max; }
    return v;
}

/**
 * @return {double} Random value between -1 and +1.
 */
function rnd(min, max) {
    if (typeof min === 'undefined') min = -1;
    if (typeof max === 'undefined') max = 1;
    return min + (Math.random() * (max - min));
}

/**
 * @return {array} Array of random values between -1 and +1.
 */
function randomArray(size) {
    var arr = [];
    while (size > 0) {
        arr.push(rnd());
        size--;
    }
    return arr;
}


exports.limit = limit;
exports.rnd = rnd;
exports.randomArray = randomArray;
exports.getPreferedDirections = getPreferedDirections;
exports.getDirectionVector = getDirectionVector;
