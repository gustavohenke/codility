function solution(A) {
    var i, index;
    var len = A.length;

    // Quick fail: Empty list returns 1
    if ( !len ) {
        return 1;
    }

    // Sort the array so lookups are way faster
    A.sort(function( a, b ) {
        return a - b;
    });

    for ( i = 1; i <= len; i++ ) {
        if ( A[ i - 1 ] !== i ) {
            return i;
        }
    }

    return len + 1;
}