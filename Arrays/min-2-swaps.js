function swap(arr, i, j) {
    arr[i] = arr[i] + arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] = arr[i] - arr[j];
}

function minimumSwaps(arr) {
    let totalSwap = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === i+1) {
            continue;
        }
        swap(arr, i, arr[i]-1);
        i--;
        totalSwap++;
    }
    return totalSwap;
}