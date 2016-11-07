/** @module three.rotator */require( 'three.rotator', function(require, module, exports) { var _intl_={"en":{},"fr":{}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
    /**
 * @example
 * var Rotator = require("three.rotator");
 * var instance = new Rotator();
 * @class Rotator
 */
var Rotator = function(obj, sx, sy, sz) {
    if (typeof sx === 'undefined') sx = 2500 + Math.random() * 500;
    if (typeof sy === 'undefined') sy = 2500 + Math.random() * 500;
    if (typeof sz === 'undefined') sz = 2500 + Math.random() * 500;

    this.obj = obj;
    this.sx = sx;
    this.sy = sy;
    this.sz = sz;
};

/**
 * @return void
 */
Rotator.prototype.rotate = function(time, obj) {
    if (typeof obj === 'undefined') obj = this.obj;

    obj.rotation.x = time / this.sx;
    obj.rotation.y = time / this.sy;
    obj.rotation.y = time / this.sz;   
};

Rotator.create = function() {
    return new Rotator();
};
module.exports = Rotator;


  
module.exports._ = _;
/**
 * @module three.rotator
 * @see module:$

 */
});