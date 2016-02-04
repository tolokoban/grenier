"use strict";
var Widget = require("wdg");

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
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, this.W / this.H, 0.1, 1000 );
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


Canvas.create = function(options) {
    return new Canvas(options);
};
module.exports = Canvas;
