function addListener(e,r){window.addEventListener?window.addEventListener(e,r,!1):window.attachEvent("on"+e,r)}var require=function(){var e={};return function(r,t){var n;if(t=window["#"+r],"undefined"==typeof t){var i=new Error("Required module is missing: "+r);throw console.error(i.stack),i}if(n=e[r],"undefined"==typeof n){n={exports:{}};var o=n.exports;t(o,n),e[r]=n.exports,n=n.exports}return n}}();addListener("DOMContentLoaded",function(){document.body.parentNode.$data={};try{require("x-widget")("game1","depiler2bouts.main","")}catch(e){console.error("Unable to initialize depiler2bouts.main!",e)}try{require("x-widget")("tfw.grader0","tfw.grader",{header:"function(values, F, L) {",footer:"}",grader:function(){function e(e){var r,t,n;for(r=0;r<e.length;r++)t=Math.floor(Math.random()*e.length),n=e[r],e[r]=e[t],e[t]=n;return e}try{this.expect([5,9,3,6,7,10,4,1,8,2]).toBe(!0),this.expect([7,3,2,6,5,9,8,1,10,4]).toBe(!0),this.expect([4,2,1,5,6,10,7,3,9,8]).toBe(!0),this.expect([1,2,3,4,5,6,7,8,9,10]).toBe(!0),this.expect([10,9,8,7,6,5,4,3,2,1]).toBe(!0),this.expect([10,7,6,3,2,1,4,5,8,9]).toBe(!0);for(var r=[1,2,3,4,5,6,7,8,9,10],t=0;1e3>t;t++)e(r),this.expect(r).toBe(!0)}catch(n){throw n.args&&this.fail("Votre programme a perdu dans cette configuration : "+JSON.stringify(n.args[0])),n}},wrapper:function(e){function r(e,r,n){return r>=n?e[r]:Math.max(e[r]+t(e,r+1,n),e[n]+t(e,r,n-1))}function t(e,t,n){return t>=n?-e[t]:Math.min(-e[t]+r(e,t+1,n),-e[n]+r(e,t,n-1))}return function(t){for(var n,i=0,o=0,a=t.length-1;a>o;){if(n=e(t,o,a),0==n)i+=t[o],o++;else{if(1!=n)throw{fail:"Votre fonction devrait retourner 0 pour dire de prendre la première pièce\net 1 pour la dernière.\nMalheureusement, elle vient de retourner "+JSON.stringify(n)};i+=t[a],a--}n=r(t,o+1,a)-t[o]<r(t,o,a-1)-t[a]?0:1,0==n?i-=t[o++]:1==n&&(i-=t[a--])}return i>0}}})}catch(e){console.error("Unable to initialize tfw.grader!",e)}try{require("x-widget")("game2","depiler2bouts.main",!0)}catch(e){console.error("Unable to initialize depiler2bouts.main!",e)}});
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.514",major:1,minor:0,revision:514,date:new Date(2016,1,4,14,52,44)};var t=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,t){var a,e,o,i,g,l,u=r[n.lang()],s=t[0];if(!u)return s;if(a=u[s],!a)return s;if(t.length>1){for(e="",g=0,o=0;o<a.length;o++)i=a.charAt(o),"$"===i?(e+=a.substring(g,o),o++,l=a.charCodeAt(o)-48,e+=0>l||l>=t.length?"$"+a.charAt(o):t[l],g=o+1):"\\"===i&&(e+=a.substring(g,o),o++,e+=a.charAt(o),g=o+1);e+=a.substr(g),a=e}return a}};
window["#tfw.grader"]=function(exports,module){"use strict";function Jasmine(t){this._runtime=null,this._wrapper=t}function Runtime(t,e){this._inverted=0,this._result=t,this._args=e}var Widget=require("wdg"),D=Widget.div,T=Widget.tag,Grader=function(t){console.info("[tfw.grader] options=",t);var e=this;Widget.call(this),this.addClass("tfw-grader"),this._options=t,t.header&&this.append(T("pre").text(t.header));var r=T("textarea").attr({cols:80,rows:12});r.text(localStorage.getItem("grader#"+this.attr("id"))||""),this.append(r),t.footer&&this.append(T("pre").text(t.footer));var i=Widget.tag("button").text("Valider").Tap(function(){e.grade(r.element().value),localStorage.setItem("grader#"+this.attr("id"),r.element().value)}),o=Widget.tag("div").addClass("ok"),a=Widget.tag("pre").addClass("error");this.append(i,o,a),this._btn=i,this._ok=o,this._error=a,r.element().addEventListener("keyup",function(){i.removeAttr("disabled"),a.text(""),o.text("").removeClass("show")})};Grader.prototype=Object.create(Widget.prototype),Grader.prototype.constructor=Grader,Grader.prototype.grade=function(testContent){var opt=this._options;opt.header&&(testContent=opt.header+testContent),opt.footer&&(testContent+=opt.footer);var f;try{eval("f="+testContent)}catch(ex){return console.error(ex),this.fail("La syntaxe de votre code est invalide!\n"+ex)}var wrapper;try{wrapper=this.wrapper(f)}catch(ex){return console.error(ex),this.fail("Le grader lui-même a provoqué une exception!\n"+ex)}var grader=opt.grader;if("function"!=typeof grader)return this.fail("Ce grader n'a pas de fonction de vérification!");try{var jasmine=new Jasmine(wrapper);grader.call(jasmine),this._ok.text("Votre code est correct. Bravo !").addClass("show")}catch(ex){return console.error(ex),ex&&ex.fail?this.fail(ex.fail):this.fail("Votre code a déclenché une exception!\n"+ex)}},Grader.prototype.fail=function(t){this._btn.attr("disabled","disabled"),this._error.text(t)},Grader.prototype.wrapper=function(t){return"function"!=typeof this._options.wrapper?t:this._options.wrapper(t)},Grader.create=function(t){return new Grader(t)},module.exports=Grader,Jasmine.prototype.fail=function(t){throw{fail:t}},Jasmine.prototype.expect=function(){try{var t,e=[];for(t=0;t<arguments.length;t++)e.push(arguments[t]);var r=this._wrapper.apply(this,e),i=new Runtime(r,e);return i}catch(o){if(o.fail)throw o;throw{fail:"Votre code a provoqué une exception!\n"+o}}},Runtime.prototype.not=function(){return this._inverted=1-this._inverted,this},Runtime.prototype.toBe=function(t){if(this._inverted){if(this._result===t)throw{fail:"Expected "+JSON.stringify(this._result)+" NOT to be "+JSON.stringify(t)+"!",expected:t,result:this._result,args:this._args}}else if(this._result!==t)throw{fail:"Expected "+JSON.stringify(this._result)+" to be "+JSON.stringify(t)+"!",expected:t,result:this._result,args:this._args}}};
window["#wdg"]=function(t,e){"use strict";function n(t){this.__data={};try{var e;if("undefined"==typeof t&&(t={}),"undefined"!=typeof t.innerHTML&&"undefined"!=typeof t.childNodes&&(t={element:t}),"undefined"==typeof t.tag&&(t.tag="div"),t.element)this.element(t.element);else if("undefined"!=typeof t.id){if(e=window.document.getElementById(t.id),!e)throw Error("Can't find element with id: \""+t.id+'"!');this.element(e)}else this.element(window.document.createElement(t.tag)),this.addClass("wdg","custom")}catch(n){throw console.error("[widget] ",n),console.error("[Widget] ",JSON.stringify(t)),Error(n)}}n.prototype={element:function(t){return void 0===t?this._element:("string"==typeof t&&(t=window.document.querySelector(t)),this._element=t,this)},data:function(t,e){return"undefined"==typeof e?this.__data[t]:(this.__data[t]=e,this)},detach:function(){var t=this._element;if(t){var e=t.parentNode;e&&e.removeChild(t)}return this},addEvent:function(t,e,n){if("string"==typeof e){var i=e;"undefined"==typeof n&&(n=this),e=function(t){var r=n[i];if("function"!=typeof r)throw Error('"'+e+'" is not a function of: '+n);r.call(n,t)}}var r=this.element();return"tap"==t?(r.addEventListener("mousedown",function(t){t.preventDefault(),t.stopPropagation()},!1),r.addEventListener("mouseup",function(t){t.preventDefault(),t.stopPropagation(),e(t)},!1),r.addEventListener("touchend",e,!1)):r.addEventListener(t,e,!1),this},removeAttr:function(){if(this._element){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],this._element.removeAttribute(e)}return this},hasAttribute:function(t){return this._element?this._element.hasAttribute(t):!1},attr:function(t,e,n){var i;if(!this._element||!this._element.getAttribute)return null;if("string"==typeof t)return void 0!==e?"class"==t?(this._element.className=e,this):(n&&this._element.setAttributeNS?this._element.setAttributeNS(n,t,e):this._element.setAttribute(t,e),this):this._element.getAttribute(t);if("object"==typeof t)for(i in t)"class"==i?this._element.className=t[i]:"$"==i?this.text(t[i]):this._element.setAttribute(i,t[i]);return this},css:function(t,e){var n,i=this._element;if(!i)return null;if("object"!=typeof i.style&&(console.error("[wdg.css] This element does not support styles!",i),i.style={}),"string"==typeof t)return e?(i.style[t]=e,this):i.style[t];if("object"==typeof t)for(n in t)try{i.style[n]=t[n]}catch(r){console.error("[wdg.css] Bad CSS attribute "+n+": "+t[n])}return this},insertAfter:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t.nextSibling),this},insertBefore:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t),this},append:function(){var t,e;for(t=0;t<arguments.length;t++)if(e=arguments[t],"number"==typeof e&&(e=""+e),"undefined"==typeof e||"object"!=typeof e&&"string"!=typeof e)console.error("[Widget.append] Argument #"+t+" is invalid!",arguments),console.error("[Widget.append] Is type is: "+typeof e);else{if("string"==typeof e&&(e.length<1&&(e=" "),e=window.document.createTextNode(e),!e))throw console.error("[Widget.append] Unable to create a text node with this text: ",e),console.error("[wdg] arguments=...",arguments),Error("[Widget.append] Unable to create a text node with this text: "+JSON.stringify(e));if(Array.isArray(e))e.forEach(function(t){this.append(t)},this);else{var n="function"==typeof e.element?e.element():e;this._element.appendChild(n)}}return this},appendTo:function(t){return t?("function"==typeof t.append?t.append(this):"function"==typeof t.appendChild&&(t.appendChild(this._element),this.onAppend()),this):this},appendToBody:function(){return window.document.body.appendChild(this._element),this},hasClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)if(e=arguments[t],!n.contains(e))return!1;return!0},addClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],"string"==typeof e?(e=e.trim(),e.length>0&&n.add(e)):console.error("[wdg.addClass] Arguments with bad type!",arguments);return this},removeClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.remove(e);return this},toggleClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.toggle(e);return this},clear:function(){for(var t=this.element();t.firstChild;)t.removeChild(t.firstChild);var e,n;for(e=0;e<arguments.length;e++)n=arguments[e],this.append(n);return this},text:function(t){var e,n,i,r;if("string"==typeof t||"number"==typeof t)return this.clear(),this._element.appendChild(window.document.createTextNode(t)),this;if(e=this._element,void 0!==t&&(e=t),n="",e.childNodes)for(i=0;i<e.childNodes.length;i++)r=e.childNodes[i],3==r.nodeType?r.nodeValue&&(n+=r.nodeValue):n+=this.text(r);return n},html:function(t){return"undefined"==typeof t?this._element.innerHTML:(this._element&&(this._element.innerHTML=t),this)},focus:function(){var t=this._element;return t?("function"==typeof t.focus&&t.focus(),this):this},rect:function(){var t=this._element;return t?t.getBoundingClientRect():null},Tap:function(t,e){if("undefined"==typeof t)return this._Tap;var n=this;return"undefined"==typeof e&&(e=n),"string"==typeof t&&(t=e[t]),this._Tap||this.activatePointerEvents(),this._Tap=[t,e],this}},n.prototype.activatePointerEvents=function(){if(this._pointerEvents)return this;this._pointerEvents={start:0};var t=this._pointerEvents,e=this;return this.addEvent("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t.touch=1,t.start=Date.now()}),this.addEvent("touchend",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){t.touch=0;var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this.addEvent("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t.touch||(t.start=Date.now())}),this.addEvent("mouseup",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this},n.prototype.div=function(){for(var t=new n,e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.prototype.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.prototype.isInDOM=function(){return n.isInDOM(this.element())},n.prototype.onAppend=function(){},n.create=function(t){return new n(t)},n.find=function(t){return new n({element:window.document.querySelector(t)})},n.svg=function(t,e){var i="http://www.w3.org/2000/svg";"object"==typeof t&&(e=t,t="svg"),"string"!=typeof t&&(t="svg");var r=window.document.createElementNS(i,t),s=new n({element:r});return"undefined"==typeof e&&(e={}),"svg"==t&&("undefined"==typeof e.version&&(e.version="1.1"),"undefined"==typeof e["xmlns:svg"]&&(e["xmlns:svg"]="http://www.w3.org/2000/svg"),"undefined"==typeof e.xmlns&&(e.xmlns="http://www.w3.org/2000/svg"),"undefined"==typeof e["xmlns:xlink"]&&(e["xmlns:xlink"]="http://www.w3.org/1999/xlink"),"undefined"==typeof e.viewBox&&"number"==typeof e.width&&"number"==typeof e.height&&(e.viewBox="0 0 "+e.width+" "+e.height)),"object"==typeof e&&s.attr(e),s},n.isInDOM=function(t){return t?("function"==typeof t.element&&(t=t.element()),t===window.document?!0:n.isInDOM(t.parentNode)):!1},n.div=function(){for(var t=new n({tag:"div"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.span=function(){for(var t=new n({tag:"span"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.id=function(t){return new n({element:window.document.getElementById(t)})},n.body=new n(window.document.body),e.exports=n,"classList"in window.document.createElement("_")?!function(){var t=window.document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(){if("Element"in window){var t="classList",e="prototype",n=window.Element[e],i=Object,r=String.prototype.trim||function(){var t=new RegExp("^\\s+|\\s+$","g");return this.replace(t,"")},s=Array[e].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(new RegExp("\\s").test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(new RegExp("\\s+")):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},d=u[e]=[],f=function(){return new u(this)};if(o[e]=Error[e],d.item=function(t){return this[t]||null},d.contains=function(t){return t+="",-1!==a(this,t)},d.add=function(){var t,e=arguments,n=0,i=e.length,r=!1;do t=e[n]+"",-1===a(this,t)&&(this.push(t),r=!0);while(++n<i);r&&this._updateClassName()},d.remove=function(){var t,e,n=arguments,i=0,r=n.length,s=!1;do for(t=n[i]+"",e=a(this,t);-1!==e;)this.splice(e,1),s=!0,e=a(this,t);while(++i<r);s&&this._updateClassName()},d.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},d.toString=function(){return this.join(" ")},i.defineProperty){var l={get:f,enumerable:!0,configurable:!0};try{i.defineProperty(n,t,l)}catch(h){-2146823252===h.number&&(l.enumerable=!1,i.defineProperty(n,t,l))}}else i[e].__defineGetter__&&n.__defineGetter__(t,f)}}()};
window["#x-widget"]=function(e,t){"use strict";t.exports=function(e,t,n){var i=document.getElementById(e);if(i){var r=require(t),d=new r(n);d.element().$ctrl=d,d=d.element(),d.setAttribute("id",e),i.parentNode.replaceChild(d,i)}}};
window["#depiler2bouts.main"]=function(t,e){"use strict";function s(){var t=this,e=u("a","button").attr("href","#").append(p({angle:180,width:"24px",height:"30px"})).Tap(function(){t.reset(!1)}),s=u("a","button").attr("href","#").append(p({angle:0,width:"24px",height:"30px"})).Tap(function(){t.reset(!0)}),i=h("pts1").text("0"),a=h("pts2").text("0"),n=h("delta"),r=h("tbl").append(h().append(h().text("Vous"),i),h().append(h().text("recommencer:"),h().append(e,u("span").html("&nbsp;&nbsp;"),s),n),h().append(h().text("Lui"),a));return this._pts1=i,this._pts2=a,this._delta=n,r.appendTo(this)}function i(t){var e,s,i,a=this,n=function(){a.onTap(this)},p=[];for(e=0;t>e;e++)s=h("piece").appendTo(this),i=h().text(e+1).attr("data-idx",e).Tap(n),i.parent=s,s.append(i),p.push(i);return p}function a(t,e,s){return e==s?t[e]:Math.max(t[e]+n(t,e+1,s),t[s]+n(t,e,s-1))}function n(t,e,s){return e==s?-t[e]:Math.min(-t[e]+a(t,e+1,s),-t[s]+a(t,e,s-1))}var p=require("svg.triangle"),r=require("wdg"),o=require("tp4.bulle"),h=r.div,u=r.tag,f=function(t){r.call(this),this.addClass("depiler2bouts-main");var e=10;if(this._pieces=i.call(this,e),t){for(var a=0,n=0;n>=a;)this.shuffle(),this._pieces.forEach(function(t,e){e%2==0?a+=parseInt(t.text()):n+=parseInt(t.text())});a=n=0;var p=h("pts1").text(0),o=h("pts2").text(0);return this.append(h("tbl").append(p,o)),void this._pieces.forEach(function(t,e){e%2==0?this.flip(t,"you",100*e+1e3,function(t){a+=parseInt(t.text()),p.text(a)}):this.flip(t,"him",100*e+1e3,function(t){n+=parseInt(t.text()),o.text(n)})},this)}s.call(this),this.reset()};f.prototype=Object.create(r.prototype),f.prototype.constructor=f,f.prototype.onTap=function(t){if(!this._freeze){var e=this._first,s=this._last;if(e!=s||!t.hasClass("you")&&!t.hasClass("him")){var i=parseInt(t.attr("data-idx"));if(i==e||i==s){var a=this;this._first<this._last&&setTimeout(function(){a.computersTurn()},600),i==e?this._first=Math.min(this._first+1,this._last):i==s&&(this._last=Math.max(this._last-1,this._first)),t.parent.addClass("flip"),setTimeout(function(){t.addClass("you"),t.parent.removeClass("flip")},300),this.pts1(this.pts1()+parseInt(t.text())),this._freeze=!0}}}},f.prototype.flip=function(t,e,s,i){"undefined"==typeof s&&(s=0),setTimeout(function(){t.removeClass("you","him"),t.parent.addClass("flip")},s),setTimeout(function(){t.addClass(e),t.parent.removeClass("flip")},300+s),"function"==typeof i&&setTimeout(function(){i(t)},600+s)},f.prototype.computersTurn=function(){var t=this;this._freeze=!1;var e=[];this._pieces.forEach(function(t){e.push(parseInt(t.text()))});var s=this._first,i=this._last,n=s;if(s!=i){var p=a(e,s+1,i)-e[s],r=a(e,s,i-1)-e[i];r>p?(n=s,this._first++):(n=i,this._last--);var h=parseInt(this._pts1.text()),u=parseInt(this._pts2.text());console.info("[depiler2bouts.main] a=...",p," -> ",h-u+p),console.info("[depiler2bouts.main] b=...",r," -> ",h-u+r)}var f=this._pieces[n];f.parent.addClass("flip"),setTimeout(function(){f.addClass("him"),f.parent.removeClass("flip")},300),setTimeout(function(){if(!t._computerHasAlreadySpoken){var e=Math.min(h-u+p,h-u+r);0>e&&(o.show(t._pts2,"<html>Je parie que je vais gagner avec au moins <b>"+Math.abs(e)+"</b> points d'avance."),t._computerHasAlreadySpoken=!0)}},600),this.pts2(this.pts2()+parseInt(f.text()))},f.prototype.pts1=function(t){return"undefined"==typeof t?parseInt(this._pts1.text()):(this._pts1.text(""+t),this.setDelta(),this)},f.prototype.pts2=function(t){return"undefined"==typeof t?parseInt(this._pts2.text()):(this._pts2.text(""+t),this.setDelta(),this)},f.prototype.setDelta=function(){var t=this.pts1()-this.pts2(),e=this._delta;t>0?(t="+"+t,e.addClass("you").removeClass("him")):0>t&&e.addClass("him").removeClass("you"),e.text(""+t)},f.prototype.shuffle=function(){for(var t,e,s=[1,2,3,4,5,6,7,8,9,10],i=0;10>i;i++)t=Math.floor(10*Math.random()),e=s[i],s[i]=s[t],s[t]=e,this._pieces[i].removeClass("you","him");this._pieces.forEach(function(t,e){t.text(s[e])})},f.prototype.reset=function(t){this._computerHasAlreadySpoken=!1,this.shuffle(),this.pts1(0),this.pts2(0),this._first=0,this._last=this._pieces.length-1,this._freeze=!1,t&&this.computersTurn()},f.create=function(){return new f},e.exports=f};
window["#tp4.bulle"]=function(t,e){function n(){d&&(d.detach(),d=null)}function o(t,e){"string"==typeof e&&(e="<html>"==e.substr(0,6)?i().html(e.substr(6)):i().text(e));var o=t.rect(),l=o.left+o.width/2,u=o.top+o.height/2,a=document.body.getBoundingClientRect().width/2,r=document.body.getBoundingClientRect().height/2,s=l>a?"right":"left",c=u>r?"bottom":"top",g=i("tp4-bulle",s,c),h=i("frame"),f=p.tag("center").css("marginTop","10px"),b=i("content").append(e,f);"right"==s&&(l-=240),g.css({left:l+"px",top:u+"px"}),g.append(h),"top"==c?h.append(i("svg"),b):h.append(b,i("svg")),d=i("tp4-bulle-container").append(g).appendToBody(),d.Tap(n),setTimeout(function(){g.addClass("show")})}var p=(require("$").intl,require("wdg")),i=p.div,d=null;t.show=o,t.hide=n};
window["#svg.triangle"]=function(e,t){"use strict";var i=require("wdg"),n=i.svg;t.exports=function(e){"undefined"==typeof e&&(e={}),"undefined"==typeof e.width&&(e.width="1em"),"undefined"==typeof e.height&&(e.height="1em"),"undefined"==typeof e.angle&&(e.angle=0),"undefined"==typeof e.fill&&(e.fill="#000");var t=n({viewBox:"-105 -105 210 210",width:e.width,height:e.height});return t.append(n("path",{fill:e.fill,stroke:e.stroke?e.stroke:"none",transform:"rotate("+e.angle+")",d:"M100,0L-70.71,-70.71L-40,0L-70.71,70.71Z"})),t}};
//# sourceMappingURL=map/articles/depiler_par_les_deux_bouts/@depiler_par_les_deux_bouts.3.js.map