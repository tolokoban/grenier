"use strict";
var Widget = require("wdg");

var registeredAnimations = [];

function animate(time) {
    if (registeredAnimations.length > 0) {
        registeredAnimations.forEach(function (item) {
            item.render( time );
        });
        window.requestAnimationFrame( animate );
    }
}

function Register(anim) {
    if (registeredAnimations.indexOf(anim) == -1) {
        registeredAnimations.push(anim);
        if (registeredAnimations.length == 1) {
            window.requestAnimationFrame( animate );
        }
    }
}

function Unregister(anim) {
    var pos = registeredAnimations.indexOf(anim);
    if (pos > -1) {
        registeredAnimations.splice(pos, 1);
    }
}

/**
 * @example
 * var Canvas = require("three.canvas");
 * var options = {
 *    width: 640,
 *    height: 480
 * };
 * var instance = new Canvas(options);
 * @class Canvas
 */
var Canvas = function(options) {
    Widget.call(this);
    this.addClass("three-canvas");

    if (typeof options === 'undefined') options = {};
    if (typeof options.width === 'undefined') options.width = window.innerWidth;
    if (typeof options.height === 'undefined') options.height = window.innerHeight;

    this.W = options.width;
    this.H = options.height;
    this.css({
        width: this.W + "px",
        height: this.H + "px"
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, this.W / this.H, 0.1, 1000 );
    this.camera.position.z = 1.4;
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor( 0xffffff, 0);
    this.renderer.setSize( this.W, this.H );
    this.append( this.renderer.domElement );
    this._time = 0;
};

// Extension of Widget.
Canvas.prototype = Object.create(Widget.prototype);
Canvas.prototype.constructor = Canvas;

/**
 * @return void
 */
Canvas.prototype.render = function(time) {
    if (this._time <= 0) this._time = time - 1;
    this.onRender(time, time - this._time);
    this.renderer.render( this.scene, this.camera );
    this._time = time;
};

/**
 * @return void
 */
Canvas.prototype.onRender = function(time, delta) {};

/**
 * @return void
 */
Canvas.prototype.start = function() {
    Register(this);
};

/**
 * @return void
 */
Canvas.prototype.stop = function() {
    Unregister(this);
};


Canvas.create = function(options) {
    return new Canvas(options);
};
module.exports = Canvas;
