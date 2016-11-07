/** @module svg.triangle */require( 'svg.triangle', function(require, module, exports) { var _intl_={"en":{},"fr":{}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
    "use strict";
var Widget = require("wdg");
var Svg = Widget.svg;

module.exports = function(options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options.width === 'undefined') options.width = '1em';
    if (typeof options.height === 'undefined') options.height = '1em';
    if (typeof options.angle === 'undefined') options.angle = 0;
    if (typeof options.fill === 'undefined') options.fill = '#000';

    var root = Svg({
        viewBox: "-105 -105 210 210",
        width: options.width,
        height: options.height
    });

    root.append(
        Svg('path', {
            fill: options.fill,
            stroke: options.stroke ? options.stroke : 'none',
            transform: "rotate(" + options.angle + ")",
            d: "M100,0L-70.71,-70.71L-40,0L-70.71,70.71Z"
        })
    );
    
    return root;
};


  
module.exports._ = _;
/**
 * @module svg.triangle
 * @see module:$
 * @see module:wdg

 */
});