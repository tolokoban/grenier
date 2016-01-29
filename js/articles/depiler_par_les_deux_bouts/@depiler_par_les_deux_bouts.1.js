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
        try{require('x-widget')('game1','depiler2bouts.main',"")}catch(x){console.error('Unable to initialize depiler2bouts.main!', x)}
try{require('x-widget')('tfw.grader0','tfw.grader',{
    header: "function(values, F, L) {",
    footer: "}",
    grader: function() {
        function shuffle(arr) {
            var i, j, tmp;
            for (i = 0 ; i < arr.length ; i++) {
                j = Math.floor(Math.random() * arr.length);
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
            return arr;
        }

        try {
            this.expect([ 5, 9, 3, 6, 7, 10, 4, 1, 8, 2 ]).toBe(true);
            this.expect([ 7, 3, 2, 6, 5, 9, 8, 1, 10, 4 ]).toBe(true);
            this.expect([ 4, 2, 1, 5, 6, 10, 7, 3, 9, 8 ]).toBe(true);
            
            this.expect([1,2,3,4,5,6,7,8,9,10]).toBe(true);
            this.expect([10,9,8,7,6,5,4,3,2,1]).toBe(true);
            this.expect([10,7,6,3,2,1,4,5,8,9]).toBe(true);
            
            var arr = [1,2,3,4,5,6,7,8,9,10];
            for (var loop=0 ; loop<1000 ; loop++) {
                shuffle(arr);
                this.expect(arr).toBe(true);
            }
        }
        catch (ex) {
            if (ex.args) {
                this.fail("Votre programme a perdu dans cette configuration : "
                          + JSON.stringify(ex.args[0]));
            }
            throw ex;
        }
    },
    wrapper: function(f) {
        function max(values, F, L) {
            if (F >= L) return values[F];
            return Math.max(
                values[F] + min(values, F + 1, L),
                values[L] + min(values, F, L - 1)
            );
        }

        function min(values, F, L) {
            if (F >= L) return -values[F];
            return Math.min(
                    - values[F] + max(values, F + 1, L),
                    - values[L] + max(values, F, L - 1)
            );
        }

        return function(values) {
            var gain = 0;
            var F = 0;
            var L = values.length - 1;
            var choice;
            while (F < L) {
                choice = f(values, F, L);
                if (choice == 0) {
                    gain += values[F]; F++;
                }
                else if (choice == 1) {
                    gain += values[L]; L--;
                }
                else {
                    throw {
                        fail: "Votre fonction devrait retourner 0 pour dire de prendre la première pièce\net 1 pour la dernière.\nMalheureusement, elle vient de retourner " + JSON.stringify(choice)
                    };
                }
                choice = max(values, F + 1, L) - values[F] < max(values, F, L - 1) - values[L] 
                    ? 0 : 1;
                if (choice == 0) {
                    gain -= values[F++];
                }
                else if (choice == 1) {
                    gain -= values[L--];
                }
            }
            return gain > 0;
        };
    }
}
)}catch(x){console.error('Unable to initialize tfw.grader!', x)}
try{require('x-widget')('game2','depiler2bouts.main',true)}catch(x){console.error('Unable to initialize depiler2bouts.main!', x)}
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
window['#tfw.grader']=function(exports,module){  "use strict";
var Widget = require("wdg");
var D = Widget.div;
var T = Widget.tag;

/****************************************
@example
var Grader = require("tfw.grader");
var options = {
  header: "function(textToReverse) {";
  footer: "}";
  grader: function(resolve, reject) {
    this.expect("Hello!").toBe("!olleH");
    this.expect("bob").toBe("bob");
 }
};
var instance = new Grader(options);

@class Grader
****************************************/
var Grader = function(options) {
console.info("[tfw.grader] options=", options);
    var that = this;

    Widget.call(this);
    this.addClass("tfw-grader");
    this._options = options;
    if (options.header) {
        this.append(T('pre').text(options.header));
    }
    var area = T("textarea").attr({cols: 80, rows: 12});
    area.text(localStorage.getItem('grader#' + this.attr('id')) || '');
    this.append(area);
    if (options.footer) {
        this.append(T('pre').text(options.footer));
    }
    var btn = Widget.tag('button').text("Valider").Tap(function() {
        that.grade(area.element().value);
        localStorage.setItem('grader#' + this.attr('id'), area.element().value);
    });
    var ok = Widget.tag('div').addClass('ok');
    var error = Widget.tag('pre').addClass('error');
    this.append(btn, ok, error);
    this._btn = btn;
    this._ok = ok;
    this._error = error;

    area.element().addEventListener('keyup', function() {
        btn.removeAttr("disabled");
        error.text('');
        ok.text('').removeClass('show');
    });
};

// Extension of Widget.
Grader.prototype = Object.create(Widget.prototype);
Grader.prototype.constructor = Grader;

/**
 * @return void
 */
Grader.prototype.grade = function(testContent) {
    var opt = this._options;
    if (opt.header) testContent = opt.header + testContent;
    if (opt.footer) testContent += opt.footer;
    
    var f;
    try {
        eval("f=" + testContent);
    }
    catch(ex) {
        console.error(ex);
        return this.fail("La syntaxe de votre code est invalide!\n" + ex);
    }

    var wrapper;
    try {
        wrapper = this.wrapper(f);
    }
    catch(ex) {
        console.error(ex);
        return this.fail("Le grader lui-même a provoqué une exception!\n" + ex);
    }

    var grader = opt.grader;

    if (typeof grader !== 'function') {
        return this.fail("Ce grader n'a pas de fonction de vérification!");
    }
    
    try {
        var jasmine = new Jasmine(wrapper);
        grader.call(jasmine);
        this._ok.text("Votre code est correct. Bravo !").addClass('show');
    }
    catch(ex) {
        console.error(ex);
        if (ex && ex.fail) {
            return this.fail(ex.fail);
        } else {
            return this.fail("Votre code a déclenché une exception!\n" + ex);
        }
    }
};

/**
 * @return void
 */
Grader.prototype.fail = function(txt) {
    this._btn.attr("disabled", "disabled");
    this._error.text(txt);
};


/**
 * @return wrapper function which will call the tested function.
 */
Grader.prototype.wrapper = function(f) {
    if (typeof this._options.wrapper !== 'function') {
        return f;
    }
    return this._options.wrapper(f);
};


Grader.create = function(options) {
    return new Grader(options);
};
module.exports = Grader;



function Jasmine(wrapper) {
    this._runtime = null;
    this._wrapper = wrapper;
};

Jasmine.prototype.fail = function(msg) {
    throw {fail: msg};
};

Jasmine.prototype.expect = function() {
    try {
        var args = [], i;
        for (i = 0 ; i < arguments.length ; i++) {
            args.push(arguments[i]);
        }
        var result = this._wrapper.apply(this, args);
        var runtime = new Runtime(result, args);
        return runtime;
    }
    catch(ex) {
        if (ex.fail) {
            throw ex;
        }
        throw {fail: "Votre code a provoqué une exception!\n" + ex};
    }
}


function Runtime(result, args) {
    this._inverted = 0;
    this._result = result;
    this._args = args;
}

Runtime.prototype.not = function() {
    this._inverted = 1 - this._inverted;
    return this;
};

Runtime.prototype.toBe = function(value) {
    if (this._inverted) {
        if (this._result === value) {
            throw {
                fail: "Expected " + JSON.stringify(this._result)
                    + " NOT to be " + JSON.stringify(value) + "!",
                expected: value,
                result: this._result,
                args: this._args
            };
        }
    } else {
        if (this._result !== value) {
            throw {
                fail: "Expected " + JSON.stringify(this._result)
                    + " to be " + JSON.stringify(value) + "!",
                expected: value,
                result: this._result,
                args: this._args
            };
        }
    }
};
 }


//########################################
window['#wdg']=function(exports,module){  'use strict';

/**
 * Widgets inherit this class.
 */
function Widget(options) {
    this.__data = {};
    try {
        var e;
        if (typeof options === 'undefined') options = {};
        if (typeof options.innerHTML !== 'undefined' && typeof options.childNodes !== 'undefined') {
            // On passe directement un élément.
            options = {element: options};
        }
        if (typeof options.tag === 'undefined') options.tag = "div";
        if (options.element) {
            this.element(options.element);
        } else if (typeof options.id !== 'undefined') {
            e = window.document.getElementById(options.id);
            if (!e) {
                throw Error("Can't find element with id: \"" + options.id + "\"!");
            }
            this.element(e);
        } else {
            this.element(window.document.createElement(options.tag));
            this.addClass("wdg", "custom");
        }
    }
    catch (ex) {
        console.error("[widget] ", ex);
        console.error("[Widget] ", JSON.stringify(options));
        throw Error(ex);
    }
}

Widget.prototype = {
    /**
     * Accessor for attribute element
     * @return element
     */
    element: function(v) {
        if (v === undefined) return this._element;
        if (typeof v === 'string') {
            v = window.document.querySelector(v);
        }
        this._element = v;
        return this;
    },

    data: function(k, v) {
        if (typeof v === 'undefined') {
            return this.__data[k];
        }
        this.__data[k] = v;
        return this;
    },

    /**
     * @description
     * Remove this element from its parent.
     * @memberof wdg
     */
    detach: function() {
        var e = this._element;
        if (e) {
            var p = e.parentNode;
            if (p) {
                p.removeChild(e);
            }
        }
        return this;
    },

    /**
     * @description
     *
     * @param name
     * @memberof wdg
     */
    addEvent: function(name, slot, sender) {
        if (typeof slot === 'string') {
            var that = this, key = slot;
            if (typeof sender === 'undefined') sender = this;
            slot = function(x) {
                var f = sender[key];
                if (typeof f === 'function') {
                    f.call(sender, x);
                } else {
                    throw Error("\"" + slot + "\" is not a function of: " + sender);
                }
            };
        }
        var e = this.element();
        if (name == 'tap') {
            e.addEventListener(
                "mousedown",
                function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                },
                false
            );
            e.addEventListener(
                "mouseup",
                function(evt) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    slot(evt);
                },
                false
            );
            e.addEventListener("touchend", slot, false);

        } else {
            e.addEventListener(name, slot, false);
        }
        return this;
    },

    /**
     * Retire un attribut à l'élément sous-jacent.
     * @example
     * this.removeAttr("selected");
     * @memberof wdg
     */
    removeAttr: function() {
        if (this._element) {
            var i, arg;
            for (i = 0 ; i < arguments.length ; i++) {
                arg = arguments[i];
                this._element.removeAttribute(arg);
            }
        }
        return this;
    },

    /**
     * Teste l'existence d'un attribut dans l'élément sous-jacent.
     * @memberof wdg
     */
    hasAttribute: function(key) {
        if (!this._element) return false;
        return this._element.hasAttribute(key);
    },

    /**
     * Lit ou affecte la valeur d'un attribut de l'élément sous-jacent.
     * @example
     * // Le pseudo attribut '$' sert à insérer du texte.
     * var div = new Widget();
     * div.attr({$: 'Hello world!', title: 'Typical first sentence...'});
     * @param key Nom de l'attribut ou dictionnaire des attributs.
     * @param val [Facultatif] Valeur de l'attribut. Si elle est omise, la méthode retourne la valeur actuelle.
     * @param ns [Facultatif] Namespace éventuel.
     * @memberof wdg
     */
    attr: function(key, val, ns) {
        var k;
        if (!this._element || !this._element.getAttribute) return null;
        if (typeof key == "string") {
            if (val !== undefined) {
                if (key == "class") {
                    this._element.className = val;
                    return this;
                }
                if (ns && this._element.setAttributeNS) {
                    this._element.setAttributeNS(ns, key, val);
                }
                else {
                    this._element.setAttribute(key, val);
                }
                return this;
            }
            return this._element.getAttribute(key);
        }
        if (typeof key == "object") {
            for (k in key) {
                if (k == "class") {
                    this._element.className = key[k];
                } else if (k == "$") {
                    this.text(key[k]);
                } else {
                    this._element.setAttribute(k, key[k]);
                }
            }
        }
        return this;
    },


    /**
     * Permet de changer le style de l'élément sous-jacent.
     * @example
     * this.css("color", "red");
     * alert(this.css("display"));
     * this.css(
     *   {
     *     margin: "0px",
     *     padding: "3px",
     *     border: "1px solid black"
     *   }
     * );
     * @param key Nom du champ de style ou dictionnaire clefs/valeurs.
     * @param val  Valeur du champ key.  S'il est omis et  que "key"
     * est  de type  string,  alors la  méthode  retourne la  valeur
     * actuelle.
     * @memberof wdg
     */
    css: function(key, val) {
        var k, e = this._element;
        if (!e) return null;
        if (typeof e.style !== 'object') {
            console.error("[wdg.css] This element does not support styles!", e);
            e.style = {};
        }
        if (typeof key == 'string') {
            if (val) {
                e.style[key] = val;
                return this;
            }
            return e.style[key];
        }
        if (typeof key == 'object') {
            for (k in key) {
                try {
                    e.style[k] = key[k];
                } catch (x) {
                    console.error("[wdg.css] Bad CSS attribute " + k + ": " + key[k]);
                }
            }
        }
        return this;
    },

    insertAfter: function(target) {
        if (typeof target.element === 'function') {
            target = target.element();
        }
        target.parentNode.insertBefore(this.element(), target.nextSibling);
        return this;
    },

    insertBefore: function(target) {
        if (typeof target.element === 'function') {
            target = target.element();
        }
        target.parentNode.insertBefore(this.element(), target);
        return this;
    },

    /**
     * Append children to this widget.
     */
    append: function() {
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            if (typeof arg === 'number') arg = "" + arg;
            if (typeof arg === 'undefined' || (typeof arg !== 'object' && typeof arg !== 'string')) {
                console.error("[Widget.append] Argument #" + i + " is invalid!", arguments);
                console.error("[Widget.append] Is type is: " + (typeof arg));
                continue;
            };
            if (typeof arg === 'string') {
                if (arg.length < 1) arg = " ";
                arg = window.document.createTextNode(arg);
                if (!arg) {
                    console.error(
                        "[Widget.append] Unable to create a text node with this text: ", arg
                    );
                    console.error("[wdg] arguments=...", arguments);
                    throw Error(
                        "[Widget.append] Unable to create a text node with this text: "
                            + JSON.stringify(arg)
                    );
                }
            }
            if (Array.isArray(arg)) {
                arg.forEach(
                    function(item) {
                        this.append(item);
                    }, this
                );
            } else {
                var e = typeof arg.element === 'function' ? arg.element() : arg;
                this._element.appendChild(e);
                /*
                 if (typeof arg.onAppend === 'function') {
                 arg.onAppend.call(arg);
                 }
                 */
            }
        }
        return this;
    },

    /**
     * @description
     * Append this widget to a parent.
     * @param parent
     * @memberof wdg
     */
    appendTo: function(parent) {
        if (!parent) return this;
        if (typeof parent.append === 'function') {
            parent.append(this);
        } else if (typeof parent.appendChild === 'function') {
            parent.appendChild(this._element);
            this.onAppend();
        }
        return this;
    },

    /**
     * @description
     * Append this widget to BODY.
     * @memberof wdg
     */
    appendToBody: function() {
        window.document.body.appendChild(this._element);
        return this;
    },

    hasClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            if (!e.contains(arg)) return false;
        }
        return true;
    },

    /**
     * @description
     * Add CSS classe(s) to this widget.
     * @memberof wdg
     */
    addClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            if (typeof arg === 'string') {
                arg = arg.trim();
                if (arg.length > 0) e.add(arg);
            } else {
                console.error("[wdg.addClass] Arguments with bad type!", arguments);
            }
        }
        return this;
    },

    /**
     * @description
     * Remove CSS classe(s) to this widget.
     * @memberof wdg
     */
    removeClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            e.remove(arg);
        }
        return this;
    },

    /**
     * @description
     * Toggle CSS classe(s) to this widget.
     * @memberof wdg
     */
    toggleClass: function() {
        var e = this._element.classList;
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            e.toggle(arg);
        }
        return this;
    },

    /**
     * Remove all children of this widget.
     * Any argument passed will be appended to this widget.
     * @memberof wdg
     */
    clear: function() {
        // (!) On préfère retirer les éléments un par un du DOM plutôt que d'utiliser simplement
        // this.html("").
        // En effet, le code simplifié a des conséquences inattendues dans IE9 et IE10 au moins.
        // Le bug des markers qui disparaissaients sur les cartes de Trail-Passion 4 a été corrigé
        // avec cette modification.
        var e = this.element();
        while(e.firstChild){
            e.removeChild(e.firstChild);
        }
        var i, arg;
        for (i = 0 ; i < arguments.length ; i++) {
            arg = arguments[i];
            this.append(arg);
        }

        return this;
    },

    /**
     * 1) Sans argument, cette  fonction retourne le texte contenu
     * dans ce widget.
     * 2) Avec  un texte en  argument, cette fonction  retire tous
     * les  enfants de  ce widget  et  les remplace  par un  noeud
     * texte.
     * 3)  Avec un  élément  du DOM  en  argument, cette  fonction
     * retourne le texte contenu par ce dernier.
     * @memberof tfw.Widget
     */
    text: function(arg) {
        var e, text, i, child;
        if (typeof arg == 'string' || typeof arg == 'number') {
            this.clear();
            this._element.appendChild(window.document.createTextNode(arg));
            return this;
        } else {
            // On retourne le contenu textuel de ce widget.
            e = this._element;
            if (arg !== undefined) {
                // On peut passer un élément du DOM pour en extraire son contenu textuel.
                e = arg;
            }
            text = "";
            if (e.childNodes) {
                for (i=0 ; i<e.childNodes.length ; i++) {
                    child = e.childNodes[i];
                    if (child.nodeType == 3) {
                        if (child.nodeValue) {
                            text += child.nodeValue;
                        }
                    } else {
                        text += this.text( child );
                    }
                }
            }
            return text;
        }
    },

    /**
     * @description
     *
     * @param html
     * @memberof wdg
     */
    html: function(html) {
        if (typeof html === 'undefined') return this._element.innerHTML;
        if (this._element) this._element.innerHTML = html;
        return this;
    },

    /**
     * @description
     * If applicable, give focus to this element.
     * @memberof wdg
     */
    focus: function() {
        var e = this._element;
        if (!e) return this;
        if (typeof e.focus === 'function') {
            e.focus();
        }
        return this;
    },

    /**
     * @description
     * Returns the bounds of the underlying element.
     * @memberof wdg
     */
    rect: function() {
        var e = this._element;
        if (!e) return null;
        return e.getBoundingClientRect();
    },

    /**
     * @description
     *
     * @param
     * @memberof wdg
     */
    Tap: function(slot, sender) {
        if (typeof slot === 'undefined') return this._Tap;
        var that = this;
        if (typeof sender === 'undefined') sender = that;
        if (typeof slot === 'string') slot = sender[slot];
        if (!this._Tap) {
            this.activatePointerEvents();
        }
        this._Tap = [slot, sender];
        return this;
    }
};

