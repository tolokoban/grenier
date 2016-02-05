"use strict";
var TreeCanvas = require("three.canvas");


/**
 * @example
 * var Solide = require("platon.solide");
 * var instance = new Solide();
 * @class Solide
 */
var Solide = function(options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options.faces === 'undefined') options.faces = 4;
    if (typeof options.width === 'undefined') options.width = 128;
    if (typeof options.height === 'undefined') options.height = 128;


    TreeCanvas.call(this, {width: 128, height: 128});
    this.addClass("platon-solide");

    this.camera.position.z = 2.7;

    var light = new THREE.HemisphereLight( 0xcceeff, 0x990000, 3.6 ); // soft white light
    var light1 = new THREE.DirectionalLight( 0x997777, 5 );
    var light2 = new THREE.DirectionalLight( 0x777799, 2 );
    light1.position.set(43,13,5);
    light2.position.set(-20,5,1);

    var cube = createSolid( options.faces );

    this.scene.add( cube );
    this.scene.add( light1 );
    this.scene.add( light2 );
    this.scene.add( light );
    
    this.cube = cube;

    this._speedX = 1600 + 2000 * Math.random();
    this._speedY = 1600 + 2000 * Math.random();
    this._speedZ = 1600 + 2000 * Math.random();
    if (Math.random() < .5) this._speedX = -this._speedX;
    if (Math.random() < .5) this._speedY = -this._speedY;    
    if (Math.random() < .5) this._speedZ = -this._speedZ;
    
    this.start();
};

// Extension of Widget.
Solide.prototype = Object.create(TreeCanvas.prototype);
Solide.prototype.constructor = Solide;

/**
 * @return void
 */
Solide.prototype.onRender = function(time, delta) {
    var sx = this._speedX;
    var sy = this._speedY;
    var sz = this._speedZ;
    this.cube.rotation.x = time / sx;
    this.cube.rotation.y = time / sy;
    this.cube.rotation.y = time / sz;

    var x = 20 * Math.abs(Math.cos(time / (sx + sy + sz)));
    var y = 2 * Math.cos(3 * time / (sx + sy + sz));
    this.css('transform', 'translate(-' + x + 'em,' + y + 'em)');
};



Solide.create = function() {
    return new Solide();
};
module.exports = Solide;


function createSolid(nbFaces) {
    var colors = [
        new THREE.Color( 0xaaffaa ),
        new THREE.Color( 0xffaaaa ),
        new THREE.Color( 0xaaaaff ),
        new THREE.Color( 0xffffaa ),
        new THREE.Color( 0xffaaff ),
        new THREE.Color( 0xaaffff )
    ];

    var mesh;
    var k = 1 / Math.sqrt(3);
    if (nbFaces == 4) {
        mesh = createMesh(
            [ [ k, k, k], [-k, k,-k], [ k,-k,-k], [-k,-k, k] ],
            [ [0,3,1], [0,1,2], [0,2,3], [1,3,2] ],
            colors
        );
    }
    else if (nbFaces == 6) {
        mesh = createMesh(
            [ 
                [ k, k, k], [ k, k,-k], [-k, k,-k], [-k, k, k],
                [ k,-k, k], [ k,-k,-k], [-k,-k,-k], [-k,-k, k] 
            ],
            [
                [0,1,2,3], [0,4,5,1], [1,5,6,2],
                [4,7,6,5], [2,6,7,3], [0,3,7,4],
            ],
            colors
        );
    }
    else if (nbFaces == 8) {
        mesh = createMesh(
            [
                [ 0, 1, 0], [ 1, 0, 0], [ 0, 0,-1],
                [-1, 0, 0], [ 0, 0, 1], [ 0,-1, 0]
            ],
            [
                [0,1,2], [0,2,3], [0,3,4], [0,4,1],
                [5,4,3], [5,1,4], [5,2,1], [5,3,2],
            ],
            colors, 4
        );
    }

    return mesh;
}


function addFace(geometry, vertices, color) {
    var faces = [];
    if (vertices.length == 3) {
        faces.push(
            new THREE.Face3( vertices[0], vertices[1], vertices[2] )
        );
    }
    else if (vertices.length == 4) {
        faces.push(
            new THREE.Face3( vertices[0], vertices[1], vertices[2] ),
            new THREE.Face3( vertices[0], vertices[2], vertices[3] )
        );
    }
    else {
        // We use the fan method.
        var x = 0, y = 0, z = 0;
        vertices.forEach(function (vertex) {
            x += vertex.x;
            y += vertex.y;
            z += vertex.z;
        });
        x /= vertices.length;
        y /= vertices.length;
        z /= vertices.length;

        var k = vertices.length;
        vertices.push( new THREE.Vector3( x, y, z ) );

        var i;
        for( i=0 ; i<k ; i++ ) {
            faces.push( new THREE.Face3( i, (i + 1) % k, k ) );
        }
    }

    if (typeof color !== 'undefined') {
        // Apply a color to this face.
        faces.forEach(function (face) {
            face.vertexColors[0] = face.vertexColors[1] = face.vertexColors[2] = color;
        });
    }

    faces.forEach(function (face) {
        geometry.faces.push(face);
    });
}


function createMesh(vertices, faces, colors, nbColors) {
    if (typeof nbColors === 'undefined') nbColors = colors.length;

    var grp = new THREE.Group();
    var mat = new THREE.MeshPhongMaterial({
        specular: 0x333333,
        shininess: 3.14,
        metal: true,
        vertexColors: THREE.VertexColors,
        side: THREE.DoubleSide
    });
    var geo = new THREE.Geometry();
    vertices.forEach(function (vertex) {
        geo.vertices.push( new THREE.Vector3( vertex[0], vertex[1], vertex[2] ) );        
    });
    faces.forEach(function (face, idxFace) {
        addFace( geo, face, colors[idxFace % nbColors] );
    });
    geo.computeFaceNormals ();
    geo.computeVertexNormals ();
    grp.add( new THREE.Mesh( geo, mat ) );

    mat = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
    var cache = [];
    faces.forEach(function (face) {
        var line;
        var key, a, b, tmp;
        for( var i=0 ; i<face.length ; i++ ) {
            a = face[i];
            b = face[(i + 1) % face.length];
            if (b < a) {
                tmp = a;
                a = b;
                b = tmp;
            }
            key = a + "," + b;
            if (cache.indexOf( key ) == -1) {
                cache.push( key );
                line = new THREE.Geometry();
                line.vertices.push( 
                    new THREE.Vector3( vertices[a][0], vertices[a][1], vertices[a][2] ),
                    new THREE.Vector3( vertices[b][0], vertices[b][1], vertices[b][2] )
                );
                line.type = THREE.Lines;
                grp.add( new THREE.Line( line, mat ) );
            }
        }
    });

    return grp;
}


