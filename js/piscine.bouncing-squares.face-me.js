/** @module piscine.bouncing-squares.face-me */require( 'piscine.bouncing-squares.face-me', function(require, module, exports) { var _intl_={"en":{},"fr":{}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
    "use strict";
var BouncingSquares = require("piscine.bouncing-squares");

/**
 * @example
 * var FaceMe = require("piscine.bouncing-squares.face-me");
 * var instance = new FaceMe(opt);
 * @class FaceMe
 */
var FaceMe = function(opt) {
    BouncingSquares.call(this, opt);
};

// Extension of Widget.
FaceMe.prototype = Object.create(BouncingSquares.prototype);
FaceMe.prototype.constructor = FaceMe;

/**
 * @return void
 */
FaceMe.prototype.onRender = function( time, delta ) {
    BouncingSquares.prototype.onRender.call( this, time, delta );

    this.balls.forEach(function (ball) {
        ball.mesh.lookAt( this.camera.position );
    }, this);
};


FaceMe.create = function(opt) {
    return new FaceMe(opt);
};
module.exports = FaceMe;


  
module.exports._ = _;
/**
 * @module piscine.bouncing-squares.face-me
 * @see module:$
 * @see module:piscine.bouncing-squares

 */
});