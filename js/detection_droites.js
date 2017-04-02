/** @module detection_droites */require( 'detection_droites', function(require, module, exports) { var _=function(){var D={"en":{},"fr":{}},X=require("$").intl;function _(){return X(D,arguments);}_.all=D;return _}();
    exports.start = function() {
    var img = document.getElementById("image");
    //img.src = "sample.jpg";
    img.onload = function() {
        var content = document.getElementById("sample");
        var out = '';
        var points = extractPointsFromImage(img);
        computeRadius(points);
        out += "<div class='grid'>";
        points.forEach(function (point) {
            out += '<div>';
            out += '<div>' + point[0] + "," + point[1] + '</div>';
            for (var i=2; i<point.length; i++) {
                out += '<div>' + point[i] + '</div>';
            }
            out += '</div>';
        });
        out += "</div>";
        content.innerHTML = out;
    };
};

/**
 * @return
 * An array of black points. Each point  is an array with two items: x
 * and y.
 */
function extractPointsFromImage(img) {
    var canvas = document.createElement("canvas");
    canvas.setAttribute("width", img.width);
    canvas.setAttribute("height", img.height);
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var buffer = ctx.getImageData(0, 0, img.width, img.height).data;
    var points = [];
    var index = 0;
    var value;
    var w, h;

    for (h = 0; h < img.height; h++) {
        for (w = 0; w < img.width; w++) {
            value = buffer[index++] + buffer[index++] + buffer[index++];
            if (value < 30) {
                points.push([w,h]);
            }
            index++;
        }
    }

    return points;
}


/**
 * `points` is an array of points. A point is an array with two items:
 * x and y.  This function adds 36  items to each point: there are the
 * 36 values of R given A in {0°, 10°, 20°, ..., 350°}.
 */
function computeRadius(points) {
    var COS = [], SIN = [],
        i,
        angle = 0,
        angleStep = Math.PI / 18;
    for (i = 0; i < 36; i++) {
        COS.push(Math.cos(angle));
        SIN.push(Math.cos(angle));
        angle += angleStep;
    }

    points.forEach(function (point) {
        var x = point[0],
            y = point[1];
        COS.forEach(function (c, idx) {
            var s = SIN[idx],
                r = 2 * Math.floor(.5 + (x * c + y * s) / 2);
            point.push(r);
        });
    });
}


  
module.exports._ = _;
/**
 * @module detection_droites
 * @see module:$

 */
});