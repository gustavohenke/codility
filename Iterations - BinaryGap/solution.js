function solution(N) {
    var gaps = N.toString(2).split("1");
    gaps = gaps.slice(1, gaps.length - 1);
    gaps.sort(function ( a, b ) {
        return b.length - a.length;
    });
    return gaps.length ? gaps[ 0 ].length : 0;
}