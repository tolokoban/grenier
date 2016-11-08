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
        APP = require('detection_droites');
setTimeout(function (){if(typeof APP.start==='function')APP.start()});

    }
);
require("$",function(n,r,o){o.config={name:'"grenier"',description:'"Articles concernant majoritairement l\'algorithmie"',author:'"Tolokoban"',version:'"1.0.518"',major:"1",minor:"0",revision:"518",date:"2016-11-08T11:53:42.000Z",consts:{}};var t=null;o.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage&&window.localStorage.setItem("Language",n),n},o.intl=function(n,r){var t,a,e,i,g,l,u=n[o.lang()],c=r[0];if(!u)return c;if(t=u[c],!t)return c;if(r.length>1){for(a="",g=0,e=0;e<t.length;e++)i=t.charAt(e),"$"===i?(a+=t.substring(g,e),e++,l=t.charCodeAt(e)-48,a+=l<0||l>=r.length?"$"+t.charAt(e):r[l],g=e+1):"\\"===i&&(a+=t.substring(g,e),e++,a+=t.charAt(e),g=e+1);a+=t.substr(g),t=a}return t}});
//# sourceMappingURL=$.js.map
require("detection_droites",function(t,e,n){function i(){return d(o,arguments)}function r(t){var e=document.createElement("canvas");e.setAttribute("width",t.width),e.setAttribute("height",t.height);var n=e.getContext("2d");n.drawImage(t,0,0);var i,r,a,o=n.getImageData(0,0,t.width,t.height).data,d=[],h=0;for(a=0;a<t.height;a++)for(r=0;r<t.width;r++)i=o[h++]+o[h++]+o[h++],i<30&&d.push([r,a]),h++;return d}function a(t){var e,n=[],i=[],r=0,a=Math.PI/18;for(e=0;e<36;e++)n.push(Math.cos(r)),i.push(Math.cos(r)),r+=a;t.forEach(function(t){var e=t[0],r=t[1];n.forEach(function(n,a){var o=i[a],d=2*Math.floor(.5+(e*n+r*o)/2);t.push(d)})})}var o={en:{},fr:{}},d=t("$").intl;n.start=function(){var t=document.getElementById("image");t.onload=function(){var e=document.getElementById("sample"),n="",i=r(t);a(i),n+="<div class='grid'>",i.forEach(function(t){n+="<div>",n+="<div>"+t[0]+","+t[1]+"</div>";for(var e=2;e<t.length;e++)n+="<div>"+t[e]+"</div>";n+="</div>"}),n+="</div>",e.innerHTML=n}},e.exports._=i});
//# sourceMappingURL=detection_droites.js.map
