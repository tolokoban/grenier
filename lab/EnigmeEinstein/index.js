/**
 * Le Norvégien habite la première maison.
 * L'Anglais vit dans la maison rouge.
 * Le Suedois élève des chiens.
 * Le Danois boit du thé.
 * La maison verte est juste à gauche de la blanche.
 * Dans la maison verte, on boit du café.
 * Le fumeur de Blends habite à cote de celui qui élève des chats.
 * Le fumeur de Pall Mall élève des oiseaux.
 * Le proprietaire de la maison jaune fume des Dunhill.
 * L'homme de la maison du centre boit du lait
 * L'Allemand fume des Prince.
 * Celui qui fume des Blends a un voisin qui boit de l'eau.
 * Le Norvegien habite à côté de la maison bleue.
 * Celui qui élève des chevaux habite à cote de la maison jaune.
 * Celui qui fume des Blue Masters boit de la bière.
 */

var captions = {
    N: ['Norvégien', 'Anglais', 'Suédois', 'Danois', 'Allemand'],
    M: ['Rouge', 'Verte', 'Blanche', 'Jaune', 'Bleue'],
    A: ['Chien', 'Chat', 'Oiseau', 'Cheval', 'Poisson'],
    B: ['Thé', 'Café', 'Lait', 'Eau', 'Bière'],
    C: ['Blends', 'Pall Mall', 'Dunhill', 'Prince', 'Blue Master']
};

var table = {
    N: [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]],
    M: [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]],
    A: [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]],
    B: [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]],
    C: [[1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1], [1,1,1,1,1]]
};

function copy(src) {
    return JSON.parse(JSON.stringify(src));
}

function toConsole() {
    console.log();
    console.log("   |  1  |  2  |  3  |  4  |  5  |");
    console.log("---+-----+-----+-----+-----+-----+");
    var k, i, v, out = '', item;
    for (k in table) {
        v = table[k];
        out = ' ' + k + " |";
        v.forEach(function (flags) {
            item = '';
            flags.forEach(function (flag, idx) {
                item += flag ? idx + 1 : ' ';
            });
            out += item.trim().length == 0 ? ' (?) ' : item;
            out += "|";
        });
        captions[k].forEach(function (name) {
            out += "   " + name;
            for (i = name.length; i < 10; i++) {
                out += ' ';
            }
        });

        console.log(out);
    }
    console.log();
}

function isAlone(cell, idx) {
    var k, v;
    for (k = 0; k < 5; k++) {
        v = cell[k];
        if (k == idx) {
            if (v == 0) return false;
        } else {
            if (v == 1) return false;
        }
    }
    return true;
}

/**
 * Si `idx` apparaît dans une seule  colonne de `row`, il faut s'assurer
 * qu'il y est seul.
 * Quand un item est  seul dans sa `row`, il faut  le retirer des autres
 * colonnes.
 */
function applyUnicity(row) {
    var change = false,
    count,
    lastIndex,
    idx,
    cell,
    idxCell,
    idxFlag,
    found = [[], [], [], [], []];
    // Si  `idx` apparaît  dans  une  seule colonne  de  `row`, il  faut
    // s'assurer qu'il y est seul.
    row.forEach(function (cell, idxCell) {
        cell.forEach(function (flag, idxFlag) {
            if (flag) {
                found[idxFlag].push(idxCell);
            }
        });
    });
    found.forEach(function (columns, idx) {
        if (columns.length == 1) {
            idxCell = columns[0];
            cell = row[idxCell];
            for (idxFlag = 0; idxFlag < 5; idxFlag++) {
                if (idx != idxFlag && cell[idxFlag]) {
                    change = true;
                    cell[idxFlag] = 0;
                }
            }
        }
    });
    // Quand un  item est  seul dans  sa `row`, il  faut le  retirer des
    // autres colonnes.
    for (idx = 0; idx < 5; idx++) {
        for (idxCell = 0; idxCell < 5; idxCell++) {
            cell = row[idxCell];
            if (isAlone(cell, idx)) {
                // `idx` est seul dans la  cellule idxCell. Il faut donc
                // le retirer de toutes les autres.
                row.forEach(function (cell2, idxCell2) {
                    if (idxCell != idxCell2 && cell2[idx]) {
                        cell2[idx] = 0;
                        change = true;
                    }
                });
                break;
            }
        };
    }
    return change;
}

