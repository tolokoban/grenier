"use strict";
var TreeCanvas = require("three.canvas");


/**
 * @example
 * var Solide = require("platon.solide");
 * var instance = new Solide();
 * @class Solide
 */
var Solide = function(options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options.faces === 'undefined') options.faces = 4;
    if (typeof options.width === 'undefined') options.width = 128;
    if (typeof options.height === 'undefined') options.height = 128;


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
    light1.position.set(3,0,5);
    light2.position.set(-1,2,4);
    
    var cube = new THREE.Mesh( createGeometry(options.faces), material );

    this.scene.add( cube );
    this.scene.add( light1 );
    this.scene.add( light2 );

    this.cube = cube;

    this.start();
};

// Extension of Widget.
Solide.prototype = Object.create(TreeCanvas.prototype);
Solide.prototype.constructor = Solide;

/**
 * @return void
 */
Solide.prototype.onRender = function(time, delta) {
    this.cube.rotation.x = time / 1000;
    this.cube.rotation.y = time / 1111;
};



Solide.create = function() {
    return new Solide();
};
module.exports = Solide;



function createGeometry(faces) {
    var geometry = new THREE.Geometry();
    if (faces == 4) {
        geometry.vertices.push(
            new THREE.Vector3(0, 1, 0),      // A
            new THREE.Vector3(1, -.5, 0),    // B
            new THREE.Vector3(-.5, -.5, .5), // C
            new THREE.Vector3(-.5, -.5, -.5) // D
        );
        geometry.faces.push(
            new THREE.Face3(0, 2, 1)/*,
            new THREE.Face3(0, 3, 2),
            new THREE.Face3(0, 1, 3),
            new THREE.Face3(1, 2, 3)*/
        );
        return geometry;
    }
    if (faces == 6) {
        return new THREE.BoxGeometry( 1, 1, 1 );
    }
}
