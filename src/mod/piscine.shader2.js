"use strict";
var BouncingSquares = require("piscine.bouncing-squares");

/**
 * @example
 * var Shader = require("piscine.shader");
 * var instance = new Shader(opt);
 * @class Shader
 */
var Shader = function(opt) {
    if (typeof opt !== 'object') opt = {};
    if (typeof opt === 'undefined') opt = {};
    if (typeof opt.fragment === 'undefined') opt.fragment = 2;
    if (typeof opt.vertex === 'undefined') opt.vertex = 2;
    this.options = opt;
    BouncingSquares.call( this, opt );
    this.addClass("piscine-shader");
};

// Extension of Widget.
Shader.prototype = Object.create(BouncingSquares.prototype);
Shader.prototype.constructor = Shader;

/**
 * @return void
 */
Shader.prototype.createMat = function() {
    var col = this.randomColor();
    var vec = new THREE.Vector3( col.r, col.g, col.b );
    var mat = new THREE.ShaderMaterial({
        uniforms: {            
            uni_Color: { type: "v3", value: vec }
        },
        vertexShader: document.getElementById( 'vertex' + this.options.vertex ).textContent,
        fragmentShader: document.getElementById( 'fragment' + this.options.fragment ).textContent,
        transparent: true

    });
    return mat;
};



Shader.create = function(opt) {
    return new Shader(opt);
};
module.exports = Shader;
