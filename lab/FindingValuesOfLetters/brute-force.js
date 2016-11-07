var K, L, A, U, S, P, E, I, N, O, B, R, T, Q, C, Y;

var z = -9;
var solutions = {};

// KLAUS
for( K=z ; K<18 ; K++ ) loopOnL();
function loopOnL() { for( L=z ; L<17-z-K ; L++ ) if (K != L) loopOnA(); }
function loopOnA() { for( A=z ; A<17-z-K-L ; A++ ) if (A != K && A != L) loopOnU(); }
function loopOnU() { for( U=z ; U<17-z-K-L-A ; U++ ) if (U != K && U != L && U != A) loopOnS(); }
function loopOnS() { S = 17-K-L-A-U; if (S!=K && S!=L && S!=A && S!=U) loopOnP(); }
// PEPPINO
function loopOnP() {
    for( P=z ; P<28/3-z ; P++ )
        if (P!=K && P!=L && P!=A && P!=U && P!=S)
            loopOnE();
}
function loopOnE() {
    for( E=z ; E<28-3*P-z ; E++ )
        if (E!=K && E!=L && E!=A && E!=U && E!=S && E!=P)
            loopOnI();
}
function loopOnI() {
    for( I=z ; I<28-3*P-E-z ; I++ )
        if (I!=K && I!=L && I!=A && I!=U && I!=S && I!=P && I!=E)
            loopOnN();
}
function loopOnN() {
    for( N=z ; N<28-3*P-E-I-z ; N++ )
        if (N!=K && N!=L && N!=A && N!=U && N!=S && N!=P && N!=E && N!=I)
            loopOnO();
}
function loopOnO() {
    O = 28-3*P-E-I-N;
    if (O!=K && O!=L && O!=A && O!=U && O!=S && O!=P && O!=E && O!=I && O!=N)
        loopOnB();
}
// BRENTON
function loopOnB() {
    for( B=z ; B<20-E-O-2*N-z ; B++ )
        if (B!=K && B!=L && B!=A && B!=U && B!=S && B!=P && B!=E && B!=I && B!=N && B!=O)
            loopOnR();
}
function loopOnR() {
    for( R=z ; R<20-E-O-2*N-B-z ; R++ )
        if (R!=K && R!=L && R!=A && R!=U && R!=S && R!=P && R!=E && R!=I && R!=N && R!=O && R!=B)
            loopOnT();
}
function loopOnT() {
    T = 20-E-O-2*N-B-R;
    if (T!=K&&T!=L&&T!=A&&T!=U&&T!=S&&T!=P&&T!=E&&T!=I&&T!=N&&T!=O&&T!=B&&T!=R)
        loopOnQ();
}
// QUINCY
function loopOnQ() {
    for( Q=z ; Q<15-U-I-N-z ; Q++ )
        if (Q!=K&&Q!=L&&Q!=A&&Q!=U&&Q!=S&&Q!=P&&Q!=E&&Q!=I&&Q!=N&&Q!=O&&Q!=B&&Q!=R&&Q!=T)
            loopOnC();
}
function loopOnC() {
    for( C=z ; C<15-Q-U-I-N-z ; C++ )
        if (C!=K&&C!=L&&C!=A&&C!=U&&C!=S&&C!=P&&C!=E&&C!=I&&C!=N&&C!=O&&C!=B&&C!=R&&C!=T&&C!=Q)
            loopOnY();
}
function loopOnY() {
    Y = 15-Q-U-I-N-C;
    if (Y!=K&&Y!=L&&Y!=A&&Y!=U&&Y!=S&&Y!=P&&Y!=E&&Y!=I&&Y!=N&&Y!=O&&Y!=B&&Y!=R&&Y!=T&&Y!=Q&&Y!=C)
        if (Y > 0) print();
}

function print() {
    var PETROS = P+E+T+R+O+S;
    if (solutions[PETROS]) return;
    solutions[PETROS] = 1;
    console.log("PETROS=" + PETROS + "  with  "
                + "K=" + K + " "
                + "L=" + L + " "
                + "A=" + A + " "
                + "U=" + U + " "
                + "S=" + S + " "
                + "P=" + P + " "
                + "E=" + E + " "
                + "I=" + I + " "
                + "N=" + N + " "
                + "O=" + O + " "
                + "B=" + B + " "
                + "R=" + R + " "
                + "T=" + T + " "
                + "Q=" + Q + " "
                + "C=" + C + " "
                + "Y=" + Y);
}
