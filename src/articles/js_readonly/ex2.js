var myObj = { PI: 3.14159265358979 };

Object.freeze( myObj );

console.info("[script] myObj.PI=...", myObj.PI);
myObj.PI = 666;
console.info("[script] myObj.PI=...", myObj.PI);
