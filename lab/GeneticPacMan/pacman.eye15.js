"use strict";

var Lib = require("./lib"),
Eye = require("./pacman.eye"),
Pacman = require("./pacman");


function Eye15(brain) {
    Eye.call(this, 15, brain);
}

// Inherit from Pacman.
Eye15.prototype = Object.create(Eye.prototype);
Eye15.prototype.constructor = Eye15;

/**
 * @return void
 */
Eye15.prototype.newInstance = function(brain) {
    return new Eye15(brain);
};

module.exports = Eye15;


