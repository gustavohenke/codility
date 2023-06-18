function solution(A) {
	var index = 0;
	var minValue = Number.MAX_VALUE;

	A.slice( 0, -1 ).forEach( ( num, i ) => {
		var sum = A[ i ] + A[ i + 1 ];
		var newMin = Math.min( sum / 2, minValue );

		if ( A[ i + 2 ] != null ) {
			sum += A[ i + 2 ];
			newMin = Math.min( sum / 3, newMin );
		}

		if ( newMin < minValue ) {
			index = i;
			minValue = newMin;
		}
	});

	return index;
}