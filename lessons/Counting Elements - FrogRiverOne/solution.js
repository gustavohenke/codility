function solution(X, A) {
    var time = -1;
    A = A.reduce( ( obj, pos, key ) => {
        obj[ pos ] = obj[ pos ] == null ? key : obj[ pos ];
        
        return obj;
    }, {});
    
    while ( X > 0 ) {
        var index = A[ X ];
        if ( index == null ) {
            return -1;
        }
        
        time = Math.max( time, index );
        X--;
    }
    
    return time;
}