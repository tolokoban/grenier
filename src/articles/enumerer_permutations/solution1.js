function (perm) {
    var L = perm.slice(0);
    var last = -1;
    var T = [], obj;
    while (L.length > 0) {
        var a = L.pop();
        if (a < last) {
            T.push(a);
            T.sort();
            obj = {a: a, h: perm.length};
            T.forEach(
                function(e){
                    if (e > obj.a && e < obj.h) {
                        obj.h = e;
                    }
                }
            );
            L.push(obj.h);
            T.forEach(function(e){if (e != obj.h) L.push(e);});
            return L;
        }
        T.push(a);
        last = a;
    }
}
