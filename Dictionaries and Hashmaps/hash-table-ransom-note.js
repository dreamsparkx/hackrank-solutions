function checkMagazine(magazine, note) {
    // Write your code here
    for (let word of note) {
        const idx = magazine.indexOf(word)
        if (idx !== -1) {
            magazine[idx] = ""
        } else {
            return console.log('No')
        }
    }
    console.log('Yes')
}