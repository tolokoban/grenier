function addListener(e,o){window.addEventListener?window.addEventListener(e,o,!1):window.attachEvent("on"+e,o)}var require=function(){var e={};return function(o,t){var i;if(t=window["#"+o],"undefined"==typeof t){var n=new Error("Required module is missing: "+o);throw console.error(n.stack),n}if(i=e[o],"undefined"==typeof i){i={exports:{}};var r=i.exports;t(r,i),e[o]=i.exports,i=i.exports}return i}}();addListener("DOMContentLoaded",function(){document.body.parentNode.$data={};try{require("x-widget")("platon.solide84","platon.solide",{faces:6})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.solide85","platon.solide",{faces:4})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.solide86","platon.solide",{faces:8})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.dodeca187","platon.dodeca1",{width:600,height:600})}catch(e){console.error("Unable to initialize platon.dodeca1!",e)}try{require("x-widget")("platon.solide88","platon.solide",{faces:"20a"})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.solide89","platon.solide",{faces:"20b"})}catch(e){console.error("Unable to initialize platon.solide!",e)}try{require("x-widget")("platon.icosaedre90","platon.icosaedre",{width:200,height:200})}catch(e){console.error("Unable to initialize platon.icosaedre!",e)}try{require("x-widget")("platon.solide91","platon.solide",{faces:20})}catch(e){console.error("Unable to initialize platon.solide!",e)}});
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.515",major:1,minor:0,revision:515,date:new Date(2016,1,4,18,34,34)};var t=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,t){var a,e,o,i,g,l,u=r[n.lang()],s=t[0];if(!u)return s;if(a=u[s],!a)return s;if(t.length>1){for(e="",g=0,o=0;o<a.length;o++)i=a.charAt(o),"$"===i?(e+=a.substring(g,o),o++,l=a.charCodeAt(o)-48,e+=0>l||l>=t.length?"$"+a.charAt(o):t[l],g=o+1):"\\"===i&&(e+=a.substring(g,o),o++,e+=a.charAt(o),g=o+1);e+=a.substr(g),a=e}return a}};
window["#platon.icosaedre"]=function(e,t){"use strict";var i=require("three.canvas"),s=function(e){i.call(this,e),this.css("float","left");var t=new THREE.Group;this.scene.add(t),this._grp=t;var s=.5;this.createCircles(s);for(var r=Math.PI/5,a=0;4>a;a++)t.add(this.createLine({vertices:[[Math.cos(r+2*r*a),-s,Math.sin(r+2*r*a)],[Math.cos(r+2*r*(a+.5)),s,Math.sin(r+2*r*(a+.5))],[Math.cos(r+2*r*(a+1)),-s,Math.sin(r+2*r*(a+1))],[Math.cos(r+2*r*a),-s,Math.sin(r+2*r*a)]],linewidth:1,color:8947848}));var o=[Math.cos(r),-s,Math.sin(r)],c=[Math.cos(-r),-s,Math.sin(-r)],h=[1,s,0];t.add(this.createMesh({vertices:[o,c,h],faces:[[0,1,2]],colors:[16711680],doublesided:!0})),t.add(this.createLine({vertices:[[0,-1,0],[0,1,0]],color:0})),t.add(this.createLine({vertices:[[0,s,0],[1,s,0]],color:8947848})),t.add(this.createMesh({vertices:[o,c,[0,-s,0]],faces:[[0,1,2]],colors:[16777096],doublesided:!0})),t.add(this.createLine({vertices:[[0,-s,0],c],color:8947848})),t.add(this.createLine({vertices:[[1,-s,0],[1,s,0]],color:65280,linewidth:2})),t.add(this.createLine({vertices:[[1,-s,0],[.8,-s,0]],color:255,linewidth:2})),this.camera.position.z=3,this.camera.position.y=1,this.camera.lookAt(new THREE.Vector3(0,0,0));var n=new THREE.HemisphereLight(13430527,10027008,3.6),d=new THREE.DirectionalLight(10057591,5),l=new THREE.DirectionalLight(7829401,2);d.position.set(43,13,5),l.position.set(-20,5,1),this.scene.add(d),this.scene.add(l),this.scene.add(n),this.scene.add(t),this.start()};s.prototype=Object.create(i.prototype),s.prototype.constructor=s,s.prototype.onRender=function(e,t){var i=this._grp;i.rotation.y=6e-4*e},s.prototype.createCircles=function(e){for(var t,i=this._grp,s=-Math.PI/4,r=Math.PI/4,a=32,o=[],c=[],h=0;a>=h;h++)t=s+(r-s)*h/a,o.push([Math.cos(t),e,Math.sin(t)]),c.push([Math.cos(t),-e,Math.sin(t)]);i.add(this.createLine({vertices:o,color:8947848})),i.add(this.createLine({vertices:c,color:8947848}))},s.create=function(e){return new s(e)},t.exports=s};
window["#three.canvas"]=function(e,t){"use strict";function n(e){c.length>0&&(c.forEach(function(t){t.render(e)}),window.requestAnimationFrame(n))}function r(e){-1==c.indexOf(e)&&(c.push(e),1==c.length&&window.requestAnimationFrame(n))}function i(e){var t=c.indexOf(e);t>-1&&c.splice(t,1)}function o(e,t,n){var r=[];if(3==t.length)r.push(new THREE.Face3(t[0],t[1],t[2]));else if(4==t.length)r.push(new THREE.Face3(t[0],t[1],t[2]),new THREE.Face3(t[0],t[2],t[3]));else{var i=0,o=0,s=0;t.forEach(function(n){var r=e.vertices[t[n]];i+=r.x,o+=r.y,s+=r.z}),i/=t.length,o/=t.length,s/=t.length;var c=t.length;e.vertices.push(new THREE.Vector3(i,o,s));var h;for(h=0;c>h;h++)r.push(new THREE.Face3(h,(h+1)%c,c))}"undefined"!=typeof n&&r.forEach(function(e){e.vertexColors[0]=e.vertexColors[1]=e.vertexColors[2]=n}),r.forEach(function(t){e.faces.push(t)})}var s=require("wdg"),c=[],h=function(e){s.call(this),this.addClass("three-canvas"),"object"!=typeof e&&(e={}),"undefined"==typeof e&&(e={}),"undefined"==typeof e.width&&(e.width=window.innerWidth),"undefined"==typeof e.height&&(e.height=window.innerHeight),this.W=e.width,this.H=e.height,this.css({width:this.W+"px",height:this.H+"px"}),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(45,this.W/this.H,.1,1e3),this.camera.position.z=1.4,this.renderer=new THREE.WebGLRenderer({alpha:!0}),this.renderer.setClearColor(16777215,0),this.renderer.setSize(this.W,this.H),this.append(this.renderer.domElement),this._time=0};h.prototype=Object.create(s.prototype),h.prototype.constructor=h,h.prototype.render=function(e){this._time<=0&&(this._time=e-1),this.onRender(e,e-this._time),this.renderer.render(this.scene,this.camera),this._time=e},h.prototype.onRender=function(e,t){},h.prototype.start=function(){r(this)},h.prototype.stop=function(){i(this)},h.prototype.createAxis=function(){var e=new THREE.Group;return e.add(this.createLine({vertices:[[0,0,0],[1,0,0]],color:16711680}),this.createLine({vertices:[[0,0,0],[0,1,0]],color:65280}),this.createLine({vertices:[[0,0,0],[0,0,1]],color:255})),e},h.prototype.createLine=function(e){"undefined"==typeof e&&(e={vertices:[]}),"undefined"==typeof e.color&&(e.color=16711680),"undefined"==typeof e.linewidth&&(e.linewidth=1);var t=new THREE.LineBasicMaterial({color:e.color,linewidth:e.linewidth}),n=new THREE.Geometry;return e.vertices.forEach(function(e){n.vertices.push(new THREE.Vector3(e[0],e[1],e[2]))}),new THREE.Line(n,t)},h.prototype.createMesh=function(e){if("undefined"==typeof e)throw Error("[three.canvas.createMesh] Missing optument!");"undefined"==typeof e.colors&&(e.colors=[new THREE.Color(.5+.5*Math.random(),.5+.5*Math.random(),.5+.5*Math.random())]),"undefined"==typeof e.nbColors&&(e.nbColors=e.colors.length),"undefined"==typeof e.solid&&(e.solid=!0),"undefined"==typeof e.wireframe&&(e.wireframe=!0),"undefined"==typeof e.wirecolor&&(e.wirecolor=new THREE.Color(3355443)),"undefined"==typeof e.wirewidth&&(e.wirewidth=2),"undefined"==typeof e.doublesided&&(e.doublesided=!1),"undefined"==typeof e.mat&&(e.mat=new THREE.MeshPhongMaterial({specular:3355443,shininess:3.14,metal:!0,vertexColors:THREE.VertexColors,side:e.doublesided?THREE.DoubleSide:THREE.FrontSide,transparent:!0,opacity:.9})),e.colors.forEach(function(t,n){"number"==typeof t&&(e.colors[n]=new THREE.Color(t))});var t=new THREE.Group;if(e.solid){var n=new THREE.Geometry;e.vertices.forEach(function(e){n.vertices.push(new THREE.Vector3(e[0],e[1],e[2]))}),e.faces.forEach(function(t,r){o(n,t,e.colors[r%e.nbColors])}),n.computeFaceNormals(),n.computeVertexNormals(),t.add(new THREE.Mesh(n,e.mat))}if(e.wireframe){var r=new THREE.LineBasicMaterial({color:e.wirecolor,linewidth:e.wirewidth}),i=[];e.faces.forEach(function(n){for(var o,s,c,h,a,d=0;d<n.length;d++)c=n[d],h=n[(d+1)%n.length],c>h&&(a=c,c=h,h=a),s=c+","+h,-1==i.indexOf(s)&&(i.push(s),o=new THREE.Geometry,o.vertices.push(new THREE.Vector3(e.vertices[c][0],e.vertices[c][1],e.vertices[c][2]),new THREE.Vector3(e.vertices[h][0],e.vertices[h][1],e.vertices[h][2])),o.type=THREE.Lines,t.add(new THREE.Line(o,r)))})}return console.info("[three.canvas] grp=",t),t},h.create=function(e){return new h(e)},t.exports=h};
window["#wdg"]=function(t,e){"use strict";function n(t){this.__data={};try{var e;if("undefined"==typeof t&&(t={}),"undefined"!=typeof t.innerHTML&&"undefined"!=typeof t.childNodes&&(t={element:t}),"undefined"==typeof t.tag&&(t.tag="div"),t.element)this.element(t.element);else if("undefined"!=typeof t.id){if(e=window.document.getElementById(t.id),!e)throw Error("Can't find element with id: \""+t.id+'"!');this.element(e)}else this.element(window.document.createElement(t.tag)),this.addClass("wdg","custom")}catch(n){throw console.error("[widget] ",n),console.error("[Widget] ",JSON.stringify(t)),Error(n)}}n.prototype={element:function(t){return void 0===t?this._element:("string"==typeof t&&(t=window.document.querySelector(t)),this._element=t,this)},data:function(t,e){return"undefined"==typeof e?this.__data[t]:(this.__data[t]=e,this)},detach:function(){var t=this._element;if(t){var e=t.parentNode;e&&e.removeChild(t)}return this},addEvent:function(t,e,n){if("string"==typeof e){var i=e;"undefined"==typeof n&&(n=this),e=function(t){var r=n[i];if("function"!=typeof r)throw Error('"'+e+'" is not a function of: '+n);r.call(n,t)}}var r=this.element();return"tap"==t?(r.addEventListener("mousedown",function(t){t.preventDefault(),t.stopPropagation()},!1),r.addEventListener("mouseup",function(t){t.preventDefault(),t.stopPropagation(),e(t)},!1),r.addEventListener("touchend",e,!1)):r.addEventListener(t,e,!1),this},removeAttr:function(){if(this._element){var t,e;for(t=0;t<arguments.length;t++)e=arguments[t],this._element.removeAttribute(e)}return this},hasAttribute:function(t){return this._element?this._element.hasAttribute(t):!1},attr:function(t,e,n){var i;if(!this._element||!this._element.getAttribute)return null;if("string"==typeof t)return void 0!==e?"class"==t?(this._element.className=e,this):(n&&this._element.setAttributeNS?this._element.setAttributeNS(n,t,e):this._element.setAttribute(t,e),this):this._element.getAttribute(t);if("object"==typeof t)for(i in t)"class"==i?this._element.className=t[i]:"$"==i?this.text(t[i]):this._element.setAttribute(i,t[i]);return this},css:function(t,e){var n,i=this._element;if(!i)return null;if("object"!=typeof i.style&&(console.error("[wdg.css] This element does not support styles!",i),i.style={}),"string"==typeof t)return e?(i.style[t]=e,this):i.style[t];if("object"==typeof t)for(n in t)try{i.style[n]=t[n]}catch(r){console.error("[wdg.css] Bad CSS attribute "+n+": "+t[n])}return this},insertAfter:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t.nextSibling),this},insertBefore:function(t){return"function"==typeof t.element&&(t=t.element()),t.parentNode.insertBefore(this.element(),t),this},append:function(){var t,e;for(t=0;t<arguments.length;t++)if(e=arguments[t],"number"==typeof e&&(e=""+e),"undefined"==typeof e||"object"!=typeof e&&"string"!=typeof e)console.error("[Widget.append] Argument #"+t+" is invalid!",arguments),console.error("[Widget.append] Is type is: "+typeof e);else{if("string"==typeof e&&(e.length<1&&(e=" "),e=window.document.createTextNode(e),!e))throw console.error("[Widget.append] Unable to create a text node with this text: ",e),console.error("[wdg] arguments=...",arguments),Error("[Widget.append] Unable to create a text node with this text: "+JSON.stringify(e));if(Array.isArray(e))e.forEach(function(t){this.append(t)},this);else{var n="function"==typeof e.element?e.element():e;this._element.appendChild(n)}}return this},appendTo:function(t){return t?("function"==typeof t.append?t.append(this):"function"==typeof t.appendChild&&(t.appendChild(this._element),this.onAppend()),this):this},appendToBody:function(){return window.document.body.appendChild(this._element),this},hasClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)if(e=arguments[t],!n.contains(e))return!1;return!0},addClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],"string"==typeof e?(e=e.trim(),e.length>0&&n.add(e)):console.error("[wdg.addClass] Arguments with bad type!",arguments);return this},removeClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.remove(e);return this},toggleClass:function(){var t,e,n=this._element.classList;for(t=0;t<arguments.length;t++)e=arguments[t],n.toggle(e);return this},clear:function(){for(var t=this.element();t.firstChild;)t.removeChild(t.firstChild);var e,n;for(e=0;e<arguments.length;e++)n=arguments[e],this.append(n);return this},text:function(t){var e,n,i,r;if("string"==typeof t||"number"==typeof t)return this.clear(),this._element.appendChild(window.document.createTextNode(t)),this;if(e=this._element,void 0!==t&&(e=t),n="",e.childNodes)for(i=0;i<e.childNodes.length;i++)r=e.childNodes[i],3==r.nodeType?r.nodeValue&&(n+=r.nodeValue):n+=this.text(r);return n},html:function(t){return"undefined"==typeof t?this._element.innerHTML:(this._element&&(this._element.innerHTML=t),this)},focus:function(){var t=this._element;return t?("function"==typeof t.focus&&t.focus(),this):this},rect:function(){var t=this._element;return t?t.getBoundingClientRect():null},Tap:function(t,e){if("undefined"==typeof t)return this._Tap;var n=this;return"undefined"==typeof e&&(e=n),"string"==typeof t&&(t=e[t]),this._Tap||this.activatePointerEvents(),this._Tap=[t,e],this}},n.prototype.activatePointerEvents=function(){if(this._pointerEvents)return this;this._pointerEvents={start:0};var t=this._pointerEvents,e=this;return this.addEvent("touchstart",function(e){e.preventDefault(),e.stopPropagation(),t.touch=1,t.start=Date.now()}),this.addEvent("touchend",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){t.touch=0;var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this.addEvent("mousedown",function(e){e.preventDefault(),e.stopPropagation(),t.touch||(t.start=Date.now())}),this.addEvent("mouseup",function(n){n.preventDefault(),n.stopPropagation();var i=e._Tap;if(i){var r=Date.now()-t.start;r>50&&i[0].call(i[1],n)}}),this},n.prototype.div=function(){for(var t=new n,e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.prototype.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.prototype.isInDOM=function(){return n.isInDOM(this.element())},n.prototype.onAppend=function(){},n.create=function(t){return new n(t)},n.find=function(t){return new n({element:window.document.querySelector(t)})},n.svg=function(t,e){var i="http://www.w3.org/2000/svg";"object"==typeof t&&(e=t,t="svg"),"string"!=typeof t&&(t="svg");var r=window.document.createElementNS(i,t),s=new n({element:r});return"undefined"==typeof e&&(e={}),"svg"==t&&("undefined"==typeof e.version&&(e.version="1.1"),"undefined"==typeof e["xmlns:svg"]&&(e["xmlns:svg"]="http://www.w3.org/2000/svg"),"undefined"==typeof e.xmlns&&(e.xmlns="http://www.w3.org/2000/svg"),"undefined"==typeof e["xmlns:xlink"]&&(e["xmlns:xlink"]="http://www.w3.org/1999/xlink"),"undefined"==typeof e.viewBox&&"number"==typeof e.width&&"number"==typeof e.height&&(e.viewBox="0 0 "+e.width+" "+e.height)),"object"==typeof e&&s.attr(e),s},n.isInDOM=function(t){return t?("function"==typeof t.element&&(t=t.element()),t===window.document?!0:n.isInDOM(t.parentNode)):!1},n.fromTextOrHtml=function(t){var e=n.span();return"<html>"==t.substr(0,6)?e.html(t.substr(6)):e.text(t),e},n.div=function(){for(var t=new n({tag:"div"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.span=function(){for(var t=new n({tag:"span"}),e=0;e<arguments.length;e++)t.addClass(arguments[e]);return t},n.tag=function(t){"undefined"==typeof t&&(t="div");for(var e=new n({tag:t}),i=1;i<arguments.length;i++)e.addClass(arguments[i]);return e},n.id=function(t){return new n({element:window.document.getElementById(t)})},n.body=new n(window.document.body),e.exports=n,"classList"in window.document.createElement("_")?!function(){var t=window.document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}t=null}():!function(){if("Element"in window){var t="classList",e="prototype",n=window.Element[e],i=Object,r=String.prototype.trim||function(){var t=new RegExp("^\\s+|\\s+$","g");return this.replace(t,"")},s=Array[e].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},o=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new o("SYNTAX_ERR","An invalid or illegal string was specified");if(new RegExp("\\s").test(e))throw new o("INVALID_CHARACTER_ERR","String contains an invalid character");return s.call(t,e)},u=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(new RegExp("\\s+")):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},d=u[e]=[],f=function(){return new u(this)};if(o[e]=Error[e],d.item=function(t){return this[t]||null},d.contains=function(t){return t+="",-1!==a(this,t)},d.add=function(){var t,e=arguments,n=0,i=e.length,r=!1;do t=e[n]+"",-1===a(this,t)&&(this.push(t),r=!0);while(++n<i);r&&this._updateClassName()},d.remove=function(){var t,e,n=arguments,i=0,r=n.length,s=!1;do for(t=n[i]+"",e=a(this,t);-1!==e;)this.splice(e,1),s=!0,e=a(this,t);while(++i<r);s&&this._updateClassName()},d.toggle=function(t,e){t+="";var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},d.toString=function(){return this.join(" ")},i.defineProperty){var l={get:f,enumerable:!0,configurable:!0};try{i.defineProperty(n,t,l)}catch(h){-2146823252===h.number&&(l.enumerable=!1,i.defineProperty(n,t,l))}}else i[e].__defineGetter__&&n.__defineGetter__(t,f)}}()};
window["#platon.dodeca1"]=function(t,e){"use strict";var a=require("three.canvas"),o=require("three.rotator"),n=function(t){"undefined"==typeof t&&(t={}),"undefined"==typeof t.faces&&(t.faces=4),"undefined"==typeof t.width&&(t.width=280),"undefined"==typeof t.height&&(t.height=280),this._params1=[[0,1],[0,1],[0,1],[0,1],[0,1]],this._params2=[[0,1],[0,1],[0,1],[0,1],[0,1]],a.call(this,{width:t.width,height:t.height}),this.addClass("platon-dodeca1");var e=new THREE.Group;e.add(this.createPentagon()),this.addChildren(e),this.camera.position.z=9,this.scene.add(e),this.root=e,this._rotator=new o(e);var n=new THREE.HemisphereLight(13430527,10027008,3.6),i=new THREE.DirectionalLight(10057591,5),s=new THREE.DirectionalLight(7829401,2);i.position.set(43,13,5),s.position.set(-20,5,1),this.scene.add(i),this.scene.add(s),this.scene.add(n),this.start()};n.prototype=Object.create(a.prototype),n.prototype.constructor=n,n.prototype.onRender=function(t,e){this._rotator.rotate(t);var a=1.11,o=this.pentagons2,n=5e3,i=3e3,s=5e3,r=3e3;t%=n+i+s+r;var h=3;n>t?h=0:n+i>t?h=1:n+i+s>t&&(h=2),console.info("[platon.dodeca1] step=...",h),("undefined"==typeof this._lastStep||this._lastStep>h)&&(this._params1.forEach(function(t){var e=.7*Math.random(),a=e+.3+(.7-e)*Math.random();t[0]=e,t[1]=a}),this._params2.forEach(function(t){var e=.7*Math.random(),a=e+.3+(.7-e)*Math.random();t[0]=e,t[1]=a})),this.pentagons.forEach(function(e,h){var d,p,c=t,u=this._params1[h],f=this._params2[h],M=n+u[0]*i,y=n+u[1]*i,E=n+i+s+u[0]*r,l=n+i+s+u[1]*r;d=M>c?a:y>c?a-2*a*(c-M)/(y-M):E>c?-a:l>c?-a+2*a*(c-E)/(l-E):a,M=n+f[0]*i,y=n+f[1]*i,E=n+i+s+f[0]*r,l=n+i+s+f[1]*r,p=M>c?a:y>c?a-2*a*(c-M)/(y-M):E>c?-a:l>c?-a+2*a*(c-E)/(l-E):a,e.rotation.y=d;var g=o[h];g.rotation.y=p},this),this._lastStep=this._step,this._step=h},n.prototype.createPentagon=function(t){"undefined"==typeof t&&(t=1);var e,a,o=[],n=[];for(a=0;5>a;a++)e=2*a*Math.PI/5,o.push([t*Math.cos(e),t*Math.sin(e),0]),n.push(a);return this.createMesh({vertices:o,faces:[n],doublesided:!0})},n.prototype.createPentagon2=function(t,e){"undefined"==typeof t&&(t=1);var a,o=4*Math.PI/5,n=t*Math.cos(o),i=t*Math.sin(o),s=[],r=[];for(a=0;5>a;a++)o=2*a*Math.PI/5,s.push([t*Math.cos(o)-n,t*Math.sin(o)-i,0]),r.push(a);var h=new THREE.Group;return h.add(this.createMesh({vertices:s,faces:[r],doublesided:!0,material:e})),h},n.prototype.addChildren=function(t,e){"undefined"==typeof e&&(e=1);var a,o,n,i,s,r,h,d,p,c=[],u=[],f=2*e*Math.cos(.3*Math.PI),M=f*Math.cos(Math.PI/10),y=f*Math.sin(Math.PI/10);for(p=0;5>p;p++)i=new THREE.Group,a=2*p*Math.PI/5,o=e*Math.cos(a),n=e*Math.sin(a),s=this.createPentagon2(e),c.push(i),i.add(s),r=new THREE.Group,r.add(i),r.position.x=o,r.position.y=n,r.rotation.z=a-.2*Math.PI,h=this.createPentagon2(e),u.push(h),d=new THREE.Group,d.add(h),d.position.x=M,d.position.y=y,d.rotation.z=.2*Math.PI,i.add(d),t.add(r);this.pentagons=c,this.pentagons2=u},n.create=function(t){return new n(t)},e.exports=n};
window["#three.rotator"]=function(t,o){var n=function(t,o,n,e){"undefined"==typeof o&&(o=2500+500*Math.random()),"undefined"==typeof n&&(n=2500+500*Math.random()),"undefined"==typeof e&&(e=2500+500*Math.random()),this.obj=t,this.sx=o,this.sy=n,this.sz=e};n.prototype.rotate=function(t,o){"undefined"==typeof o&&(o=this.obj),o.rotation.x=t/this.sx,o.rotation.y=t/this.sy,o.rotation.y=t/this.sz},n.create=function(){return new n},o.exports=n};
window["#x-widget"]=function(e,t){"use strict";t.exports=function(e,t,n){var i=document.getElementById(e);if(i){var r=require(t),d=new r(n);d.element().$ctrl=d,d=d.element(),d.setAttribute("id",e),i.parentNode.replaceChild(d,i)}}};
window["#platon.solide"]=function(e,t){"use strict";var o=require("three.canvas"),r=require("three.rotator"),s=function(e){"undefined"==typeof e&&(e={}),"undefined"==typeof e.faces&&(e.faces=4),"undefined"==typeof e.width&&(e.width=150),"undefined"==typeof e.height&&(e.height=150),o.call(this,{width:e.width,height:e.height}),this.addClass("platon-solide"),this.camera.position.z=2.7;var t=new THREE.HemisphereLight(13430527,10027008,3.6),s=new THREE.DirectionalLight(10057591,5),h=new THREE.DirectionalLight(7829401,2);s.position.set(43,13,5),h.position.set(-20,5,1);var i=this.createSolid(e.faces);this.scene.add(i),this.scene.add(s),this.scene.add(h),this.scene.add(t),this._rotator=new r(i),this.start()};s.prototype=Object.create(o.prototype),s.prototype.constructor=s,s.prototype.onRender=function(e,t){if(o.prototype.onRender.call(this,e,t),this._rotator.rotate(e),this._blinker){var r=Math.cos(1e-4*e*Math.PI);r>.2?(r=Math.min(1,5*(r-.2)),this._blinker.visible=!0,this._blinker.children.forEach(function(e){e.material.opacity=r})):this._blinker.visible=!1}},s.prototype.getTetrahedronGeometry=function(e){"undefined"==typeof e&&(e=1);var t=e/Math.sqrt(3);return{vertices:[[t,t,t],[-t,t,-t],[t,-t,-t],[-t,-t,t]],faces:[[0,1,3],[0,2,1],[0,3,2],[1,2,3]]}},s.prototype.getCubeGeometry=function(e){"undefined"==typeof e&&(e=1);var t=e/Math.sqrt(3);return{vertices:[[t,t,t],[t,t,-t],[-t,t,-t],[-t,t,t],[t,-t,t],[t,-t,-t],[-t,-t,-t],[-t,-t,t]],faces:[[0,1,2,3],[0,4,5,1],[1,5,6,2],[4,7,6,5],[2,6,7,3],[0,3,7,4]]}},s.prototype.getDodecahedronGeometry=function(e){"undefined"==typeof e&&(e=1);var t=e;return{vertices:[[0,t,0],[t,0,0],[0,0,-t],[-t,0,0],[0,0,t],[0,-t,0]],faces:[[0,1,2],[0,2,3],[0,3,4],[0,4,1],[5,4,3],[5,1,4],[5,2,1],[5,3,2]]}},s.prototype.getIcosahedronGeometryA=function(e){"undefined"==typeof e&&(e=1);var t,o,r=e,s=[[0,r,0]],h=[],i=.3*r,n=.2;for(t=0;5>t;t++)o=2*t*Math.PI/5,s.push([i*Math.cos(o),n,i*Math.sin(o)]),4>t?h.push([0,t+2,t+1]):h.push([0,1,5]);for(t=0;5>t;t++)o=Math.PI/5+2*t*Math.PI/5,s.push([i*Math.cos(o),-n,i*Math.sin(o)]),4>t?h.push([11,t+6,t+7]):h.push([11,10,6]);return s.push([0,-r,0]),{vertices:s,faces:h}},s.prototype.getIcosahedronGeometry=function(e){"undefined"==typeof e&&(e=1);var t,o,r=e,s=[[0,r,0]],h=[],i=.9*r,n=1-i*Math.sqrt(4*Math.sin(Math.PI/5)*Math.sin(Math.PI/5)-1);for(t=0;5>t;t++)o=2*t*Math.PI/5,s.push([i*Math.cos(o),n,i*Math.sin(o)]),4>t?h.push([0,t+2,t+1]):h.push([0,1,5]);for(t=0;5>t;t++)o=Math.PI/5+2*t*Math.PI/5,s.push([i*Math.cos(o),-n,i*Math.sin(o)]),4>t?h.push([11,t+6,t+7]):h.push([11,10,6]);s.push([0,-r,0]);var a,c,d,p,u;for(t=0;5>t;t++)a=(t+2)%5,c=a+1,d=(a+1)%5+1,p=a+6,u=(a+1)%5+6,h.push([c,d,p]),h.push([d,u,p]);return this.css("float","none"),{vertices:s,faces:h}},s.prototype.getIcosahedronGeometryB=function(e){"undefined"==typeof e&&(e=1);var t,o,r=e,s=[[0,r,0]],h=[],i=.9*r,n=1-i*Math.sqrt(4*Math.sin(Math.PI/5)*Math.sin(Math.PI/5)-1);for(t=0;5>t;t++)o=2*t*Math.PI/5,s.push([i*Math.cos(o),n,i*Math.sin(o)]),4>t?h.push([0,t+2,t+1]):h.push([0,1,5]);for(t=0;5>t;t++)o=Math.PI/5+2*t*Math.PI/5,s.push([i*Math.cos(o),-n,i*Math.sin(o)]),4>t?h.push([11,t+6,t+7]):h.push([11,10,6]);return s.push([0,-r,0]),{vertices:s,faces:h}},s.prototype.createSolid=function(e){var t,o,r=[new THREE.Color(11206570),new THREE.Color(16755370),new THREE.Color(11184895),new THREE.Color(16777130),new THREE.Color(16755455),new THREE.Color(11206655)];1/Math.sqrt(3);return 4==e?(t=new THREE.Group,o=this.getTetrahedronGeometry(),o.colors=r,t.add(this.createMesh(o)),o=this.getCubeGeometry(),o.solid=!1,this._blinker=this.createMesh(o),t.add(this._blinker)):6==e?(t=new THREE.Group,o=this.getCubeGeometry(),o.colors=r,t.add(this.createMesh(o))):8==e?(t=new THREE.Group,o=this.getDodecahedronGeometry(),o.colors=r,o.nbColors=4,t.add(this.createMesh(o)),o=this.getCubeGeometry(.59),o.solid=!1,o.colors=r,this._blinker=this.createMesh(o),t.add(this._blinker)):"20a"==e?(t=new THREE.Group,o=this.getIcosahedronGeometryA(),o.colors=r,o.nbColors=5,t.add(this.createMesh(o))):"20b"==e?(t=new THREE.Group,o=this.getIcosahedronGeometryB(),o.colors=r,o.nbColors=5,t.add(this.createMesh(o))):20==e&&(t=new THREE.Group,o=this.getIcosahedronGeometry(),o.colors=r,o.nbColors=5,t.add(this.createMesh(o))),t},s.create=function(){return new s},t.exports=s};
//# sourceMappingURL=map/articles/solides_platon/@solides_platon.2.js.map