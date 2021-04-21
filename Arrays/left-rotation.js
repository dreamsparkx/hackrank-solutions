function rightRotateByOne(arr) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length-1] = temp;
}

function rotLeft(a, d) {
    for (let i = 0; i < d; i++) {
        rightRotateByOne(a);
    }
    return a;
}