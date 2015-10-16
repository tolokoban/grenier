function solve(CAPACITIES, LABELS, init, goal, heuristic) {
  function State(parent) {
    if (typeof parent === 'undefined') {
      this.containers = init.slice();
      this.moves = [];
      this.keys = [this.key()];
    } else {
      this.containers = parent.containers.slice();
      this.moves = parent.moves.slice();
      this.keys = parent.keys.slice();
    }
  }

  State.prototype.cost = function() {
    var g = this.moves.length;
    return g + heuristic(this);
  };

  State.prototype.move = function(src, dst) {
    var cnt = this.containers;
    if (src == dst) {
      // Vidage complet.
      cnt[src] = 0;
    } else {
      var v = Math.min(cnt[src], CAPACITIES[dst] - cnt[dst]);
      cnt[src] -= v;
      cnt[dst] += v;
    }
    var key = this.key();
    if (this.keys.indexOf(key) > -1) return false;
    this.keys.push(key);
    this.moves.push([src, dst, this.containers.slice()]);
    return true;
  };

  State.prototype.key = function() {
    var key = "";
    this.containers.forEach(
      function(v, idx) {
        if (idx > 0) key += "-";
        key += v;
      }
    );
    return key;
  };

  State.prototype.nextMoves = function(fringe) {
    var src, dst, state;
    for (src = 0 ; src < CAPACITIES.length ; src++) {
      for (dst = 0 ; dst < CAPACITIES.length ; dst++) {
        state = new State(this);
        if (state.move(src, dst)) {
          fringe.push(state);
        }
      }
    }
  };

  State.prototype.print = function() {
    console.log("----------------------------------------");
    console.log("Situation initiale: " + JSON.stringify(init));
    this.moves.forEach(
      function(move) {
        var src = move[0];
        var dst = move[1];
        var cnt = move[2];
        var txt = "";
        if (src == dst) {
          txt = "Vider " + LABELS[src] + " sur le sol";
        } else {
          txt = "Remplir " + LABELS[dst] + " avec " + LABELS[src];
        }
        txt += " : " + JSON.stringify(cnt);
        console.log(txt);
      }
    );

  };

  var fringe = [new State()];
  var count = 0;
  var state;
  var cache = {};
  var key;
  while (fringe.length > 0) {
    state = fringe.pop();
    count++;
    key = state.key();
    if (cache[key]) continue;
    cache[key] = 1;
    if (goal(state)) {
      state.count = count;
      return state;
    }
    state.nextMoves(fringe);
    fringe.sort(
      function(s1, s2) {
        return s2.cost() - s1.cost();
      }
    );
  }
  return null;
}

function h0(s) { return 0; }

var a, b, c, state, states = [];
var goalFunc = function(aa, bb, cc) {
  return function(s) {
    var cnt = s.containers;
    return cnt[0] == aa && cnt[1] == bb && cnt[2] == cc;
  };
};

var Ca, Cb, Cc;

for (Ca = 2 ; Ca <= 9 ; Ca++) {
  for (Cb = Ca + 1 ; Cb <= 9 ; Cb++) {
    for (Cc = Cb + 1 ; Cc <= 9 ; Cc++) {
      var CAPACITIES = [Ca, Cb, Cc];
      var LABELS = ["V" + Ca, "V" + Cb, "V" + Cc];

      for (a = 1 ; a <= Ca ; a++) {
        for (b = 1 ; b <= Cb ; b++) {
          for (c = 1 ; c <= Cc ; c++) {
            if (a == Ca && b == Cb && c == Cc) continue;
            state = solve(
              CAPACITIES, LABELS, CAPACITIES,
              goalFunc(a, b, c), h0
            );
            if (state) {
              console.log("(" + a + "," + b + "," + c + ") -> " + state.moves.length);
              state.init = [a,b,c];
              states.push(state);
            }
          }
        }
      }
    }
  }
}

states.sort(
  function(s1, s2) {
    return s1.count - s2.count;
  }
);

console.log();
console.log();

states.forEach(
  function(state) {
    console.log("----------------------------------------");
    console.log("Moves: " + state.moves.length + ", Count: " + state.count);
    state.print();
  }
);

var key = "";
var alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function encode(a, b, c) {
  var v = a * 100 + b * 10 + c;
  var L = v % alphabet.length;
  var H = (v - L) / alphabet.length;
  return alphabet.charAt(H) + alphabet.charAt(L);
}
states.forEach(
  function(state) {
    key += encode(state.init[0], state.init[1], state.init[2]);
    key += alphabet.charAt(state.moves.length);
    var move = state.moves.pop();
    var cnt = move[2];
    key += encode(cnt[0], cnt[1], cnt[2]);
  }
);

console.log("Nb games: " + states.length);
console.log();
console.log(key);
