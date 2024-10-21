let userSide
do {
    userSide = prompt(`Inserisci "pari" o "dispari"`)
    userSide = userSide.toLowerCase()
    if (userSide !== "pari" && userSide !== "dispari") {
        alert('Devi inserire necessariamente la parola "pari" o la parola "dispari"')
    } 
} while (userSide !== "pari" && userSide !== "dispari") 

let userN
do {
    userN = parseInt(prompt('inserisci un numero compreso tra 1 e 5'))
    if (userN >= 1 && userN <= 5) {
        break
    } else {
        alert('Il numero deve essere compreo tra 1 e 5')
    }
}  while (userN < 1 || userN > 5)

function randomIntFromOneTo(max) {
    if (typeof max !== number) { // non so come scrivere number**********
     	console.error(`${max} need to be a number`)
     	return
    }
    const randomInt = Math.floor(Math.random() * max) + 1        
    return randomInt
}

function isEven(num) {
    if (typeof num !== number) {
        console.error(`${num} need to be a number`)
        return
   }
   if (num % 2 === 0) {
    return true
   } else {
    return false
   }
}

const computerN = randomIntFromOneTo(5)
const result = userN + computerN

console.log(`userN ${userN}`)
console.log(`computerN ${computerN}`)
console.log(`result ${result}`)

if ((isEven(result) && userSide === "pari") || (!(isEven(result)) && userSide === "dispari")) {
    alert(`Il numero ${result} è ${userSide}. Hai vinto!!`)
} else {
    alert(`Il numero generato è ${result}. Hai perso :(`)
}