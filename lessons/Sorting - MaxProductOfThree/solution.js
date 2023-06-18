function solution (A) {
	var maxLeft, maxRight;
	var len = A.length;

	A.sort( ( a, b ) => a - b );

	maxLeft = A[ 0 ] * A[ 1 ] * A[ len - 1 ];
	maxRight = A[ len - 3 ] * A[ len - 2 ] * A[ len - 1 ];
	return Math.max( maxLeft, maxRight );
}