function ruleHouse(caption, id, index, houseNumber) {
    return {
        apply: function() {
            var change = false,
            row = table[id];
            row.forEach(function (cell, idxCell) {
                if (idxCell == houseNumber - 1) {
                    cell.forEach(function (flag, idxFlag) {
                        var value = idxFlag == index ? 1 : 0;
                        if (flag != value) {
                            change = true;
                        }
                        cell[idxFlag] = value;
                    });
                } else {
                    if (cell[index] == 1) {
                        cell[index] = 0;
                        change = true;
                    }
                }
            });
            return change;
        },
        caption: caption,
        symbolic: captions[id][index] + " = " + houseNumber
    };
}

function ruleEqual(caption, id1, idx1, id2, idx2) {
    return {
        apply: function() {
            var change = false,
            row1 = table[id1],
            row2 = table[id2],
            houseNumber;
            for (houseNumber = 0; houseNumber < 5; houseNumber++) {
                if (row1[houseNumber][idx1] != row2[houseNumber][idx2]) {
                    change = true;
                    row1[houseNumber][idx1] = row2[houseNumber][idx2] = 0;
                }
            }
            applyUnicity(row1);
            applyUnicity(row2);
            return change;
        },
        caption: caption,
        symbolic: captions[id1][idx1] + " | " + captions[id2][idx2]
    };
}

function ruleNext(caption, id1, idx1, id2, idx2) {
    return {
        apply: function() {
            var change = false,
            row1 = table[id1],
            row2 = table[id2],
            houseNumber,
            v, n1, n2;
            for (houseNumber = 0; houseNumber < 5; houseNumber++) {
                v = row1[houseNumber][idx1];
                n1 = houseNumber > 0 ? row2[houseNumber - 1][idx2] : 0;
                n2 = houseNumber < 4 ? row2[houseNumber + 1][idx2] : 0;
                if (v && !n1 && !n2) {
                    change = true;
                    row1[houseNumber][idx1] = 0;
                }
                v = row2[houseNumber][idx2];
                n1 = houseNumber > 0 ? row1[houseNumber - 1][idx1] : 0;
                n2 = houseNumber < 4 ? row1[houseNumber + 1][idx1] : 0;
                if (v && !n1 && !n2) {
                    change = true;
                    row2[houseNumber][idx2] = 0;
                }
            }
            debugger;
            applyUnicity(row1);
            applyUnicity(row2);
            return change;
        },
        caption: caption,
        symbolic: captions[id1][idx1] + " = " + captions[id2][idx2]
    };
}

function ruleLeft(caption, id1, idx1, id2, idx2) {
    return {
        apply: function() {
            var change = false,
            row1 = table[id1],
            row2 = table[id2],
            idxCell,
            v1, v2;
            if (row1[4][idx1] == 1) {
                row1[4][idx1] = 0;
                change = true;
            }
            if (row2[0][idx2] == 1) {
                row2[0][idx2] = 0;
                change = true;
            }
            for (idxCell = 0; idxCell < 4; idxCell++) {
                v1 = row1[idxCell][idx1];
                v2 = row2[idxCell + 1][idx2];
                if (v1 != v2) {
                    change = true;
                    row1[idxCell][idx1] = row2[idxCell][idx2] = 0;
                }
            }
            applyUnicity(row1);
            applyUnicity(row2);
            return change;
        },
        caption: caption,
        symbolic: captions[id1][idx1] + " = " + captions[id2][idx2] + " - 1"
    };
}

