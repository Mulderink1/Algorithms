const hourglassSum = arr => {
    let maxNumber = -Infinity;
    for (let i = 0; i <= 3; i += 1) {
        for (let j = 0; j <= 3; j += 1) {
            const num = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (num > maxNumber) { maxNumber = num; };
        };
    };
    return maxNumber;
};

console.log(`${hourglassSum([ [ 1, 1, 1, 0, 0, 0 ], [ 0, 1, 0, 0, 0, 0 ], [ 1, 1, 1, 0, 0, 0 ], [ 0, 0, 2, 4, 4, 0 ], [ 0, 0, 0, 2, 0, 0 ], [ 0, 0, 1, 2, 4, 0 ] ])} : Should Be --> 19`);
console.log(`${hourglassSum([[0, -4, -6, 0, -7, -6], [-1, -2, -6, -8, -3, -1], [-8, -4, -2, -8, -8, -6], [-3, -1, -2, -5, -7, -4], [-3, -5, -3, -6, -6, -6], [-3, -6, 0, -8, -6, -7]])} : Should Be --> -19`);

