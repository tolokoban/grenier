var Lib = require("./lib");


function Radar(brain) {
    if (typeof brain === 'undefined') {
        brain = [
            Lib.randomArray(4),
            Lib.randomArray(3),
            Lib.randomArray(3),
            Lib.randomArray(3),
            Lib.randomArray(3)
        ];
    }
    this.brain = brain;
    this.type = "radar";
}

/**
 * @return void
 */
Radar.prototype.reproduce = function() {
    var child = new Radar();
    child.brain = this.brain.map(function (v) {
        return Lib.limit(v + Lib.rnd(-0.2, 0.2) * Math.random());
    });
    return child;    
};
