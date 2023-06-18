function solution(A, K) {
    var len = A.length;
    K = K > len ? K % len : K;
    return A.slice(len - K).concat(A.slice(0, len - K));
}