function intSorter(a, b) {
    return parseInt(a) - parseInt(b);
}


function rnd(min, max) {
    return parseInt(min) + Math.floor(Math.random() * (max - min));
}

function combine(die1, die2) {
    var result = [];
    die1.forEach(function (d1) {
        die2.forEach(function (d2) {
            result.push(d1 + d2);
        });
    });
    result = result.sort(intSorter);
    return result;
}

function gain(values1, values2, values3) {
    var percent = 0;
    var fraction1 = 1 / values1.length;
    var fraction2 = 1 / values2.length;
    var fraction3 = 1 / (values3 ? values3.length : 1);
    values1.forEach(function (v1) {
        var i = 0;
        while (i < values2.length && values2[i] < v1) {
            i++;
        }
        if (Array.isArray(values3)) {
            var k = 0;
            while (k < values3.length && values3[k] < v1) {
                k++;
            }
            percent += fraction3 * k * fraction2 * i * fraction1;
        } else {
            percent += fraction2 * i * fraction1;
        }
    });
    return percent;
}

function randomDice() {
    var die1 = [rnd(-9, 9), rnd(-9, 9), rnd(-9, 9), rnd(-9, 9), rnd(-9, 9), rnd(-9, 9)];
    var die2 = [rnd(-9, 9), rnd(-9, 9), rnd(-9, 9), rnd(-9, 9), rnd(-9, 9), rnd(-9, 9)];
    var values = combine(die1, die2);
    die1 = die1.sort(intSorter);
    die2 = die2.sort(intSorter);
    return {d: [die1, die2], v: values};
}

function score(d1, d2, d3) {
    var s = 0;
    s += Math.min(0, gain(d1.v, d2.v) - .5);
    s += Math.min(0, gain(d1.v, d3.v) - .5);
    s += Math.min(0, gain(d2.v, d3.v) - .5);
    s += Math.min(0, gain(d3.v, d2.v, d1.v) - 1/3);
    return s;
}

var D1 = {d: [[0,0,0,0,0,0]], v: [0]};
var D2 = randomDice();
var D3 = randomDice();

function solve() {
    var loops = 0;
    var shakeItDisplayed = false;
    for(;;) {
        loops++;
        var s = score(D1, D2, D3);
        if (loops % 10000 == 0) {
            console.log(loops);
            shakeItDisplayed = false;
        }
        if (s >= 0) {
            console.log();
            console.log('============================================================');
            console.log(JSON.stringify(D1));
            console.log(JSON.stringify(D2));
            console.log(JSON.stringify(D3));
            console.log('------------------------------------------------------------');
            console.log('A > B : ' + gain(D1.v, D2.v));
            console.log('A > C : ' + gain(D1.v, D3.v));
            console.log('B > C : ' + gain(D2.v, D3.v));
            console.log('------------------------------------------------------------');
            console.log('A > B & C : ' + gain(D1.v, D2.v, D3.v));
            console.log('B > A & C : ' + gain(D2.v, D1.v, D3.v));
            console.log('C > A & B : ' + gain(D3.v, D1.v, D2.v));
            console.log();
            break;
        }
        var bestScore = s;
        var bestD2 = D2;
        var bestD3 = D3;
        var bestFound = false;
        D2.d.forEach(function (die, idxDie) {
            die.forEach(function (face, idxFace) {
                die[idxFace]++;
                D2.v = combine(D2.d[0], D2.d[1]);
                s = score(D1, D2, D3);
                if (s > bestScore) {
                    bestD2 = {d: D2.d.slice(), v: D2.v.slice()};
                    bestFound = true;
                }
                die[idxFace]--;
                die[idxFace]--;
                D2.v = combine(D2.d[0], D2.d[1]);
                s = score(D1, D2, D3);
                if (s > bestScore) {
                    bestD2 = {d: D2.d.slice(), v: D2.v.slice()};
                    bestFound = true;
                }
                die[idxFace]++;
            });
        });
        D3.d.forEach(function (die, idxDie) {
            die.forEach(function (face, idxFace) {
                die[idxFace]++;
                D3.v = combine(D2.d[0], D2.d[1]);
                s = score(D1, D2, D3);
                if (s > bestScore) {
                    bestD3 = {d: D3.d.slice(), v: D3.v.slice()};
                    bestFound = true;
                }
                die[idxFace]--;
                die[idxFace]--;
                D3.v = combine(D2.d[0], D2.d[1]);
                s = score(D1, D2, D3);
                if (s > bestScore) {
                    bestD3 = {d: D3.d.slice(), v: D3.v.slice()};
                    bestFound = true;
                }
                die[idxFace]++;
            });
        });
        D2 = bestD2;
        D3 = bestD3;
        if (!bestFound) {
            //if (shakeItDisplayed == false) {
            shakeItDisplayed = true;
            console.log("Shake it!  " + bestScore + "     " + loops);
            //}
            D2.d.forEach(function (die, idxDie) {
                die.forEach(function (face, idxFace) {
                    die[idxFace] += rnd(-2, 2);
                });
            });
            D2.v = combine(D2.d[0], D2.d[1]);
            D3.d.forEach(function (die, idxDie) {
                die.forEach(function (face, idxFace) {
                    die[idxFace] += rnd(-2, 2);
                });
            });
            D3.v = combine(D2.d[0], D2.d[1]);
        }
    }
}

function newArr() {
    var i, count, value, arr = [];
    for (i = 0 ; i < arguments.length ; i+=2) {
        count = arguments[i];
        value = arguments[i + 1];
        while (count > 0) {
            arr.push(value);
            count--;
        }
    }
    return arr;
}

console.log(
    score(
        {v: [3]},
        {v: newArr(20, 2, 8, 4, 8, 6)},
        {v: newArr(19, 1, 17, 5)}
    )
);

var d1 = {v: [3]};
var d2 = {d: [[0,0,0,0,0,3], [2,2,2,2,4,4]], v: newArr(20, 2, 10, 4, 4, 5, 2, 7)};
d2.v = combine(d2.d[0], d2.d[1]);
var d3 = {v: newArr(19, 1, 17, 5)};
console.log(score(d1, d2, d3));
console.log('------------------------------------------------------------');
console.log('A > B : ' + gain(d1.v, d2.v));
console.log('A > C : ' + gain(d1.v, d3.v));
console.log('B > C : ' + gain(d2.v, d3.v));
console.log('------------------------------------------------------------');
console.log('A > B & C : ' + gain(d1.v, d2.v, d3.v));
console.log('B > A & C : ' + gain(d2.v, d1.v, d3.v));
console.log('C > A & B : ' + gain(d3.v, d1.v, d2.v));
console.log('------------------------------------------------------------');
console.log(JSON.stringify(d1));
console.log(JSON.stringify(d2));
console.log(JSON.stringify(d3));

console.log('------------------------------------------------------------');
//solve();
