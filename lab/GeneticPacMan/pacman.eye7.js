"use strict";

var Lib = require("./lib"),
Eye = require("./pacman.eye"),
Pacman = require("./pacman");


function Eye7(brain) {
    Eye.call(this, 7, brain);
}

// Inherit from Pacman.
Eye7.prototype = Object.create(Eye.prototype);
Eye7.prototype.constructor = Eye7;

/**
 * @return void
 */
Eye7.prototype.newInstance = function(brain) {
    return new Eye7(brain);
};

module.exports = Eye7;


