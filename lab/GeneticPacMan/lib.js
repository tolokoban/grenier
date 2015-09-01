/**
 * [[delta row, delta col], ...]
 */
var DIRECTIONS = [ [-1, 0], [0, 1], [1, 0], [0, -1] ];


/**
 * The top-left corner has col=0 and row=0. The directions are clockwise :
 *    0
 *  3-+-1
 *    2
 *
 */
function getPreferedDirections(srcRow, srcCol, dstRow, dstCol, currentDir, W1, W2) {
  var row = dstRow - srcRow;
  var col = dstCol - srcCol;
  var absRow = Math.abs(row);
  var absCol = Math.abs(col);
  if (absRow == absCol) absRow += Math.random() - .5;
  var weights;
  if (absCol > absRow) {
    if (col > 0) {
      if (row > 0) {
        //  \ 2 /
        //   \ / 
        //  3 O 0
        //   / \ T
        //  / 1 \
        weights = [W1[2], W1[0], W1[1], W1[3]];
      } else {
        //  \ 1 /
        //   \ / T
        //  3 O 0
        //   / \
        //  / 2 \
        weights = [W1[1], W1[0], W1[2], W1[3]];
      }
    } else {
      if (row > 0) {
        //  \ 2 /
        //   \ / 
        //  0 O 3
        // T / \ 
        //  / 1 \
        weights = [W1[2], W1[3], W1[1], W1[0]];
      } else {
        //  \ 1 /
        // T \ / 
        //  0 O 3
        //   / \
        //  / 2 \
        weights = [W1[1], W1[3], W1[2], W1[0]];
      }
    }
  } else {
    if (col > 0) {
      if (row > 0) {
        //  \ 3 /
        //   \ / 
        //  2 O 1
        //   / \  
        //  / 0T\
        weights = [W1[3], W1[1], W1[0], W1[2]];
      } else {
        //  \ 0T/
        //   \ /  
        //  2 O 1
        //   / \
        //  / 3 \
        weights = [W1[0], W1[1], W1[3], W1[2]];
      }
    } else {
      if (row > 0) {
        //  \ 3 /
        //   \ / 
        //  1 O 2
        //   / \ 
        //  /T0 \
        weights = [W1[3], W1[2], W1[0], W1[1]];
      } else {
        //  \T0 /
        //   \ / 
        //  1 O 2
        //   / \
        //  / 3 \
        weights = [W1[0], W1[2], W1[3], W1[1]];
      }
    }
  }
  // Add weights depending on current direction.
  W2.forEach(function(w, dir) {
    weights[(dir + currentDir) % 4] += w;
  });
  // Sorting directions by preference.
  var prefs = [0, 1, 2, 3];
  prefs.sort(function(a, b) {
    return weights[b] - weights[a];
  });
  return prefs;
}


function getDirectionVector(dir) {
  return DIRECTIONS[dir & 3];
};


exports.getPreferedDirections = getPreferedDirections;
exports.getDirectionVector = getDirectionVector;
