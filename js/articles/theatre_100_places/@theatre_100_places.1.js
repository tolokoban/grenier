<<<<<<< HEAD
function addListener(e,t){window.addEventListener?window.addEventListener(e,t,!1):window.attachEvent("on"+e,t)}var require=function(){var e={};return function(t,r){var i;if(r=window["#"+t],"undefined"==typeof r){var a=new Error("Required module is missing: "+t);throw console.error(a.stack),a}if(i=e[t],"undefined"==typeof i){i={exports:{}};var n=i.exports;r(n,i),e[t]=i.exports,i=i.exports}return i}}();addListener("DOMContentLoaded",function(){document.body.parentNode.$data={};try{require("x-widget")("theatre1000","theatre100","")}catch(e){console.error("Unable to initialize theatre100!",e)}try{require("x-widget")("theatre100.main1","theatre100.main",{size:2})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main2","theatre100.main",{size:3})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main3","theatre100.main",{size:4})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main4","theatre100.main",{size:5})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main5","theatre100.main",{size:6})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main6","theatre100.main",{size:7})}catch(e){console.error("Unable to initialize theatre100.main!",e)}});
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.515",major:1,minor:0,revision:515,date:new Date(2016,1,4,18,34,34)};var t=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,t){var a,e,o,i,g,l,u=r[n.lang()],s=t[0];if(!u)return s;if(a=u[s],!a)return s;if(t.length>1){for(e="",g=0,o=0;o<a.length;o++)i=a.charAt(o),"$"===i?(e+=a.substring(g,o),o++,l=a.charCodeAt(o)-48,e+=0>l||l>=t.length?"$"+a.charAt(o):t[l],g=o+1):"\\"===i&&(e+=a.substring(g,o),o++,e+=a.charAt(o),g=o+1);e+=a.substr(g),a=e}return a}};
window["#theatre100.main"]=function(t,i){"use strict";function s(t,i){if(i>t.length)return void this.add(t);var e,n=this._args;if(0==t[i-1])t[i-1]=i,s.call(this,t,i+1),t[i-1]=0;else for(e=0;e<n.size;e++)0==t[e]&&(t[e]=i,s.call(this,t,i+1),t[e]=0)}var e=require("wdg"),n=function(t){e.call(this),this.addClass("theatre100-main"),"undefined"==typeof t&&(t={}),"undefined"==typeof t.size&&(t.size=5),this._args=t;var i,n=[];for(i=0;i<t.size;i++)n.push(0);for(this._count=0,this._wins=0,i=0;i<t.size;i++)n[i]=1,s.call(this,n,2),n[i]=0;this.append(" "+this._wins+" / "+this._count," ("+(100*this._wins/this._count).toFixed(0)+" %)")};n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.add=function(t){return t.forEach(function(i,s){var n=e.tag("span").text(i).addClass(i==s+1?"ok":"ko");s==t.length-1&&(n.addClass("last"),i==s+1&&this._wins++,this._count++),this.append(n)},this),this.append(e.tag("span").text(" "))},n.create=function(t){return new n(t)},i.exports=n};
window["#wdg"]=function(t,e){"use strict";function n(t){this.__data={};try{var e;if("undefined"==typeof t&&(t={}),"undefined"!=typeof t.innerHTML&&"undefined"!=typeof t.childNodes&&(t={element:t}),"undefined"==typeof t.tag&&(t.tag="div"),t.element)this.element(t.element);else if("undefined"!=typeof t.id){if(e=window.document.getElementById(t.id),!e)throw Error("Can't find element with id: \""+t.id+'"!');this.element(e)}else this.element(window.document.createElement(t.tag)),this.addClass("wdg","custom")}catch(n){throw console.error("[widget] ",n),console.error("[Widget] ",JSON.stringify(t)),Error(n)}}n.prototype={element:function(t){return void 0===t?this._element:("string"==typeof t&&(t=window.document.querySelector(t)),this._element=t,this)},data:function(t,e){return"undefined"==typeof e?this.__data[t]:(this.__data[t]=e,this)},detach:function(){var t=this._element;if(t){var e=t.parentNode;e&&e.removeChild(t)}return this},addEvent:function(t,e,n){if("string"==typeof e){var i=e;"undefined"==typeof n&&(n=this),e=function(t){var r=n[i];if("function"!=typeof r)throw Error('"'+e+'" is not a function of: '+n);r.call(n,t)}}var r=this.element();return"tap"==t?(r.addEventListener("mousedown",function(t){t.preventDefault(),t.stopPropagation()},!1),r.addEventListener("mouseup",function(t){t.preventDefault(),t.stopPropagation(),e(t)},!1),r.addEventListener("touchend",e,!1)):r.addEventListener(t,e,!1),this},removeAttr:function(){if(this._element){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],this._element.removeAttribute(e)}return this},hasAttribute:function(t){return this._element?this._element.hasAttribute(t):!1},attr:function(t,e,n){var i;if(!this._element||!this._element.getAttribute)return null;if("string"==typeof t)return void 0!==e?"class"==t?(this._element.className=e,this):(n&&this._element.setAttributeNS?this._element.setAttributeNS(n,t,e):this._element.setAttribute(t,e),this):this._element.getAttribute(t);if("object"==typeof t)for(i in t)"class"==i?this._element.className=t[i]:"$"==i?this.text(t[i]):this._element.setAttribute(i,t[i]);return this},css:function(t,e){var n,i=this._element;if(!i)return null;if("object"!=typeof i.style&&(console.error("[wdg.css] This element does not support styles!",i),i.style={}),"string"==typeof t)return e?(i.style[t]=e,this):i.style[t];if("object"==typeof t)for(n in t)try{i.style[n]=t[n]}catch(r){console.error("[wdg.css] Bad CSS attribute "+n+": "+t[n])}return this},insertAfter:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t.nextSibling),this},insertBefore:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t),this},append:function(){var t,e;for(t=0;t<arguments.length;t++)if(e=arguments[t],"number"==typeof e&&(e=""+e),"undefined"==typeof e||"object"!=typeof e&&"string"!=typeof e)console.error("[Widget.append] Argument #"+t+" is invalid!",arguments),console.error("[Widget.append] Is type is: "+typeof e);else{if("string"==typeof e&&(e.length<1&&(e=" "),e=window.document.createTextNode(e),!e))throw console.error("[Widget.append] Unable to create a text node with this text: ",e),console.error("[wdg] arguments=...",arguments),Error("[Widget.append] Unable to create a text node with this text: "+JSON.stringify(e));if(Array.isArray(e))e.forEach(function(t){this.append(t)},this);else{var n="function"==typeof e.element?e.element():e;this._element.appendChild(n)}}return this},appendTo:function(t){return t?("function"==typeof t.append?t.append(this):"function"==typeof t.appendChild&&(t.appendChild(this._element),this.onAppend()),this):this},appendToBody:function(){return window.document.body.appendChild(this._element),this},hasClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)if(e=arguments[t],!n.contains(e))return!1;return!0},addClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],"string"==typeof e?(e=e.trim(),e.length>0&&n.add(e)):console.error("[wdg.addClass] Arguments with bad type!",arguments);return this},removeClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.remove(e);return this},toggleClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.toggle(e);return this},clear:function(){for(var t=this.element();t.firstChild;)t.removeChild(t.firstChild);var e,n;for(e=0;e<arguments.length;e++)n=arguments[e],this.append(n);return this},text:function(t){var e,n,i,r;if("string"==typeof t||"number"==typeof t)return this.clear(),this._element.appendChild(window.document.createTextNode(t)),this;if(e=this._element,void 0!==t&&(e=t),n="",e.childNodes)for(i=0;i<e.childNodes.length;i++)r=e.childNodes[i],3==r.nodeType?r.nodeValue&&(n+=r.nodeValue):n+=this.text(r);return n},html:function(t){return"undefined"==typeof t?this._element.innerHTML:(this._element&&(this._element.innerHTML=t),this)},focus:function(){var t=this._element;return t?("function"==typeof t.focus&&t.focus(),this):this},rect:function(){var t=this._element;return t?t.getBoundingClientRect():null},Tap:function(t,e){if("undefined"==typeof t)return this._Tap;var n=this;return"undefined"==typeof e&&(e=n),"string"==typeof t&&(t=e[t]),this._Tap||this.activatePointerEvents(),this._Tap=[t,e],this}},n.prototype.activatePointerEvents=function(){if(this._pointerEvents)return this;this._pointerEvents={start:0};var t=this._pointerEvents,e=this;return this.addEvent("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t.touch=1,t.start=Date.now()}),this.addEvent("touchend",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){t.touch=0;var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this.addEvent("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t.touch||(t.start=Date.now())}),this.addEvent("mouseup",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this},n.prototype.div=function(){for(var t=new n,e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.prototype.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.prototype.isInDOM=function(){return n.isInDOM(this.element())},n.prototype.onAppend=function(){},n.create=function(t){return new n(t)},n.find=function(t){return new n({element:window.document.querySelector(t)})},n.svg=function(t,e){var i="http://www.w3.org/2000/svg";"object"==typeof t&&(e=t,t="svg"),"string"!=typeof t&&(t="svg");var r=window.document.createElementNS(i,t),s=new n({element:r});return"undefined"==typeof e&&(e={}),"svg"==t&&("undefined"==typeof e.version&&(e.version="1.1"),"undefined"==typeof e["xmlns:svg"]&&(e["xmlns:svg"]="http://www.w3.org/2000/svg"),"undefined"==typeof e.xmlns&&(e.xmlns="http://www.w3.org/2000/svg"),"undefined"==typeof e["xmlns:xlink"]&&(e["xmlns:xlink"]="http://www.w3.org/1999/xlink"),"undefined"==typeof e.viewBox&&"number"==typeof e.width&&"number"==typeof e.height&&(e.viewBox="0 0 "+e.width+" "+e.height)),"object"==typeof e&&s.attr(e),s},n.isInDOM=function(t){return t?("function"==typeof t.element&&(t=t.element()),t===window.document?!0:n.isInDOM(t.parentNode)):!1},n.fromTextOrHtml=function(t){var e=n.span();return"<html>"==t.substr(0,6)?e.html(t.substr(6)):e.text(t),e},n.div=function(){for(var t=new n({tag:"div"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.span=function(){for(var t=new n({tag:"span"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.id=function(t){return new n({element:window.document.getElementById(t)})},n.body=new n(window.document.body),e.exports=n,"classList"in window.document.createElement("_")?!function(){var t=window.document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(){if("Element"in window){var t="classList",e="prototype",n=window.Element[e],i=Object,r=String.prototype.trim||function(){var t=new RegExp("^\\s+|\\s+$","g");return this.replace(t,"")},s=Array[e].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(new RegExp("\\s").test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(new RegExp("\\s+")):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},d=u[e]=[],f=function(){return new u(this)};if(o[e]=Error[e],d.item=function(t){return this[t]||null},d.contains=function(t){return t+="",-1!==a(this,t)},d.add=function(){var t,e=arguments,n=0,i=e.length,r=!1;do t=e[n]+"",-1===a(this,t)&&(this.push(t),r=!0);while(++n<i);r&&this._updateClassName()},d.remove=function(){var t,e,n=arguments,i=0,r=n.length,s=!1;do for(t=n[i]+"",e=a(this,t);-1!==e;)this.splice(e,1),s=!0,e=a(this,t);while(++i<r);s&&this._updateClassName()},d.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},d.toString=function(){return this.join(" ")},i.defineProperty){var l={get:f,enumerable:!0,configurable:!0};try{i.defineProperty(n,t,l)}catch(h){-2146823252===h.number&&(l.enumerable=!1,i.defineProperty(n,t,l))}}else i[e].__defineGetter__&&n.__defineGetter__(t,f)}}()};
window["#x-widget"]=function(e,t){"use strict";t.exports=function(e,t,n){var i=document.getElementById(e);if(i){var r=require(t),d=new r(n);d.element().$ctrl=d,d=d.element(),d.setAttribute("id",e),i.parentNode.replaceChild(d,i)}}};
window["#theatre100"]=function(e,t){"use strict";var i=require("wdg"),a=i.div,r=function(){var e=this;i.call(this),this.addClass("theatre100");var t,r,n,l,s=a("tbl"),o=0,d=[];for(t=0;10>t;t++){for(n=a(),r=0;10>r;r++)l=a().text((10>o?"0":"")+o++),n.append(l),d.push(l);s.append(n)}s.Tap(function(){e.refresh()}),this.append(s,a().text("Cliquez sur la grille pour lancer une autre simulation.")),this._cells=d,this.refresh()};r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype.refresh=function(){var e=this,t=[];this._cells.forEach(function(e,i){e.removeClass("ok","ko").text((10>i?"0":"")+i),t.push(-1)}),t.index=0,this._places=t,this._interval&&clearInterval(this._interval),this._delay=1,this._interval=setInterval(function(){if(this._delay--,!(this._delay>0)){this._delay=1;var t=e._places;if(t.index>=t.length)clearInterval(e._interval),e._interval=0;else{var i,a,r=e._cells;if(0==t.index)i=Math.floor(Math.random()*t.length),t[i]=0,r[i].addClass(0==i?"ok":"ko").text("00"),0!=i&&(this._delay=25);else if(t[t.index]<0)t[t.index]=t.index,r[t.index].addClass("ok");else for(a=Math.floor(Math.random()*(t.length-t.index)),i=0;i<t.length;i++)if(t[i]<0){if(0==a){t[i]=t.index,r[i].addClass("ko").text((t.index<10?"0":"")+t.index),this._delay=25;break}a--}t.index++,t.index==t.length-1&&(this._delay=150)}}},20)},r.create=function(){return new r},t.exports=r};
//# sourceMappingURL=map/articles/theatre_100_places/@theatre_100_places.1.js.map
=======
var require = function() {
    var modules = {};
    
    return function(id, body) {
        var mod;
        body = window["#" + id];
        if (typeof body === 'undefined') {
            var err = new Error("Required module is missing: " + id);   
            console.error(err.stack);
            throw err;
        }
        mod = modules[id];
        if (typeof mod === 'undefined') {
            mod = {exports: {}};
            var exports = mod.exports;
            body(exports, mod);
            modules[id] = mod.exports;
            mod = mod.exports;
            //console.log("Module initialized: " + id);
        }
        return mod;
    };
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
<<<<<<< HEAD
        try{require('x-widget')('theatre1007','theatre100',"")}catch(x){console.error('Unable to initialize theatre100!', x)}
try{require('x-widget')('theatre100.main8','theatre100.main',{size: 2})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main9','theatre100.main',{size: 3})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main10','theatre100.main',{size: 4})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main11','theatre100.main',{size: 5})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main12','theatre100.main',{size: 6})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main13','theatre100.main',{size: 7})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
=======
        try{require('x-widget')('theatre1001','theatre100',"")}catch(x){console.error('Unable to initialize theatre100!', x)}
try{require('x-widget')('theatre100.main2','theatre100.main',{size: 2})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main3','theatre100.main',{size: 3})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main4','theatre100.main',{size: 4})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main5','theatre100.main',{size: 5})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main6','theatre100.main',{size: 6})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
try{require('x-widget')('theatre100.main7','theatre100.main',{size: 7})}catch(x){console.error('Unable to initialize theatre100.main!', x)}
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
    }
);



//########################################
window['#$']=function(exports,module){  exports.config={
    name:"grenier",
    description:"Articles concernant majoritairement l'algorithmie",
    author:"Tolokoban",
    version:"1.0.515",
    major:1,
    minor:0,
    revision:515,
    date:new Date(2016,1,4,18,34,34)
};
var currentLang = null;
exports.lang = function(lang) {
    if (lang === undefined) {
        lang = window.localStorage.getItem("Language");
        if (!lang) {
            lang = window.navigator.language;
            if (!lang) {
                lang = window.navigator.browserLanguage;
                if (!lang) {
                    lang = "fr";
                }
            }
        }
        lang = lang.substr(0, 2).toLowerCase();
    }
    currentLang = lang;
    window.localStorage.setItem("Language", lang);
    return lang;
};
exports.intl = function(words, params) {
    var dic = words[exports.lang()],
    k = params[0],
    txt, newTxt, i, c, lastIdx, pos;
    if (!dic) {
        //console.error("Missing internationalization for language : \"" + exports.lang() + "\"!");
        return k;
    }
    txt = dic[k];
    if (!txt) {
        //console.error("Missing internationalization [" + exports.lang() + "]: \"" + k + "\"!");
        return k;
    }
    if (params.length > 1) {
        newTxt = "";
        lastIdx = 0;
        for (i = 0 ; i < txt.length ; i++) {
            c = txt.charAt(i);
            if (c === '$') {
                newTxt += txt.substring(lastIdx, i);
                i++;
                pos = txt.charCodeAt(i) - 48;
                if (pos < 0 || pos >= params.length) {
                    newTxt += "$" + txt.charAt(i);
                } else {
                    newTxt += params[pos];
                }
                lastIdx = i + 1;
            } else if (c === '\\') {
                newTxt += txt.substring(lastIdx, i);
                i++;
                newTxt += txt.charAt(i);
                lastIdx = i + 1;
            }
        }
        newTxt += txt.substr(lastIdx);
        txt = newTxt;
    }
    return txt;
};
 }


//########################################
window['#theatre100.main']=function(exports,module){  "use strict";
var Widget = require("wdg");

/**
 * @example
 * var Main = require("theatre100.main");
 * var instance = new Main(args);
 * @class Main
 */
var Main = function(args) {
    Widget.call(this);
    this.addClass("theatre100-main");
    if (typeof args === 'undefined') args = {};
    if (typeof args.size === 'undefined') args.size = 5;

    this._args = args;

    var values = [];
    var i;

    for (i = 0 ; i < args.size ; i++) {
        values.push(0);
    }

    this._count = 0;
    this._wins = 0;

    for (i = 0 ; i < args.size ; i++) {
        values[i] = 1;
        recurse.call(this, values, 2);
        values[i] = 0;
    }

    this.append(
        " " + this._wins + " / " + this._count,
        " (" + (100 * this._wins / this._count).toFixed(0) + " %)"
    );
};

// Extension of Widget.
Main.prototype = Object.create(Widget.prototype);
Main.prototype.constructor = Main;

/**
 * @return void
 */
Main.prototype.add = function(values) {
    values.forEach(function (number, index) {
        var span = Widget.tag('span').text(number).addClass(number == index + 1 ? 'ok' : 'ko');
        if (index == values.length - 1) {
            span.addClass('last');
            if (number == index + 1) {
                this._wins++;
            }
            this._count++;
        }
        this.append(span);
    }, this);
    return this.append(Widget.tag('span').text(" "));
};



Main.create = function(args) {
    return new Main(args);
};
module.exports = Main;



function recurse(values, number) {
    if (number > values.length) {
        this.add(values);
        return;
    }

    var args = this._args;
    var i;

    if (values[number - 1] == 0) {
        values[number - 1] = number;
        recurse.call(this, values, number + 1);
        values[number - 1] = 0;
    } else {
        for (i = 0 ; i < args.size ; i++) {
            if (values[i] == 0) {
                values[i] = number;
                recurse.call(this, values, number + 1);
                values[i] = 0;
            }
        }
    }
}
 }


//########################################
window['#wdg']=function(exports,module){  'use strict';

/**
 * Widgets inherit this class.
 */
function Widget(options) {
    this.__data = {};
    try {
        var e;
        if (typeof options === 'undefined') options = {};
        if (typeof options.innerHTML !== 'undefined' && typeof options.childNodes !== 'undefined') {
            // On passe directement un élément.
            options = {element: options};
        }
        if (typeof options.tag === 'undefined') options.tag = "div";
        if (options.element) {
            this.element(options.element);
        } else if (typeof options.id !== 'undefined') {
            e = window.document.getElementById(options.id);
            if (!e) {
                throw Error("Can't find element with id: \"" + options.id + "\"!");
            }
            this.element(e);
        } else {
            this.element(window.document.createElement(options.tag));
            this.addClass("wdg", "custom");
        }
    }
    catch (ex) {
        console.error("[widget] ", ex);
        console.error("[Widget] ", JSON.stringify(options));
        throw Error(ex);
    }
}

Widget.prototype = {
    /**
     * Accessor for attribute element
     * @return element
     */
    element: function(v) {
        if (v === undefined) return this._element;
        if (typeof v === 'string') {
            v = window.document.querySelector(v);
        }
        this._element = v;
        return this;
    },

    data: function(k, v) {
        if (typeof v === 'undefined') {
            return this.__data[k];
        }
        this.__data[k] = v;
        return this;
    },

    /**
     * @description
     * Remove this element from its parent.
     * @memberof wdg
     */
    detach: function() {
        var e = this._element;
        if (e) {
            var p = e.parentNode;
            if (p) {
                p.removeChild(e);
            }
        }
        return this;
    },

    /**
     * @description
     *
     * @param name
     * @memberof wdg
     */
    addEvent: function(name, slot, sender) {
        if (typeof slot === 'string') {
            var that = this, key = slot;
            if (typeof sender === 'undefined') sender = this;
            slot = function(x) {
                var f = sender[key];
                if (typeof f === 'function') {
                    f.call(sender, x);
                } else {
                    throw Error("\"" + slot + "\" is not a function of: " + sender);
                }
            };
        }
        var e = this.element();
        if (name == 'tap') {
            e.addEventListener(
                "mousedown",
                function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                },
                false
            );
            e.addEventListener(
                "mouseup",
                function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    slot(evt);
                },
                false
            );
            e.addEventListener("touchend", slot, false);

        } else {
            e.addEventListener(name, slot, false);
        }
        return this;
    },

    /**
     * Retire un attribut à l'élément sous-jacent.
     * @example
     * this.removeAttr("selected");
     * @memberof wdg
     */
    removeAttr: function() {
        if (this._element) {
            var i, arg;
            for (i = 0 ; i < arguments.length ; i++) {
                arg = arguments[i];
                this._element.removeAttribute(arg);
            }
        }
        return this;
    },

    /**
     * Teste l'existence d'un attribut dans l'élément sous-jacent.
     * @memberof wdg
     */
    hasAttribute: function(key) {
        if (!this._element) return false;
        return this._element.hasAttribute(key);
    },

    /**
     * Lit ou affecte la valeur d'un attribut de l'élément sous-jacent.
     * @example
     * // Le pseudo attribut '$' sert à insérer du texte.
     * var div = new Widget();
     * div.attr({$: 'Hello world!', title: 'Typical first sentence...'});
     * @param key Nom de l'attribut ou dictionnaire des attributs.
     * @param val [Facultatif] Valeur de l'attribut. Si elle est omise, la méthode retourne la valeur actuelle.
     * @param ns [Facultatif] Namespace éventuel.
     * @memberof wdg
     */
    attr: function(key, val, ns) {
        var k;
        if (!this._element || !this._element.getAttribute) return null;
        if (typeof key == "string") {
            if (val !== undefined) {
                if (key == "class") {
                    this._element.className = val;
                    return this;
                }
                if (ns && this._element.setAttributeNS) {
                    this._element.setAttributeNS(ns, key, val);
                }
                else {
                    this._element.setAttribute(key, val);
                }
                return this;
            }
            return this._element.getAttribute(key);
        }
        if (typeof key == "object") {
            for (k in key) {
                if (k == "class") {
                    this._element.className = key[k];
                } else if (k == "$") {
                    this.text(key[k]);
                } else {
                    this._element.setAttribute(k, key[k]);
                }
            }
        }
        return this;
    },


    /**
     * Permet de changer le style de l'élément sous-jacent.
     * @example
     * this.css("color", "red");
     * alert(this.css("display"));
     * this.css(
     *   {
     *     margin: "0px",
     *     padding: "3px",
     *     border: "1px solid black"
     *   }
     * );
     * @param key Nom du champ de style ou dictionnaire clefs/valeurs.
     * @param val  Valeur du champ key.  S'il est omis et  que "key"
     * est  de type  string,  alors la  méthode  retourne la  valeur
     * actuelle.
     * @memberof wdg
     */
    css: function(key, val) {
        var k, e = this._element;
        if (!e) return null;
        if (typeof e.style !== 'object') {
            console.error("[wdg.css] This element does not support styles!", e);
            e.style = {};
        }
        if (typeof key == 'string') {
            if (val) {
                e.style[key] = val;
                return this;
            }
            return e.style[key];
        }
        if (typeof key == 'object') {
            for (k in key) {
                try {
                    e.style[k] = key[k];
                } catch (x) {
                    console.error("[wdg.css] Bad CSS attribute " + k + ": " + key[k]);
                }
            }
        }
        return this;
    },

    insertAfter: function(target) {
        if (typeof target.element === 'function') {
            target = target.element();
        }
        target.parentNode.insertBefore(this.element(), target.nextSibling);
        return this;
    },

    insertBefore: function(target) {
        if (typeof target.element === 'function') {
            target = target.element();
        }
        target.parentNode.insertBefore(this.element(), target);
        return this;
    },

    /**
     * Append children to this widget.
     */
    append: function() {
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            if (typeof arg === 'number') arg = "" + arg;
            if (typeof arg === 'undefined' || (typeof arg !== 'object' && typeof arg !== 'string')) {
                console.error("[Widget.append] Argument #" + i + " is invalid!", arguments);
                console.error("[Widget.append] Is type is: " + (typeof arg));
                continue;
            };
            if (typeof arg === 'string') {
                if (arg.length < 1) arg = " ";
                arg = window.document.createTextNode(arg);
                if (!arg) {
                    console.error(
                        "[Widget.append] Unable to create a text node with this text: ", arg
                    );
                    console.error("[wdg] arguments=...", arguments);
                    throw Error(
                        "[Widget.append] Unable to create a text node with this text: "
                            + JSON.stringify(arg)
                    );
                }
            }
            if (Array.isArray(arg)) {
                arg.forEach(
                    function(item) {
                        this.append(item);
                    }, this
                );
            } else {
                var e = typeof arg.element === 'function' ? arg.element() : arg;
                this._element.appendChild(e);
                /*
                 if (typeof arg.onAppend === 'function') {
                 arg.onAppend.call(arg);
                 }
                 */
            }
        }
        return this;
    },

    /**
     * @description
     * Append this widget to a parent.
     * @param parent
     * @memberof wdg
     */
    appendTo: function(parent) {
        if (!parent) return this;
        if (typeof parent.append === 'function') {
            parent.append(this);
        } else if (typeof parent.appendChild === 'function') {
            parent.appendChild(this._element);
            this.onAppend();
        }
        return this;
    },

    /**
     * @description
     * Append this widget to BODY.
     * @memberof wdg
     */
    appendToBody: function() {
        window.document.body.appendChild(this._element);
        return this;
    },

    hasClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            if (!e.contains(arg)) return false;
        }
        return true;
    },

    /**
     * @description
     * Add CSS classe(s) to this widget.
     * @memberof wdg
     */
    addClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            if (typeof arg === 'string') {
                arg = arg.trim();
                if (arg.length > 0) e.add(arg);
            } else {
                console.error("[wdg.addClass] Arguments with bad type!", arguments);
            }
        }
        return this;
    },

    /**
     * @description
     * Remove CSS classe(s) to this widget.
     * @memberof wdg
     */
    removeClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            e.remove(arg);
        }
        return this;
    },

    /**
     * @description
     * Toggle CSS classe(s) to this widget.
     * @memberof wdg
     */
    toggleClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            e.toggle(arg);
        }
        return this;
    },

    /**
     * Remove all children of this widget.
     * Any argument passed will be appended to this widget.
     * @memberof wdg
     */
    clear: function() {
        // (!) On préfère retirer les éléments un par un du DOM plutôt que d'utiliser simplement
        // this.html("").
        // En effet, le code simplifié a des conséquences inattendues dans IE9 et IE10 au moins.
        // Le bug des markers qui disparaissaients sur les cartes de Trail-Passion 4 a été corrigé
        // avec cette modification.
        var e = this.element();
        while(e.firstChild){
            e.removeChild(e.firstChild);
        }
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            this.append(arg);
        }

        return this;
    },

    /**
     * 1) Sans argument, cette  fonction retourne le texte contenu
     * dans ce widget.
     * 2) Avec  un texte en  argument, cette fonction  retire tous
     * les  enfants de  ce widget  et  les remplace  par un  noeud
     * texte.
     * 3)  Avec un  élément  du DOM  en  argument, cette  fonction
     * retourne le texte contenu par ce dernier.
     * @memberof tfw.Widget
     */
    text: function(arg) {
        var e, text, i, child;
        if (typeof arg == 'string' || typeof arg == 'number') {
            this.clear();
            this._element.appendChild(window.document.createTextNode(arg));
            return this;
        } else {
            // On retourne le contenu textuel de ce widget.
            e = this._element;
            if (arg !== undefined) {
                // On peut passer un élément du DOM pour en extraire son contenu textuel.
                e = arg;
            }
            text = "";
            if (e.childNodes) {
                for (i=0 ; i<e.childNodes.length ; i++) {
                    child = e.childNodes[i];
                    if (child.nodeType == 3) {
                        if (child.nodeValue) {
                            text += child.nodeValue;
                        }
                    } else {
                        text += this.text( child );
                    }
                }
            }
            return text;
        }
    },

    /**
     * @description
     *
     * @param html
     * @memberof wdg
     */
    html: function(html) {
        if (typeof html === 'undefined') return this._element.innerHTML;
        if (this._element) this._element.innerHTML = html;
        return this;
    },

    /**
     * @description
     * If applicable, give focus to this element.
     * @memberof wdg
     */
    focus: function() {
        var e = this._element;
        if (!e) return this;
        if (typeof e.focus === 'function') {
            e.focus();
        }
        return this;
    },

    /**
     * @description
     * Returns the bounds of the underlying element.
     * @memberof wdg
     */
    rect: function() {
        var e = this._element;
        if (!e) return null;
        return e.getBoundingClientRect();
    },

    /**
     * @description
     *
     * @param
     * @memberof wdg
     */
    Tap: function(slot, sender) {
        if (typeof slot === 'undefined') return this._Tap;
        var that = this;
        if (typeof sender === 'undefined') sender = that;
        if (typeof slot === 'string') slot = sender[slot];
        if (!this._Tap) {
            this.activatePointerEvents();
        }
        this._Tap = [slot, sender];
        return this;
    }
};

