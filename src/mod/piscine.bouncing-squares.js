"use strict";
var Three = require("three.canvas");


/**
 * @example
 * var BouncingSquares = require("piscine.lowres-sphere");
 * var instance = new BouncingSquares();
 * @class BouncingSquares
 */
var BouncingSquares = function(opt) {
    if (typeof opt === 'undefined') opt = {};
    if (typeof opt.nbBalls === 'undefined') opt.nbBalls = 100;
    if (typeof opt.radius === 'undefined') opt.radius = 10;


    Three.call(this, opt);
    this.addClass("piscine-lowres-sphere");

    var grp = new THREE.Group();

    this.scene.add( grp );

    var k = 6;
    this.bounds = {
        x: -k, X: k,
        y: 0, Y: 2*k,
        z: -k, Z: k
    };
    this.center = new THREE.Vector3(
            .5 * (this.bounds.x + this.bounds.X),
            .5 * (this.bounds.y + this.bounds.Y),
            .5 * (this.bounds.z + this.bounds.Z)
    );
    var A = [k,0,k];
    var B = [k,0,-k];
    var C = [-k,0,-k];
    var D = [-k,0,k];
    var E = [k,2*k,k];
    var F = [-k,2*k,k];
    var G = [-k,2*k,-k];
    var H = [k,2*k,-k];
    /*
    var mat = new THREE.MeshPhongMaterial({        
        specular: 0x333333,
        shininess: 0.14,
        vertexColors: THREE.VertexColors,
        side: THREE.FrontSide,
        transparent: true
    });
    this.scene.add(
        this.createMesh({
            colors: [new THREE.Color( .3, .3, .3 )],
            vertices: [A,B,C,D], faces: [[0,1,2,3]],
            mat: mat
        }),
        this.createMesh({
            colors: [new THREE.Color( .3, .3, .3 )],
            vertices: [A,E,H,B], faces: [[0,1,2,3]],
            mat: mat
        }),
        this.createMesh({
            colors: [new THREE.Color( .3, .3, .3 )],
            vertices: [B,H,G,C], faces: [[0,1,2,3]],
            mat: mat
        }),
        this.createMesh({
            colors: [new THREE.Color( .3, .3, .3 )],
            vertices: [C,G,F,D], faces: [[0,1,2,3]],
            mat: mat
        }),
        this.createMesh({
            colors: [new THREE.Color( .3, .3, .3 )],
            vertices: [A,D,F,E], faces: [[0,1,2,3]],
            mat: mat
        }),
        this.createMesh({
            colors: [new THREE.Color( .3, .3, .3 )],
            vertices: [E,F,G,H], faces: [[0,1,2,3]],
            mat: mat
        })
    );
    */


    this.balls = [];
    var ball;
    for ( var i=0 ; i<opt.nbBalls ; i++ ) {
        ball = {
            mesh: new THREE.Mesh( this.createGeo(), this.createMat() ),
            vx: Math.random() - .5,
            vy: Math.random() - .5,
            vz: Math.random() - .5,
            x: rnd( this.bounds.x, this.bounds.X ),
            y: rnd( this.bounds.y, this.bounds.Y ),
            z: rnd( this.bounds.z, this.bounds.Z ),
            delta: 1
        };
        ball.mesh.position.set( ball.x, ball.y, ball.z );
        this.balls.push( ball );
        grp.add( ball.mesh );
    }
    

    // Camera rotation angles.
    this.motion = {
        camera: {
            radius: opt.radius,
            alpha: Math.PI / 2,
            beta: 0,
            alphaSpeed: -2.5,
            betaSpeed: rnd(-1, 1)
        }
    };

    var light = new THREE.HemisphereLight( 0xcceeff, 0x990000, 3.6 ); // soft white light
    var light1 = new THREE.DirectionalLight( 0x997777, 5 );
    var light2 = new THREE.DirectionalLight( 0x777799, 2 );
    light1.position.set(43,13,5);
    light2.position.set(-20,5,1);

    this.scene.add( light1 );
    this.scene.add( light2 );
    this.scene.add( light );

    this.start();
};

// Extension of Widget.
BouncingSquares.prototype = Object.create(Three.prototype);
BouncingSquares.prototype.constructor = BouncingSquares;

/**
 * @return void
 */
BouncingSquares.prototype.onRender = function( time, delta ) {
    moveCamera.call( this, time, delta );
    moveBalls.call( this, time, delta );
};

