var require=function(){var r={};return function(e,o){var n;if(o=window["#"+e],"undefined"==typeof o){var i=new Error("Required module is missing: "+e);throw console.error(i.stack),i}if(n=r[e],"undefined"==typeof n){n={exports:{}};var t=n.exports;o(t,n),r[e]=n.exports,n=n.exports}return n}}();
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.511",major:1,minor:0,revision:511,date:new Date(2015,10,14,11,46,43)};var a=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),a=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,a){var o,t,e,i,g,l,s=r[n.lang()],u=a[0];if(!s)return console.error('Missing internationalization for language : "'+n.lang()+'"!'),u;if(o=s[u],!o)return console.error("Missing internationalization ["+n.lang()+']: "'+u+'"!'),u;if(a.length>1){for(t="",g=0,e=0;e<o.length;e++)i=o.charAt(e),"$"===i?(t+=o.substring(g,e),e++,l=o.charCodeAt(e)-48,t+=0>l||l>=a.length?"$"+o.charAt(e):a[l],g=e+1):"\\"===i&&(t+=o.substring(g,e),e++,t+=o.charAt(e),g=e+1);t+=o.substr(g),o=t}return o}};
//# sourceMappingURL=map/articles/millers_puzzle/@millers_puzzle.2.js.map