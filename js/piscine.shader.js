/** @module piscine.shader */require( 'piscine.shader', function(require, module, exports) { var _intl_={"en":{},"fr":{}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
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
        vertexShader: document.getElementById( 'vertex1' ).textContent,
        fragmentShader: document.getElementById( 'fragment1' ).textContent
    });
};



Shader.create = function(opt) {
    return new Shader(opt);
};
module.exports = Shader;


  
module.exports._ = _;
/**
 * @module piscine.shader
 * @see module:$
 * @see module:piscine.bouncing-squares.face-me

 */
});