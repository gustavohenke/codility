function solution(A, B, K) {
    var mod = A % K;
    return ( mod === 0 ? 1 : 0 ) + Math.floor( ( B - A + mod ) / K );
}