function moveBalls( time, delta ) {
    delta = Math.min( 160, delta );
    var bounds = this.bounds;
    var bx = bounds.x + .5;
    var bX = bounds.X - .5;
    var by = bounds.y + .5;
    var bY = bounds.Y - .5;
    var bz = bounds.z + .5;
    var bZ = bounds.Z - .5;
    var speed = 0.002;

    
    this.balls.forEach(function (ball) {
        // Gravity.
        ball.vy -= delta * speed;        

        // Move the ball.
        var mesh = ball.mesh;
        mesh.position.x = ball.x + ball.vx * delta * speed;
        mesh.position.y = ball.y + ball.vy * delta * speed;
        mesh.position.z = ball.z + ball.vz * delta * speed;

        // Detect bounces.
        if (mesh.position.x < bx) {
            ball.vx = -ball.vx;
            mesh.position.x = bx;
        }
        if (mesh.position.x > bX) {
            ball.vx = -ball.vx;
            mesh.position.x = bX;
        }
        if (mesh.position.y < by) {
            ball.vy = -ball.vy;
            mesh.position.y = by;
        }
        if (mesh.position.y > bY) {
            ball.vy = -ball.vy;
            mesh.position.y = bY;
        }
        if (mesh.position.z < bz) {
            ball.vz = -ball.vz;
            mesh.position.z = bz;
        }
        if (mesh.position.z > bZ) {
            ball.vz = -ball.vz;
            mesh.position.z = bZ;
        }

        // Save current position and delta.
        ball.x = mesh.position.x;
        ball.y = mesh.position.y;
        ball.z = mesh.position.z;
        ball.delta = delta;

       
    }, this);

}

function moveCamera( time, delta ) {
    delta = Math.min( 500, delta );

    var cam = this.motion.camera;

    var r = cam.radius * Math.cos( cam.beta );
    var x = r * Math.cos( cam.alpha );
    var y = cam.radius * Math.sin( cam.beta );
    var z = r * Math.sin( cam.alpha );

    this.camera.position.x = x + this.center.x;
    this.camera.position.y = y + this.center.y;
    this.camera.position.z = z + this.center.z;
    this.camera.lookAt( this.center );

    var speed = .0002 * delta;
    cam.alphaSpeed = constraint( cam.alphaSpeed, 3 );
    cam.betaSpeed = constraint( cam.betaSpeed, 3 );
    cam.alpha += speed * cam.alphaSpeed;
    cam.beta += speed * cam.betaSpeed;

    if (cam.beta < 0) cam.betaSpeed = Math.abs(cam.betaSpeed);
    if (cam.beta > Math.PI / 3) cam.betaSpeed = -Math.abs(cam.betaSpeed);
};


/**
 * @return void
 */
BouncingSquares.prototype.createGeo = function() {
    var geo = new THREE.Geometry();
    geo.vertices.push(
        new THREE.Vector3( -.5, -.5, 0 ),
        new THREE.Vector3(  .5, -.5, 0 ),
        new THREE.Vector3(  .5,  .5, 0 ),
        new THREE.Vector3( -.5,  .5, 0 )
    );
    geo.faces.push(
        new THREE.Face3( 0, 1, 2 ),
        new THREE.Face3( 0, 2, 3 )
    );
    geo.computeFaceNormals ();
    geo.computeVertexNormals ();
    return geo;
};

/**
 * @return void
 */
BouncingSquares.prototype.createMat = function() {
    return new THREE.MeshPhongMaterial({
        color: this.randomColor(),
        emissive: this.randomColor(),
        specular: 0x333333,
        shininess: 0.14,
        shading: THREE.SmoothShading,
        transparent: true
    });    
};

/**
 * @return A fully saturated random color.
 */
BouncingSquares.prototype.randomColor = function() {
    var dice = Math.floor( Math.random() * 6 );
    var x = Math.random();
    if ( dice == 0 ) return new THREE.Color( 1, 0, x );
    if ( dice == 1 ) return new THREE.Color( 0, 1, x );
    if ( dice == 2 ) return new THREE.Color( 1, x, 0 );
    if ( dice == 3 ) return new THREE.Color( 0, x, 1 );
    if ( dice == 4 ) return new THREE.Color( x, 0, 1 );
    if ( dice == 5 ) return new THREE.Color( x, 1, 0 );
};


function rnd( a, b ) {
    if (typeof a === 'undefined') a = 1;
    if (typeof b === 'undefined') {
        b = a;
        a = 0;
    }
    return a + Math.random() * (b - a);
}


function constraint( v, min, max ) {
    if (typeof min === 'undefined') min = 1;
    if (typeof max === 'undefined') max = -min;

    if (max < min) {
        var tmp = min;
        min = max;
        max = tmp;
    }

    return Math.max( min, Math.min( max, v ) );
}


BouncingSquares.create = function() {
    return new BouncingSquares();
};
module.exports = BouncingSquares;
