<<<<<<< HEAD
function addListener(e,o){window.addEventListener?window.addEventListener(e,o,!1):window.attachEvent("on"+e,o)}var require=function(){var e={};return function(o,t){var i;if(t=window["#"+o],"undefined"==typeof t){var n=new Error("Required module is missing: "+o);throw console.error(n.stack),n}if(i=e[o],"undefined"==typeof i){i={exports:{}};var r=i.exports;t(r,i),e[o]=i.exports,i=i.exports}return i}}();addListener("DOMContentLoaded",function(){document.body.parentNode.$data={};try{require("x-widget")("platon.solide84","platon.solide",{faces:6})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.solide85","platon.solide",{faces:4})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.solide86","platon.solide",{faces:8})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.dodeca187","platon.dodeca1",{width:600,height:600})}catch(e){console.error("Unable to initialize platon.dodeca1!",e)}try{require("x-widget")("platon.solide88","platon.solide",{faces:"20a"})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.solide89","platon.solide",{faces:"20b"})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.icosaedre90","platon.icosaedre",{width:200,height:200})}catch(e){console.error("Unable to initialize platon.icosaedre!",e)}try{require("x-widget")("platon.solide91","platon.solide",{faces:20})}catch(e){console.error("Unable to initialize platon.solide!",e)}});
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.515",major:1,minor:0,revision:515,date:new Date(2016,1,4,18,34,34)};var t=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,t){var a,e,o,i,g,l,u=r[n.lang()],s=t[0];if(!u)return s;if(a=u[s],!a)return s;if(t.length>1){for(e="",g=0,o=0;o<a.length;o++)i=a.charAt(o),"$"===i?(e+=a.substring(g,o),o++,l=a.charCodeAt(o)-48,e+=0>l||l>=t.length?"$"+a.charAt(o):t[l],g=o+1):"\\"===i&&(e+=a.substring(g,o),o++,e+=a.charAt(o),g=o+1);e+=a.substr(g),a=e}return a}};
window["#platon.icosaedre"]=function(e,t){"use strict";var i=require("three.canvas"),s=function(e){i.call(this,e),this.css("float","left");var t=new THREE.Group;this.scene.add(t),this._grp=t;var s=.5;this.createCircles(s);for(var r=Math.PI/5,a=0;4>a;a++)t.add(this.createLine({vertices:[[Math.cos(r+2*r*a),-s,Math.sin(r+2*r*a)],[Math.cos(r+2*r*(a+.5)),s,Math.sin(r+2*r*(a+.5))],[Math.cos(r+2*r*(a+1)),-s,Math.sin(r+2*r*(a+1))],[Math.cos(r+2*r*a),-s,Math.sin(r+2*r*a)]],linewidth:1,color:8947848}));var o=[Math.cos(r),-s,Math.sin(r)],c=[Math.cos(-r),-s,Math.sin(-r)],h=[1,s,0];t.add(this.createMesh({vertices:[o,c,h],faces:[[0,1,2]],colors:[16711680],doublesided:!0})),t.add(this.createLine({vertices:[[0,-1,0],[0,1,0]],color:0})),t.add(this.createLine({vertices:[[0,s,0],[1,s,0]],color:8947848})),t.add(this.createMesh({vertices:[o,c,[0,-s,0]],faces:[[0,1,2]],colors:[16777096],doublesided:!0})),t.add(this.createLine({vertices:[[0,-s,0],c],color:8947848})),t.add(this.createLine({vertices:[[1,-s,0],[1,s,0]],color:65280,linewidth:2})),t.add(this.createLine({vertices:[[1,-s,0],[.8,-s,0]],color:255,linewidth:2})),this.camera.position.z=3,this.camera.position.y=1,this.camera.lookAt(new THREE.Vector3(0,0,0));var n=new THREE.HemisphereLight(13430527,10027008,3.6),d=new THREE.DirectionalLight(10057591,5),l=new THREE.DirectionalLight(7829401,2);d.position.set(43,13,5),l.position.set(-20,5,1),this.scene.add(d),this.scene.add(l),this.scene.add(n),this.scene.add(t),this.start()};s.prototype=Object.create(i.prototype),s.prototype.constructor=s,s.prototype.onRender=function(e,t){var i=this._grp;i.rotation.y=6e-4*e},s.prototype.createCircles=function(e){for(var t,i=this._grp,s=-Math.PI/4,r=Math.PI/4,a=32,o=[],c=[],h=0;a>=h;h++)t=s+(r-s)*h/a,o.push([Math.cos(t),e,Math.sin(t)]),c.push([Math.cos(t),-e,Math.sin(t)]);i.add(this.createLine({vertices:o,color:8947848})),i.add(this.createLine({vertices:c,color:8947848}))},s.create=function(e){return new s(e)},t.exports=s};
window["#three.canvas"]=function(e,t){"use strict";function n(e){c.length>0&&(c.forEach(function(t){t.render(e)}),window.requestAnimationFrame(n))}function r(e){-1==c.indexOf(e)&&(c.push(e),1==c.length&&window.requestAnimationFrame(n))}function i(e){var t=c.indexOf(e);t>-1&&c.splice(t,1)}function o(e,t,n){var r=[];if(3==t.length)r.push(new THREE.Face3(t[0],t[1],t[2]));else if(4==t.length)r.push(new THREE.Face3(t[0],t[1],t[2]),new THREE.Face3(t[0],t[2],t[3]));else{var i=0,o=0,s=0;t.forEach(function(n){var r=e.vertices[t[n]];i+=r.x,o+=r.y,s+=r.z}),i/=t.length,o/=t.length,s/=t.length;var c=t.length;e.vertices.push(new THREE.Vector3(i,o,s));var h;for(h=0;c>h;h++)r.push(new THREE.Face3(h,(h+1)%c,c))}"undefined"!=typeof n&&r.forEach(function(e){e.vertexColors[0]=e.vertexColors[1]=e.vertexColors[2]=n}),r.forEach(function(t){e.faces.push(t)})}var s=require("wdg"),c=[],h=function(e){s.call(this),this.addClass("three-canvas"),"object"!=typeof e&&(e={}),"undefined"==typeof e&&(e={}),"undefined"==typeof e.width&&(e.width=window.innerWidth),"undefined"==typeof e.height&&(e.height=window.innerHeight),this.W=e.width,this.H=e.height,this.css({width:this.W+"px",height:this.H+"px"}),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(45,this.W/this.H,.1,1e3),this.camera.position.z=1.4,this.renderer=new THREE.WebGLRenderer({alpha:!0}),this.renderer.setClearColor(16777215,0),this.renderer.setSize(this.W,this.H),this.append(this.renderer.domElement),this._time=0};h.prototype=Object.create(s.prototype),h.prototype.constructor=h,h.prototype.render=function(e){this._time<=0&&(this._time=e-1),this.onRender(e,e-this._time),this.renderer.render(this.scene,this.camera),this._time=e},h.prototype.onRender=function(e,t){},h.prototype.start=function(){r(this)},h.prototype.stop=function(){i(this)},h.prototype.createAxis=function(){var e=new THREE.Group;return e.add(this.createLine({vertices:[[0,0,0],[1,0,0]],color:16711680}),this.createLine({vertices:[[0,0,0],[0,1,0]],color:65280}),this.createLine({vertices:[[0,0,0],[0,0,1]],color:255})),e},h.prototype.createLine=function(e){"undefined"==typeof e&&(e={vertices:[]}),"undefined"==typeof e.color&&(e.color=16711680),"undefined"==typeof e.linewidth&&(e.linewidth=1);var t=new THREE.LineBasicMaterial({color:e.color,linewidth:e.linewidth}),n=new THREE.Geometry;return e.vertices.forEach(function(e){n.vertices.push(new THREE.Vector3(e[0],e[1],e[2]))}),new THREE.Line(n,t)},h.prototype.createMesh=function(e){if("undefined"==typeof e)throw Error("[three.canvas.createMesh] Missing optument!");"undefined"==typeof e.colors&&(e.colors=[new THREE.Color(.5+.5*Math.random(),.5+.5*Math.random(),.5+.5*Math.random())]),"undefined"==typeof e.nbColors&&(e.nbColors=e.colors.length),"undefined"==typeof e.solid&&(e.solid=!0),"undefined"==typeof e.wireframe&&(e.wireframe=!0),"undefined"==typeof e.wirecolor&&(e.wirecolor=new THREE.Color(3355443)),"undefined"==typeof e.wirewidth&&(e.wirewidth=2),"undefined"==typeof e.doublesided&&(e.doublesided=!1),"undefined"==typeof e.mat&&(e.mat=new THREE.MeshPhongMaterial({specular:3355443,shininess:3.14,metal:!0,vertexColors:THREE.VertexColors,side:e.doublesided?THREE.DoubleSide:THREE.FrontSide,transparent:!0,opacity:.9})),e.colors.forEach(function(t,n){"number"==typeof t&&(e.colors[n]=new THREE.Color(t))});var t=new THREE.Group;if(e.solid){var n=new THREE.Geometry;e.vertices.forEach(function(e){n.vertices.push(new THREE.Vector3(e[0],e[1],e[2]))}),e.faces.forEach(function(t,r){o(n,t,e.colors[r%e.nbColors])}),n.computeFaceNormals(),n.computeVertexNormals(),t.add(new THREE.Mesh(n,e.mat))}if(e.wireframe){var r=new THREE.LineBasicMaterial({color:e.wirecolor,linewidth:e.wirewidth}),i=[];e.faces.forEach(function(n){for(var o,s,c,h,a,d=0;d<n.length;d++)c=n[d],h=n[(d+1)%n.length],c>h&&(a=c,c=h,h=a),s=c+","+h,-1==i.indexOf(s)&&(i.push(s),o=new THREE.Geometry,o.vertices.push(new THREE.Vector3(e.vertices[c][0],e.vertices[c][1],e.vertices[c][2]),new THREE.Vector3(e.vertices[h][0],e.vertices[h][1],e.vertices[h][2])),o.type=THREE.Lines,t.add(new THREE.Line(o,r)))})}return console.info("[three.canvas] grp=",t),t},h.create=function(e){return new h(e)},t.exports=h};
window["#wdg"]=function(t,e){"use strict";function n(t){this.__data={};try{var e;if("undefined"==typeof t&&(t={}),"undefined"!=typeof t.innerHTML&&"undefined"!=typeof t.childNodes&&(t={element:t}),"undefined"==typeof t.tag&&(t.tag="div"),t.element)this.element(t.element);else if("undefined"!=typeof t.id){if(e=window.document.getElementById(t.id),!e)throw Error("Can't find element with id: \""+t.id+'"!');this.element(e)}else this.element(window.document.createElement(t.tag)),this.addClass("wdg","custom")}catch(n){throw console.error("[widget] ",n),console.error("[Widget] ",JSON.stringify(t)),Error(n)}}n.prototype={element:function(t){return void 0===t?this._element:("string"==typeof t&&(t=window.document.querySelector(t)),this._element=t,this)},data:function(t,e){return"undefined"==typeof e?this.__data[t]:(this.__data[t]=e,this)},detach:function(){var t=this._element;if(t){var e=t.parentNode;e&&e.removeChild(t)}return this},addEvent:function(t,e,n){if("string"==typeof e){var i=e;"undefined"==typeof n&&(n=this),e=function(t){var r=n[i];if("function"!=typeof r)throw Error('"'+e+'" is not a function of: '+n);r.call(n,t)}}var r=this.element();return"tap"==t?(r.addEventListener("mousedown",function(t){t.preventDefault(),t.stopPropagation()},!1),r.addEventListener("mouseup",function(t){t.preventDefault(),t.stopPropagation(),e(t)},!1),r.addEventListener("touchend",e,!1)):r.addEventListener(t,e,!1),this},removeAttr:function(){if(this._element){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],this._element.removeAttribute(e)}return this},hasAttribute:function(t){return this._element?this._element.hasAttribute(t):!1},attr:function(t,e,n){var i;if(!this._element||!this._element.getAttribute)return null;if("string"==typeof t)return void 0!==e?"class"==t?(this._element.className=e,this):(n&&this._element.setAttributeNS?this._element.setAttributeNS(n,t,e):this._element.setAttribute(t,e),this):this._element.getAttribute(t);if("object"==typeof t)for(i in t)"class"==i?this._element.className=t[i]:"$"==i?this.text(t[i]):this._element.setAttribute(i,t[i]);return this},css:function(t,e){var n,i=this._element;if(!i)return null;if("object"!=typeof i.style&&(console.error("[wdg.css] This element does not support styles!",i),i.style={}),"string"==typeof t)return e?(i.style[t]=e,this):i.style[t];if("object"==typeof t)for(n in t)try{i.style[n]=t[n]}catch(r){console.error("[wdg.css] Bad CSS attribute "+n+": "+t[n])}return this},insertAfter:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t.nextSibling),this},insertBefore:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t),this},append:function(){var t,e;for(t=0;t<arguments.length;t++)if(e=arguments[t],"number"==typeof e&&(e=""+e),"undefined"==typeof e||"object"!=typeof e&&"string"!=typeof e)console.error("[Widget.append] Argument #"+t+" is invalid!",arguments),console.error("[Widget.append] Is type is: "+typeof e);else{if("string"==typeof e&&(e.length<1&&(e=" "),e=window.document.createTextNode(e),!e))throw console.error("[Widget.append] Unable to create a text node with this text: ",e),console.error("[wdg] arguments=...",arguments),Error("[Widget.append] Unable to create a text node with this text: "+JSON.stringify(e));if(Array.isArray(e))e.forEach(function(t){this.append(t)},this);else{var n="function"==typeof e.element?e.element():e;this._element.appendChild(n)}}return this},appendTo:function(t){return t?("function"==typeof t.append?t.append(this):"function"==typeof t.appendChild&&(t.appendChild(this._element),this.onAppend()),this):this},appendToBody:function(){return window.document.body.appendChild(this._element),this},hasClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)if(e=arguments[t],!n.contains(e))return!1;return!0},addClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],"string"==typeof e?(e=e.trim(),e.length>0&&n.add(e)):console.error("[wdg.addClass] Arguments with bad type!",arguments);return this},removeClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.remove(e);return this},toggleClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.toggle(e);return this},clear:function(){for(var t=this.element();t.firstChild;)t.removeChild(t.firstChild);var e,n;for(e=0;e<arguments.length;e++)n=arguments[e],this.append(n);return this},text:function(t){var e,n,i,r;if("string"==typeof t||"number"==typeof t)return this.clear(),this._element.appendChild(window.document.createTextNode(t)),this;if(e=this._element,void 0!==t&&(e=t),n="",e.childNodes)for(i=0;i<e.childNodes.length;i++)r=e.childNodes[i],3==r.nodeType?r.nodeValue&&(n+=r.nodeValue):n+=this.text(r);return n},html:function(t){return"undefined"==typeof t?this._element.innerHTML:(this._element&&(this._element.innerHTML=t),this)},focus:function(){var t=this._element;return t?("function"==typeof t.focus&&t.focus(),this):this},rect:function(){var t=this._element;return t?t.getBoundingClientRect():null},Tap:function(t,e){if("undefined"==typeof t)return this._Tap;var n=this;return"undefined"==typeof e&&(e=n),"string"==typeof t&&(t=e[t]),this._Tap||this.activatePointerEvents(),this._Tap=[t,e],this}},n.prototype.activatePointerEvents=function(){if(this._pointerEvents)return this;this._pointerEvents={start:0};var t=this._pointerEvents,e=this;return this.addEvent("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t.touch=1,t.start=Date.now()}),this.addEvent("touchend",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){t.touch=0;var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this.addEvent("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t.touch||(t.start=Date.now())}),this.addEvent("mouseup",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this},n.prototype.div=function(){for(var t=new n,e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.prototype.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.prototype.isInDOM=function(){return n.isInDOM(this.element())},n.prototype.onAppend=function(){},n.create=function(t){return new n(t)},n.find=function(t){return new n({element:window.document.querySelector(t)})},n.svg=function(t,e){var i="http://www.w3.org/2000/svg";"object"==typeof t&&(e=t,t="svg"),"string"!=typeof t&&(t="svg");var r=window.document.createElementNS(i,t),s=new n({element:r});return"undefined"==typeof e&&(e={}),"svg"==t&&("undefined"==typeof e.version&&(e.version="1.1"),"undefined"==typeof e["xmlns:svg"]&&(e["xmlns:svg"]="http://www.w3.org/2000/svg"),"undefined"==typeof e.xmlns&&(e.xmlns="http://www.w3.org/2000/svg"),"undefined"==typeof e["xmlns:xlink"]&&(e["xmlns:xlink"]="http://www.w3.org/1999/xlink"),"undefined"==typeof e.viewBox&&"number"==typeof e.width&&"number"==typeof e.height&&(e.viewBox="0 0 "+e.width+" "+e.height)),"object"==typeof e&&s.attr(e),s},n.isInDOM=function(t){return t?("function"==typeof t.element&&(t=t.element()),t===window.document?!0:n.isInDOM(t.parentNode)):!1},n.fromTextOrHtml=function(t){var e=n.span();return"<html>"==t.substr(0,6)?e.html(t.substr(6)):e.text(t),e},n.div=function(){for(var t=new n({tag:"div"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.span=function(){for(var t=new n({tag:"span"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.id=function(t){return new n({element:window.document.getElementById(t)})},n.body=new n(window.document.body),e.exports=n,"classList"in window.document.createElement("_")?!function(){var t=window.document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(){if("Element"in window){var t="classList",e="prototype",n=window.Element[e],i=Object,r=String.prototype.trim||function(){var t=new RegExp("^\\s+|\\s+$","g");return this.replace(t,"")},s=Array[e].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(new RegExp("\\s").test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(new RegExp("\\s+")):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},d=u[e]=[],f=function(){return new u(this)};if(o[e]=Error[e],d.item=function(t){return this[t]||null},d.contains=function(t){return t+="",-1!==a(this,t)},d.add=function(){var t,e=arguments,n=0,i=e.length,r=!1;do t=e[n]+"",-1===a(this,t)&&(this.push(t),r=!0);while(++n<i);r&&this._updateClassName()},d.remove=function(){var t,e,n=arguments,i=0,r=n.length,s=!1;do for(t=n[i]+"",e=a(this,t);-1!==e;)this.splice(e,1),s=!0,e=a(this,t);while(++i<r);s&&this._updateClassName()},d.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},d.toString=function(){return this.join(" ")},i.defineProperty){var l={get:f,enumerable:!0,configurable:!0};try{i.defineProperty(n,t,l)}catch(h){-2146823252===h.number&&(l.enumerable=!1,i.defineProperty(n,t,l))}}else i[e].__defineGetter__&&n.__defineGetter__(t,f)}}()};
window["#platon.dodeca1"]=function(t,e){"use strict";var a=require("three.canvas"),o=require("three.rotator"),n=function(t){"undefined"==typeof t&&(t={}),"undefined"==typeof t.faces&&(t.faces=4),"undefined"==typeof t.width&&(t.width=280),"undefined"==typeof t.height&&(t.height=280),this._params1=[[0,1],[0,1],[0,1],[0,1],[0,1]],this._params2=[[0,1],[0,1],[0,1],[0,1],[0,1]],a.call(this,{width:t.width,height:t.height}),this.addClass("platon-dodeca1");var e=new THREE.Group;e.add(this.createPentagon()),this.addChildren(e),this.camera.position.z=9,this.scene.add(e),this.root=e,this._rotator=new o(e);var n=new THREE.HemisphereLight(13430527,10027008,3.6),i=new THREE.DirectionalLight(10057591,5),s=new THREE.DirectionalLight(7829401,2);i.position.set(43,13,5),s.position.set(-20,5,1),this.scene.add(i),this.scene.add(s),this.scene.add(n),this.start()};n.prototype=Object.create(a.prototype),n.prototype.constructor=n,n.prototype.onRender=function(t,e){this._rotator.rotate(t);var a=1.11,o=this.pentagons2,n=5e3,i=3e3,s=5e3,r=3e3;t%=n+i+s+r;var h=3;n>t?h=0:n+i>t?h=1:n+i+s>t&&(h=2),console.info("[platon.dodeca1] step=...",h),("undefined"==typeof this._lastStep||this._lastStep>h)&&(this._params1.forEach(function(t){var e=.7*Math.random(),a=e+.3+(.7-e)*Math.random();t[0]=e,t[1]=a}),this._params2.forEach(function(t){var e=.7*Math.random(),a=e+.3+(.7-e)*Math.random();t[0]=e,t[1]=a})),this.pentagons.forEach(function(e,h){var d,p,c=t,u=this._params1[h],f=this._params2[h],M=n+u[0]*i,y=n+u[1]*i,E=n+i+s+u[0]*r,l=n+i+s+u[1]*r;d=M>c?a:y>c?a-2*a*(c-M)/(y-M):E>c?-a:l>c?-a+2*a*(c-E)/(l-E):a,M=n+f[0]*i,y=n+f[1]*i,E=n+i+s+f[0]*r,l=n+i+s+f[1]*r,p=M>c?a:y>c?a-2*a*(c-M)/(y-M):E>c?-a:l>c?-a+2*a*(c-E)/(l-E):a,e.rotation.y=d;var g=o[h];g.rotation.y=p},this),this._lastStep=this._step,this._step=h},n.prototype.createPentagon=function(t){"undefined"==typeof t&&(t=1);var e,a,o=[],n=[];for(a=0;5>a;a++)e=2*a*Math.PI/5,o.push([t*Math.cos(e),t*Math.sin(e),0]),n.push(a);return this.createMesh({vertices:o,faces:[n],doublesided:!0})},n.prototype.createPentagon2=function(t,e){"undefined"==typeof t&&(t=1);var a,o=4*Math.PI/5,n=t*Math.cos(o),i=t*Math.sin(o),s=[],r=[];for(a=0;5>a;a++)o=2*a*Math.PI/5,s.push([t*Math.cos(o)-n,t*Math.sin(o)-i,0]),r.push(a);var h=new THREE.Group;return h.add(this.createMesh({vertices:s,faces:[r],doublesided:!0,material:e})),h},n.prototype.addChildren=function(t,e){"undefined"==typeof e&&(e=1);var a,o,n,i,s,r,h,d,p,c=[],u=[],f=2*e*Math.cos(.3*Math.PI),M=f*Math.cos(Math.PI/10),y=f*Math.sin(Math.PI/10);for(p=0;5>p;p++)i=new THREE.Group,a=2*p*Math.PI/5,o=e*Math.cos(a),n=e*Math.sin(a),s=this.createPentagon2(e),c.push(i),i.add(s),r=new THREE.Group,r.add(i),r.position.x=o,r.position.y=n,r.rotation.z=a-.2*Math.PI,h=this.createPentagon2(e),u.push(h),d=new THREE.Group,d.add(h),d.position.x=M,d.position.y=y,d.rotation.z=.2*Math.PI,i.add(d),t.add(r);this.pentagons=c,this.pentagons2=u},n.create=function(t){return new n(t)},e.exports=n};
window["#three.rotator"]=function(t,o){var n=function(t,o,n,e){"undefined"==typeof o&&(o=2500+500*Math.random()),"undefined"==typeof n&&(n=2500+500*Math.random()),"undefined"==typeof e&&(e=2500+500*Math.random()),this.obj=t,this.sx=o,this.sy=n,this.sz=e};n.prototype.rotate=function(t,o){"undefined"==typeof o&&(o=this.obj),o.rotation.x=t/this.sx,o.rotation.y=t/this.sy,o.rotation.y=t/this.sz},n.create=function(){return new n},o.exports=n};
window["#x-widget"]=function(e,t){"use strict";t.exports=function(e,t,n){var i=document.getElementById(e);if(i){var r=require(t),d=new r(n);d.element().$ctrl=d,d=d.element(),d.setAttribute("id",e),i.parentNode.replaceChild(d,i)}}};
window["#platon.solide"]=function(e,t){"use strict";var o=require("three.canvas"),r=require("three.rotator"),s=function(e){"undefined"==typeof e&&(e={}),"undefined"==typeof e.faces&&(e.faces=4),"undefined"==typeof e.width&&(e.width=150),"undefined"==typeof e.height&&(e.height=150),o.call(this,{width:e.width,height:e.height}),this.addClass("platon-solide"),this.camera.position.z=2.7;var t=new THREE.HemisphereLight(13430527,10027008,3.6),s=new THREE.DirectionalLight(10057591,5),h=new THREE.DirectionalLight(7829401,2);s.position.set(43,13,5),h.position.set(-20,5,1);var i=this.createSolid(e.faces);this.scene.add(i),this.scene.add(s),this.scene.add(h),this.scene.add(t),this._rotator=new r(i),this.start()};s.prototype=Object.create(o.prototype),s.prototype.constructor=s,s.prototype.onRender=function(e,t){if(o.prototype.onRender.call(this,e,t),this._rotator.rotate(e),this._blinker){var r=Math.cos(1e-4*e*Math.PI);r>.2?(r=Math.min(1,5*(r-.2)),this._blinker.visible=!0,this._blinker.children.forEach(function(e){e.material.opacity=r})):this._blinker.visible=!1}},s.prototype.getTetrahedronGeometry=function(e){"undefined"==typeof e&&(e=1);var t=e/Math.sqrt(3);return{vertices:[[t,t,t],[-t,t,-t],[t,-t,-t],[-t,-t,t]],faces:[[0,1,3],[0,2,1],[0,3,2],[1,2,3]]}},s.prototype.getCubeGeometry=function(e){"undefined"==typeof e&&(e=1);var t=e/Math.sqrt(3);return{vertices:[[t,t,t],[t,t,-t],[-t,t,-t],[-t,t,t],[t,-t,t],[t,-t,-t],[-t,-t,-t],[-t,-t,t]],faces:[[0,1,2,3],[0,4,5,1],[1,5,6,2],[4,7,6,5],[2,6,7,3],[0,3,7,4]]}},s.prototype.getDodecahedronGeometry=function(e){"undefined"==typeof e&&(e=1);var t=e;return{vertices:[[0,t,0],[t,0,0],[0,0,-t],[-t,0,0],[0,0,t],[0,-t,0]],faces:[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[5,4,3],[5,1,4],[5,2,1],[5,3,2]]}},s.prototype.getIcosahedronGeometryA=function(e){"undefined"==typeof e&&(e=1);var t,o,r=e,s=[[0,r,0]],h=[],i=.3*r,n=.2;for(t=0;5>t;t++)o=2*t*Math.PI/5,s.push([i*Math.cos(o),n,i*Math.sin(o)]),4>t?h.push([0,t+2,t+1]):h.push([0,1,5]);for(t=0;5>t;t++)o=Math.PI/5+2*t*Math.PI/5,s.push([i*Math.cos(o),-n,i*Math.sin(o)]),4>t?h.push([11,t+6,t+7]):h.push([11,10,6]);return s.push([0,-r,0]),{vertices:s,faces:h}},s.prototype.getIcosahedronGeometry=function(e){"undefined"==typeof e&&(e=1);var t,o,r=e,s=[[0,r,0]],h=[],i=.9*r,n=1-i*Math.sqrt(4*Math.sin(Math.PI/5)*Math.sin(Math.PI/5)-1);for(t=0;5>t;t++)o=2*t*Math.PI/5,s.push([i*Math.cos(o),n,i*Math.sin(o)]),4>t?h.push([0,t+2,t+1]):h.push([0,1,5]);for(t=0;5>t;t++)o=Math.PI/5+2*t*Math.PI/5,s.push([i*Math.cos(o),-n,i*Math.sin(o)]),4>t?h.push([11,t+6,t+7]):h.push([11,10,6]);s.push([0,-r,0]);var a,c,d,p,u;for(t=0;5>t;t++)a=(t+2)%5,c=a+1,d=(a+1)%5+1,p=a+6,u=(a+1)%5+6,h.push([c,d,p]),h.push([d,u,p]);return this.css("float","none"),{vertices:s,faces:h}},s.prototype.getIcosahedronGeometryB=function(e){"undefined"==typeof e&&(e=1);var t,o,r=e,s=[[0,r,0]],h=[],i=.9*r,n=1-i*Math.sqrt(4*Math.sin(Math.PI/5)*Math.sin(Math.PI/5)-1);for(t=0;5>t;t++)o=2*t*Math.PI/5,s.push([i*Math.cos(o),n,i*Math.sin(o)]),4>t?h.push([0,t+2,t+1]):h.push([0,1,5]);for(t=0;5>t;t++)o=Math.PI/5+2*t*Math.PI/5,s.push([i*Math.cos(o),-n,i*Math.sin(o)]),4>t?h.push([11,t+6,t+7]):h.push([11,10,6]);return s.push([0,-r,0]),{vertices:s,faces:h}},s.prototype.createSolid=function(e){var t,o,r=[new THREE.Color(11206570),new THREE.Color(16755370),new THREE.Color(11184895),new THREE.Color(16777130),new THREE.Color(16755455),new THREE.Color(11206655)];1/Math.sqrt(3);return 4==e?(t=new THREE.Group,o=this.getTetrahedronGeometry(),o.colors=r,t.add(this.createMesh(o)),o=this.getCubeGeometry(),o.solid=!1,this._blinker=this.createMesh(o),t.add(this._blinker)):6==e?(t=new THREE.Group,o=this.getCubeGeometry(),o.colors=r,t.add(this.createMesh(o))):8==e?(t=new THREE.Group,o=this.getDodecahedronGeometry(),o.colors=r,o.nbColors=4,t.add(this.createMesh(o)),o=this.getCubeGeometry(.59),o.solid=!1,o.colors=r,this._blinker=this.createMesh(o),t.add(this._blinker)):"20a"==e?(t=new THREE.Group,o=this.getIcosahedronGeometryA(),o.colors=r,o.nbColors=5,t.add(this.createMesh(o))):"20b"==e?(t=new THREE.Group,o=this.getIcosahedronGeometryB(),o.colors=r,o.nbColors=5,t.add(this.createMesh(o))):20==e&&(t=new THREE.Group,o=this.getIcosahedronGeometry(),o.colors=r,o.nbColors=5,t.add(this.createMesh(o))),t},s.create=function(){return new s},t.exports=s};
//# sourceMappingURL=map/articles/solides_platon/@solides_platon.js.map
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
        try{require('x-widget')('platon.solide14','platon.solide',{faces: 6})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.solide15','platon.solide',{faces: 4})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.solide16','platon.solide',{faces: 8})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.dodeca117','platon.dodeca1',{width: 320, height: 320})}catch(x){console.error('Unable to initialize platon.dodeca1!', x)}
try{require('x-widget')('platon.solide18','platon.solide',{faces: "20a"})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.solide19','platon.solide',{faces: "20b"})}catch(x){console.error('Unable to initialize platon.solide!', x)}
=======
        try{require('x-widget')('platon.solide46','platon.solide',{faces: 6})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.solide47','platon.solide',{faces: 4})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.solide48','platon.solide',{faces: 8})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.dodeca149','platon.dodeca1',{})}catch(x){console.error('Unable to initialize platon.dodeca1!', x)}
try{require('x-widget')('platon.solide50','platon.solide',{faces: "20a"})}catch(x){console.error('Unable to initialize platon.solide!', x)}
try{require('x-widget')('platon.solide51','platon.solide',{faces: "20b"})}catch(x){console.error('Unable to initialize platon.solide!', x)}
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
window['#platon.dodeca1']=function(exports,module){  "use strict";
<<<<<<< HEAD
var ThreeCanvas = require("three.canvas");
=======
var TreeCanvas = require("three.canvas");
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
var Rotator = require("three.rotator");


/**
 * @example
 * var Dodeca1 = require("platon.dodeca1");
 * var instance = new Dodeca1(opt);
 * @class Dodeca1
 */
var Dodeca1 = function(options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options.faces === 'undefined') options.faces = 4;
    if (typeof options.width === 'undefined') options.width = 280;
    if (typeof options.height === 'undefined') options.height = 280;

<<<<<<< HEAD
    this._params1 = [[0,1], [0,1], [0,1], [0,1], [0,1]];
    this._params2 = [[0,1], [0,1], [0,1], [0,1], [0,1]];
    
    ThreeCanvas.call(this, {width: options.width, height: options.height});
=======
    TreeCanvas.call(this, {width: options.width, height: options.height});
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
    this.addClass("platon-dodeca1");

    var grp = new THREE.Group();

    grp.add( this.createPentagon() );
    this.addChildren( grp );

<<<<<<< HEAD
    this.camera.position.z = 9;

    this.scene.add( grp );
    this.root = grp;
=======
    this.camera.position.z = 7;

    this.scene.add( grp );
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
    this._rotator = new Rotator(grp);

    var light = new THREE.HemisphereLight( 0xcceeff, 0x990000, 3.6 ); // soft white light
    var light1 = new THREE.DirectionalLight( 0x997777, 5 );
    var light2 = new THREE.DirectionalLight( 0x777799, 2 );
    light1.position.set(43,13,5);
    light2.position.set(-20,5,1);

    this.scene.add( light1 );
    this.scene.add( light2 );
    this.scene.add( light );

    this.start();

    this.css('float', 'right');
};

// Extension of Widget.
<<<<<<< HEAD
Dodeca1.prototype = Object.create(ThreeCanvas.prototype);
=======
Dodeca1.prototype = Object.create(TreeCanvas.prototype);
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
Dodeca1.prototype.constructor = Dodeca1;

/**
 * @return void
 */
Dodeca1.prototype.onRender = function(time, delta) {
<<<<<<< HEAD
    //this.root.rotation.set(-.3,.1,0);
    //return;
    this._rotator.rotate( time * .3 );

    var threshold = 1.1;
    
    var pentagons2 = this.pentagons2;
    var Ta = 5000;
    var Tb = 3000;
    var Tc = 5000;
    var Td = 3000;
    time %= Ta + Tb + Tc + Td;

    var step = 3;
    if ( time < Ta ) {
        step = 0;
    }
    else if ( time < Ta + Tb ) {
        step = 1;
    }
    else if ( time < Ta + Tb + Tc ) {
        step = 2;
=======
    this._rotator.rotate( time );

    this.pentagons.forEach(function (pentagon, idx) {
        var t = time + 500 * idx;
        var threshold = 1.095;
        var bound = .25;
        var alpha = Math.cos(t / 3600);
        if (alpha > bound) {
            alpha = threshold;
        }
        else if (alpha < -bound) {
            alpha = -threshold;
        }
        else {
            alpha = threshold * alpha / bound;
        }
        pentagon.rotation.y = alpha;
    });

    
};


/**
 * @return void
 */
Dodeca1.prototype.createPentagon = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var vertices = [];
    var face = [];
    var angle;
    var i;
    for( i=0 ; i<5 ; i++ ) {
        angle = i * 2 * Math.PI / 5;
        vertices.push([
            radius * Math.cos( angle ),
            radius * Math.sin( angle ),
            0
        ]);
        face.push( i );
    }
    return this.createMesh({
        vertices: vertices,
        faces: [face],
        doublesided: true
    });
};


Dodeca1.prototype.createPentagon2 = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var angle = 4 * Math.PI / 5;
    var dx = radius * Math.cos( angle );
    var dy = radius * Math.sin( angle );
    var vertices = [];
    var face = [];
    var i;
    for( i=0 ; i<5 ; i++ ) {
        angle = i * 2 * Math.PI / 5;
        vertices.push([
            radius * Math.cos( angle ) - dx,
            radius * Math.sin( angle ) - dy,
            0
        ]);
        face.push( i );
    }
    return this.createMesh({
        vertices: vertices,
        faces: [face],
        doublesided: true
    });
};

/**
 * @return void
 */
Dodeca1.prototype.addChildren = function(parent, radius) {
    if (typeof radius === 'undefined') radius = 1;

    var angle;
    var x;
    var y;
    var pentagons = [];
    var pentagon;
    var grp;
    var i;
    for( i=0 ; i<5 ; i++ ) {
        angle = i * 2 * Math.PI / 5;
        x = radius * Math.cos( angle );
        y = radius * Math.sin( angle );
        pentagon = this.createPentagon2( radius );
        pentagons.push( pentagon );
        grp = new THREE.Group();
        grp.add( pentagon );
        grp.position.x = x;
        grp.position.y = y;
        grp.rotation.z = angle - 0.2 * Math.PI;
        parent.add( grp );
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
    }
    this.pentagons = pentagons;
};

<<<<<<< HEAD
    console.info("[platon.dodeca1] step=...", step);
    if ( typeof this._lastStep === 'undefined' || this._lastStep > step ) {
        // One more loop. Let's initialize random attributes.
        this._params1.forEach(function (param) {
            var a = Math.random() * .7;
            var b = a + .3 + (.7 - a) * Math.random();
            param[0] = a;
            param[1] = b;
        });
        this._params2.forEach(function (param) {
            var a = Math.random() * .7;
            var b = a + .3 + (.7 - a) * Math.random();
            param[0] = a;
            param[1] = b;
        });
    }
        
    this.pentagons.forEach(function (pentagon, idx) {
        var t = time;
        var ang1, ang2;
        var p1 = this._params1[idx];
        var p2 = this._params2[idx];

        var endA = Ta + p1[0] * Tb;
        var endB = Ta + p1[1] * Tb;
        var endC = Ta + Tb + Tc + p1[0] * Td;
        var endD = Ta + Tb + Tc + p1[1] * Td;

        if (t < endA) {
            ang1 = threshold;
        }
        else if (t < endB) {
            ang1 = threshold - 2 * threshold * (t - endA) / (endB - endA);
        }
        else if (t < endC) {
            ang1 = -threshold;
        }
        else if (t < endD) {
            ang1 = -threshold + 2 * threshold * (t - endC) / (endD - endC);
        }
        else {
            ang1 = threshold;
        }
        
        endA = Ta + p2[0] * Tb;
        endB = Ta + p2[1] * Tb;
        endC = Ta + Tb + Tc + p2[0] * Td;
        endD = Ta + Tb + Tc + p2[1] * Td;

        if (t < endA) {
            ang2 = threshold;
        }
        else if (t < endB) {
            ang2 = threshold - 2 * threshold * (t - endA) / (endB - endA);
        }
        else if (t < endC) {
            ang2 = -threshold;
        }
        else if (t < endD) {
            ang2 = -threshold + 2 * threshold * (t - endC) / (endD - endC);
        }
        else {
            ang2 = threshold;
        }
        
        pentagon.rotation.y = ang1;
        var pentagon2 = pentagons2[idx];
        pentagon2.rotation.y = ang2;
    }, this);

    this._lastStep = this._step;
    this._step = step;
};


/**
 * @return void
 */
Dodeca1.prototype.createPentagon = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var vertices = [];
    var face = [];
    var angle;
    var i;
    for( i=0 ; i<5 ; i++ ) {
        angle = i * 2 * Math.PI / 5;
        vertices.push([
            radius * Math.cos( angle ),
            radius * Math.sin( angle ),
            0
        ]);
        face.push( i );
    }
    return this.createMesh({
        vertices: vertices,
        faces: [face],
        doublesided: true
    });
};
=======
>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29

Dodeca1.create = function(opt) {
    return new Dodeca1(opt);
};
module.exports = Dodeca1;
 }

<<<<<<< HEAD
Dodeca1.prototype.createPentagon2 = function(radius, material) {
    if (typeof radius === 'undefined') radius = 1;

    var angle = 4 * Math.PI / 5;
    var dx = radius * Math.cos( angle );
    var dy = radius * Math.sin( angle );
    var vertices = [];
    var face = [];
    var i;
    for( i=0 ; i<5 ; i++ ) {
        angle = i * 2 * Math.PI / 5;
        vertices.push([
            radius * Math.cos( angle ) - dx,
            radius * Math.sin( angle ) - dy,
            0
        ]);
        face.push( i );
    }
    var grp = new THREE.Group();

    grp.add(
        this.createMesh({
            vertices: vertices,
            faces: [face],
            doublesided: true,
            material: material
        })
    );
    // grp.add( this.createAxis() );
    return grp;
};

/**
 * @return void
 */
Dodeca1.prototype.addChildren = function(parent, radius) {
    if (typeof radius === 'undefined') radius = 1;

    var angle;
    var x;
    var y;
    var pentagons = [];
    var pentagons2 = [];
    var container;
    var pentagon;
    var grp;
    var pentagon2;
    var grp2;
    var i;
    var R = radius * 2 * Math.cos( 0.3 * Math.PI );
    var X = R * Math.cos( Math.PI / 10 );
    var Y = R * Math.sin( Math.PI / 10 );

    // grp -- container -- pentagon
    //                  \- grp2 -- pentagon2
    for( i=0 ; i<5 ; i++ ) {
        container = new THREE.Group();

        angle = i * 2 * Math.PI / 5;
        x = radius * Math.cos( angle );
        y = radius * Math.sin( angle );
        pentagon = this.createPentagon2( radius );
        pentagons.push( container );
        container.add( pentagon );
        grp = new THREE.Group();
        grp.add( container );
        grp.position.x = x;
        grp.position.y = y;
        grp.rotation.z = angle - 0.2 * Math.PI;

        pentagon2 = this.createPentagon2( radius );
        pentagons2.push( pentagon2 );
        grp2 = new THREE.Group();
        grp2.add( pentagon2 );
        grp2.position.x = X;
        grp2.position.y = Y;
        grp2.rotation.z = 0.2 * Math.PI;
        container.add( grp2 );

        parent.add( grp );
    }
    this.pentagons = pentagons;
    this.pentagons2 = pentagons2;
};


Dodeca1.create = function(opt) {
    return new Dodeca1(opt);
};
module.exports = Dodeca1;
 }


//########################################
window['#three.rotator']=function(exports,module){  /**
 * @example
 * var Rotator = require("three.rotator");
 * var instance = new Rotator();
 * @class Rotator
 */
var Rotator = function(obj, sx, sy, sz) {
    if (typeof sx === 'undefined') sx = 2500 + Math.random() * 500;
    if (typeof sy === 'undefined') sy = 2500 + Math.random() * 500;
    if (typeof sz === 'undefined') sz = 2500 + Math.random() * 500;

    this.obj = obj;
    this.sx = sx;
    this.sy = sy;
    this.sz = sz;
};

/**
 * @return void
 */
Rotator.prototype.rotate = function(time, obj) {
    if (typeof obj === 'undefined') obj = this.obj;

    obj.rotation.x = time / this.sx;
    obj.rotation.y = time / this.sy;
    obj.rotation.y = time / this.sz;   
};

=======

//########################################
window['#three.rotator']=function(exports,module){  /**
 * @example
 * var Rotator = require("three.rotator");
 * var instance = new Rotator();
 * @class Rotator
 */
var Rotator = function(obj, sx, sy, sz) {
    if (typeof sx === 'undefined') sx = 2500 + Math.random() * 500;
    if (typeof sy === 'undefined') sy = 2500 + Math.random() * 500;
    if (typeof sz === 'undefined') sz = 2500 + Math.random() * 500;

    this.obj = obj;
    this.sx = sx;
    this.sy = sy;
    this.sz = sz;
};

/**
 * @return void
 */
Rotator.prototype.rotate = function(time, obj) {
    if (typeof obj === 'undefined') obj = this.obj;

    obj.rotation.x = time / this.sx;
    obj.rotation.y = time / this.sy;
    obj.rotation.y = time / this.sz;   
};

>>>>>>> a1601a20b1a2a3b9f06f7a047ab3ad29eb328f29
Rotator.create = function() {
    return new Rotator();
};
module.exports = Rotator;
 }


//########################################
window['#three.canvas']=function(exports,module){  "use strict";
var Widget = require("wdg");

var registeredAnimations = [];

function animate(time) {
    if (registeredAnimations.length > 0) {
        registeredAnimations.forEach(function (item) {
            item.render( time );
        });
        window.requestAnimationFrame( animate );
    }
}

function Register(anim) {
    if (registeredAnimations.indexOf(anim) == -1) {
        registeredAnimations.push(anim);
        if (registeredAnimations.length == 1) {
            window.requestAnimationFrame( animate );
        }
    }
}

function Unregister(anim) {
    var pos = registeredAnimations.indexOf(anim);
    if (pos > -1) {
        registeredAnimations.splice(pos, 1);
    }
}

/**
 * @example
 * var Canvas = require("three.canvas");
 * var options = {
 *    width: 640,
 *    height: 480
 * };
 * var instance = new Canvas(options);
 * @class Canvas
 */
var Canvas = function(options) {
    Widget.call(this);
    this.addClass("three-canvas");

    if (typeof options === 'undefined') options = {};
    if (typeof options.width === 'undefined') options.width = window.innerWidth;
    if (typeof options.height === 'undefined') options.height = window.innerHeight;

    this.W = options.width;
    this.H = options.height;
    this.css({
        width: this.W + "px",
        height: this.H + "px"
    });
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 45, this.W / this.H, 0.1, 1000 );
    this.camera.position.z = 1.4;
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setClearColor( 0xffffff, 0);
    this.renderer.setSize( this.W, this.H );
    this.append( this.renderer.domElement );
    this._time = 0;
};

// Extension of Widget.
Canvas.prototype = Object.create(Widget.prototype);
Canvas.prototype.constructor = Canvas;

/**
 * @return void
 */
Canvas.prototype.render = function(time) {
    if (this._time <= 0) this._time = time - 1;
    this.onRender(time, time - this._time);
    this.renderer.render( this.scene, this.camera );
    this._time = time;
};

/**
 * @return void
 */
Canvas.prototype.onRender = function(time, delta) {};

/**
 * @return void
 */
Canvas.prototype.start = function() {
    Register(this);
};

/**
 * @return void
 */
Canvas.prototype.stop = function() {
    Unregister(this);
};

/**
 * @return void
 */
Canvas.prototype.createAxis = function() {
    var grp = new THREE.Group();
    grp.add(
        this.createLine({
            vertices: [[0,0,0], [1,0,0]],
            color: 0xff0000
        }),
        this.createLine({
            vertices: [[0,0,0], [0,1,0]],
            color: 0x00ff00
        }),
        this.createLine({
            vertices: [[0,0,0], [0,0,1]],
            color: 0x0000ff
        })
    );
    return grp;
};


/**
 * @return void
 */
Canvas.prototype.createLine = function(opt) {
    if (typeof opt === 'undefined') opt = { vertices: [] };
    if (typeof opt.color === 'undefined') opt.color = 0xff0000;
    if (typeof opt.linewidth === 'undefined') opt.linewidth = 1;


    var mat = new THREE.LineBasicMaterial({
        color: opt.color,
        linewidth: opt.linewidth
    });

    var geo = new THREE.Geometry();
    opt.vertices.forEach(function (vertex) {
        geo.vertices.push(
            new THREE.Vector3( vertex[0], vertex[1], vertex[2] )
        );
    });

    return new THREE.Line( geo, mat );
};

/**
 * @return void
 */
Canvas.prototype.createMesh = function(opt) {
    if (typeof opt === 'undefined') throw Error("[three.canvas.createMesh] Missing optument!");
    if (typeof opt.colors === 'undefined') opt.colors = [
        new THREE.Color( .5 + Math.random() * .5, .5 + Math.random() * .5, .5 + Math.random() * .5 )
    ];
    if (typeof opt.nbColors === 'undefined') opt.nbColors = opt.colors.length;
    if (typeof opt.solid === 'undefined') opt.solid = true;
    if (typeof opt.wireframe === 'undefined') opt.wireframe = true;
    if (typeof opt.wirecolor === 'undefined') opt.wirecolor = new THREE.Color( 0x333333 );
    if (typeof opt.wirewidth === 'undefined') opt.wirewidth = 2;
    if (typeof opt.doublesided === 'undefined') opt.doublesided = false;

    if (typeof opt.mat === 'undefined') opt.mat = new THREE.MeshPhongMaterial({
        specular: 0x333333,
        shininess: 3.14,
        metal: true,
        vertexColors: THREE.VertexColors,
        side: opt.doublesided ? THREE.DoubleSide : THREE.FrontSide,
        transparent: true,
        opacity: .9
    });;

    var grp = new THREE.Group();

    if (opt.solid) {
        var geo = new THREE.Geometry();
        opt.vertices.forEach(function (vertex) {
            geo.vertices.push( new THREE.Vector3( vertex[0], vertex[1], vertex[2] ) );
        });
        opt.faces.forEach(function (face, idxFace) {
            addFace( geo, face, opt.colors[idxFace % opt.nbColors] );
        });
        geo.computeFaceNormals ();
        geo.computeVertexNormals ();
        grp.add( new THREE.Mesh( geo, opt.mat ) );
    }

    if (opt.wireframe) {
        var mat = new THREE.LineBasicMaterial({ color: opt.wirecolor, linewidth: opt.wirewidth });
        var cache = [];
        opt.faces.forEach(function (face) {
            var line;
            var key, a, b, tmp;
            for( var i=0 ; i<face.length ; i++ ) {
                a = face[i];
                b = face[(i + 1) % face.length];
                if (b < a) {
                    tmp = a;
                    a = b;
                    b = tmp;
                }
                key = a + "," + b;
                if (cache.indexOf( key ) == -1) {
                    cache.push( key );
                    line = new THREE.Geometry();
                    line.vertices.push(
                        new THREE.Vector3( 
                            opt.vertices[a][0], opt.vertices[a][1], opt.vertices[a][2] ),
                        new THREE.Vector3( 
                            opt.vertices[b][0], opt.vertices[b][1], opt.vertices[b][2] )
                    );
                    line.type = THREE.Lines;
                    grp.add( new THREE.Line( line, mat ) );
                }
            }
        });
    }

console.info("[three.canvas] grp=", grp);
    return grp;
};


function addFace(geometry, vertices, color) {
    var faces = [];
    if (vertices.length == 3) {
        faces.push(
            new THREE.Face3( vertices[0], vertices[1], vertices[2] )
        );
    }
    else if (vertices.length == 4) {
        faces.push(
            new THREE.Face3( vertices[0], vertices[1], vertices[2] ),
            new THREE.Face3( vertices[0], vertices[2], vertices[3] )
        );
    }
    else {
        // We use the fan method.
        var x = 0, y = 0, z = 0;
        vertices.forEach(function (idx) {
            var vertex = geometry.vertices[vertices[idx]];
            x += vertex.x;
            y += vertex.y;
            z += vertex.z;
        });
        x /= vertices.length;
        y /= vertices.length;
        z /= vertices.length;

        var k = vertices.length;
        geometry.vertices.push( new THREE.Vector3( x, y, z ) );

        var i;
        for( i=0 ; i<k ; i++ ) {
            faces.push( new THREE.Face3( i, (i + 1) % k, k ) );
        }
    }

    if (typeof color !== 'undefined') {
        // Apply a color to this face.
        faces.forEach(function (face) {
            face.vertexColors[0] = face.vertexColors[1] = face.vertexColors[2] = color;
        });
    }

    faces.forEach(function (face) {
        geometry.faces.push(face);
    });
}


/**
 * @return void
 */
Canvas.prototype.createMesh = function(opt) {
    if (typeof opt === 'undefined') throw Error("[three.canvas.createMesh] Missing optument!");
    if (typeof opt.colors === 'undefined') opt.colors = [
        new THREE.Color( .5 + Math.random() * .5, .5 + Math.random() * .5, .5 + Math.random() * .5 )
    ];
    if (typeof opt.nbColors === 'undefined') opt.nbColors = opt.colors.length;
    if (typeof opt.solid === 'undefined') opt.solid = true;
    if (typeof opt.wireframe === 'undefined') opt.wireframe = true;
    if (typeof opt.wirecolor === 'undefined') opt.wirecolor = new THREE.Color( 0x333333 );
    if (typeof opt.wirewidth === 'undefined') opt.wirewidth = 2;
    if (typeof opt.doublesided === 'undefined') opt.doublesided = false;

    if (typeof opt.mat === 'undefined') opt.mat = new THREE.MeshPhongMaterial({
        specular: 0x333333,
        shininess: 3.14,
        metal: true,
        vertexColors: THREE.VertexColors,
        side: opt.doublesided ? THREE.DoubleSide : THREE.FrontSide,
        transparent: true,
        opacity: .9
    });;

    var grp = new THREE.Group();

    if (opt.solid) {
        var geo = new THREE.Geometry();
        opt.vertices.forEach(function (vertex) {
            geo.vertices.push( new THREE.Vector3( vertex[0], vertex[1], vertex[2] ) );
        });
        opt.faces.forEach(function (face, idxFace) {
            addFace( geo, face, opt.colors[idxFace % opt.nbColors] );
        });
        geo.computeFaceNormals ();
        geo.computeVertexNormals ();
        grp.add( new THREE.Mesh( geo, opt.mat ) );
    }

    if (opt.wireframe) {
        var mat = new THREE.LineBasicMaterial({ color: opt.wirecolor, linewidth: opt.wirewidth });
        var cache = [];
        opt.faces.forEach(function (face) {
            var line;
            var key, a, b, tmp;
            for( var i=0 ; i<face.length ; i++ ) {
                a = face[i];
                b = face[(i + 1) % face.length];
                if (b < a) {
                    tmp = a;
                    a = b;
                    b = tmp;
                }
                key = a + "," + b;
                if (cache.indexOf( key ) == -1) {
                    cache.push( key );
                    line = new THREE.Geometry();
                    line.vertices.push(
                        new THREE.Vector3( 
                            opt.vertices[a][0], opt.vertices[a][1], opt.vertices[a][2] ),
                        new THREE.Vector3( 
                            opt.vertices[b][0], opt.vertices[b][1], opt.vertices[b][2] )
                    );
                    line.type = THREE.Lines;
                    grp.add( new THREE.Line( line, mat ) );
                }
            }
        });
    }

console.info("[three.canvas] grp=", grp);
    return grp;
};


function addFace(geometry, vertices, color) {
    var faces = [];
    if (vertices.length == 3) {
        faces.push(
            new THREE.Face3( vertices[0], vertices[1], vertices[2] )
        );
    }
    else if (vertices.length == 4) {
        faces.push(
            new THREE.Face3( vertices[0], vertices[1], vertices[2] ),
            new THREE.Face3( vertices[0], vertices[2], vertices[3] )
        );
    }
    else {
        // We use the fan method.
        var x = 0, y = 0, z = 0;
        vertices.forEach(function (idx) {
            var vertex = geometry.vertices[vertices[idx]];
            x += vertex.x;
            y += vertex.y;
            z += vertex.z;
        });
        x /= vertices.length;
        y /= vertices.length;
        z /= vertices.length;

        var k = vertices.length;
        geometry.vertices.push( new THREE.Vector3( x, y, z ) );

        var i;
        for( i=0 ; i<k ; i++ ) {
            faces.push( new THREE.Face3( i, (i + 1) % k, k ) );
        }
    }

    if (typeof color !== 'undefined') {
        // Apply a color to this face.
        faces.forEach(function (face) {
            face.vertexColors[0] = face.vertexColors[1] = face.vertexColors[2] = color;
        });
    }

    faces.forEach(function (face) {
        geometry.faces.push(face);
    });
}


Canvas.create = function(options) {
    return new Canvas(options);
};
module.exports = Canvas;
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
window['#platon.solide']=function(exports,module){  "use strict";
var ThreeCanvas = require("three.canvas");
var Rotator = require("three.rotator");


/**
 * @example
 * var Solide = require("platon.solide");
 * var instance = new Solide();
 * @class Solide
 */
var Solide = function(options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options.faces === 'undefined') options.faces = 4;
    if (typeof options.width === 'undefined') options.width = 150;
    if (typeof options.height === 'undefined') options.height = 150;


    ThreeCanvas.call(this, {width: options.width, height: options.height});
    this.addClass("platon-solide");

    this.camera.position.z = 2.7;

    var light = new THREE.HemisphereLight( 0xcceeff, 0x990000, 3.6 ); // soft white light
    var light1 = new THREE.DirectionalLight( 0x997777, 5 );
    var light2 = new THREE.DirectionalLight( 0x777799, 2 );
    light1.position.set(43,13,5);
    light2.position.set(-20,5,1);

    var cube = this.createSolid( options.faces );

    this.scene.add( cube );
    this.scene.add( light1 );
    this.scene.add( light2 );
    this.scene.add( light );

    this._rotator = new Rotator( cube );    

    this.start();
};

// Extension of Widget.
Solide.prototype = Object.create(ThreeCanvas.prototype);
Solide.prototype.constructor = Solide;

/**
 * @return void
 */
Solide.prototype.onRender = function(time, delta) {
    ThreeCanvas.prototype.onRender.call( this, time, delta );

    this._rotator.rotate( time );

    if (this._blinker) {
        var opacity = Math.cos(time * 0.0001 * Math.PI);
        if (opacity > 0.2) {
            opacity = Math.min( 1, (opacity - .2) * 5 );
            this._blinker.visible = true;
            this._blinker.children.forEach(function (line) {
                line.material.opacity = opacity;
            });
        } else {
            this._blinker.visible = false;
        }
    }
/*
    var x = 20 * Math.abs(Math.cos(time / (sx + sy + sz)));
    var y = 2 * Math.cos(3 * time / (sx + sy + sz));
    this.css('transform', 'translate(-' + x + 'em,' + y + 'em)');
*/
};

/**
 * @return void
 */
Solide.prototype.getTetrahedronGeometry = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var k = radius / Math.sqrt(3);
    return {
        vertices: [ [ k, k, k], [-k, k,-k], [ k,-k,-k], [-k,-k, k] ],
        faces: [ [0,1,3], [0,2,1], [0,3,2], [1,2,3] ]
    };
};

/**
 * @return void
 */
Solide.prototype.getCubeGeometry = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var k = radius / Math.sqrt(3);
    return {
        vertices: [
            [ k, k, k], [ k, k,-k], [-k, k,-k], [-k, k, k],
            [ k,-k, k], [ k,-k,-k], [-k,-k,-k], [-k,-k, k]
        ],
        faces: [
            [0,1,2,3], [0,4,5,1], [1,5,6,2],
            [4,7,6,5], [2,6,7,3], [0,3,7,4],
        ]
    };
};

Solide.prototype.getDodecahedronGeometry = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var k = radius;
    return {
        vertices: [
            [ 0, k, 0], [ k, 0, 0], [ 0, 0,-k],
            [-k, 0, 0], [ 0, 0, k], [ 0,-k, 0]
        ],
        faces: [
            [0,1,2], [0,2,3], [0,3,4], [0,4,1],
            [5,4,3], [5,1,4], [5,2,1], [5,3,2],
        ]
    };
};


Solide.prototype.getIcosahedronGeometryA = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var k = radius;
    var vertices = [[0,k,0]];
    var faces = [];
    var i, ang;
    var r = .3 * k;
    var y = .2;

    for ( i=0 ; i<5 ; i++ ) {
        ang = i * 2 * Math.PI / 5;
        vertices.push( [r * Math.cos( ang ), y, r * Math.sin( ang )] );
        if (i < 4) {
            faces.push( [0, i + 2, i + 1] );
        } else {
            faces.push( [0, 1, 5] );
        }
    }

    for ( i=0 ; i<5 ; i++ ) {
        ang = Math.PI / 5 + i * 2 * Math.PI / 5;
        vertices.push( [r * Math.cos( ang ), -y, r * Math.sin( ang )] );
        if (i < 4) {
            faces.push( [11, i + 6, i + 7] );
        } else {
            faces.push( [11, 10, 6] );
        }
    }
    vertices.push( [0,-k,0] );

    return {
        vertices: vertices,
        faces: faces
    };
};


Solide.prototype.getIcosahedronGeometryB = function(radius) {
    if (typeof radius === 'undefined') radius = 1;

    var k = radius;
    var vertices = [[0,k,0]];
    var faces = [];
    var i, ang;
    var r = .9 * k;
    var y = 1 - r * Math.sqrt( 4 * Math.sin(Math.PI / 5) * Math.sin(Math.PI / 5) - 1 );

    for ( i=0 ; i<5 ; i++ ) {
        ang = i * 2 * Math.PI / 5;
        vertices.push( [r * Math.cos( ang ), y, r * Math.sin( ang )] );
        if (i < 4) {
            faces.push( [0, i + 2, i + 1] );
        } else {
            faces.push( [0, 1, 5] );
        }
    }

    for ( i=0 ; i<5 ; i++ ) {
        ang = Math.PI / 5 + i * 2 * Math.PI / 5;
        vertices.push( [r * Math.cos( ang ), -y, r * Math.sin( ang )] );
        if (i < 4) {
            faces.push( [11, i + 6, i + 7] );
        } else {
            faces.push( [11, 10, 6] );
        }
    }
    vertices.push( [0,-k,0] );

    return {
        vertices: vertices,
        faces: faces
    };
};


/**
 * @return void
 */
Solide.prototype.createSolid = function(nbFaces) {
    var colors = [
        new THREE.Color( 0xaaffaa ),
        new THREE.Color( 0xffaaaa ),
        new THREE.Color( 0xaaaaff ),
        new THREE.Color( 0xffffaa ),
        new THREE.Color( 0xffaaff ),
        new THREE.Color( 0xaaffff )
    ];

    var mesh, opt;
    var k = 1 / Math.sqrt(3);
    if (nbFaces == 4) {
        mesh = new THREE.Group();
        opt = this.getTetrahedronGeometry();
        opt.colors = colors;
        mesh.add( this.createMesh( opt ) );
        opt = this.getCubeGeometry();
        opt.solid = false;
        this._blinker = this.createMesh( opt );
        mesh.add( this._blinker );
    }
    else if (nbFaces == 6) {
        mesh = new THREE.Group();
        opt = this.getCubeGeometry();
        opt.colors = colors;
        mesh.add( this.createMesh( opt ) );
    }
    else if (nbFaces == 8) {
        mesh = new THREE.Group();
        opt = this.getDodecahedronGeometry();
        opt.colors = colors;
        opt.nbColors = 4;
        mesh.add( this.createMesh( opt ) );
        opt = this.getCubeGeometry(.59);
        opt.solid = false;
        opt.colors = colors;
        this._blinker = this.createMesh( opt );
        mesh.add( this._blinker );        
    }
    else if (nbFaces == '20a') {
        mesh = new THREE.Group();
        opt = this.getIcosahedronGeometryA();
        opt.colors = colors;
        opt.nbColors = 5;
        mesh.add( this.createMesh( opt ) );
    }
    else if (nbFaces == '20b') {
        mesh = new THREE.Group();
        opt = this.getIcosahedronGeometryB();
        opt.colors = colors;
        opt.nbColors = 5;
        mesh.add( this.createMesh( opt ) );
    }
    else if (nbFaces == 20) {
        mesh = new THREE.Group();
        opt = this.getIcosahedronGeometry();
        opt.colors = colors;
        opt.nbColors = 5;
        mesh.add( this.createMesh( opt ) );
    }

    return mesh;
};


Solide.create = function() {
    return new Solide();
};
module.exports = Solide;

 }
>>>>>>> 77fbf3f962f5ad086b4499bdb787befbf2313e83
