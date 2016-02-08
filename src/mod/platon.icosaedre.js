"use strict";
var ThreeCanvas = require("three.canvas");


/**
 * @example
 * var Icosaedre = require("platon.isosaedre");
 * var instance = new Icosaedre(opt);
 * @class Icosaedre
 */
var Icosaedre = function(opt) {
    ThreeCanvas.call(this, opt);
    this.css('float', 'left');

    var grp = new THREE.Group();

    this.scene.add( grp );
    this._grp = grp;

    var y = .5;
    this.createCircles(y);

    var ang = Math.PI / 5;

    for ( var i=0 ; i<4 ; i++ ) {
        grp.add(
            this.createLine({
                vertices: [
                    [ Math.cos( ang + 2 * ang * i ), -y, Math.sin( ang + 2 * ang * i )],
                    [ Math.cos( ang + 2 * ang * (i + .5) ), y, Math.sin( ang + 2 * ang * (i + .5) )],
                    [ Math.cos( ang + 2 * ang * (i + 1) ), -y, Math.sin( ang + 2 * ang * (i + 1) )],
                    [ Math.cos( ang + 2 * ang * i ), -y, Math.sin( ang + 2 * ang * i )],
                ],
                linewidth: 1,
                color: 0x888888
            })
        );
    }

    var A = [Math.cos(ang), -y, Math.sin(ang)];
    var B = [Math.cos(-ang), -y, Math.sin(-ang)];
    var C = [1,y,0];
    grp.add( this.createMesh({ vertices: [A, B, C], faces: [[0,1,2]],
                               colors: [0xff0000], doublesided: true}) );
    grp.add( this.createLine({ vertices: [[0,-1,0], [0,1,0]], color: 0x000000 }));
    grp.add( this.createLine({ vertices: [[0,y,0], [1,y,0]], color: 0x888888 }));
    grp.add( this.createMesh({ vertices: [A, B, [0,-y,0]], faces: [[0,1,2]],
                               colors: [0xffff88], doublesided: true}) );
    grp.add( this.createLine({ vertices: [[0,-y,0], B], color: 0x888888 }));

    grp.add( this.createLine({ vertices: [[1,-y,0], [1,y,0]], color: 0x00ff00, linewidth: 2 }));
    grp.add( this.createLine({ vertices: [[1,-y,0], [.8,-y,0]], color: 0x0000ff, linewidth: 2 }));



    this.camera.position.z = 3;
    this.camera.position.y = 1;
    this.camera.lookAt( new THREE.Vector3( 0,0,0 ) );

    var light = new THREE.HemisphereLight( 0xcceeff, 0x990000, 3.6 ); // soft white light
    var light1 = new THREE.DirectionalLight( 0x997777, 5 );
    var light2 = new THREE.DirectionalLight( 0x777799, 2 );
    light1.position.set(43,13,5);
    light2.position.set(-20,5,1);

    this.scene.add( light1 );
    this.scene.add( light2 );
    this.scene.add( light );
    this.scene.add( grp );

    this.start();
};

// Extension of Widget.
Icosaedre.prototype = Object.create(ThreeCanvas.prototype);
Icosaedre.prototype.constructor = Icosaedre;

/**
 * @return void
 */
Icosaedre.prototype.onRender = function(time, delta) {
    var root = this._grp;

    root.rotation.y = time * 0.0006;
};


/**
 * @return void
 */
Icosaedre.prototype.createCircles = function(y) {
    var grp = this._grp;
    var ang0 = -Math.PI / 4;
    var ang1 = Math.PI / 4;
    var ang;
    var segments = 32;
    var pts1 = [];
    var pts2 = [];
    for ( var i=0 ; i<=segments ; i++ ) {
        ang = ang0 + (ang1 - ang0) * i / segments;
        pts1.push( [Math.cos( ang ), y, Math.sin( ang )] );
        pts2.push( [Math.cos( ang ), -y, Math.sin( ang )] );
    }
    grp.add(
        this.createLine({ vertices: pts1, color: 0x888888 })
    );
    grp.add(
        this.createLine({ vertices: pts2, color: 0x888888 })
    );
};



Icosaedre.create = function(opt) {
    return new Icosaedre(opt);
};
module.exports = Icosaedre;
