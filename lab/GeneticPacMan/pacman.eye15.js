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


function Eye15(brain) {
    if (typeof brain === 'undefined') {
        brain = [];
        for (var k = 0; k < 15*15; k++) {
            brain.push(randomArray(16));
        }
    }
    this.brain = brain;
    this.type = "eye-15";
}

/**
 * @return void
 */
Eye15.prototype.reproduce = function() {
    var child = new Eye15();
    child.brain = this.brain.map(function (v) {
        return limit(v + rnd(-0.2, 0.2) * Math.random());
    });
    return child;
};


/**
 * @return {array} 4 weights for each direction. The greatest the way, the prefered direction.
 */
Eye15.prototype.think = function(level) {
    var pacmanPos = level.pacman.pos,
        gridSize = level.grid.length,
        origin = (pacmanPos - 7 - 7 * level.cols + gridSize) % gridSize,
        skipHoriz = level.cols - 15,
        row,
        col,
        dir,
        prefs = [],
        idxEye,
        idxGrid,
        weight,
        typ;
    for (dir = 0; dir < 4 ; dir++) {
        weight = 0;
        idxEye = 0;
        idxGrid = origin;
        for (row = 0; row < 15; row++) {
            for (col = 0; col < 15; col++) {
                typ = limit(level.grid[idxGrid % gridSize], 0, 3);
                weight += this.brain[idxEye][4 * dir + typ];
                idxEye++;
                idxGrid++;
            }
            idxGrid += skipHoriz;
        }
        prefs.push(weight);
    }
    return prefs;
};


module.exports = Eye15;
