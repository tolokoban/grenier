"use strict";

var Lib = require("./lib"),
Pacman = require("./pacman");


function Eye7(brain) {
    if (typeof brain === 'undefined') {
        brain = [];
        for (var k = 0; k < 7*7; k++) {
            brain.push(Lib.randomArray(2 * 4 * 5));
        }
    }
    this.brain = brain;
    this.type = "Eye7";
    this.reset();
}

// Inherit from Pacman.
Eye7.prototype = Object.create(Pacman.prototype);
Eye7.prototype.constructor = Eye7;


/**
 * @return void
 */
Eye7.prototype.reproduce = function() {
    var child = new Eye7();
    child.brain = [];
    var brain = this.brain;    
    brain.forEach(function(neuron) {
        child.brain.push(
            neuron.map(function (v) {
                return Lib.limit(v + Lib.rnd(-0.5, 0.5) * Math.random() * Math.random());
            })
        );
    });
    return child;
};


/**
 * @return {array} 4 weights for each direction. The greatest the way, the prefered direction.
 */
Eye7.prototype.think = function(level) {
    var pacmanPos = level.pacman.pos,
        gridSize = level.grid.length,
        origin = (pacmanPos - 3 - 3 * level.cols + gridSize) % gridSize,
        skipHoriz = level.cols - 7,
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
        for (row = 0; row < 7; row++) {
            for (col = 0; col < 7; col++) {
                typ = Lib.limit(level.grid[idxGrid % gridSize], 0, 4);
                weight += this.brain[idxEye][(level.shield > 0 ? 2 : 1) * 4 * dir + typ];
                idxEye++;
                idxGrid++;
            }
            idxGrid += skipHoriz;
        }
        prefs.push(weight);
    }
    return prefs;
};


module.exports = Eye7;


