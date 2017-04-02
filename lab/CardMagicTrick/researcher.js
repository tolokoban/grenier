/**
 * On  teste tous  les  algorithmes (d'un  certain  type) capables  de
 * transformer  7 bits  en  3  bits de  telle  sorte  que les  valeurs
 * résultantes correspondent à des valeurs prédéfinies.
 *
 * L'algorithme fonctionne ainsi :
 *   Initialiser les 3 bits de sortie à 0
 *   Pour IN parmi les 7 bits en entrée
 *     Pour OUT parmi les 3 bits de sortie
 *       Faire l'une des actions suivante :
 *         1: Ne rien faire.
 *         2: OUT = OUT and IN.
 *         3: OUT = OUT or IN.
 *         4: OUT = OUT xor IN.
 *     Fin Pour
 *   Fin Pour
 *
 * Le programme est un mot de 3*7 = 21 lettres dans un alphabet de 4.
 * Cela donne 4'398'046'511'104 combinaisons possibles.
 */

/**
 * Exemple de code :
 * 0A0X2O1O1A1O1X2X
 * Ce sont des instructions pour chacun des 6 bits d'entrée.
 * Elles  comportent  2 caractères  :  l'index  du  bit de  sortie  et
 * l'opération à appliquer (O = OR, A = AND, X = XOR).
 *
 * Dans cette version  simplifiée, on suppose que  chaque bit d'entrée
 * opère sur  un seul bit  de sortie,  et qu'aucun bit  d'entrée n'est
 * inutile. Il  y a donc 9  instructions possibles ce qui  donne 9^6 =
 * 531441 programmes possibles.
 */

var inputs = [
    // 0         1         2         3         4         5         6         7
    '000000', '000001', '000010', '000011', '001000', '001001', '001010', '001011',
//    0  0      0  1      0  2      0  3      1  0      1  1      1  2      1  3

    '000111', '000110', '000101', '000100', '001111', '001110', '001101', '001100',
//    0  7      0  6      0  5      0  4      1  7      1  6      1  5      1  4

    '011001', '011000', '011011', '011010', '010001', '010000', '010011', '010010',
//    3  1      3  0      3  3      3  2      2  1      2  0      2  3      2  2

    '011110', '011111', '011100', '011101', '010110', '010111', '010100', '010101',
//    3  6      3  7      3  4      3  5      2  6      2  7      2  4      2  5

    '101010', '101011', '101000', '101001', '100010', '100011', '100000', '100001',
//    5  2      5  3      5  0      5  1      4  2      4  3      4  0      4  1

    '101101', '101100', '101111', '101110', '100101', '100100', '100111', '100110',
//    5  5      5  4      5  7      5  6      4  5      4  4      4  7      4  5

    '110011', '110010', '110001', '110000', '111011', '111010', '111001', '111000',
//    6  3      6  2      6  1      6  0      7  3      7  2      7  1      7  0

    '110100', '110101', '110110', '110111', '111100', '111101', '111110', '111111'
//    6  4      6  5      6  6      6  7      7  4      7  5      7  6      7  7
];

/**
 * L'argument `a` est un caractère, alors que `b` est un nombre.
 */
function and(a, b) { return a == '0' ? 0 : b; }
function or (a, b) { return a == '1' ? 1 : b; }
function xor(a, b) { return a == '0' ? b : 1 - b; }

var instructions = [
    [0, and, "And"], [0, or, "Or"], [0, xor, "Xor"],
    [1, and, "And"], [1, or, "Or"], [1, xor, "Xor"],
    [2, and, "And"], [2, or, "Or"], [2, xor, "Xor"]
];

var code = [1,1,1,1,1,1, 0];
var txt;
var value;
var input;
var cursor;
var idxInput;
var output = 0;
var count = 0;
var maxScrore = 0;
while (code[6] == 0) {
    count++;
    //if ((count & 4095) == 0) console.log(count);

    // Tester un programme.
    for (idxInput = 0; idxInput < inputs.length; idxInput++) {
        input = inputs[idxInput];
        output = 0;
        code.forEach(function (itm, idx) {
            if (idx > 5) return;
            if (input.charAt(idx) == '0') return;
            output ^= itm;
        });
        if (output != idxInput % 8) break;
    }
    if (idxInput >= maxScrore) {
        maxScrore = idxInput;
        console.log(code, maxScrore);
    }

    // Passer au programme suivant.
    cursor = 0;
    code[0]++;
    while (code[cursor] > 7) {
        code[cursor] = 1;
        cursor++;
        code[cursor]++;
    }
}

console.log("Count: " + count);
console.log("Score: " + maxScrore);
