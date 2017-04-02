/** @module theatre100 */require( 'theatre100', function(require, module, exports) { var _=function(){var D={"en":{},"fr":{}},X=require("$").intl;function _(){return X(D,arguments);}_.all=D;return _}();
    "use strict";
var Widget = require("wdg");
var D = Widget.div;

/**
 * @example
 * var Theatre100 = require("theatre100");
 * var instance = new Theatre100();
 * @class Theatre100
 */
var Theatre100 = function() {
    var that = this;

    Widget.call(this);
    this.addClass("theatre100");
    var tbl = D('tbl');
    var rows, cols, index = 0;
    var row, cell;
    var cells = [];
    for (rows = 0 ; rows < 10 ; rows++) {
        row = D();
        for (cols = 0 ; cols < 10 ; cols++) {
            cell = D().text((index < 10 ? '0' : '') + index++);
            row.append(cell);            
            cells.push(cell);
        }
        tbl.append(row);
    }
    tbl.Tap(function() {
        that.refresh();
    });
    this.append(tbl, D().text("Cliquez sur la grille pour lancer une autre simulation."));
    this._cells = cells;
    this.refresh();
};

// Extension of Widget.
Theatre100.prototype = Object.create(Widget.prototype);
Theatre100.prototype.constructor = Theatre100;

/**
 * @return void
 */
Theatre100.prototype.refresh = function() {
    var that = this;

    var places = [];
    this._cells.forEach(function (cell, idx) {
        cell.removeClass('ok', 'ko').text((idx < 10 ? '0' : '') + idx);
        places.push(-1);
    });
    places.index = 0;
    this._places = places;
    if (this._interval) {
        clearInterval(this._interval);
    }
    this._delay = 1;
    this._interval = setInterval(function() {
        // All the step must not have the same rate.
        // We want green cell to be displayed fast but not red ones.
        // Then after a red cell, we set `this._delay` to a bigger value than 1.
        this._delay--;
        if (this._delay > 0) return;

        this._delay = 1;
        var P = that._places;
        if (P.index >= P.length) {
            clearInterval(that._interval);
            that._interval = 0;
        } else {
            var pos, rnd;
            var cells = that._cells;
            if (P.index == 0) {
                // First player seats randomly.
                pos = Math.floor(Math.random() * P.length);
                P[pos] = 0;
                cells[pos].addClass(pos == 0 ? 'ok' : 'ko').text('00');
                if (pos != 0) this._delay = 25;
            } else {
                // Second player try to seat at its place.
                if (P[P.index] < 0) {
                    P[P.index] = P.index;
                    cells[P.index].addClass('ok');
                } else {
                    // The place is occupied, lets seat randomly.
                    rnd = Math.floor(Math.random() * (P.length - P.index));
                    for (pos = 0 ; pos < P.length ; pos++) {
                        if (P[pos] < 0) {
                            if (rnd == 0) {
                                P[pos] = P.index;
                                cells[pos].addClass('ko').text((P.index < 10 ? '0' : '') + P.index);
                                this._delay = 25;
                                break;                              
                            } else {
                                rnd--;
                            }
                        }
                    }
                }
            }
            P.index++;
            if (P.index == P.length - 1) this._delay = 150;
        }
    }, 20);
};



Theatre100.create = function() {
    return new Theatre100();
};
module.exports = Theatre100;


  
module.exports._ = _;
/**
 * @module theatre100
 * @see module:$
 * @see module:wdg

 */
});