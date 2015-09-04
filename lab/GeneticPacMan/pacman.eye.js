"use strict";

var Lib = require("./lib"),
Pacman = require("./pacman");


function Eye(size, brain) {
    this._size = size;
    this._halfSize = (size - 1) / 2;
    if (typeof brain === 'undefined') {
        brain = [];
        for (var k = 0; k < size*size; k++) {
            brain.push(Lib.randomArray(2 * 4 * 5));
        }
    }
    this.brain = brain;
    this.type = "Eye" + size;
    this.reset();
}

// Inherit from Pacman.
Eye.prototype = Object.create(Pacman.prototype);
Eye.prototype.constructor = Eye;


/**
 * @return void
 */
Eye.prototype.reproduce = function(variation) {
    if (typeof variation === 'undefined') variation = 0.2;
    var child = this.newInstance();
    child.brain = [];
    var brain = this.brain;    
    brain.forEach(function(neuron) {
        child.brain.push(
            neuron.map(function (v) {
                return Lib.limit(v + Lib.rnd(-variation, variation) * Math.random());
            })
        );
    });
    return child;
};

/**
 * @return void
 */
Eye.prototype.crossOver = function(partner, percent) {
    if (typeof percent === 'undefined') percent = 50;
    var threshold = percent / 100;
    this.brain.forEach(function (neuron, idxNeuron) {
        neuron.forEach(function (itm, idx) {
            if (Math.random() < threshold) {
                // Take a value from the partner.
                neuron[idx] = partner.brain[idxNeuron][idx];
            }
        });
    });
};

/**
 * @return {array} 4 weights for each direction. The greatest the way, the prefered direction.
 */
Eye.prototype.think = function(level) {
    var pacmanPos = level.pacman.pos,
        gridSize = level.grid.length,
        origin = (pacmanPos - this._halfSize - this._halfSize * level.cols + gridSize) % gridSize,
        skipHoriz = level.cols - this._size,
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
        for (row = 0; row < this._size; row++) {
            for (col = 0; col < this._size; col++) {
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


module.exports = Eye;




