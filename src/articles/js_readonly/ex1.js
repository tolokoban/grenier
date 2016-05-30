var myObj = {};
Object.defineProperty(myObj, 'PI', {
    value: 3.14159265358979,
    writable: false
});

console.info("[script] myObj.PI=...", myObj.PI);
myObj.PI = 666;
console.info("[script] myObj.PI=...", myObj.PI);
