var require=function(){var r={};return function(e,o){var n;if(o=window["#"+e],"undefined"==typeof o){var i=new Error("Required module is missing: "+e);throw console.error(i.stack),i}if(n=r[e],"undefined"==typeof n){n={exports:{}};var t=n.exports;o(t,n),r[e]=n.exports,n=n.exports}return n}}();
window["#$"]=function(n,r){n.config={name:"grenier",description:"Articles concernant majoritairement l'algorithmie",author:"Tolokoban",version:"1.0.512",major:1,minor:0,revision:512,date:new Date(2016,1,4,14,44,39)};var t=null;n.lang=function(n){return void 0===n&&(n=window.localStorage.getItem("Language"),n||(n=window.navigator.language,n||(n=window.navigator.browserLanguage,n||(n="fr"))),n=n.substr(0,2).toLowerCase()),t=n,window.localStorage.setItem("Language",n),n},n.intl=function(r,t){var a,e,o,i,g,l,u=r[n.lang()],s=t[0];if(!u)return s;if(a=u[s],!a)return s;if(t.length>1){for(e="",g=0,o=0;o<a.length;o++)i=a.charAt(o),"$"===i?(e+=a.substring(g,o),o++,l=a.charCodeAt(o)-48,e+=0>l||l>=t.length?"$"+a.charAt(o):t[l],g=o+1):"\\"===i&&(e+=a.substring(g,o),o++,e+=a.charAt(o),g=o+1);e+=a.substr(g),a=e}return a}};
//# sourceMappingURL=map/articles\enumerer_permutations\@enumerer_permutations.js.map