const userWord = prompt('Inserisci una parola per vedere se é palindroma')

function reverseString (word) {
    if(typeof word !== String) {
        console.error(`${word} in not a string`)
        return
    }
    let arrayWord = []
    for (let i = 0; i < word.length; i++) {
        arrayWord.unshift(word.charAt(i))
    }
    return arrayWord.join('')
}
console.log(userWord)
console.log(reverseString(userWord))

function isPalindroma (stringA) {
    if(typeof stringA !== String) {
        console.error(`${stringA} in not a string`)
        return
    }
    let stringB = reverseString(stringA)
    if (stringA.toLowerCase() === stringB.toLowerCase()) {
        return true
    }
    return false
}
console.log(isPalindroma(userWord))