"use strict";
var Three = require("three.canvas");


/**
 * @example
 * var LowresSphere = require("piscine.lowres-sphere");
 * var instance = new LowresSphere();
 * @class LowresSphere
 */
var LowresSphere = function(opt) {
    Three.call(this, opt);
    this.addClass("piscine-lowres-sphere");

    var geo = new THREE.IcosahedronGeometry( 1, 1 );
    var mat1 = new THREE.MeshPhongMaterial({
        color: 0xff0000,
	emissive: 0x072534,
        specular: 0x333333,
        shininess: 3.14,
        metal: true,
        shading: THREE.SmoothShading
    });
    var mat2 = new THREE.MeshPhongMaterial({
        color: 0x0000ff,
	emissive: 0x072534,
        specular: 0x333333,
        shininess: 3.14,
        metal: true,
        shading: THREE.FlatShading
    });

    var sphere1 = new THREE.Mesh( geo, mat1 );
    sphere1.rotation.set( .1, .27, 0 );
    sphere1.position.x = -.7;
    var sphere2 = new THREE.Mesh( geo, mat2 );
    sphere2.rotation.set( .1, .27, 0 );
    sphere2.position.x = .7;
    sphere2.position.z = -1;
    
    this.scene.add( sphere1, sphere2 );

    this.camera.position.z = 3.5;
    this.camera.position.x = -.3;

    var light = new THREE.HemisphereLight( 0xcceeff, 0x990000, 3.6 ); // soft white light
    var light1 = new THREE.DirectionalLight( 0x997777, 5 );
    var light2 = new THREE.DirectionalLight( 0x777799, 2 );
    light1.position.set(43,13,5);
    light2.position.set(-20,5,1);

    this.scene.add( light1 );
    this.scene.add( light2 );
    this.scene.add( light );

    this.render();
};

// Extension of Widget.
LowresSphere.prototype = Object.create(Three.prototype);
LowresSphere.prototype.constructor = LowresSphere;




LowresSphere.create = function() {
    return new LowresSphere();
};
module.exports = LowresSphere;
