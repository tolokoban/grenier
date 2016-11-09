/**
 * `size` est le nombre de cartes dont on dispose.
 */
function initStruct( size ) {
    var struct = [];
    var bin, index;
    for (index=0; index<1<<size; index++) {
        struct.push({
            bin: toBin(index, size),
            links: [],
            value: -1
        });
    }
    createLinks( struct );
    if (computeValues( struct )) {
        console.error("A solution has been found.");
    } else {
        console.error("NO SOLUTION FOUND!");
    }

    return struct;
}

/**
 * Calculer  la valeur  d'un noeud  en tenant  compte des  voisins des
 * voisins.  En  effet, un  noeud est connecté  à un  certains nombres
 * d'autres  noeuds  qui  ont   tous  des  valeurs  différentes  entre
 * eux. Donc,  `bin` doit  avoir une valeur  différente de  celles des
 * voisins de ses voisins.
 * Cette fonction  est récursive car  elle utilise du  backtracking en
 * cas de conflit.
 * L'algorithme s'arrête à la première solution trouvée.
 */
function computeValues( struct, index ) {
    if( typeof index === 'undefined' ) index = 0;

    var size = struct.length;
    if (index >= size) return true;

    var item = struct[index];
    if (item.value > -1) return computeValues( struct, index + 1 );
    var value;
    for (value = 0; value < item.bin.length; value++) {
        if (hasNoSecondNeighourOfThisValue( struct, index, value )) {
            item.value = value;
            if (computeValues( struct, index + 1 )) return true;
            item.value = -1;
        }
    }
    return false;
}

/**
 * Vérifier que les voisins des voisins de `index` n'ont pas la valeur `value`.
 */
function hasNoSecondNeighourOfThisValue( struct, index, value ) {
    var item = struct[index];
    var index1, index2;
    var item1, item2;
    for (index1 of item.links) {
        item1 = struct[index1];
        for (index2 of item1.links) {
            item2 = struct[index2];
            if (item2.value == value) return false;
        }
    }
    return true;
}

/**
 * Créer les liens entre les nombres binaires qui ne varient que d'un seul bit.
 */
function createLinks( struct ) {
    struct.forEach(function (item, index) {
        var i, j, index2;
        var size = item.bin.length;
        for (i = 0; i < size; i++) {
            index2 = index ^ (1 << i);
            if (item.links.indexOf( index2 ) == -1) {
                item.links.push( index2 );
            }
        }
    });
}

/**
 * Affecte la valeur `value` au nombre binaire `bin` de la structure `struct` et à son inverse.
 */
function setValue( struct, index, value ) {
    struct[index].value = value;
    struct[struct.length - index - 1].value = value;
}

/**
 * Retourner la valeur binaire de `value`en utilisant `size` bits.
 */
function toBin( value, size ) {
    var bin = '';
    var mask = 1;
    for (var i = 0 ; i < size ; i++) {
        bin = (value & mask ? '1' : '0') + bin;
        mask = mask * 2;
    }
    return bin;
}

/**
 * Afficher le code pour Graphviz DOT.
 */
function print( struct ) {
    console.log("graph CardMagicTrick {");
    console.log("  node [shape=box,fontsize=10];");
    struct.forEach(function (item) {
        if (item.value < 0) item.value = '(???)';
        console.log("  " + item.bin + " [label=\"" + item.value + "\\n" + item.bin + "\"];");
    });
    struct.forEach(function (item, index) {
        item.links.forEach(function (index2) {
            var item2 = struct[index2];
            for (var i=0; i<item.bin.length; i++) {
                if (item.bin.charAt(i) != item2.bin.charAt(i)) {
                    if (item.bin.charAt(i) == '1') return;
                    break;
                }
            }
            if (index2 > index) {
                item2 = struct[index2];
                console.log("  " + item.bin + " -> " + item2.bin
                            + " [label=\"" + diff(item, item2) + "\"];");
            }
        });
    });
    console.log("}");
}

/**
 * Retourner le caractère qui différe entre `itm1` et `itm2`.
 */
function diff(itm1, itm2) {
    for (var i=0; i<itm1.bin.length; i++) {
        if (itm1.bin.charAt(i) != itm2.bin.charAt(i)) {
            return itm1.bin.length - i - 1;
        }
    }
    return '?';
}

if (process.argv.length < 3) {
    console.error("Il faut un argument qui est le nombre de cartes.");
} else {
    var size = parseInt(process.argv[2]);
    var struct = initStruct( size );
    print( struct );
}
