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
        W('wdg.carmag.decshift0', 'wdg.carmag.decshift', {})

    }
);
require("$",function(n,r,o){o.config={name:'"grenier"',description:'"Articles concernant majoritairement l\'algorithmie"',author:'"Tolokoban"',version:'"1.0.518"',major:"1",minor:"0",revision:"518",date:"2016-11-08T11:53:42.000Z",consts:{}};var t=null;o.lang=function(n){return void 0===n&&(window.localStorage&&(n=window.localStorage.getItem("Language")),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage&&window.localStorage.setItem("Language",n),n},o.intl=function(n,r){var t,a,e,i,g,l,u=n[o.lang()],c=r[0];if(!u)return c;if(t=u[c],!t)return c;if(r.length>1){for(a="",g=0,e=0;e<t.length;e++)i=t.charAt(e),"$"===i?(a+=t.substring(g,e),e++,l=t.charCodeAt(e)-48,a+=l<0||l>=r.length?"$"+t.charAt(e):r[l],g=e+1):"\\"===i&&(a+=t.substring(g,e),e++,a+=t.charAt(e),g=e+1);a+=t.substr(g),t=a}return t}});
//# sourceMappingURL=$.js.map
require("wdg.carmag.decshift",function(a,d,n){function t(){return i(f,arguments)}function r(a){var d,n,t,r,f,i,e=s.elem(this,"ul","wdg-carmag-decshift"),g=[];for(i=4;i<65;i+=2)g.push(i);for(i=7;i<11;i++)g.push(1<<i);g.forEach(function(a){for(d=s.tag("li"),s.add(e,d),s.add(d,s.tag("b",[""+a])),n=[0],s.add(d,s.tag("span",[" : 0"])),f=!0,t=a-1;t>0;t--)r=(n[n.length-1]+t)%a,n.indexOf(r)!=-1&&(f=!1),s.add(d,s.tag("span",[", "]),s.tag("span",n.indexOf(r)!=-1?"bad":"",[""+r])),n.push(r);s.add(d,s.tag("span",["."])),f&&s.addClass(d,"ok")})}var f={en:{},fr:{}},i=a("$").intl,s=a("dom");a("tfw.data-binding");d.exports=r,d.exports._=t});
//# sourceMappingURL=wdg.carmag.decshift.js.map
require("tfw.data-binding",function(n,e,t){function r(){return a(i,arguments)}function o(n,e,r,o){var i="function"==typeof o;"undefined"==typeof e[l]&&(e[l]={}),e[l][r]={value:o,event:new f};var a;a="function"==typeof n?function(t){t=n(t),(i||e[l][r].value!==t)&&(e[l][r].value=t,e[l][r].event.fire(t,e,r))}:function(n){(i||e[l][r].value!==n)&&(e[l][r].value=n,e[l][r].event.fire(n,e,r))};var u=o;return i||(u=function(){return e[l][r].value}),Object.defineProperty(e,r,{get:u,set:a,configurable:!1,enumerable:!0}),t.bind.bind(t,e,r)}var i={en:{}},a=n("$").intl;n("polyfill.string");var u=n("dom"),f=n("tfw.listeners"),l="_tfw.data-binding_",c={castArray:function(n){return Array.isArray(n)?n:[n]},castBoolean:function(n){if("boolean"==typeof n)return n;if("string"==typeof n){if(n=n.trim().toLowerCase(),"1"==n||"true"==n||"yes"==n)return!0;if("0"==n||"false"==n||"no"==n)return!1}return"number"==typeof n?!!n:null},castColor:function(n){return""+n},castEnum:function(n){var e=n.map(String.toLowerCase);return function(t){if("number"==typeof t)return n[Math.floor(t)%n.length];if("string"!=typeof t)return n[0];var r=e.indexOf(t.trim().toLowerCase());return r<0&&(r=0),n[r]}},castInteger:function(n){return"number"==typeof n?Math.floor(n):"boolean"==typeof n?n?1:0:"string"==typeof n?parseInt(n):Number.NaN},castRegexp:function(n){if(n instanceof RegExp)return n;if("string"==typeof n&&0!=n.trim().length)try{return new RegExp(n)}catch(e){console.error("[castRegexp] /"+n+"/ ",e)}return null},castString:function(n){return"string"==typeof n?n:void 0===n||null===n?"":JSON.stringify(n)},castStringArray:function(n){return Array.isArray(n)?n:"string"==typeof n?n.split(",").map(String.trim):[JSON.stringify(n)]},castUnit:function(n){return""+n},castValidator:function(n){if("function"==typeof n)return n;if("boolean"==typeof n)return function(){return n};if("string"==typeof n&&0!=n.trim().length)try{var e=new RegExp(n);return e.test.bind(e)}catch(e){console.error("[castValidator] /"+n+"/ ",e)}return function(){return null}}};t.fire=function(n,e,t){var r=n[e];"undefined"==typeof t&&(t=r),n[l][e].value=t,n[l][e].event.fire(n[e],n,e)},t.set=function(n,e,t){n[l][e].value=t},t.prop=o.bind(null,null),t.propToggleClass=function(n,e,t,r){"string"!=typeof r&&(r="");var i={};"string"==typeof t?i[t]=t:Array.isArray(t)?t.forEach(function(n){i[n]=n}):i=t,o(null,n,e)(function(e){var t,o;for(t in i)o=i[t],t==e?u.addClass(n.element,r+o):u.removeClass(n.element,r+o)})},t.propAddClass=function(n,e,t){"undefined"==typeof t&&(t=e),o(c.castBoolean,n,e)(function(e){e?u.addClass(n.element,t):u.removeClass(n.element,t)})},t.propRemoveClass=function(n,e,t){"undefined"==typeof t&&(t=e),o(c.castBoolean,n,e)(function(e){e?u.removeClass(n.element,t):u.addClass(n.element,t)})},t.propArray=o.bind(null,c.castArray),t.propBoolean=o.bind(null,c.castBoolean),t.propColor=o.bind(null,c.castColor),t.propEnum=function(n){return o.bind(null,c.castEnum(n))},t.propInteger=o.bind(null,c.castInteger),t.propRegexp=o.bind(null,c.castRegexp),t.propString=o.bind(null,c.castString),t.propStringArray=o.bind(null,c.castStringArray),t.propUnit=o.bind(null,c.castUnit),t.propValidator=o.bind(null,c.castValidator),t.bind=function(n,e,t,r,o){if("undefined"==typeof n[l]||"undefined"==typeof n[l][e])throw console.error(e+" is not a bindable property of ",n),Error(e+" is not a bindable property!");"undefined"==typeof o&&(o={}),o.value&&(o.converter=function(){return o.value});var i="function"==typeof t?t:function(n,e,i){t[r]="function"==typeof o.converter?o.converter(n):n};return n[l][e].event.add(i),o},t.extend=function(n,e,t){var r,o,i=JSON.parse(JSON.stringify(n));for(r in e)"$"!=r.charAt(0)&&(o=e[r],"undefined"==typeof i[r]?console.error("[tfw.data-binding.extend] Undefined argument: `"+r+"`!"):i[r]=o);if("undefined"!=typeof t){for(r in e)"$"==r.charAt(0)&&Object.defineProperty(t,r,{value:e[r],writable:!1,configurable:!1,enumerable:!1});for(r in i)"$"!=r.charAt(0)&&(t[r]=i[r])}return i},t.converters=c,e.exports._=r});
//# sourceMappingURL=tfw.data-binding.js.map
require("tfw.listeners",function(t,i,r){function e(){return s(n,arguments)}var n={en:{}},s=t("$").intl,o=function(){this._list=[]};o.prototype.add=function(t,i){if("function"!=typeof t)return!1;this.remove(t);for(var r=0;r<this._list.length;r++)if(t===this._list[r])return!1;return this._list.push([t,i]),!0},o.prototype.remove=function(t,i){if("function"!=typeof t)return!1;for(var r=0;r<this._list.length;r++){var e=this._list[r];if(t===e[0]&&i===e[1])return this._list.splice(r,1),!0}return!1},o.prototype.clear=function(){this._list=[]},o.prototype.fire=function(){var t,i,r,e,n=[].slice.call(arguments);for(t=0;t<this._list.length;t++)if(e=this._list[t],i=e[0],r=e[1],!1===i.apply(r,n))return!1;return!0},i.exports=o,i.exports._=e});
//# sourceMappingURL=tfw.listeners.js.map
require("dom",function(t,e,r){function n(){return x(C,arguments)}function o(t,e,r){return Object.defineProperty(t,"element",{value:e,writable:!1,configurable:!1,enumerable:!0}),r?t:(t.on=u.bind(t,e),t.css=a.bind(t,e),t.add=c.bind(t,e),t.att=l.bind(t,e),t.addClass=f.bind(t,e),t.hasClass=v.bind(t,e),t.removeClass=h.bind(t,e),t.toggleClass=w.bind(t,e),t)}function i(t,e){return e.parentNode.replaceChild(t,e),t}function a(t,e){var r,n;for(r in e)n=e[r],t.style[r]=n;return t}function l(t,e){var r,n;for(r in e)n=e[r],t.setAttribute(r,n);return t}function s(t,e){return t.removeAttribute(e),t}function c(t){try{var e,r;for(e=1;e<arguments.length;e++)r=arguments[e],"string"==typeof r||"number"==typeof r?r=document.createTextNode(r):"function"==typeof r.element&&(r=r.element()),t.appendChild(r);return t}catch(t){throw console.error("[DOM.add] arguments=",[].slice.call(arguments)),Error("[DOM.add] "+t)}}function u(t,e,r){if("function"!=typeof e&&null!==e||(e={tap:e}),Array.isArray(t))return t.forEach(function(t){u(t,e)}),t;"undefined"==typeof t[E]&&(t[E]=interact(t));var n,o;for(n in e)o=e[n],"keydown"==n||"keyup"==n?t.addEventListener(n,o):t[E].on(n,o);return t}function d(t,e){var r,n,o,i,a=document.createElementNS(t,e);for(r=2;r<arguments.length;r++)if(n=arguments[r],Array.isArray(n))n.forEach(function(t){switch(typeof t){case"string":case"number":case"boolean":t=document.createTextNode(""+t)}c(a,t)});else switch(typeof n){case"string":n.split(" ").forEach(function(t){t.length>0&&f(a,t)});break;case"object":for(o in n)i=n[o],a.setAttribute(o,i);break;default:throw Error("[dom.tag] Error creating <"+e+">: Invalid argument #"+r+"!")}return a}function f(t){var e=[].slice.call(arguments,1);return Array.isArray(t)?(e.unshift(null),t.forEach(function(t){e[0]=t,f.apply(void 0,e)}),t):(e.forEach(function(e){if("string"==typeof e){if(e=e.trim(),0==e.length)return;try{t.classList.add(e)}catch(t){console.error("[dom.addClass] Invalid class name: ",e),console.error(t)}}}),t)}function v(t,e){return t.classList.contains(e)}function h(t){var e=[].slice.call(arguments,1);return Array.isArray(t)?(e.unshift(null),t.forEach(function(t){e[0]=t,h.apply(void 0,e)}),t):(e.forEach(function(e){try{t.classList.remove(e)}catch(t){console.error("[dom.removeClass] Invalid class name: ",e),console.error(t)}}),t)}function w(t){var e=[].slice.call(arguments,1);return e.forEach(function(e){v(t,e)?h(t,e):f(t,e)}),t}function m(t){for(var e=t;e.firstChild;)e.removeChild(e.firstChild);var r=[].slice.call(arguments);return r.length>1&&c.apply(this,r),t}function g(t,e){return"undefined"==typeof e&&(e=t,t=window.document),t.querySelector(e)}function p(t){var e=t.parentElement;return e?(e.removeChild(t),e):e}function y(t){var e=[].slice.call(arguments);e.shift(),0==e.length&&(e=["div"]);var n=r.tag.apply(r,e);return Object.defineProperty(t,"element",{value:n,writable:!1,configurable:!1,enumerable:!0}),n}function b(t,e){return"string"!=typeof e&&(e=JSON.stringify(e)),"<html>"==e.substr(0,6)?t.innerHTML=e.substr(6):t.textContent=e,t}var C={en:{},fr:{}},x=t("$").intl;t("polyfill.classList");var E="dom"+Date.now();r.tagNS=d,r.svgRoot=d.bind(void 0,"http://www.w3.org/2000/svg","svg",{version:"1.1","xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}),r.svg=d.bind(void 0,"http://www.w3.org/2000/svg"),r.tag=d.bind(void 0,"http://www.w3.org/1999/xhtml"),r.div=d.bind(void 0,"http://www.w3.org/1999/xhtml","div"),r.txt=window.document.createTextNode.bind(window.document),r.textOrHtml=b,r.get=g,r.elem=y,r.css=a,r.att=l,r.removeAtt=s,r.addClass=f,r.hasClass=v,r.removeClass=h,r.toggleClass=w,r.replace=i,r.detach=p,r.on=u,r.add=c,r.wrap=o,r.clear=m,e.exports._=n});
//# sourceMappingURL=dom.js.map
require("polyfill.classList",function(t,e,n){function i(){return r(s,arguments)}var s={en:{}},r=t("$").intl;"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?!function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;n<i;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;e<n;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;i<s;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],f=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return t+="",a(this,t)!==-1},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",a(this,t)===-1&&(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);e!==-1;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.toString=function(){return this.join(" ")},s.defineProperty){var h={get:f,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,h)}catch(t){t.number===-2146823252&&(h.enumerable=!1,s.defineProperty(i,e,h))}}else s[n].__defineGetter__&&i.__defineGetter__(e,f)}}(self)),e.exports._=i});
//# sourceMappingURL=polyfill.classList.js.map
require("polyfill.string",function(t,r,n){function e(){return i(o,arguments)}var o={en:{}},i=t("$").intl;"function"!=typeof String.toLowerCase&&(String.toLowerCase=function(t){return t.toLowerCase()},String.toUpperCase=function(t){return t.toUpperCase()},String.trim=function(t){return t.trim()}),r.exports._=e});
//# sourceMappingURL=polyfill.string.js.map
require("x-widget",function(e,t,n){function r(){return d(a,arguments)}function i(t,n,r){try{var i=e(n),o=new i(r),a="function"==typeof o.element?o.element():o.element;a.setAttribute("id",t);var d=document.getElementById(t);return d&&d.parentNode.replaceChild(a,d),f(t,o),o}catch(e){throw console.error("[x-widget] Unable to create widget `"+n+"`!"),console.error("[x-widget] id = ",t,", args = ",r),Error(e)}}function o(e){var t,n=u.tag(e.elem);e.attr&&(u.att(n,e.attr),t=e.attr.id),Array.isArray(e.children)&&e.children.forEach(function(e){u.add(n,e)});var r,i,o={};if(e.prop)for(r in e.prop)i=e.prop[r],Object.defineProperty(o,r,{value:i,writable:!1,configurable:!1,enumerable:!0});return Object.defineProperty(o,"element",{value:n,writable:!1,configurable:!1,enumerable:!0}),"undefined"!=typeof t&&f(t,o),o}function f(e,t){l[e]=t;var n=y[e];return"undefined"!=typeof n&&window.setTimeout(function(){n.forEach(function(e){e(t)}),delete y[e]}),"function"==typeof t.element?t.element:t.element||t}var a={en:{}},d=e("$").intl,u=e("dom"),c=e("tfw.data-binding"),l={},y={},p=function(e,t,n){return"string"==typeof e?i.call(this,e,t,n):o.call(this,e)};p.template=function(t){var n,r,i,o="",a={};for(n in t)r=t[n],"name"==n?o=r:"id"==n?i=r:"$"==n.charAt(0)&&(a[n.substr(1)]=r);var d=e(o),u=new d(a);return i&&f(i,u),"function"==typeof u.element?u.element():u.element||u},p.getById=function(e){if(!l[e])throw Error("[x-widget.getById()] ID not found: "+e+"!");return l[e]},p.onWidgetCreation=function(e,t){"undefined"==typeof l[e]?"undefined"==typeof y[e]?y[e]=[t]:y[e].push(t):window.setTimeout(function(){t(l[e])})},p.bind=function(t,n){var r,i,o,f,a,d=l[t];for(r in n)f=n[r].B,Array.isArray(f)&&f.forEach(function(e){if(i=l[e[0]],"undefined"==typeof i)return void console.error('[x-widget:bind] Trying to bind attribute "'+r+'" of widget "'+t+'" to the unexisting widget "'+e[0]+'"!');if(o=e[1],2==e.length)c.bind(i,o,d,r);else{var n=e[2];c.bind(i,o,function(){d[r]=n})}}),a=n[r].S,Array.isArray(a)&&a.forEach(function(t){var n=APP,i=t;Array.isArray(t)&&(n=e(t[0]),i=t[1]),i=n[i],"function"!=typeof i?console.error("[x-widget:bind] slot not found: ",t):c.bind(d,r,i)})},t.exports=p,t.exports._=r});
//# sourceMappingURL=x-widget.js.map
require("polyfill.mathml",function(e,t,n){function i(){return d(a,arguments)}function r(){var e,t=document.createElement("div");return t.innerHTML="<math><mspace height='23px' width='77px'/></math>",document.body.appendChild(t),e=t.firstChild.firstChild.getBoundingClientRect(),document.body.removeChild(t),Math.abs(e.height-23)<=1&&Math.abs(e.width-77)<=1}function o(){for(var e,t=document.querySelectorAll("math"),n=0;n<t.length;n++)e=t[n],e.parentNode.replaceChild(l(e),e)}function l(e){var t=document.createElement("div");return t.className="math",t.innerHTML=e.innerHTML,t}var a={en:{},fr:{}},d=e("$").intl;r()?console.log("MathML is supported!"):(o(),console.warn("MathML is not supported! The polyfill will be activated.")),t.exports._=i});
//# sourceMappingURL=polyfill.mathml.js.map
