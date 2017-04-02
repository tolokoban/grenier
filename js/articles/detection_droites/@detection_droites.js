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
require("$",function(r,n,o){o.config={name:'"grenier"',description:'"Articles concernant majoritairement l\'algorithmie"',author:'"Tolokoban"',version:'"1.0.519"',major:"1",minor:"0",revision:"519",date:"2017-04-02T15:08:16.000Z",consts:{}};var t=null;o.lang=function(r){return void 0===r&&(window.localStorage&&(r=window.localStorage.getItem("Language")),r||(r=window.navigator.language)||(r=window.navigator.browserLanguage)||(r="fr"),r=r.substr(0,2).toLowerCase()),t=r,window.localStorage&&window.localStorage.setItem("Language",r),r},o.intl=function(r,n){var t,a,e,i,g,l,u,c=r[o.lang()],s=n[0];for(u in r)break;if(!u)return s;if(!c&&!(c=r[u]))return s;if(t=c[s],t||(c=r[u],t=c[s]),!t)return s;if(n.length>1){for(a="",g=0,e=0;e<t.length;e++)i=t.charAt(e),"$"===i?(a+=t.substring(g,e),e++,l=t.charCodeAt(e)-48,l<0||l>=n.length?a+="$"+t.charAt(e):a+=n[l],g=e+1):"\\"===i&&(a+=t.substring(g,e),e++,a+=t.charAt(e),g=e+1);a+=t.substr(g),t=a}return t}});
//# sourceMappingURL=$.js.map
require("detection_droites",function(t,e,n){function r(t){var e=document.createElement("canvas");e.setAttribute("width",t.width),e.setAttribute("height",t.height);var n=e.getContext("2d");n.drawImage(t,0,0);var r,i,a,o=n.getImageData(0,0,t.width,t.height).data,d=[],h=0;for(a=0;a<t.height;a++)for(i=0;i<t.width;i++)r=o[h++]+o[h++]+o[h++],r<30&&d.push([i,a]),h++;return d}function i(t){var e,n=[],r=[],i=0,a=Math.PI/18;for(e=0;e<36;e++)n.push(Math.cos(i)),r.push(Math.cos(i)),i+=a;t.forEach(function(t){var e=t[0],i=t[1];n.forEach(function(n,a){var o=r[a],d=2*Math.floor(.5+(e*n+i*o)/2);t.push(d)})})}var a=function(){function e(){return r(n,arguments)}var n={en:{},fr:{}},r=t("$").intl;return e.all=n,e}();n.start=function(){var t=document.getElementById("image");t.onload=function(){var e=document.getElementById("sample"),n="",a=r(t);i(a),n+="<div class='grid'>",a.forEach(function(t){n+="<div>",n+="<div>"+t[0]+","+t[1]+"</div>";for(var e=2;e<t.length;e++)n+="<div>"+t[e]+"</div>";n+="</div>"}),n+="</div>",e.innerHTML=n}},e.exports._=a});
//# sourceMappingURL=detection_droites.js.map
