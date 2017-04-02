/** @module theatre100.main */require( 'theatre100.main', function(require, module, exports) { var _=function(){var D={"en":{},"fr":{}},X=require("$").intl;function _(){return X(D,arguments);}_.all=D;return _}();
    "use strict";
var Widget = require("wdg");

/**
 * @example
 * var Main = require("theatre100.main");
 * var instance = new Main(args);
 * @class Main
 */
var Main = function(args) {
    Widget.call(this);
    this.addClass("theatre100-main");
    if (typeof args === 'undefined') args = {};
    if (typeof args.size === 'undefined') args.size = 5;

    this._args = args;

    var values = [];
    var i;

    for (i = 0 ; i < args.size ; i++) {
        values.push(0);
    }

    this._count = 0;
    this._wins = 0;

    for (i = 0 ; i < args.size ; i++) {
        values[i] = 1;
        recurse.call(this, values, 2);
        values[i] = 0;
    }

    this.append(
        " " + this._wins + " / " + this._count,
        " (" + (100 * this._wins / this._count).toFixed(0) + " %)"
    );
};

// Extension of Widget.
Main.prototype = Object.create(Widget.prototype);
Main.prototype.constructor = Main;

/**
 * @return void
 */
Main.prototype.add = function(values) {
    values.forEach(function (number, index) {
        var span = Widget.tag('span').text(number).addClass(number == index + 1 ? 'ok' : 'ko');
        if (index == values.length - 1) {
            span.addClass('last');
            if (number == index + 1) {
                this._wins++;
            }
            this._count++;
        }
        this.append(span);
    }, this);
    return this.append(Widget.tag('span').text(" "));
};



Main.create = function(args) {
    return new Main(args);
};
module.exports = Main;



function recurse(values, number) {
    if (number > values.length) {
        this.add(values);
        return;
    }

    var args = this._args;
    var i;

    if (values[number - 1] == 0) {
        values[number - 1] = number;
        recurse.call(this, values, number + 1);
        values[number - 1] = 0;
    } else {
        for (i = 0 ; i < args.size ; i++) {
            if (values[i] == 0) {
                values[i] = number;
                recurse.call(this, values, number + 1);
                values[i] = 0;
            }
        }
    }
}


  
module.exports._ = _;
/**
 * @module theatre100.main
 * @see module:$
 * @see module:wdg

 */
});