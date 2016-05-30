var C = function() { console.log( this.id );};
var B = function() { console.log( this.id );};
B.id = "Bertrand";
B.c = C;
var A = {id: "Albert", b: B};
C.id = "Charly";

A.b();
A.b.c();