var constraints = [
    ruleHouse("Le Norvégien habite la première maison.",                         'N', 0, 1),
    ruleEqual("L'Anglais vit dans la maison rouge.",                             'N', 1, 'M', 0),
    ruleEqual("Le Suedois élève des chiens.",                                    'N', 2, 'A', 0),
    ruleEqual("Le Danois boit du thé.",                                          'N', 3, 'B', 0),
    ruleLeft ("La maison verte est juste à gauche de la blanche.",               'M', 1, 'M', 2),
    ruleEqual("Dans la maison verte, on boit du café.",                          'M', 1, 'B', 1),
    ruleNext ("Le fumeur de Blends habite à cote de celui qui élève des chats.", 'C', 0, 'A', 1),
    ruleEqual("Le fumeur de Pall Mall élève des oiseaux.",                       'C', 1, 'A', 2),
    ruleEqual("Le proprietaire de la maison jaune fume des Dunhill.",            'M', 3, 'C', 2),
    ruleHouse("L'homme de la maison du centre boit du lait",                     'B', 2, 3),
    ruleEqual("L'Allemand fume des Prince.",                                     'N', 4, 'C', 3),
    ruleNext ("Celui qui fume des Blends a un voisin qui boit de l'eau.",        'C', 0, 'B', 3),
    ruleNext ("Le Norvegien habite à côté de la maison bleue.",                  'N', 0, 'M', 4),
    ruleNext ("Celui qui élève des chevaux habite à cote de la maison jaune.",   'A', 3, 'M', 3),
    ruleEqual("Celui qui fume des Blue Masters boit de la bière.",               'C', 4, 'B', 4)
];



toConsole();

function solve() {
    var change = true,
    k, constraint;
    while (change) {
        change = false;
        for (k = 0; k < constraints.length; k++) {
            constraint = constraints[k];
            if (constraint.apply()) {
                change = true;
                console.log(constraint.caption);
                toConsole();
                break;
            }
        }
    }
}

solve();


/*
console.log("A ce niveau, on ne peut plus simplifier d'avantage. Mais on sait déjà que le poisson ne peut pas être dans la seconde maison.");
console.log("A partir de maintenant, il va falloir faire des hypothèses et vérifier qu'elles n'entrainent pas de contradiction.");

console.log();
console.log('========================================');
console.log();
console.log("Supposons que le poisson se trouve dans la première maison.");
var table1 = copy(table);

table.A[0][1] = 0;
applyUnicity(table.A);

toConsole();
solve();

console.log();
console.log('========================================');
console.log();
console.log("Cette hypothèse nous a conduit à une incohérence. On est donc sûr que le poisson n'est pas dans la première maison.");

table = copy(table1);
table.A[0][4] = 0;
applyUnicity(table.A);

toConsole();
solve();

console.log("Supposons que le poisson se trouve dans la troisième maison.");
var table2 = copy(table);
table.A[3][4] = 0;
table.A[4][4] = 0;
applyUnicity(table.A);

toConsole();
solve();

console.log();
console.log('========================================');
console.log();
console.log("Cette hypothèse nous a conduit à une incohérence. On est donc sûr que le poisson n'est pas dans la troisième maison.");

table = copy(table2);
table.A[2][4] = 0;
applyUnicity(table.A);

toConsole();
solve();

console.log("Supposons que le poisson se trouve dans la quatrième maison.");
var table3 = copy(table);
table.A[3] = [0,0,0,0,1];
applyUnicity(table.A);

toConsole();
solve();

console.log();
console.log('========================================');
console.log();
//console.log("Cette hypothèse nous a conduit à une incohérence. On est donc sûr que le poisson n'est pas dans la troisième maison.");

table = copy(table3);
table.A[3][4] = 0;
applyUnicity(table.A);

toConsole();
solve();

console.log("Supposons que le poisson se trouve dans la dernière maison.");
var table4 = copy(table);
table.A[4] = [0,0,0,0,1];
applyUnicity(table.A);

toConsole();
solve();

*/
