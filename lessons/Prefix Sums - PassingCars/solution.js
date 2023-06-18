function solution(A) {
    var i = A.length;
    var P = 0;
    var pairs = 0;
    
    while ( i > 0 && ( i = A.lastIndexOf( 0, i - 1 ) ) > -1 ) {
        pairs += A.length - i - P - 1;
        if ( pairs > 1000000000 ) {
            return -1;
        }
        
        P++;
    }
    
    return pairs;
}