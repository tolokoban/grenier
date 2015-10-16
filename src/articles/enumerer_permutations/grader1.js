function(f) {
    var testcases = [
        [[2,0,1,3], [2,0,3,1]],
        [[2,1,3,4,0], [2,1,4,0,3]],
        [[1,2,0], [2,0,1]],
        [[1,2,0,3,4,5,6,7], [1,2,0,3,4,5,7,6]],
        [[1,2,0,3,4,5,7,6], [1, 2, 0, 3, 4, 6, 5, 7]],
        [[1,2,0,3,4,6,5,7], [1, 2, 0, 3, 4, 6, 7, 5]]
    ];
    for (var i = 0 ; i < testcases.length ; i++) {
        var testcase = testcases[i],
        a = testcase[0], b = testcase[1];
        f.memory.perm = a;
        var r = f();
        if (!Array.isArray(r)) {
            throw("Votre fonction retourne un " + (typeof r) + " mais j'attendais un tableau.");
        }
        if (r.length !== b.length) {
            throw("Le tableau que vous avez retourné n'a pas autant d'éléments que le tableau memory.perm !");
        }
        for (var k = 0 ; k < r.length ; k++) {
            if (r[k] != b[k]) {
                throw("Je vous ai passé le tableau " + JSON.stringify(a) + "n"
                      + "et j'attendais en retour le tableau " + JSON.stringify(b) + "n"
                      + "mais votre programme m'a retourné " + JSON.stringify(r));
            }
        }
    }
}
