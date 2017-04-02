/**********************************************************************
 require( 'require' )
 -----------------------------------------------------------------------
 @example

 var Path = require("node://path");  // Only in NodeJS/NW.js environment.
 var Button = require("tfw.button");

 **********************************************************************/

window.require = function() {
    var modules = {};
    var definitions = {};
    var nodejs_require = typeof window.require === 'function' ? window.require : null;

    var f = function(id, body) {
        if( id.substr( 0, 7 ) == 'node://' ) {
            // Calling for a NodeJS module.
            if( !nodejs_require ) {
                throw Error( "[require] NodeJS is not available to load module `" + id + "`!" );
            }
            return nodejs_require( id.substr( 7 ) );
        }

        if( typeof body === 'function' ) {
            definitions[id] = body;
            return;
        }
        var mod;
        body = definitions[id];
        if (typeof body === 'undefined') {
            var err = new Error("Required module is missing: " + id);   
            console.error(err.stack);
            throw err;
        }
        mod = modules[id];
        if (typeof mod === 'undefined') {
            mod = {exports: {}};
            var exports = mod.exports;
            body(f, mod, exports);
            modules[id] = mod.exports;
            mod = mod.exports;
            //console.log("Module initialized: " + id);
        }
        return mod;
    };
    return f;
}();
function addListener(e,l) {
    if (window.addEventListener) {
        window.addEventListener(e,l,false);
    } else {
        window.attachEvent('on' + e, l);
    }
};

addListener(
    'DOMContentLoaded',
    function() {
        document.body.parentNode.$data = {};
        // Attach controllers.
        require('polyfill.mathml');
var W = require('x-widget');
        W('syracuse125', 'syracuse', {"value": "137"})
        W('syracuse126', 'syracuse', {"value": "111"})
        W('syracuse127', 'syracuse', {
            value: "495",
            base: "2"})
        W('syracuse128', 'syracuse', {
            value: "495",
            base: "3"})
        W('syracuse129', 'syracuse', {
            value: "495",
            base: "4"})
        W('syracuse130', 'syracuse', {
            value: "495",
            base: "5"})
        W('syracuse131', 'syracuse', {
            value: "495",
            base: "6"})
        W('syracuse132', 'syracuse', {
            value: "495",
            base: "7"})
        W('syracuse133', 'syracuse', {
            value: "495",
            base: "8"})
        W('syracuse134', 'syracuse', {
            value: "495",
            base: "9"})
        W('syracuse135', 'syracuse', {"value": "1365"})
        W('syracuse136', 'syracuse', {
            value: "1215",
            spot: "6,5,4,3,2,1,0,0,3,2,1,3,2,1,3,2,1,2,1,0,5,4,3,2,1,0,2,1,3,2,1,4,3,2,1,0,3,2,1,2,1,6,5,4,3,2,1,4,3,2,1,0,0,0,0,3,2,1"})
        W('syracuse137', 'syracuse', {"value": "123"})
        W('syracuse138', 'syracuse', {"value": "31573"})

    }
);
