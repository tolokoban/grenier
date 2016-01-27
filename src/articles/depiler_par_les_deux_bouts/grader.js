{
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
