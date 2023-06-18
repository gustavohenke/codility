function solution(A) {
    var count = 0;
    var obj = {};
    A.forEach( num => {
        if ( obj[ num ] ) {
            return;
        }
        
        obj[ num ] = true;
        count++;
    });
    
    return count;
}