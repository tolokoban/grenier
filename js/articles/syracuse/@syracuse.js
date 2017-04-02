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
        W('syracuse23', 'syracuse', {"value": "137"})
        W('syracuse24', 'syracuse', {"value": "111"})
        W('syracuse25', 'syracuse', {
            value: "495",
            base: "2"})
        W('syracuse26', 'syracuse', {
            value: "495",
            base: "3"})
        W('syracuse27', 'syracuse', {
            value: "495",
            base: "4"})
        W('syracuse28', 'syracuse', {
            value: "495",
            base: "5"})
        W('syracuse29', 'syracuse', {
            value: "495",
            base: "6"})
        W('syracuse30', 'syracuse', {
            value: "495",
            base: "7"})
        W('syracuse31', 'syracuse', {
            value: "495",
            base: "8"})
        W('syracuse32', 'syracuse', {
            value: "495",
            base: "9"})
        W('syracuse33', 'syracuse', {"value": "1365"})
        W('syracuse34', 'syracuse', {
            value: "1215",
            spot: "6,5,4,3,2,1,0,0,3,2,1,3,2,1,3,2,1,2,1,0,5,4,3,2,1,0,2,1,3,2,1,4,3,2,1,0,3,2,1,2,1,6,5,4,3,2,1,4,3,2,1,0,0,0,0,3,2,1"})
        W('syracuse35', 'syracuse', {"value": "123"})
        W('syracuse36', 'syracuse', {"value": "31573"})

    }
);
require("$",function(r,n,o){o.config={name:'"grenier"',description:'"Articles concernant majoritairement l\'algorithmie"',author:'"Tolokoban"',version:'"1.0.519"',major:"1",minor:"0",revision:"519",date:"2017-04-02T15:08:16.000Z",consts:{}};var t=null;o.lang=function(r){return void 0===r&&(window.localStorage&&(r=window.localStorage.getItem("Language")),r||(r=window.navigator.language)||(r=window.navigator.browserLanguage)||(r="fr"),r=r.substr(0,2).toLowerCase()),t=r,window.localStorage&&window.localStorage.setItem("Language",r),r},o.intl=function(r,n){var t,a,e,i,g,l,u,c=r[o.lang()],s=n[0];for(u in r)break;if(!u)return s;if(!c&&!(c=r[u]))return s;if(t=c[s],t||(c=r[u],t=c[s]),!t)return s;if(n.length>1){for(a="",g=0,e=0;e<t.length;e++)i=t.charAt(e),"$"===i?(a+=t.substring(g,e),e++,l=t.charCodeAt(e)-48,l<0||l>=n.length?a+="$"+t.charAt(e):a+=n[l],g=e+1):"\\"===i&&(a+=t.substring(g,e),e++,a+=t.charAt(e),g=e+1);a+=t.substr(g),t=a}return t}});
//# sourceMappingURL=$.js.map
require("syracuse",function(t,e,r){var a=function(){function e(){return a(r,arguments)}var r={en:{},fr:{}},a=t("$").intl;return e.all=r,e}(),n=t("dom"),o=(t("tfw.data-binding"),function(t){void 0===t&&(t={}),void 0===t.value&&(t.value=137),void 0===t.base&&(t.base=2),void 0===t.spot&&(t.spot=""),t.value=parseInt(t.value),t.base=parseInt(t.base),t.spot=t.spot.split(",").map(function(t){return parseInt(t.trim())});for(var e=n.elem(this,"canvas"),r=e.getContext("2d"),a=t.value,o=[(a>>>0).toString(t.base)];1!=a;){for(;0==(1&a);)a>>=1;if(1===a)break;for(1==(1&a)&&(a=3*a+1);0==(1&a);)a>>=1;o.push((a>>>0).toString(t.base))}var l=o.reduce(function(t,e){return Math.max(t,e.length)},0);o=o.map(function(t){for(;t.length<l;)t="0"+t;return t});e.setAttribute("height",10*l+1),e.setAttribute("width",10*o.length+1);var i,s,u=0,f=0;r.strokeStyle="#777";for(var p=0;p<o.length;p++){for(var v=0;v<l;v++)i=parseInt(o[p].charAt(v)),s=0===i?255:Math.floor(255*(i-1)/t.base),r.fillStyle="rgb("+s+","+s+","+s+")",r.beginPath(),r.rect(f+.5,u+.5,10,10),r.fill(),p<t.spot.length&&v>=l-t.spot[p]&&(r.globalAlpha=.5,r.fillStyle="#0f0",r.fill(),r.globalAlpha=1),r.stroke(),u+=10;u=0,f+=10}});e.exports=o,e.exports._=a});
//# sourceMappingURL=syracuse.js.map
require("tfw.data-binding",function(n,t,e){function r(n,t,r,o){var i="function"==typeof o;void 0===t[l]&&(t[l]={}),t[l][r]={value:o,event:new u};var a;a="function"==typeof n?function(e){e=n(e),(i||t[l][r].value!==e)&&(t[l][r].value=e,t[l][r].event.fire(e,t,r))}:function(n){(i||t[l][r].value!==n)&&(t[l][r].value=n,t[l][r].event.fire(n,t,r))};var f=o;return i||(f=function(){return t[l][r].value}),Object.defineProperty(t,r,{get:f,set:a,configurable:!1,enumerable:!0}),e.bind.bind(e,t,r)}var o=function(){function t(){return r(e,arguments)}var e={en:{}},r=n("$").intl;return t.all=e,t}();n("polyfill.string");var i=n("dom"),a=n("tfw.css").parseUnit,u=n("tfw.listeners"),l="_tfw.data-binding_",f={castArray:function(n){return Array.isArray(n)?n:null===n||void 0===n?[]:[n]},castBoolean:function(n){return"boolean"==typeof n?n:"string"==typeof n?"0"!=(n=n.trim().toLowerCase())&&"false"!=n&&"no"!=n&&"null"!=n&&"undefined"!=n:"number"==typeof n?0!=n:null},castColor:function(n){return""+n},castDate:function(n){return"number"==typeof n||"string"==typeof n?new Date(n):n instanceof Date?n:new Date},castEnum:function(n){var t=n.map(String.toLowerCase);return function(e){if("number"==typeof e)return n[Math.floor(e)%n.length];if("string"!=typeof e)return n[0];var r=t.indexOf(e.trim().toLowerCase());return r<0&&(r=0),n[r]}},castInteger:function(n){return"number"==typeof n?Math.floor(n):"boolean"==typeof n?n?1:0:"string"==typeof n?parseInt(n):Number.NaN},castFloat:function(n){return"number"==typeof n?n:"boolean"==typeof n?n?1:0:"string"==typeof n?parseFloat(n):Number.NaN},castRegexp:function(n){if(n instanceof RegExp)return n;if("string"==typeof n&&0!=n.trim().length)try{return new RegExp(n)}catch(t){console.error("[castRegexp] /"+n+"/ ",t)}return null},castString:function(n){return"string"==typeof n?n:void 0===n||null===n?"":JSON.stringify(n)},castStringArray:function(n){return Array.isArray(n)?n:null===n||void 0===n?[]:"string"==typeof n?n.split(",").map(String.trim):[JSON.stringify(n)]},castUnit:function(n){return n?void 0!==n.v?(n.v=parseFloat(n.v),isNaN(n.v)?{v:0,u:"px"}:("string"!=typeof n.u&&(n.u="px"),{v:n.v,u:n.u})):"number"==typeof n?{v:n,u:"px"}:"string"!=typeof n?{v:0,u:"px"}:a(""+n):{v:0,u:"px"}},castValidator:function(n){if("function"==typeof n)return n;if("boolean"==typeof n)return function(){return n};if("string"==typeof n&&0!=n.trim().length)try{var t=new RegExp(n);return t.test.bind(t)}catch(t){console.error("[castValidator] /"+n+"/ ",t)}return function(){return null}}};e.fire=function(n,t,e){var r=n[t];void 0===e&&(e=r),n[l][t].value=e,n[l][t].event.fire(n[t],n,t)},e.set=function(n,t,e){void 0===n[l]&&(n[l]={}),void 0===n[l][t]&&(n[l][t]={}),n[l][t].value=e},e.get=function(n,t){if(void 0!==n[l]&&void 0!==n[l][t])return n[l][t].value},e.readOnly=function(n,t,e){"function"==typeof att?Object.defineProperty(n,t,{get:e,set:function(){},configurable:!1,enumerable:!0}):Object.defineProperty(n,t,{value:e,writtable:!1,configurable:!1,enumerable:!0})},e.prop=r.bind(null,null),e.propToggleClass=function(n,t,e,o){"string"!=typeof o&&(o="");var a={};"string"==typeof e?a[e]=e:Array.isArray(e)?e.forEach(function(n){a[n]=n}):a=e,r(null,n,t)(function(t){var e,r;for(e in a)r=a[e],e==t?i.addClass(n.element,o+r):i.removeClass(n.element,o+r)})},e.propAddClass=function(n,t,e){void 0===e&&(e=t),r(f.castBoolean,n,t)(function(t){t?i.addClass(n.element,e):i.removeClass(n.element,e)})},e.propRemoveClass=function(n,t,e){void 0===e&&(e=t),r(f.castBoolean,n,t)(function(t){t?i.removeClass(n.element,e):i.addClass(n.element,e)})},e.propArray=r.bind(null,f.castArray),e.propBoolean=r.bind(null,f.castBoolean),e.propColor=r.bind(null,f.castColor),e.propDate=r.bind(null,f.castDate),e.propEnum=function(n){return r.bind(null,f.castEnum(n))},e.propInteger=r.bind(null,f.castInteger),e.propFloat=r.bind(null,f.castFloat),e.propRegexp=r.bind(null,f.castRegexp),e.propString=r.bind(null,f.castString),e.propStringArray=r.bind(null,f.castStringArray),e.propUnit=r.bind(null,f.castUnit),e.propValidator=r.bind(null,f.castValidator),e.bind=function(n,t,e,r,o){if(void 0===n[l]||void 0===n[l][t])throw console.error(JSON.stringify(t)+" is not a bindable property!",{srcObj:n,srcAtt:t,dstObj:e,dstAtt:r,options:o}),Error(JSON.stringify(t)+" is not a bindable property!");void 0===o&&(o={}),o.value&&(o.converter=function(){return o.value});var i="function"==typeof e?e:function(n,t,i){e[r]="function"==typeof o.converter?o.converter(n):n};return n[l][t].event.add(i),o},e.extend=function(n,t,e){var r,o,i=JSON.parse(JSON.stringify(n));for(r in t)"$"!=r.charAt(0)&&(o=t[r],void 0===i[r]?console.error("[tfw.data-binding.extend] Undefined argument: `"+r+"`!"):i[r]=o);if(void 0!==e){for(r in t)"$"==r.charAt(0)&&Object.defineProperty(e,r,{value:t[r],writable:!1,configurable:!1,enumerable:!1});for(r in i)"$"!=r.charAt(0)&&(e[r]=i[r])}return i},e.converters=f,t.exports._=o});
//# sourceMappingURL=tfw.data-binding.js.map
require("tfw.listeners",function(t,i,r){var n=function(){function i(){return n(r,arguments)}var r={en:{}},n=t("$").intl;return i.all=r,i}(),e=function(){this._list=[]};e.prototype.add=function(t,i){if("function"!=typeof t)return!1;this.remove(t);for(var r=0;r<this._list.length;r++)if(t===this._list[r])return!1;return this._list.push([t,i]),!0},e.prototype.remove=function(t,i){if("function"!=typeof t)return!1;for(var r=0;r<this._list.length;r++){var n=this._list[r];if(t===n[0]&&i===n[1])return this._list.splice(r,1),!0}return!1},e.prototype.clear=function(){this._list=[]},e.prototype.fire=function(){var t,i,r,n,e=[].slice.call(arguments);for(t=0;t<this._list.length;t++)if(n=this._list[t],i=n[0],r=n[1],!1===i.apply(r,e))return!1;return!0},i.exports=e,i.exports._=n});
//# sourceMappingURL=tfw.listeners.js.map
require("tfw.css",function(e,r,t){var i=function(){function r(){return i(t,arguments)}var t={en:{}},i=e("$").intl;return r.all=t,r}();t.parseUnit=function(e){for(var r,t=0,i=0;i<e.length;i++)if(r=e.charAt(i),0==t){if("-"==r||"+"==r||r>="0"&&r<="9")t=1;else if("."==r)t=2;else if(r>" ")break}else if(1==t){if("."==r)t=2;else if(r<"0"||r>"9")break}else if(2==t&&(r<"0"||r>"9"))break;return{v:parseFloat(e.substr(0,i)),u:e.substr(i).trim()}},r.exports._=i});
//# sourceMappingURL=tfw.css.js.map
require("dom",function(t,r,e){function n(t,r,e){return Object.defineProperty(t,"element",{value:r,writable:!1,configurable:!1,enumerable:!0}),e?t:(t.on=c.bind(t,r),t.css=i.bind(t,r),t.add=s.bind(t,r),t.att=a.bind(t,r),t.addClass=d.bind(t,r),t.hasClass=f.bind(t,r),t.removeClass=v.bind(t,r),t.toggleClass=h.bind(t,r),t)}function o(t,r){return r.parentNode.replaceChild(t,r),t}function i(t,r){var e,n;for(e in r)n=r[e],t.style[e]=n;return t}function a(t,r){var e,n;for(e in r)n=r[e],t.setAttribute(e,n);return t}function l(t,r){return t.removeAttribute(r),t}function s(t){try{var r,e;for(r=1;r<arguments.length;r++)e=arguments[r],"string"==typeof e||"number"==typeof e?e=document.createTextNode(e):"function"==typeof e.element&&(e=e.element()),t.appendChild(e);return t}catch(t){throw console.error("[DOM.add] arguments=",[].slice.call(arguments)),Error("[DOM.add] "+t)}}function c(t,r,e){if("function"!=typeof r&&null!==r||(r={tap:r}),Array.isArray(t))return t.forEach(function(t){c(t,r)}),t;void 0===t[C]&&(t[C]=interact(t));var n,o;for(n in r)o=r[n],"keydown"==n||"keyup"==n?t.addEventListener(n,o):t[C].on(n,o);return t}function u(t,r){var e,n,o,i,a=document.createElementNS(t,r);for(e=2;e<arguments.length;e++)if(n=arguments[e],Array.isArray(n))n.forEach(function(t){switch(typeof t){case"string":case"number":case"boolean":t=document.createTextNode(""+t)}s(a,t)});else switch(typeof n){case"string":n.split(" ").forEach(function(t){t.length>0&&d(a,t)});break;case"object":for(o in n)i=n[o],a.setAttribute(o,i);break;default:throw Error("[dom.tag] Error creating <"+r+">: Invalid argument #"+e+"!")}return a}function d(t){var r=[].slice.call(arguments,1);return Array.isArray(t)?(r.unshift(null),t.forEach(function(t){r[0]=t,d.apply(void 0,r)}),t):(r.forEach(function(r){if("string"==typeof r){if(r=r.trim(),0==r.length)return;try{t.classList.add(r)}catch(t){console.error("[dom.addClass] Invalid class name: ",r),console.error(t)}}}),t)}function f(t,r){return t.classList.contains(r)}function v(t){var r=[].slice.call(arguments,1);return Array.isArray(t)?(r.unshift(null),t.forEach(function(t){r[0]=t,v.apply(void 0,r)}),t):(r.forEach(function(r){try{t.classList.remove(r)}catch(t){console.error("[dom.removeClass] Invalid class name: ",r),console.error(t)}}),t)}function h(t){return[].slice.call(arguments,1).forEach(function(r){f(t,r)?v(t,r):d(t,r)}),t}function w(t){for(var r=t;r.firstChild;)r.removeChild(r.firstChild);var e=[].slice.call(arguments);return e.length>1&&s.apply(this,e),t}function m(t,r){return void 0===r&&(r=t,t=window.document),t.querySelector(r)}function g(t){var r=t.parentElement;return r?(r.removeChild(t),r):r}function p(t){var r=[].slice.call(arguments);r.shift(),0==r.length&&(r=["div"]);var n=e.tag.apply(e,r);return Object.defineProperty(t,"element",{value:n,writable:!1,configurable:!1,enumerable:!0}),n}function b(t,r){return"string"!=typeof r&&(r=JSON.stringify(r)),"<html>"==r.substr(0,6)?t.innerHTML=r.substr(6):t.textContent=r,t}var y=function(){function r(){return n(e,arguments)}var e={en:{},fr:{}},n=t("$").intl;return r.all=e,r}();t("polyfill.classList");var C="dom"+Date.now();e.tagNS=u,e.svgRoot=u.bind(void 0,"http://www.w3.org/2000/svg","svg",{version:"1.1","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),e.svg=u.bind(void 0,"http://www.w3.org/2000/svg"),e.tag=u.bind(void 0,"http://www.w3.org/1999/xhtml"),e.div=u.bind(void 0,"http://www.w3.org/1999/xhtml","div"),e.txt=window.document.createTextNode.bind(window.document),e.textOrHtml=b,e.get=m,e.elem=p,e.css=i,e.att=a,e.removeAtt=l,e.addClass=d,e.hasClass=f,e.removeClass=v,e.toggleClass=h,e.replace=o,e.detach=g,e.on=c,e.add=s,e.wrap=n,e.clear=w,r.exports._=y});
//# sourceMappingURL=dom.js.map
require("polyfill.classList",function(t,e,n){var i=function(){function e(){return i(n,arguments)}var n={en:{}},i=t("$").intl;return e.all=n,e}();"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;n<i;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():function(t){"use strict";if("Element"in t){var e=t.Element.prototype,n=Object,i=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},s=Array.prototype.indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},r=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},o=function(t,e){if(""===e)throw new r("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new r("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},c=function(t){for(var e=i.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],s=0,r=n.length;s<r;s++)this.push(n[s]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},a=c.prototype=[],l=function(){return new c(this)};if(r.prototype=Error.prototype,a.item=function(t){return this[t]||null},a.contains=function(t){return t+="",o(this,t)!==-1},a.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do{t=e[n]+"",o(this,t)===-1&&(this.push(t),s=!0)}while(++n<i);s&&this._updateClassName()},a.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do{for(t=n[i]+"",e=o(this,t);e!==-1;)this.splice(e,1),r=!0,e=o(this,t)}while(++i<s);r&&this._updateClassName()},a.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},a.toString=function(){return this.join(" ")},n.defineProperty){var u={get:l,enumerable:!0,configurable:!0};try{n.defineProperty(e,"classList",u)}catch(t){t.number===-2146823252&&(u.enumerable=!1,n.defineProperty(e,"classList",u))}}else n.prototype.__defineGetter__&&e.__defineGetter__("classList",l)}}(self)),e.exports._=i});
//# sourceMappingURL=polyfill.classList.js.map
require("polyfill.string",function(r,t,n){var e=function(){function t(){return e(n,arguments)}var n={en:{}},e=r("$").intl;return t.all=n,t}();"function"!=typeof String.toLowerCase&&(String.toLowerCase=function(r){return r.toLowerCase()},String.toUpperCase=function(r){return r.toUpperCase()},String.trim=function(r){return r.trim()}),t.exports._=e});
//# sourceMappingURL=polyfill.string.js.map
require("x-widget",function(e,t,r){function n(t,r,n){try{var i=e(r),a=new i(n),d="function"==typeof a.element?a.element():a.element;d.setAttribute("id",t);var c=document.getElementById(t);return c&&c.parentNode.replaceChild(d,c),o(t,a),a}catch(e){throw console.error("[x-widget] Unable to create widget `"+r+"`!"),console.error("[x-widget] id = ",t,", args = ",n),Error(e)}}function i(e){var t,r=d.tag(e.elem);e.attr&&(d.att(r,e.attr),t=e.attr.id),Array.isArray(e.children)&&e.children.forEach(function(e){d.add(r,e)});var n,i,a={};if(e.prop)for(n in e.prop)i=e.prop[n],Object.defineProperty(a,n,{value:i,writable:!1,configurable:!1,enumerable:!0});return Object.defineProperty(a,"element",{value:r,writable:!1,configurable:!1,enumerable:!0}),void 0!==t&&o(t,a),a}function o(e,t){f[e]=t;var r=u[e];return void 0!==r&&window.setTimeout(function(){r.forEach(function(e){e(t)}),delete u[e]}),"function"==typeof t.element?t.element:t.element||t}var a=function(){function t(){return n(r,arguments)}var r={en:{}},n=e("$").intl;return t.all=r,t}(),d=e("dom"),c=e("tfw.data-binding"),f={},u={},l=function(e,t,r){return"string"==typeof e?n.call(this,e,t,r):i.call(this,e)};l.template=function(t){var r,n,i,a="",d={};for(r in t)n=t[r],"name"==r?a=n:"id"==r?i=n:"$"==r.charAt(0)&&(d[r.substr(1)]=n);var c=e(a),f=new c(d);return i&&o(i,f),"function"==typeof f.element?f.element():f.element||f},l.getById=function(e){if(!f[e])throw Error("[x-widget.getById()] ID not found: "+e+"!");return f[e]},l.onWidgetCreation=function(e,t){void 0===f[e]?void 0===u[e]?u[e]=[t]:u[e].push(t):window.setTimeout(function(){t(f[e])})},l.bind=function(t,r){var n,i,o,a,d,u=f[t];for(n in r)a=r[n].B,Array.isArray(a)&&a.forEach(function(e){if(void 0===(i=f[e[0]]))return void console.error("[x-widget:bind("+t+')] Trying to bind attribute "'+n+'" of widget "'+t+'" to the unexisting widget "'+e[0]+'"!');o=e[1];try{if(2==e.length)c.bind(i,o,u,n);else{var r=e[2];c.bind(i,o,function(){u[n]=r})}}catch(r){console.error("Binding error for widget `"+t+"`!",{ex:r,binding:e})}}),d=r[n].S,Array.isArray(d)&&d.forEach(function(r){var i=APP,o=r;if(Array.isArray(r)){try{i=e(r[0])}catch(e){throw console.error("[x-widget:bind] Widget `"+t+"` can't require `"+r[0]+"`: ",e),e}o=r[1]}if("function"!=typeof(o=i[o]))throw Error("[x-widget:bind]  Widget `"+t+"` use unexisting slot `"+r[1]+"` of module `"+r[0]+"`!");try{c.bind(u,n,o)}catch(e){console.error("Binding error for widget `"+t+"`!",{ex:e,dstObj:u,dstAtt:n,fct:o,slot:r})}})},t.exports=l,t.exports._=a});
//# sourceMappingURL=x-widget.js.map
require("polyfill.mathml",function(e,t,n){function r(e){var t=document.createElement("div");return t.className="math",t.innerHTML=e.innerHTML,t}var i=function(){function t(){return r(n,arguments)}var n={en:{},fr:{}},r=e("$").intl;return t.all=n,t}();!function(){var e,t=document.createElement("div");return t.innerHTML="<math><mspace height='23px' width='77px'/></math>",document.body.appendChild(t),e=t.firstChild.firstChild.getBoundingClientRect(),document.body.removeChild(t),Math.abs(e.height-23)<=1&&Math.abs(e.width-77)<=1}()?(!function(){for(var e,t=document.querySelectorAll("math"),n=0;n<t.length;n++)e=t[n],e.parentNode.replaceChild(r(e),e)}(),console.warn("MathML is not supported! The polyfill will be activated.")):console.log("MathML is supported!"),t.exports._=i});
//# sourceMappingURL=polyfill.mathml.js.map
