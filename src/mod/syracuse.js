var $ = require("dom");


function Syracuse(opts) {
    var head = $.div('head', ["" + opts.value]);
    var canvas = $.tag('canvas');
    var elem = $.div('syracuse', [head, canvas]);

    Object.defineProperty( this, 'element', {
        value: elem, writable: false, configurable: false, enumerable: true
    });

    
}



module.exports = Syracuse;
