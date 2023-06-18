function solution(S, P, Q) {
    return P.map( ( num1, k ) => {
        var num2 = Q[ k ];
        var slice = S.slice( num1, num2 + 1 );
        if ( slice.indexOf( "A" ) > -1 ) {
            return 1;
        } else if ( slice.indexOf( "C" ) > -1 ) {
            return 2;
        } else if ( slice.indexOf( "G" ) > -1 ) {
            return 3;
        }
        
        return 4;
    });
}