function solution(A) {
    var i, len, diff, first;
    var left = A.shift();
    var right = 0;
    var smaller = Number.MAX_VALUE;
    
    len = A.length;
    
    // Precalculate right-side sum
    for ( i = 0; i < len; i++ ) {
        right += A[ i ];
    }
    
    // Last item must be kept
    len -= 1;
    while ( A.length ) {
        // Calculate difference
        diff = Math.abs( left - right );
        smaller = Math.min( diff, smaller );
        
        first = A.shift();
        left += first;
        right -= first;
    }
    
    return smaller;
}