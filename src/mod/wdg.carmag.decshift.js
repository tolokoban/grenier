/**
 * @module wdg.carmag.decshift
 *
 * @description
 * Pour uen suite  croissante de nombres pairs, on  vérifie si l'ajout
 * de décalages décrémentaux est une permutation ou pas.
 *
 */
"use strict";

var $ = require("dom");
var DB = require("tfw.data-binding");

function Decshift(args) {
    var elem = $.elem( this, 'ul', 'wdg-carmag-decshift' );
    var li, row, shift, value, ok, n;
    var numbers = [];
    for (n = 4 ; n < 65 ; n+=2) {
        numbers.push(n);
    }
    for (n = 7 ; n < 11 ; n++ ) {
        numbers.push(1 << n);
    }
    numbers.forEach(function (n) {
        li = $.tag('li');
        $.add( elem, li );
        $.add( li, $.tag('b', ['' + n]));
        row = [0];
        $.add( li, $.tag('span', [" : 0"]) );
        ok = true;
        for (shift = n - 1 ; shift > 0 ; shift--) {
            value = (row[row.length - 1] + shift) % n;
            if (row.indexOf(value) != -1) ok = false;
            $.add(
                li,
                $.tag('span', [', ']),
                $.tag('span', row.indexOf(value) != -1 ? 'bad' : '', ['' + value])
            );            
            row.push(value);
        }
        $.add( li, $.tag('span', ["."]) );
        if (ok) {
            $.addClass( li, 'ok' );
        }
        
    });
}

module.exports = Decshift;



