var Lib = require("./lib");


function Eye15(brain) {
    if (typeof brain === 'undefined') {
        brain = [];
        for (var k = 0; k < 15*15; k++) {
            brain.push(Lib.randomArray(16));
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
    child.brain = [];
    var brain = this.brain;    
    brain.forEach(function(neuron) {
        child.brain.push(
            neuron.map(function (v) {
                return Lib.limit(v + Lib.rnd(-0.2, 0.2) * Math.random());
            })
        );
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
                typ = Lib.limit(level.grid[idxGrid % gridSize], 0, 3);
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