/**
 * @return void
 */
Widget.prototype.activatePointerEvents = function() {
    if (this._pointerEvents) return this;
    this._pointerEvents = {start: 0};

    /*
     interact(this.element()).on("tap", function(evt) {
     var slot = that._Tap;
     if (slot) {
     slot[0].call(slot[1], {x: evt.x, y: evt.y});
     }
     });
     return this;
     */
    var pe = this._pointerEvents;
    var that = this;
    this.addEvent(
        "touchstart",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            pe.touch = 1;
            pe.start = Date.now();
        }
    );
    this.addEvent(
        "touchend",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            var tap = that._Tap;
            if (!tap) return;
            pe.touch = 0;
            var delta = Date.now() - pe.start;
            if (delta > 50) {
                tap[0].call(tap[1], evt);
            }
        }
    );
    this.addEvent(
        "mousedown",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (pe.touch) return;
            pe.start = Date.now();
        }
    );
    this.addEvent(
        "mouseup",
        function(evt) {
            evt.preventDefault();
            evt.stopPropagation();
            var tap = that._Tap;
            if (!tap) return;
            var delta = Date.now() - pe.start;
            if (delta > 50) {
                tap[0].call(tap[1], evt);
            }
        }
    );

    return this;
};

/**
 * @return void
 */
