// _____Exerciese 1:

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0,1)  // Supprimer Banana

fruits.sort()  // Trier le tableau
console.log(fruits)

fruits.push("Kiwi") // Ajouter Kiwi

let index=fruits.indexOf("Apples")
fruits.splice(index,1)
console.log(fruits)

fruits.reverse()
console.log(fruits)

// _____Exerciese 2:


const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1])