function minimumBribes(q) {
    let totalBribes = 0;
    let moreThan2Bribes = false;
    let expectedFirst = 1, expectedSecond = 2, expectedThird = 3;
    for (let i = 0; i < q.length; i++) {
        if (q[i] == expectedFirst) {
            expectedFirst = expectedSecond;
            expectedSecond = expectedThird;
            ++expectedThird;
        } else if (q[i] == expectedSecond) {
            ++totalBribes;
            expectedSecond = expectedThird;
            ++expectedThird;
        } else if (q[i] == expectedThird) {
            totalBribes = totalBribes + 2;
            ++expectedThird;
        } else {
            moreThan2Bribes = true;
            break;
        }
    }
    if (moreThan2Bribes) {
        console.log("Too chaotic");
    } else {
        console.log(totalBribes);
    }
}