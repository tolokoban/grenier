"use strict";
var TreeCanvas = require("three.canvas");


/**
 * @example
 * var Solide = require("platon.solide");
 * var instance = new Solide();
 * @class Solide
 */
var Solide = function() {
    TreeCanvas.call(this, {width: 128, height: 128});
    this.addClass("platon-solide");

    var material = new THREE.MeshPhongMaterial({
        color: 0xff0000,
        specular: 0x333333,
        shininess: 15,
        map: null,
        specularMap: null,
        normalMap: null
    });

    var light1 = new THREE.DirectionalLight( 0xdddddd, 0.8 );
    var light2 = new THREE.DirectionalLight( 0x9999ff, 0.5 );
    
    var cube = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ), material );

    scene.add( cube );
    scene.add( light1 );
    scene.add( light2 );

    this.start();
};

// Extension of Widget.
Solide.prototype = Object.create(TreeCanvas.prototype);
Solide.prototype.constructor = Solide;

/**
 * @return void
 */
Solide.prototype.onRender = function(time, delta) {

};



Solide.create = function() {
    return new Solide();
};
module.exports = Solide;
