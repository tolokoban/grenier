function addListener(e,t){window.addEventListener?window.addEventListener(e,t,!1):window.attachEvent("on"+e,t)}var require=function(){var e={};return function(t,r){var i;if(r=window["#"+t],"undefined"==typeof r){var a=new Error("Required module is missing: "+t);throw console.error(a.stack),a}if(i=e[t],"undefined"==typeof i){i={exports:{}};var n=i.exports;r(n,i),e[t]=i.exports,i=i.exports}return i}}();addListener("DOMContentLoaded",function(){document.body.parentNode.$data={};try{require("x-widget")("theatre1009","theatre100","")}catch(e){console.error("Unable to initialize theatre100!",e)}try{require("x-widget")("theatre100.main10","theatre100.main",{size:2})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main11","theatre100.main",{size:3})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main12","theatre100.main",{size:4})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main13","theatre100.main",{size:5})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main14","theatre100.main",{size:6})}catch(e){console.error("Unable to initialize theatre100.main!",e)}try{require("x-widget")("theatre100.main15","theatre100.main",{size:7})}catch(e){console.error("Unable to initialize theatre100.main!",e)}});
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.515",major:1,minor:0,revision:515,date:new Date(2016,1,4,18,34,34)};var t=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,t){var a,e,o,i,g,l,u=r[n.lang()],s=t[0];if(!u)return s;if(a=u[s],!a)return s;if(t.length>1){for(e="",g=0,o=0;o<a.length;o++)i=a.charAt(o),"$"===i?(e+=a.substring(g,o),o++,l=a.charCodeAt(o)-48,e+=0>l||l>=t.length?"$"+a.charAt(o):t[l],g=o+1):"\\"===i&&(e+=a.substring(g,o),o++,e+=a.charAt(o),g=o+1);e+=a.substr(g),a=e}return a}};
window["#theatre100.main"]=function(t,i){"use strict";function s(t,i){if(i>t.length)return void this.add(t);var e,n=this._args;if(0==t[i-1])t[i-1]=i,s.call(this,t,i+1),t[i-1]=0;else for(e=0;e<n.size;e++)0==t[e]&&(t[e]=i,s.call(this,t,i+1),t[e]=0)}var e=require("wdg"),n=function(t){e.call(this),this.addClass("theatre100-main"),"undefined"==typeof t&&(t={}),"undefined"==typeof t.size&&(t.size=5),this._args=t;var i,n=[];for(i=0;i<t.size;i++)n.push(0);for(this._count=0,this._wins=0,i=0;i<t.size;i++)n[i]=1,s.call(this,n,2),n[i]=0;this.append(" "+this._wins+" / "+this._count," ("+(100*this._wins/this._count).toFixed(0)+" %)")};n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.prototype.add=function(t){return t.forEach(function(i,s){var n=e.tag("span").text(i).addClass(i==s+1?"ok":"ko");s==t.length-1&&(n.addClass("last"),i==s+1&&this._wins++,this._count++),this.append(n)},this),this.append(e.tag("span").text(" "))},n.create=function(t){return new n(t)},i.exports=n};
window["#wdg"]=function(t,e){"use strict";function n(t){this.__data={};try{var e;if("undefined"==typeof t&&(t={}),"undefined"!=typeof t.innerHTML&&"undefined"!=typeof t.childNodes&&(t={element:t}),"undefined"==typeof t.tag&&(t.tag="div"),t.element)this.element(t.element);else if("undefined"!=typeof t.id){if(e=window.document.getElementById(t.id),!e)throw Error("Can't find element with id: \""+t.id+'"!');this.element(e)}else this.element(window.document.createElement(t.tag)),this.addClass("wdg","custom")}catch(n){throw console.error("[widget] ",n),console.error("[Widget] ",JSON.stringify(t)),Error(n)}}n.prototype={element:function(t){return void 0===t?this._element:("string"==typeof t&&(t=window.document.querySelector(t)),this._element=t,this)},data:function(t,e){return"undefined"==typeof e?this.__data[t]:(this.__data[t]=e,this)},detach:function(){var t=this._element;if(t){var e=t.parentNode;e&&e.removeChild(t)}return this},addEvent:function(t,e,n){if("string"==typeof e){var i=e;"undefined"==typeof n&&(n=this),e=function(t){var r=n[i];if("function"!=typeof r)throw Error('"'+e+'" is not a function of: '+n);r.call(n,t)}}var r=this.element();return"tap"==t?(r.addEventListener("mousedown",function(t){t.preventDefault(),t.stopPropagation()},!1),r.addEventListener("mouseup",function(t){t.preventDefault(),t.stopPropagation(),e(t)},!1),r.addEventListener("touchend",e,!1)):r.addEventListener(t,e,!1),this},removeAttr:function(){if(this._element){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],this._element.removeAttribute(e)}return this},hasAttribute:function(t){return this._element?this._element.hasAttribute(t):!1},attr:function(t,e,n){var i;if(!this._element||!this._element.getAttribute)return null;if("string"==typeof t)return void 0!==e?"class"==t?(this._element.className=e,this):(n&&this._element.setAttributeNS?this._element.setAttributeNS(n,t,e):this._element.setAttribute(t,e),this):this._element.getAttribute(t);if("object"==typeof t)for(i in t)"class"==i?this._element.className=t[i]:"$"==i?this.text(t[i]):this._element.setAttribute(i,t[i]);return this},css:function(t,e){var n,i=this._element;if(!i)return null;if("object"!=typeof i.style&&(console.error("[wdg.css] This element does not support styles!",i),i.style={}),"string"==typeof t)return e?(i.style[t]=e,this):i.style[t];if("object"==typeof t)for(n in t)try{i.style[n]=t[n]}catch(r){console.error("[wdg.css] Bad CSS attribute "+n+": "+t[n])}return this},insertAfter:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t.nextSibling),this},insertBefore:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t),this},append:function(){var t,e;for(t=0;t<arguments.length;t++)if(e=arguments[t],"number"==typeof e&&(e=""+e),"undefined"==typeof e||"object"!=typeof e&&"string"!=typeof e)console.error("[Widget.append] Argument #"+t+" is invalid!",arguments),console.error("[Widget.append] Is type is: "+typeof e);else{if("string"==typeof e&&(e.length<1&&(e=" "),e=window.document.createTextNode(e),!e))throw console.error("[Widget.append] Unable to create a text node with this text: ",e),console.error("[wdg] arguments=...",arguments),Error("[Widget.append] Unable to create a text node with this text: "+JSON.stringify(e));if(Array.isArray(e))e.forEach(function(t){this.append(t)},this);else{var n="function"==typeof e.element?e.element():e;this._element.appendChild(n)}}return this},appendTo:function(t){return t?("function"==typeof t.append?t.append(this):"function"==typeof t.appendChild&&(t.appendChild(this._element),this.onAppend()),this):this},appendToBody:function(){return window.document.body.appendChild(this._element),this},hasClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)if(e=arguments[t],!n.contains(e))return!1;return!0},addClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],"string"==typeof e?(e=e.trim(),e.length>0&&n.add(e)):console.error("[wdg.addClass] Arguments with bad type!",arguments);return this},removeClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.remove(e);return this},toggleClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.toggle(e);return this},clear:function(){for(var t=this.element();t.firstChild;)t.removeChild(t.firstChild);var e,n;for(e=0;e<arguments.length;e++)n=arguments[e],this.append(n);return this},text:function(t){var e,n,i,r;if("string"==typeof t||"number"==typeof t)return this.clear(),this._element.appendChild(window.document.createTextNode(t)),this;if(e=this._element,void 0!==t&&(e=t),n="",e.childNodes)for(i=0;i<e.childNodes.length;i++)r=e.childNodes[i],3==r.nodeType?r.nodeValue&&(n+=r.nodeValue):n+=this.text(r);return n},html:function(t){return"undefined"==typeof t?this._element.innerHTML:(this._element&&(this._element.innerHTML=t),this)},focus:function(){var t=this._element;return t?("function"==typeof t.focus&&t.focus(),this):this},rect:function(){var t=this._element;return t?t.getBoundingClientRect():null},Tap:function(t,e){if("undefined"==typeof t)return this._Tap;var n=this;return"undefined"==typeof e&&(e=n),"string"==typeof t&&(t=e[t]),this._Tap||this.activatePointerEvents(),this._Tap=[t,e],this}},n.prototype.activatePointerEvents=function(){if(this._pointerEvents)return this;this._pointerEvents={start:0};var t=this._pointerEvents,e=this;return this.addEvent("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t.touch=1,t.start=Date.now()}),this.addEvent("touchend",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){t.touch=0;var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this.addEvent("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t.touch||(t.start=Date.now())}),this.addEvent("mouseup",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this},n.prototype.div=function(){for(var t=new n,e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.prototype.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.prototype.isInDOM=function(){return n.isInDOM(this.element())},n.prototype.onAppend=function(){},n.create=function(t){return new n(t)},n.find=function(t){return new n({element:window.document.querySelector(t)})},n.svg=function(t,e){var i="http://www.w3.org/2000/svg";"object"==typeof t&&(e=t,t="svg"),"string"!=typeof t&&(t="svg");var r=window.document.createElementNS(i,t),s=new n({element:r});return"undefined"==typeof e&&(e={}),"svg"==t&&("undefined"==typeof e.version&&(e.version="1.1"),"undefined"==typeof e["xmlns:svg"]&&(e["xmlns:svg"]="http://www.w3.org/2000/svg"),"undefined"==typeof e.xmlns&&(e.xmlns="http://www.w3.org/2000/svg"),"undefined"==typeof e["xmlns:xlink"]&&(e["xmlns:xlink"]="http://www.w3.org/1999/xlink"),"undefined"==typeof e.viewBox&&"number"==typeof e.width&&"number"==typeof e.height&&(e.viewBox="0 0 "+e.width+" "+e.height)),"object"==typeof e&&s.attr(e),s},n.isInDOM=function(t){return t?("function"==typeof t.element&&(t=t.element()),t===window.document?!0:n.isInDOM(t.parentNode)):!1},n.fromTextOrHtml=function(t){var e=n.span();return"<html>"==t.substr(0,6)?e.html(t.substr(6)):e.text(t),e},n.div=function(){for(var t=new n({tag:"div"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.span=function(){for(var t=new n({tag:"span"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.id=function(t){return new n({element:window.document.getElementById(t)})},n.body=new n(window.document.body),e.exports=n,"classList"in window.document.createElement("_")?!function(){var t=window.document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(){if("Element"in window){var t="classList",e="prototype",n=window.Element[e],i=Object,r=String.prototype.trim||function(){var t=new RegExp("^\\s+|\\s+$","g");return this.replace(t,"")},s=Array[e].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(new RegExp("\\s").test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(new RegExp("\\s+")):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},d=u[e]=[],f=function(){return new u(this)};if(o[e]=Error[e],d.item=function(t){return this[t]||null},d.contains=function(t){return t+="",-1!==a(this,t)},d.add=function(){var t,e=arguments,n=0,i=e.length,r=!1;do t=e[n]+"",-1===a(this,t)&&(this.push(t),r=!0);while(++n<i);r&&this._updateClassName()},d.remove=function(){var t,e,n=arguments,i=0,r=n.length,s=!1;do for(t=n[i]+"",e=a(this,t);-1!==e;)this.splice(e,1),s=!0,e=a(this,t);while(++i<r);s&&this._updateClassName()},d.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},d.toString=function(){return this.join(" ")},i.defineProperty){var l={get:f,enumerable:!0,configurable:!0};try{i.defineProperty(n,t,l)}catch(h){-2146823252===h.number&&(l.enumerable=!1,i.defineProperty(n,t,l))}}else i[e].__defineGetter__&&n.__defineGetter__(t,f)}}()};
window["#x-widget"]=function(e,t){"use strict";t.exports=function(e,t,n){var i=document.getElementById(e);if(i){var r=require(t),d=new r(n);d.element().$ctrl=d,d=d.element(),d.setAttribute("id",e),i.parentNode.replaceChild(d,i)}}};
window["#theatre100"]=function(e,t){"use strict";var i=require("wdg"),a=i.div,r=function(){var e=this;i.call(this),this.addClass("theatre100");var t,r,n,l,s=a("tbl"),o=0,d=[];for(t=0;10>t;t++){for(n=a(),r=0;10>r;r++)l=a().text((10>o?"0":"")+o++),n.append(l),d.push(l);s.append(n)}s.Tap(function(){e.refresh()}),this.append(s,a().text("Cliquez sur la grille pour lancer une autre simulation.")),this._cells=d,this.refresh()};r.prototype=Object.create(i.prototype),r.prototype.constructor=r,r.prototype.refresh=function(){var e=this,t=[];this._cells.forEach(function(e,i){e.removeClass("ok","ko").text((10>i?"0":"")+i),t.push(-1)}),t.index=0,this._places=t,this._interval&&clearInterval(this._interval),this._delay=1,this._interval=setInterval(function(){if(this._delay--,!(this._delay>0)){this._delay=1;var t=e._places;if(t.index>=t.length)clearInterval(e._interval),e._interval=0;else{var i,a,r=e._cells;if(0==t.index)i=Math.floor(Math.random()*t.length),t[i]=0,r[i].addClass(0==i?"ok":"ko").text("00"),0!=i&&(this._delay=25);else if(t[t.index]<0)t[t.index]=t.index,r[t.index].addClass("ok");else for(a=Math.floor(Math.random()*(t.length-t.index)),i=0;i<t.length;i++)if(t[i]<0){if(0==a){t[i]=t.index,r[i].addClass("ko").text((t.index<10?"0":"")+t.index),this._delay=25;break}a--}t.index++,t.index==t.length-1&&(this._delay=150)}}},20)},r.create=function(){return new r},t.exports=r};
//# sourceMappingURL=map/articles/theatre_100_places/@theatre_100_places.2.js.map