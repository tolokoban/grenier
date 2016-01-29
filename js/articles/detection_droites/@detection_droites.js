var require = function() {
    var modules = {};
    
    return function(id, body) {
        var mod;
        body = window["#" + id];
        if (typeof body === 'undefined') {
            var err = new Error("Required module is missing: " + id);   
            console.error(err.stack);
            throw err;
        }
        mod = modules[id];
        if (typeof mod === 'undefined') {
            mod = {exports: {}};
            var exports = mod.exports;
            body(exports, mod);
            modules[id] = mod.exports;
            mod = mod.exports;
            //console.log("Module initialized: " + id);
        }
        return mod;
    };
}();
function addListener(e,l) {
    if (window.addEventListener) {
        window.addEventListener(e,l,false);
    } else {
        window.attachEvent('on' + e, l);
    }
};

addListener(
    'DOMContentLoaded',
    function() {
        document.body.parentNode.$data = {};
        // Attach controllers.
        APP = require('detection_droites');
setTimeout(function (){if(typeof APP.start==='function')APP.start()});
    }
);



//########################################
window['#$']=function(exports,module){  exports.config={
    name:"grenier",
    description:"Articles concernant majoritairement l'algorithmie",
    author:"Tolokoban",
    version:"1.0.511",
    major:1,
    minor:0,
    revision:511,
    date:new Date(2016,0,26,16,11,16)
};
var currentLang = null;
exports.lang = function(lang) {
    if (lang === undefined) {
        lang = window.localStorage.getItem("Language");
        if (!lang) {
            lang = window.navigator.language;
            if (!lang) {
                lang = window.navigator.browserLanguage;
                if (!lang) {
                    lang = "fr";
                }
            }
        }
        lang = lang.substr(0, 2).toLowerCase();
    }
    currentLang = lang;
    window.localStorage.setItem("Language", lang);
    return lang;
};
exports.intl = function(words, params) {
    var dic = words[exports.lang()],
    k = params[0],
    txt, newTxt, i, c, lastIdx, pos;
    if (!dic) {
        //console.error("Missing internationalization for language : \"" + exports.lang() + "\"!");
        return k;
    }
    txt = dic[k];
    if (!txt) {
        //console.error("Missing internationalization [" + exports.lang() + "]: \"" + k + "\"!");
        return k;
    }
    if (params.length > 1) {
        newTxt = "";
        lastIdx = 0;
        for (i = 0 ; i < txt.length ; i++) {
            c = txt.charAt(i);
            if (c === '$') {
                newTxt += txt.substring(lastIdx, i);
                i++;
                pos = txt.charCodeAt(i) - 48;
                if (pos < 0 || pos >= params.length) {
                    newTxt += "$" + txt.charAt(i);
                } else {
                    newTxt += params[pos];
                }
                lastIdx = i + 1;
            } else if (c === '\\') {
                newTxt += txt.substring(lastIdx, i);
                i++;
                newTxt += txt.charAt(i);
                lastIdx = i + 1;
            }
        }
        newTxt += txt.substr(lastIdx);
        txt = newTxt;
    }
    return txt;
};
 }


//########################################
window['#detection_droites']=function(exports,module){  exports.start = function() {
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
 }
