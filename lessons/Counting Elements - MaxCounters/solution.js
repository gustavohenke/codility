function solution(N, A) {
    var max = 0;
    var lastMax = 0;
    var res = new Array( N ).fill( 0 );
    
    A.forEach( k => {
        var i = k - 1;
        if ( k < N + 1 ) {
            res[ i ] = Math.max( lastMax, res[ i ] );
            res[ i ]++;
            max = Math.max( res[ i ], max );
        } else {
            lastMax = max;
        }
    });

    return res.map( x => x < lastMax ? lastMax : x );
}