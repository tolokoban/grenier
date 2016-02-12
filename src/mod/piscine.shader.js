"use strict";
var FaceMe = require("piscine.bouncing-squares.face-me");

/**
 * @example
 * var Shader = require("piscine.shader");
 * var instance = new Shader(opt);
 * @class Shader
 */
var Shader = function(opt) {
    FaceMe.call( this, opt );
    this.addClass("piscine-shader");
};

// Extension of Widget.
Shader.prototype = Object.create(FaceMe.prototype);
Shader.prototype.constructor = Shader;

/**
 * @return void
 */
Shader.prototype.createMat = function() {
    return new THREE.ShaderMaterial({
/*
        uniforms: {
            time: { type: "f", value: 1.0 },
            resolution: { type: "v2", value: new THREE.Vector2() }
        },
        attributes: {
            vertexOpacity: { type: 'f', value: [] }
        },
*/
        vertexShader: document.getElementById( 'vertex1' ).textContent,
        fragmentShader: document.getElementById( 'fragment1' ).textContent,
        transparent: true

    });
};



Shader.create = function(opt) {
    return new Shader(opt);
};
module.exports = Shader;
