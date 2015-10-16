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

    State.prototype.isGoal = function() {
        return goal(this);
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
        if (state.isGoal()) {
            state.print();
            console.log("Count: " + count);
            return;
        }
        state.nextMoves(fringe);
        fringe.sort(
            function(s1, s2) {
                return s2.cost() - s1.cost();
            }
        );
    }
}

var CAPACITIES = [3, 5, 60];
var LABELS = ["le petit verre", "le grand verre", "le baril"];

function h0(s) { return 0; }

solve(
    [3, 5, 60], LABELS, [0, 0, 60],
    function(s) {
        var cnt = s.containers;
        return cnt[0] == 1 && cnt[1] == 1;
    },
    h0
);
