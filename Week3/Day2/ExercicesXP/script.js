// _____Exercise 1: Your Favorite Food

/* let favorite_food = "chocolate";
let favorite_meal = "dinner";

console.log(`I eat ${favorite_food} at every ${favorite_meal}`) */



// _____Exercise 2 : Series

// ---Part 1---

/* const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length
let myWatchedSeriesSentence = `${myWatchedSeries[0]},${myWatchedSeries[1]},and ${myWatchedSeries[2]}`
console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`) */

// ---Part 2---

/* myWatchedSeries[2]="friend"  // remplace « the big bang theory » par « friends »

myWatchedSeries.push('Fast and Furious') // Ajouter a la fin 

myWatchedSeries.unshift("Wednesday") // Ajouter au debut 

let index = myWatchedSeries.indexOf("black mirror") // pour definir l'index de "black mirror"
myWatchedSeries.splice(index,1) // supprimer "black mirror"
console.log(myWatchedSeries) // Afficher le nouveu tableau


console.log(myWatchedSeries[1][2]) //  troisième lettre de la série "money heist"

console.log(myWatchedSeries) */



// _____Exercise 3 : The Temperature Converter

/* let Celsius = 25;
let Fahrenheit = (Celsius / 5) *9 + 32;

console.log(`${Celsius}°C is ${Fahrenheit}°F`) */



// _____Exercise 4 : Guess The Answers #1

/* let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: output 55 because a=34 and b=21 
// Actual: 55

a = 2;

console.log(c) //second expression
// Prediction: output 23 because a=2 and b=21
// Actual: 23

//  la valeur de c = undefined parecque c a aucune valeur

// console.log(3 + 4 + '5'); ==> 75 On a 3 et 4 sont des nombres et 5 un string
 */



// _____Exercise 5 : Guess The Answers #2


typeof(15)
// Prediction: Number
// Actual: Number

typeof(5.5)
// Prediction: Number
// Actual: Number

typeof(NaN)
// Prediction: Number
// Actual: Number

typeof("hello")
// Prediction: String
// Actual: String

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean car il return true or false
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger
// Actual: NaN

"1" + "3"
// Prediction: 13
// Actual: 13

"1" - "3"
// Prediction: NaN
// Actual: NaN

"johnny" + 5
// Prediction: johnny5
// Actual: NaN

"johnny" - 5
// Prediction: NaN
// Actual: NaN

99 * "hello"
// Prediction: NaN
// Actual: NaN 

1 != 1
// Prediction: false
// Actual: false

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false
// Actual: false



// _____Exercise 6 : Guess The Answers #3


5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction: NaN
// Actual: 1

10 % 5
// Prediction: 0 le reste de la divition est 0 
// Actual: 0

5 % 10
// Prediction: 0
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: "  "

" " + 0
// Prediction:' 0'
// Actual: ' 0'

true + true
// Prediction: 2 la valeur de true est 1
// Actual: 2

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1  car la valeur de false=0 and true = 1 donc 0-1=-1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual: -1

"Bob" - "bill"
// Prediction: undefined
// Actual: NaN