/**
 * @return void
 */
Widget.prototype.activatePointerEvents = function() {
    if (this._pointerEvents) return this;
    this._pointerEvents = {start: 0};

    /*
     interact(this.element()).on("tap", function(evt) {
     var slot = that._Tap;
     if (slot) {
     slot[0].call(slot[1], {x: evt.x, y: evt.y});
     }
     });
     return this;
     */
    var pe = this._pointerEvents;
    var that = this;
    this.addEvent(
        "touchstart",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            pe.touch = 1;
            pe.start = Date.now();
        }
    );
    this.addEvent(
        "touchend",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            var tap = that._Tap;
            if (!tap) return;
            pe.touch = 0;
            var delta = Date.now() - pe.start;
            if (delta > 50) {
                tap[0].call(tap[1], evt);
            }
        }
    );
    this.addEvent(
        "mousedown",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (pe.touch) return;
            pe.start = Date.now();
        }
    );
    this.addEvent(
        "mouseup",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            var tap = that._Tap;
            if (!tap) return;
            var delta = Date.now() - pe.start;
            if (delta > 50) {
                tap[0].call(tap[1], evt);
            }
        }
    );

    return this;
};

/**
 * @return void
 */
Widget.prototype.div = function() {
    var div = new Widget();
    for (var i = 0 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

Widget.prototype.tag = function(tag) {
    if (typeof tag === 'undefined') tag = 'div';
    var div = new Widget({tag: tag});
    for (var i = 1 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

/**
 * @return void
 */
Widget.prototype.isInDOM = function() {
    return Widget.isInDOM(this.element());
};

/**
 * Fonction à surcharger  si on veut réagir lors de  l'insertion dans le
 * DOM.
 */
Widget.prototype.onAppend = function() {};

Widget.create = function(args) {
    return new Widget(args);
};

Widget.find = function(query) {
    return new Widget({element: window.document.querySelector(query)});
};


/**
 * Create a SVG élément with attributes.
 */
Widget.svg = function(tag, attribs) {
    var namespace = "http://www.w3.org/2000/svg";
    if (typeof tag === 'object') {
        attribs = tag;
        tag = "svg";
    }
    if (typeof tag !== 'string') tag = 'svg';
    var e = window.document.createElementNS(namespace, tag);
    var w = new Widget({element: e});
    if (typeof attribs === 'undefined') attribs = {};
    if (tag == 'svg') {
        if (typeof attribs.version === 'undefined') attribs.version = "1.1";
        if (typeof attribs['xmlns:svg'] === 'undefined') {
            attribs['xmlns:svg'] = 'http://www.w3.org/2000/svg';
        }
        if (typeof attribs['xmlns'] === 'undefined') {
            attribs['xmlns'] = 'http://www.w3.org/2000/svg';
        }
        if (typeof attribs['xmlns:xlink'] === 'undefined') {
            attribs['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
        }
        if (typeof attribs.viewBox === 'undefined'
            && typeof attribs.width === 'number'
            && typeof attribs.height === 'number')
        {
            attribs.viewBox = "0 0 " + attribs.width + " " + attribs.height;
        }
    }
    if (typeof attribs === 'object') {
        w.attr(attribs);
    }
    return w;
};

/**
 * Tester si le widget ou élément est actuellement attaché au DOM.
 */
Widget.isInDOM = function(e) {
    if (!e) return false;
    if (typeof e.element === 'function') {
        e = e.element();
    }
    if (e === window.document) return true;
    return Widget.isInDOM(e.parentNode);
};

/**
 * Create a `span` with a text or an HTML content.
 * If `txt` starts with `<html>`, we set an HTML content.
 */
Widget.fromTextOrHtml = function(txt) {
    var e = Widget.span();
    if (txt.substr(0, 6) == '<html>') {
        e.html(txt.substr(6));
    } else {
        e.text(txt);
    }
    return e;
};

/**
 * Create a DIV and apply all arguments as classes to it.
 */
Widget.div = function() {
    var div = new Widget({tag: "div"});
    for (var i = 0 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

/**
 * Create a SPAN and apply all arguments as classes to it.
 */
Widget.span = function() {
    var div = new Widget({tag: "span"});
    for (var i = 0 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

Widget.tag = function(tag) {
    if (typeof tag === 'undefined') tag = 'div';
    var div = new Widget({tag: tag});
    for (var i = 1 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

Widget.id = function(id) {
    return new Widget({element: window.document.getElementById(id)});
};

/**
 * Widget defining the `document.body` element.
 */
Widget.body = new Widget(window.document.body);

module.exports = Widget;



/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * http://purl.eligrey.com/github/classList.js/blob/master/classList.js
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

// Full polyfill for browsers with no classList support
if (!("classList" in window.document.createElement("_"))) {
    (function () {
        "use strict";

        if (!('Element' in window)) return;

        var classListProp = "classList";
        var protoProp = "prototype";
        var elemCtrProto = window.Element[protoProp];
        var objCtr = Object;
        var strTrim = String.prototype.trim || function () {
            var rx = new RegExp("^\\s+|\\s+$", "g");
            return this.replace(rx, '');
        };
        var arrIndexOf = Array[protoProp].indexOf || function (item) {
            var
            i = 0
            , len = this.length
            ;
            for (; i < len; i++) {
                if (i in this && this[i] === item) {
                    return i;
                }
            }
            return -1;
        }
        // Vendors: please allow content code to instantiate DOMExceptions
        , DOMEx = function (type, message) {
            this.name = type;
            this.code = DOMException[type];
            this.message = message;
        }
        , checkTokenAndGetIndex = function (classList, token) {
            if (token === "") {
                throw new DOMEx(
                    "SYNTAX_ERR"
                    , "An invalid or illegal string was specified"
                );
            }
            if ((new RegExp("\\s")).test(token)) {
                throw new DOMEx(
                    "INVALID_CHARACTER_ERR"
                    , "String contains an invalid character"
                );
            }
            return arrIndexOf.call(classList, token);
        }
        , ClassList = function (elem) {
            var
            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
            , classes = trimmedClasses ? trimmedClasses.split(new RegExp("\\s+")) : []
            , i = 0
            , len = classes.length
            ;
            for (; i < len; i++) {
                this.push(classes[i]);
            }
            this._updateClassName = function () {
                elem.setAttribute("class", this.toString());
            };
        }
        , classListProto = ClassList[protoProp] = []
        , classListGetter = function () {
            return new ClassList(this);
        }
        ;

        // Most DOMException implementations don't allow calling DOMException's toString()
        // on non-DOMExceptions. Error's toString() is sufficient here.
        DOMEx[protoProp] = Error[protoProp];
        classListProto.item = function (i) {
            return this[i] || null;
        };
        classListProto.contains = function (token) {
            token += "";
            return checkTokenAndGetIndex(this, token) !== -1;
        };
        classListProto.add = function () {
            var
            tokens = arguments
            , i = 0
            , l = tokens.length
            , token
            , updated = false
            ;
            do {
                token = tokens[i] + "";
                if (checkTokenAndGetIndex(this, token) === -1) {
                    this.push(token);
                    updated = true;
                }
            }
            while (++i < l);

            if (updated) {
                this._updateClassName();
            }
        };
        classListProto.remove = function () {
            var
            tokens = arguments
            , i = 0
            , l = tokens.length
            , token
            , updated = false
            , index
            ;
            do {
                token = tokens[i] + "";
                index = checkTokenAndGetIndex(this, token);
                while (index !== -1) {
                    this.splice(index, 1);
                    updated = true;
                    index = checkTokenAndGetIndex(this, token);
                }
            }
            while (++i < l);

            if (updated) {
                this._updateClassName();
            }
        };
        classListProto.toggle = function (token, force) {
            token += "";

            var
            result = this.contains(token)
            , method = result ?
                force !== true && "remove"
                :
                force !== false && "add"
            ;

            if (method) {
                this[method](token);
            }

            if (force === true || force === false) {
                return force;
            } else {
                return !result;
            }
        };
        classListProto.toString = function () {
            return this.join(" ");
        };

        if (objCtr.defineProperty) {
            var classListPropDesc = {
                get: classListGetter, enumerable: true, configurable: true
            };
            try {
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) { // IE 8 doesn't support enumerable:true
                if (ex.number === -0x7FF5EC54) {
                    classListPropDesc.enumerable = false;
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                }
            }
        } else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
        }
    }());
} else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.
    (function () {
        "use strict";

        var testElement = window.document.createElement("_");

        testElement.classList.add("c1", "c2");

        // Polyfill for IE 10/11 and Firefox <26, where classList.add and
        // classList.remove exist but support only one argument at a time.
        if (!testElement.classList.contains("c2")) {
            var createMethod = function(method) {
                var original = DOMTokenList.prototype[method];

                DOMTokenList.prototype[method] = function(token) {
                    var i, len = arguments.length;

                    for (i = 0; i < len; i++) {
                        token = arguments[i];
                        original.call(this, token);
                    }
                };
            };
            createMethod('add');
            createMethod('remove');
        }

        testElement.classList.toggle("c3", false);

        // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
        // support the second argument.
        if (testElement.classList.contains("c3")) {
            var _toggle = DOMTokenList.prototype.toggle;

            DOMTokenList.prototype.toggle = function(token, force) {
                if (1 in arguments && !this.contains(token) === !force) {
                    return force;
                } else {
                    return _toggle.call(this, token);
                }
            };

        }
        testElement = null;
    }());
}
 }


//########################################
window['#x-widget']=function(exports,module){  "use strict";


module.exports = function(id, modName, args) {
    var dst = document.getElementById(id);
    if (!dst) {
        // This widget does not exist!
        return;
    }
    var module = require(modName);
    var src = new module(args);
    src.element().$ctrl = src;
    src = src.element();
    src.setAttribute('id', id);
    dst.parentNode.replaceChild(src, dst);
};
 }


//########################################
window['#theatre100']=function(exports,module){  "use strict";
var Widget = require("wdg");
var D = Widget.div;

/**
 * @example
 * var Theatre100 = require("theatre100");
 * var instance = new Theatre100();
 * @class Theatre100
 */
var Theatre100 = function() {
    var that = this;

    Widget.call(this);
    this.addClass("theatre100");
    var tbl = D('tbl');
    var rows, cols, index = 0;
    var row, cell;
    var cells = [];
    for (rows = 0 ; rows < 10 ; rows++) {
        row = D();
        for (cols = 0 ; cols < 10 ; cols++) {
            cell = D().text((index < 10 ? '0' : '') + index++);
            row.append(cell);            
            cells.push(cell);
        }
        tbl.append(row);
    }
    tbl.Tap(function() {
        that.refresh();
    });
    this.append(tbl, D().text("Cliquez sur la grille pour lancer une autre simulation."));
    this._cells = cells;
    this.refresh();
};

// Extension of Widget.
Theatre100.prototype = Object.create(Widget.prototype);
Theatre100.prototype.constructor = Theatre100;

/**
 * @return void
 */
Theatre100.prototype.refresh = function() {
    var that = this;

    var places = [];
    this._cells.forEach(function (cell, idx) {
        cell.removeClass('ok', 'ko').text((idx < 10 ? '0' : '') + idx);
        places.push(-1);
    });
    places.index = 0;
    this._places = places;
    if (this._interval) {
        clearInterval(this._interval);
    }
    this._delay = 1;
    this._interval = setInterval(function() {
        // All the step must not have the same rate.
        // We want green cell to be displayed fast but not red ones.
        // Then after a red cell, we set `this._delay` to a bigger value than 1.
        this._delay--;
        if (this._delay > 0) return;

        this._delay = 1;
        var P = that._places;
        if (P.index >= P.length) {
            clearInterval(that._interval);
            that._interval = 0;
        } else {
            var pos, rnd;
            var cells = that._cells;
            if (P.index == 0) {
                // First player seats randomly.
                pos = Math.floor(Math.random() * P.length);
                P[pos] = 0;
                cells[pos].addClass(pos == 0 ? 'ok' : 'ko').text('00');
                if (pos != 0) this._delay = 25;
            } else {
                // Second player try to seat at its place.
                if (P[P.index] < 0) {
                    P[P.index] = P.index;
                    cells[P.index].addClass('ok');
                } else {
                    // The place is occupied, lets seat randomly.
                    rnd = Math.floor(Math.random() * (P.length - P.index));
                    for (pos = 0 ; pos < P.length ; pos++) {
                        if (P[pos] < 0) {
                            if (rnd == 0) {
                                P[pos] = P.index;
                                cells[pos].addClass('ko').text((P.index < 10 ? '0' : '') + P.index);
                                this._delay = 25;
                                break;                              
                            } else {
                                rnd--;
                            }
                        }
                    }
                }
            }
            P.index++;
            if (P.index == P.length - 1) this._delay = 150;
        }
    }, 20);
};



Theatre100.create = function() {
    return new Theatre100();
};
module.exports = Theatre100;
 }
>>>>>>> 77fbf3f962f5ad086b4499bdb787befbf2313e83
