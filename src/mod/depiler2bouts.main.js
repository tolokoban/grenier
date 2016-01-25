"use strict";
var Widget = require("wdg");
var D = Widget.div;
var T = Widget.tag;

/**
 * @example
 * var Main = require("depiler2bouts.main");
 * var instance = new Main();
 * @class Main
 */
var Main = function() {
    Widget.call(this);
    this.addClass("depiler2bouts-main");
    var nbPieces = 10;
    this._pieces = createPieces.call(this, nbPieces);
    createScores.call(this);
    this.reset();
};

function createScores() {
    var that = this;
    var btnReset = T('a', 'button').attr('href', '#').text("Recommencer").Tap(function() {
        that.reset();
    });
    var pts1 = D("pts1").text("0");
    var pts2 = D("pts2").text("0");
    var tbl = D('tbl').append(
        D().append(
            D().text("Vous"),
            pts1
        ),
        D().append(btnReset),
        D().append(
            D().text("Lui"),
            pts2
        )
    );
    this._pts1 = pts1;
    this._pts2 = pts2;
    return tbl.appendTo(this);
}

function createPieces(nbPieces) {
    var that = this;
    var onTap = function() {
        that.onTap(this);
    };
    var pieces = [];
    var i;
    var div;
    var piece;
    for (i = 0 ; i < nbPieces ; i++) {
        div = D('piece').appendTo(this);
        piece = D().text(i + 1).attr('data-idx', i).Tap(onTap);
        piece.parent = div;
        div.append(piece);
        pieces.push(piece);
    }
    return pieces;
}

// Extension of Widget.
Main.prototype = Object.create(Widget.prototype);
Main.prototype.constructor = Main;

/**
 * @return void
 */
Main.prototype.onTap = function(source) {
    if (this._freeze) return;
    var first = this._first;
    var last = this._last;
    if (first == last) return;    
    var index = parseInt(source.attr('data-idx'));
    if (index != first && index != last) return;
    var that = this;

    if (index == first) {
        this._first++;
    }
    else if (index == last) {
        this._last--;
    }
    source.parent.addClass('flip');    
    setTimeout(function() {
        source.addClass('you');
        source.parent.removeClass('flip');
    }, 300);
    setTimeout(function() {
        that.computersTurn();
    }, 600);
    this._pts1.text(
        parseInt(this._pts1.text()) + parseInt(source.text())
    );
    this._freeze = true;
};

/**
 * @return void
 */
Main.prototype.computersTurn = function() {
    this._freeze = false;
    var values = [];
    this._pieces.forEach(function (piece) {
        values.push(parseInt(piece.text()));
    });

    var first = this._first;
    var last = this._last;
    var index = first;

    if (first != last) {
        var a = max(values, first + 1, last) - values[first];
        var b = max(values, first, last - 1) - values[last];
        if (a < b) {
            index = first;
            this._first++;
        } else {
            index = last;
            this._last--;
        }
        console.info("[depiler2bouts.main] a=...", a);
        console.info("[depiler2bouts.main] b=...", b);
    }
    var piece = this._pieces[index];
    piece.parent.addClass('flip');
    setTimeout(function() {
        piece.addClass('him');
        piece.parent.removeClass('flip');
    }, 300);
    this._pts2.text(
        parseInt(this._pts2.text()) + parseInt(piece.text())
    );
};

function max(values, first, last) {
    if (first == last) return values[first];
    return Math.max(
        values[first] + min(values, first + 1, last),
        values[last] + min(values, first, last - 1)
    );
}

function min(values, first, last) {
    if (first == last) return -values[first];
    return Math.min(
        - values[first] + max(values, first + 1, last),
        - values[last] + max(values, first, last - 1)
    );
}

/**
 * @return void
 */
Main.prototype.reset = function() {
    var values = [1,2,3,4,5,6,7,8,9,10];
    var j, tmp;
    for (var i = 0 ; i < 10 ; i++) {
        j = Math.floor(Math.random() * 10);
        tmp = values[i];
        values[i] = values[j];
        values[j] = tmp;
        this._pieces[i].removeClass('you', 'him');
    }

    this._pieces.forEach(function (piece, idx) {
        piece.text(values[idx]);
    });
    this._pts1.text("0");
    this._pts2.text("0");
    this._first = 0;
    this._last = this._pieces.length - 1;
    this._freeze = false;
};


Main.create = function() {
    return new Main();
};
module.exports = Main;
