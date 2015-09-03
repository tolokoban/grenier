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

function pad(v, size) {
    v = "" + v;
    while (v.length < size) {
        v = "0" + v;
    }
    return v;
}

exports.pad = pad;
exports.limit = limit;
exports.rnd = rnd;
exports.randomArray = randomArray;
exports.getDirectionVector = getDirectionVector;
