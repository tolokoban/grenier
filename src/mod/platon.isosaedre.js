"use strict";
var ThreeCanvas = require("three.canvas");


/**
 * @example
 * var Isosaedre = require("platon.isosaedre");
 * var instance = new Isosaedre(opt);
 * @class Isosaedre
 */
var Isosaedre = function(opt) {
    ThreeCanvas.call(this, opt);

    var grp = new THREE.Group();

    this.scene.add( grp );
    this._grp = grp;


    var y = .5;
    


    this.start();
};

// Extension of Widget.
Isosaedre.prototype = Object.create(ThreeCanvas.prototype);
Isosaedre.prototype.constructor = Isosaedre;




Isosaedre.create = function(opt) {
    return new Isosaedre(opt);
};
module.exports = Isosaedre;
