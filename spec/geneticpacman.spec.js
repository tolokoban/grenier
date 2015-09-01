var Lib = require("../lab/GeneticPacMan/lib.js");


describe('Genetic Pac-Man', function() {
  it('should return correct direction vectors', function() {
    expect(Lib.getDirectionVector(0)).toEqual([-1, 0]);
    expect(Lib.getDirectionVector(1)).toEqual([0, 1]);
    expect(Lib.getDirectionVector(2)).toEqual([1, 0]);
    expect(Lib.getDirectionVector(3)).toEqual([0, -1]);

    expect(Lib.getDirectionVector(27)).toEqual([0, -1]);
    expect(Lib.getDirectionVector(-1)).toEqual([0, -1]);
    expect(Lib.getDirectionVector(-2)).toEqual([1, 0]);
    expect(Lib.getDirectionVector(-3)).toEqual([0, 1]);
    expect(Lib.getDirectionVector(-1763)).toEqual([0, 1]);
  });
  it('should have correct direction preferences for monsters', function() {
    function check(args, W1, W2) {
      var result = JSON.stringify(Lib.getPreferedDirections(0, 0, args[0], args[1], args[2], W1, W2));
      var expected = JSON.stringify(args[3]);
      if (result != expected) {
        fail(
          "Lib.getPreferedDirections(0, 0, " + args[0] 
            + ", " + args[1] + ", dir=" + args[2] + ", "
            + JSON.stringify(W1) + ", " + JSON.stringify(W2) + ")\n"
            + "Expected " + expected + ", but found " + result
        );
      }
    }
    [
      [3, 2, 0, [2, 1, 3, 0]],
      [-3, 2, 0, [0, 1, 3, 2]],
      [3, -2, 0, [2, 3, 1, 0]],
      [-3, -2, 0, [0, 3, 1, 2]],
      [2, 3, 0, [1, 2, 0, 3]],
      [-2, 3, 0, [1, 0, 2, 3]],
      [2, -3, 0, [3, 2, 0, 1]],
      [-2, -3, 0, [3, 0, 2, 1]]
    ].forEach(function(args) {
      check(args, [3,2,1,0], [0,0,0,0]);
    });
    [
      [-2, 3, 0, [1, 0, 3, 2]],
      [-2, 3, 1, [1, 0, 2, 3]],
      [-2, 3, 2, [1, 2, 0, 3]],
      [-2, 3, 3, [0, 1, 2, 3]]
    ].forEach(function(args) {
      check(args, [6,4,2,0], [3,4,0,4]);
    });
  });
});
