/****************************************
 The best algorithm to win at this game is MinMax.
 But we are looking for a simpler algorithm that a man can perform.

 ****************************************/

// Algorithms get `values`, an array of pieces, and must return 0 (take first piece) or 1 (take last).
var algos = {
    minmax: function() {
        function max(values, F, L) {
            if (F >= L) return values[F];
            return Math.max(
                values[F] + min(values, F + 1, L),
                values[L] + min(values, F, L - 1)
            );
        }

        function min(values, F, L) {
            if (F >= L) return -values[F];
            return Math.min(
                    - values[F] + max(values, F + 1, L),
                    - values[L] + max(values, F, L - 1)
            );
        }

        return function(values, F, L) {
            if (F >= L) return 0;
            var a = max(values, F + 1, L) - values[F];
            var b = max(values, F, L - 1) - values[L];
            if (b < a) return 1;
            return 0;
        };
    }(),
    biggest: function() {
        return function(values, F, L) {
            if (values[F] > values[L]) return 0;
            return 1;
        };
    }()
};


function play(values, algo1, algo2) {
    var F = 0;
    var L = values.length - 1;
    var pts1 = 0;
    var pts2 = 0;
    while (F < L) {
        if (algo1(values, F, L) == 0) {
            // Take first.
            pts1 += values[F]; F++;
        } else {
            // Take last.
            pts1 += values[L]; L--;
        }
        if (algo2(values, F, L) == 0) {
            // Take first.
            pts2 += values[F]; F++;
        } else {
            // Take last.
            pts2 += values[L]; L--;
        }
    }
    return pts1 - pts2;
}

function shuffle(arr) {
    var i, j, tmp;
    for (i = 0 ; i < arr.length ; i++) {
        j = Math.floor(Math.random() * arr.length);
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}



var arr = [1,2,3,4,5,6,7,8,9,10];
var count = 0;

var algo1 = algos.biggest;
var algo2 = algos.minmax;

var score = 0;

while (true) {
    shuffle(arr);
    count++;
    score = play(arr, algo1, algo2);
    if (count % 100000 == 0 || score < 0) {
        console.log("Count = " + count);
        console.log("Score = " + score);
        console.log(arr);
    }
    if (score < 0) {
        break;
    }
}


