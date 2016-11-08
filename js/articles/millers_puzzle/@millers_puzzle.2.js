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

    }
);
require("$",function(n,r,o){o.config={name:'"grenier"',description:'"Articles concernant majoritairement l\'algorithmie"',author:'"Tolokoban"',version:'"1.0.518"',major:"1",minor:"0",revision:"518",date:"2016-11-08T11:53:42.000Z",consts:{}};var t=null;o.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage&&window.localStorage.setItem("Language",n),n},o.intl=function(n,r){var t,a,e,i,g,l,u=n[o.lang()],c=r[0];if(!u)return c;if(t=u[c],!t)return c;if(r.length>1){for(a="",g=0,e=0;e<t.length;e++)i=t.charAt(e),"$"===i?(a+=t.substring(g,e),e++,l=t.charCodeAt(e)-48,a+=l<0||l>=r.length?"$"+t.charAt(e):r[l],g=e+1):"\\"===i&&(a+=t.substring(g,e),e++,a+=t.charAt(e),g=e+1);a+=t.substr(g),t=a}return t}});
//# sourceMappingURL=$.js.map
require("polyfill.mathml",function(e,t,n){function i(){return d(a,arguments)}function r(){var e,t=document.createElement("div");return t.innerHTML="<math><mspace height='23px' width='77px'/></math>",document.body.appendChild(t),e=t.firstChild.firstChild.getBoundingClientRect(),document.body.removeChild(t),Math.abs(e.height-23)<=1&&Math.abs(e.width-77)<=1}function o(){for(var e,t=document.querySelectorAll("math"),n=0;n<t.length;n++)e=t[n],e.parentNode.replaceChild(l(e),e)}function l(e){var t=document.createElement("div");return t.className="math",t.innerHTML=e.innerHTML,t}var a={en:{},fr:{}},d=e("$").intl;r()?console.log("MathML is supported!"):(o(),console.warn("MathML is not supported! The polyfill will be activated.")),t.exports._=i});
//# sourceMappingURL=polyfill.mathml.js.map
