function solution(A) {
    var i = 1;
    A.sort(function (a, b) {
        return a < b ? -1 : ( a > b ? 1 : 0 );
    });
    
    while (A.length) {
        if ( i !== A.shift() ) {
            return 0;
        }
        
        i++;
    }
    
    return 1;
}