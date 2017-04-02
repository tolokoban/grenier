"use strict";

var $ = require( "dom" );
var DB = require( "tfw.data-binding" );

/**
 * @class Syracuse
 *
 * @example
 * var Syracuse = require("Syracuse");
 * var instance = new Syracuse({ value: 137 });
 */
var Syracuse = function ( opts ) {
    if ( typeof opts === 'undefined' ) opts = {};
    if ( typeof opts.value === 'undefined' ) opts.value = 137;
    if ( typeof opts.base === 'undefined' ) opts.base = 2;
    if ( typeof opts.spot === 'undefined' ) opts.spot = "";
    opts.value = parseInt( opts.value );
    opts.base = parseInt( opts.base );
    opts.spot = opts.spot.split( "," ).map( function ( v ) {
        return parseInt( v.trim() );
    } );

    var that = this;
    var elem = $.elem( this, 'canvas' );
    var ctx = elem.getContext( '2d' );

    var v = opts.value;
    var steps = [ ( v >>> 0 ).toString( opts.base ) ];
    while ( v != 1 ) {
        while ( ( v & 1 ) === 0 ) {
            // Tant que c'est pair, on divise par deux.
            v >>= 1;
        }
        if ( v === 1 ) break;
        if ( ( v & 1 ) === 1 ) {
            // Impair.
            v = 3 * v + 1;
        }
        while ( ( v & 1 ) === 0 ) {
            // Tant que c'est pair, on divise par deux.
            v >>= 1;
        }
        steps.push( ( v >>> 0 ).toString( opts.base ) );
    }
    var max = steps.reduce( function ( acc, v ) {
        return Math.max( acc, v.length );
    }, 0 );
    steps = steps.map( function ( v ) {
        while ( v.length < max ) {
            v = "0" + v;
        }
        return v;
    } );
    var cell = 10;
    elem.setAttribute( "height", max * cell + 1 );
    elem.setAttribute( "width", steps.length * cell + 1 );
    var x = 0;
    var y = 0;
    var digit;
    var color;
    ctx.strokeStyle = "#777";
    for ( var row = 0; row < steps.length; row++ ) {
        for ( var col = 0; col < max; col++ ) {
            digit = parseInt( steps[ row ].charAt( col ) );
            if ( digit === 0 ) {
                color = 255;
            } else {
                color = Math.floor( 255 * ( digit - 1 ) / opts.base );
            }
            ctx.fillStyle = "rgb(" + color + "," + color + "," + color + ")";
            ctx.beginPath();
            ctx.rect( y + 0.5, x + 0.5, cell, cell );
            ctx.fill();
            if ( row < opts.spot.length ) {
                if ( col >= max - opts.spot[ row ] ) {
                    ctx.globalAlpha = 0.5;
                    ctx.fillStyle = "#0f0";
                    ctx.fill();
                    ctx.globalAlpha = 1;
                }
            }
            ctx.stroke();
            x += cell;
        }
        x = 0;
        y += cell;
    }
};

module.exports = Syracuse;