Widget.prototype.div = function() {
    var div = new Widget();
    for (var i = 0 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

Widget.prototype.tag = function(tag) {
    if (typeof tag === 'undefined') tag = 'div';
    var div = new Widget({tag: tag});
    for (var i = 1 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

/**
 * @return void
 */
Widget.prototype.isInDOM = function() {
    return Widget.isInDOM(this.element());
};

/**
 * Fonction à surcharger  si on veut réagir lors de  l'insertion dans le
 * DOM.
 */
Widget.prototype.onAppend = function() {};

Widget.create = function(args) {
    return new Widget(args);
};

Widget.find = function(query) {
    return new Widget({element: window.document.querySelector(query)});
};


/**
 * Create a SVG élément with attributes.
 */
Widget.svg = function(tag, attribs) {
    var namespace = "http://www.w3.org/2000/svg";
    if (typeof tag === 'object') {
        attribs = tag;
        tag = "svg";
    }
    if (typeof tag !== 'string') tag = 'svg';
    var e = window.document.createElementNS(namespace, tag);
    var w = new Widget({element: e});
    if (typeof attribs === 'undefined') attribs = {};
    if (tag == 'svg') {
        if (typeof attribs.version === 'undefined') attribs.version = "1.1";
        if (typeof attribs['xmlns:svg'] === 'undefined') {
            attribs['xmlns:svg'] = 'http://www.w3.org/2000/svg';
        }
        if (typeof attribs['xmlns'] === 'undefined') {
            attribs['xmlns'] = 'http://www.w3.org/2000/svg';
        }
        if (typeof attribs['xmlns:xlink'] === 'undefined') {
            attribs['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
        }
        if (typeof attribs.viewBox === 'undefined'
            && typeof attribs.width === 'number'
            && typeof attribs.height === 'number')
        {
            attribs.viewBox = "0 0 " + attribs.width + " " + attribs.height;
        }
    }
    if (typeof attribs === 'object') {
        w.attr(attribs);
    }
    return w;
};

/**
 * Tester si le widget ou élément est actuellement attaché au DOM.
 */
Widget.isInDOM = function(e) {
    if (!e) return false;
    if (typeof e.element === 'function') {
        e = e.element();
    }
    if (e === window.document) return true;
    return Widget.isInDOM(e.parentNode);
};


/**
 * Create a DIV and apply all arguments as classes to it.
 */
Widget.div = function() {
    var div = new Widget({tag: "div"});
    for (var i = 0 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

/**
 * Create a SPAN and apply all arguments as classes to it.
 */
Widget.span = function() {
    var div = new Widget({tag: "span"});
    for (var i = 0 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

Widget.tag = function(tag) {
    if (typeof tag === 'undefined') tag = 'div';
    var div = new Widget({tag: tag});
    for (var i = 1 ; i < arguments.length ; i++) {
        div.addClass(arguments[i]);
    }
    return div;
};

Widget.id = function(id) {
    return new Widget({element: window.document.getElementById(id)});
};

/**
 * Widget defining the `document.body` element.
 */
Widget.body = new Widget(window.document.body);

module.exports = Widget;



/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * http://purl.eligrey.com/github/classList.js/blob/master/classList.js
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

// Full polyfill for browsers with no classList support
if (!("classList" in window.document.createElement("_"))) {
    (function () {
        "use strict";

        if (!('Element' in window)) return;

        var classListProp = "classList";
        var protoProp = "prototype";
        var elemCtrProto = window.Element[protoProp];
        var objCtr = Object;
        var strTrim = String.prototype.trim || function () {
            var rx = new RegExp("^\\s+|\\s+$", "g");
            return this.replace(rx, '');
        };
        var arrIndexOf = Array[protoProp].indexOf || function (item) {
            var
            i = 0
            , len = this.length
            ;
            for (; i < len; i++) {
                if (i in this && this[i] === item) {
                    return i;
                }
            }
            return -1;
        }
        // Vendors: please allow content code to instantiate DOMExceptions
        , DOMEx = function (type, message) {
            this.name = type;
            this.code = DOMException[type];
            this.message = message;
        }
        , checkTokenAndGetIndex = function (classList, token) {
            if (token === "") {
                throw new DOMEx(
                    "SYNTAX_ERR"
                    , "An invalid or illegal string was specified"
                );
            }
            if ((new RegExp("\\s")).test(token)) {
                throw new DOMEx(
                    "INVALID_CHARACTER_ERR"
                    , "String contains an invalid character"
                );
            }
            return arrIndexOf.call(classList, token);
        }
        , ClassList = function (elem) {
            var
            trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
            , classes = trimmedClasses ? trimmedClasses.split(new RegExp("\\s+")) : []
            , i = 0
            , len = classes.length
            ;
            for (; i < len; i++) {
                this.push(classes[i]);
            }
            this._updateClassName = function () {
                elem.setAttribute("class", this.toString());
            };
        }
        , classListProto = ClassList[protoProp] = []
        , classListGetter = function () {
            return new ClassList(this);
        }
        ;

        // Most DOMException implementations don't allow calling DOMException's toString()
        // on non-DOMExceptions. Error's toString() is sufficient here.
        DOMEx[protoProp] = Error[protoProp];
        classListProto.item = function (i) {
            return this[i] || null;
        };
        classListProto.contains = function (token) {
            token += "";
            return checkTokenAndGetIndex(this, token) !== -1;
        };
        classListProto.add = function () {
            var
            tokens = arguments
            , i = 0
            , l = tokens.length
            , token
            , updated = false
            ;
            do {
                token = tokens[i] + "";
                if (checkTokenAndGetIndex(this, token) === -1) {
                    this.push(token);
                    updated = true;
                }
            }
            while (++i < l);

            if (updated) {
                this._updateClassName();
            }
        };
        classListProto.remove = function () {
            var
            tokens = arguments
            , i = 0
            , l = tokens.length
            , token
            , updated = false
            , index
            ;
            do {
                token = tokens[i] + "";
                index = checkTokenAndGetIndex(this, token);
                while (index !== -1) {
                    this.splice(index, 1);
                    updated = true;
                    index = checkTokenAndGetIndex(this, token);
                }
            }
            while (++i < l);

            if (updated) {
                this._updateClassName();
            }
        };
        classListProto.toggle = function (token, force) {
            token += "";

            var
            result = this.contains(token)
            , method = result ?
                force !== true && "remove"
                :
                force !== false && "add"
            ;

            if (method) {
                this[method](token);
            }

            if (force === true || force === false) {
                return force;
            } else {
                return !result;
            }
        };
        classListProto.toString = function () {
            return this.join(" ");
        };

        if (objCtr.defineProperty) {
            var classListPropDesc = {
                get: classListGetter, enumerable: true, configurable: true
            };
            try {
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) { // IE 8 doesn't support enumerable:true
                if (ex.number === -0x7FF5EC54) {
                    classListPropDesc.enumerable = false;
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                }
            }
        } else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
        }
    }());
} else {
    // There is full or partial native classList support, so just check if we need
    // to normalize the add/remove and toggle APIs.
    (function () {
        "use strict";

        var testElement = window.document.createElement("_");

        testElement.classList.add("c1", "c2");

        // Polyfill for IE 10/11 and Firefox <26, where classList.add and
        // classList.remove exist but support only one argument at a time.
        if (!testElement.classList.contains("c2")) {
            var createMethod = function(method) {
                var original = DOMTokenList.prototype[method];

                DOMTokenList.prototype[method] = function(token) {
                    var i, len = arguments.length;

                    for (i = 0; i < len; i++) {
                        token = arguments[i];
                        original.call(this, token);
                    }
                };
            };
            createMethod('add');
            createMethod('remove');
        }

        testElement.classList.toggle("c3", false);

        // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
        // support the second argument.
        if (testElement.classList.contains("c3")) {
            var _toggle = DOMTokenList.prototype.toggle;

            DOMTokenList.prototype.toggle = function(token, force) {
                if (1 in arguments && !this.contains(token) === !force) {
                    return force;
                } else {
                    return _toggle.call(this, token);
                }
            };

        }
        testElement = null;
    }());
}
 }


//########################################
window['#x-widget']=function(exports,module){  "use strict";


module.exports = function(id, modName, args) {
    var dst = document.getElementById(id);
    if (!dst) {
        // This widget does not exist!
        return;
    }
    var module = require(modName);
    var src = new module(args);
    src.element().$ctrl = src;
    src = src.element();
    src.setAttribute('id', id);
    dst.parentNode.replaceChild(src, dst);
};
 }


//########################################
window['#depiler2bouts.main']=function(exports,module){  "use strict";
var Triangle = require("svg.triangle");
var Widget = require("wdg");
var Bulle = require("tp4.bulle");

var D = Widget.div;
var T = Widget.tag;


/**
 * @example
 * var Main = require("depiler2bouts.main");
 * var instance = new Main();
 * @class Main
 */
var Main = function(disableInteractivity) {
    Widget.call(this);
    this.addClass("depiler2bouts-main");
    var nbPieces = 10;
    this._pieces = createPieces.call(this, nbPieces);
    if (disableInteractivity) {
        var pts1 = 0;
        var pts2 = 0;
        while (pts1 <= pts2) {
            this.shuffle();
            this._pieces.forEach(function (piece, idx) {
                if (idx % 2 == 0) {
                    pts1 += parseInt(piece.text());
                } else {
                    pts2 += parseInt(piece.text());
                }
            });
        }
        pts1 = pts2 = 0;
        var w1 = D('pts1').text(0), w2 = D('pts2').text(0);
        this.append(D('tbl').append(w1, w2));
        this._pieces.forEach(function (piece, idx) {
            if (idx % 2 == 0) {
                this.flip(piece, 'you', idx * 100 + 1000, function(p) {
                    pts1 += parseInt(p.text());
                    w1.text(pts1);
                });
            } else {
                this.flip(piece, 'him', idx * 100 + 1000, function(p) {
                    pts2 += parseInt(p.text());
                    w2.text(pts2);
                });
            }
        }, this);
        return;
    }
    createScores.call(this);
    this.reset();
};

function createScores() {
    var that = this;
    var btnResetYou = T('a', 'button').attr('href', '#')
        .append(Triangle({angle: 180, width: '24px', height: '30px'}))
        .Tap(function() {
            that.reset(false);
        });
    var btnResetHim = T('a', 'button').attr('href', '#')
        .append(Triangle({angle: 0, width: '24px', height: '30px'}))
        .Tap(function() {
            that.reset(true);
        });
    var pts1 = D("pts1").text("0");
    var pts2 = D("pts2").text("0");
    var delta = D('delta');
    var tbl = D('tbl').append(
        D().append(
            D().text("Vous"),
            pts1
        ),
        D().append(
            D().text("recommencer:"),
            D().append(btnResetYou, T('span').html("&nbsp;&nbsp;"), btnResetHim),
            delta
        ),
        D().append(
            D().text("Lui"),
            pts2
        )
    );
    this._pts1 = pts1;
    this._pts2 = pts2;
    this._delta = delta;
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
    if (first == last) {
        if (source.hasClass('you') || source.hasClass('him')) {
            return;
        }
    }
    var index = parseInt(source.attr('data-idx'));
    if (index != first && index != last) return;
    var that = this;

    if (this._first < this._last) {
        // Schedule computer's turn only if there are still pieces on the table.
        setTimeout(function() {
            that.computersTurn();
        }, 600);
    }

    if (index == first) {
        this._first = Math.min(this._first + 1, this._last);
    }
    else if (index == last) {
        this._last = Math.max(this._last - 1, this._first);
    }
    source.parent.addClass('flip');
    setTimeout(function() {
        source.addClass('you');
        source.parent.removeClass('flip');
    }, 300);
    this.pts1(this.pts1() + parseInt(source.text()));
    this._freeze = true;
};

/**
 * @return void
 */
Main.prototype.flip = function(piece, classname, delay, onEndOfAnim) {
    if (typeof delay === 'undefined') delay = 0;
    setTimeout(function() {
        piece.removeClass('you', 'him');
        piece.parent.addClass('flip');
    }, delay);
    setTimeout(function() {
        piece.addClass(classname);
        piece.parent.removeClass('flip');
    }, 300 + delay);
    if (typeof onEndOfAnim === 'function') {
        setTimeout(function() {
            onEndOfAnim(piece);
        }, 600 + delay);
    }
};

/**
 * @return void
 */
Main.prototype.computersTurn = function() {
    var that = this;

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
        var pts1 = parseInt(this._pts1.text());
        var pts2 = parseInt(this._pts2.text());
        console.info("[depiler2bouts.main] a=...", a, " -> ",
                     pts1 - pts2 + a);
        console.info("[depiler2bouts.main] b=...", b, " -> ",
                     pts1 - pts2 + b);
    }
    var piece = this._pieces[index];
    piece.parent.addClass('flip');
    setTimeout(function() {
        piece.addClass('him');
        piece.parent.removeClass('flip');
    }, 300);
    setTimeout(function() {
        if (!that._computerHasAlreadySpoken) {
            var avance = Math.min(pts1 - pts2 + a, pts1 - pts2 + b);
            if (avance < 0) {
                Bulle.show(
                    that._pts2,
                    "<html>Je parie que je vais gagner avec au moins <b>"
                        + Math.abs(avance)
                        + "</b> points d'avance."
                );
                that._computerHasAlreadySpoken = true;
            }
        }
    }, 600);
    this.pts2(this.pts2() + parseInt(piece.text()));
};

function max(values, F, L) {
    if (F == L) return values[F];
    return Math.max(
        values[F] + min(values, F + 1, L),
        values[L] + min(values, F, L - 1)
    );
}

function min(values, F, L) {
    if (F == L) return -values[F];
    return Math.min(
            - values[F] + max(values, F + 1, L),
            - values[L] + max(values, F, L - 1)
    );
}

/**
 * Getter/Setter for points of YOU.
 */
Main.prototype.pts1 = function(v) {
    if (typeof v === 'undefined') return parseInt(this._pts1.text());
    this._pts1.text("" + v);
    this.setDelta();
    return this;
};

/**
 * Getter/Setter for points of HIM.
 */
Main.prototype.pts2 = function(v) {
    if (typeof v === 'undefined') return parseInt(this._pts2.text());
    this._pts2.text("" + v);
    this.setDelta();
    return this;
};


/**
 * @return void
 */
Main.prototype.setDelta = function() {
    var v = this.pts1() - this.pts2();
    var delta = this._delta;
    if (v > 0) {
        v = "+" + v;
        delta.addClass("you").removeClass("him");
    }
    else if (v < 0) {
        delta.addClass("him").removeClass("you");
    }
    delta.text("" + v);
};

/**
 * @return void
 */
Main.prototype.shuffle = function() {
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
};

/**
 * @return void
 */
Main.prototype.reset = function(heStartsFirst) {
    this._computerHasAlreadySpoken = false;
    this.shuffle();
    this.pts1(0);
    this.pts2(0);
    this._first = 0;
    this._last = this._pieces.length - 1;
    this._freeze = false;
    if (heStartsFirst) {
        this.computersTurn();
    }
};


Main.create = function() {
    return new Main();
};
module.exports = Main;
 }


//########################################
window['#tp4.bulle']=function(exports,module){ var _intl_={"en":{"close":"Close","later":"Later!","next":"Next"},"fr":{"close":"Fermer","later":"Plus tard!","next":"Suivant"}},_$=require("$").intl;function _(){return _$(_intl_, arguments);}
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
 }


//########################################
window['#svg.triangle']=function(exports,module){  "use strict";
var Widget = require("wdg");
var Svg = Widget.svg;

module.exports = function(options) {
    if (typeof options === 'undefined') options = {};
    if (typeof options.width === 'undefined') options.width = '1em';
    if (typeof options.height === 'undefined') options.height = '1em';
    if (typeof options.angle === 'undefined') options.angle = 0;
    if (typeof options.fill === 'undefined') options.fill = '#000';

    var root = Svg({
        viewBox: "-105 -105 210 210",
        width: options.width,
        height: options.height
    });

    root.append(
        Svg('path', {
            fill: options.fill,
            stroke: options.stroke ? options.stroke : 'none',
            transform: "rotate(" + options.angle + ")",
            d: "M100,0L-70.71,-70.71L-40,0L-70.71,70.71Z"
        })
    );
    
    return root;
};
 }
