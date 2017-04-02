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
        var W = require('x-widget');
        W('piscine.lowres-sphere2', 'piscine.lowres-sphere', {})
        W('piscine.bouncing-squares3', 'piscine.bouncing-squares', {})
        W('piscine.bouncing-squares.face-me4', 'piscine.bouncing-squares.face-me', {})
        W('piscine.shader5', 'piscine.shader', {})
        W('piscine.shader26', 'piscine.shader2', {})
        W('piscine.shader27', 'piscine.shader2', {})
        W('piscine.shader28', 'piscine.shader2', {})
        W('piscine.shader29', 'piscine.shader2', {})
        W('piscine.shader210', 'piscine.shader2', {})
        W('piscine.shader211', 'piscine.shader2', {})
        W('piscine.shader212', 'piscine.shader2', {})
        W('piscine.shader213', 'piscine.shader2', {})
        W('piscine.shader214', 'piscine.shader2', {})

    }
);
