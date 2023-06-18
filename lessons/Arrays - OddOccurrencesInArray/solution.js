function solution(A) {
    A.sort(function ( a, b ) {
        return b - a;
    });
    for (var i = 0; i < A.length; i += 2) {
        if (A[i + 1] !== A[i]) {
            return A[i];
        }
    }
}