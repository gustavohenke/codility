function solution(A) {
    A.sort(function (a, b) {
        return a < b ? -1 : (a > b ? 1 : 0);
    });
    
    var seen;
    var curr = 1;
    
    while (A.length) {
        seen = A.shift();
        if (seen < 0) {
            continue;
        }
        
        if ( seen > curr ) {
            break;
        } else if ( curr === seen ) {
            curr++;
        }
    }
    
    return curr;
}