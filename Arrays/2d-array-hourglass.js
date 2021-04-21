function hourglassSum(arr) {
    let max = -63;  //minimum val for any position is -9, so -9*7
    for (let i = 0; i < (arr.length/2 + 1); i++) {
        for (let j = 0; j < (arr[i].length/2 + 1); j++) {
            let sum = 0;
            let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
            let middle = arr[i + 1][j + 1];
            let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
            sum = (top + middle + bottom);
            max = max < sum ? sum : max;
        }
    }
    return max
}