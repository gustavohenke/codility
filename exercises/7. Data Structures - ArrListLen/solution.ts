function solution(A: number[]): number {
    let length = 1;
    let num = A[0];
    while (num !== -1) {
        length++;
        num = A[num];
    }

    return length;
}