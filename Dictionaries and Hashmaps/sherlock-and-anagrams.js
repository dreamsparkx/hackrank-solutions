function countPairs(n) {    // The number of the pairs from a set of n elements can be calculated with the formula npairs = n! / (2 * (n - 2)!) = (n * (n - 1)) / 2, below one function to calculate the number of pairs:
    return (n * (n - 1)) / 2;
}

function sherlockAndAnagrams(s) {
    // Write your code here
    const map = new Map();
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        for (let j = i; j < n; ++j) {
            const sub = s.substring(i, j + 1);
            const key = sub.split('').sort().join('');
            if (map.has(key)) {
               map.set(key, map.get(key) + 1); 
            } else {
               map.set(key, 1);
            }
        }
    }  //done , substrings stored in the map

    //Check all map values and calculate number of pairs 
    //for every key with an associate value > 1
    let result = 0;
    for (const [key, value] of map) {
        if (value > 1) {
         result += countPairs(value);    
        }
    }
    return result;
}
