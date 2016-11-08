/** @module tp4.bulle */require( 'tp4.bulle', function(require, module, exports) { var _intl_={"en":{"close":"Close","later":"Later!","next":"Next"},"fr":{"close":"Fermer","later":"Plus tard!","next":"Suivant"}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
    var Widget = require("wdg");
var D = Widget.div;

var container = null;

function hide() {
    if (!container) return;
    container.detach();
    container = null;
}

function show(target, content) {
    if (typeof content === 'string') {
        if (content.substr(0, 6) == '<html>') {
            content = D().html(content.substr(6));
        } else {
            content = D().text(content);
        }
    }
    
    var rect = target.rect();
    var x = rect.left + rect.width / 2;
    var y = rect.top + rect.height / 2;
    var centerX = document.body.getBoundingClientRect().width / 2;
    var centerY = document.body.getBoundingClientRect().height / 2;
    var dirH = x > centerX ? "right" : "left";
    var dirV = y > centerY ? "bottom" : "top";
    var w = D("tp4-bulle", dirH, dirV);
    var frame = D('frame');
    var center = Widget.tag("center").css("marginTop", "10px");
    var div = D("content").append(content, center);
    if (dirH == "right") x -= 240;
    w.css(
        {
            left: x + "px",
            top: y + "px"
        }
    );
    w.append(frame);
    if (dirV == 'top') {
        frame.append(D("svg"), div);
    } else {
        frame.append(div, D("svg"));
    }
    container = D("tp4-bulle-container").append(w).appendToBody();
    container.Tap(hide);
    setTimeout(
        function() {
            w.addClass("show");
        }
    );
};

exports.show = show;
exports.hide = hide;


  
module.exports._ = _;
/**
 * @module tp4.bulle
 * @see module:$
 * @see module:wdg

 */
});