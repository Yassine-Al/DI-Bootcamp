// _____Exercise1: Favorite Color

/* let sentence = ["my","favorite","color","is","blue"];

console.log(sentence.join(' ')) */

// _____Exercise2: Mixup

/* let str1 = "mix";
let str2 = "pod";

let newStr1 = str2.substring(0, 2) + str1.substring(2);
let newStr2 = str1.substring(0, 2) + str2.substring(2);

let str3 = newStr1 + " " + newStr2;

console.log(str3); */


// _____Exercise3: Calculator

/* let num1 = prompt("Taper le premier numero : ")

let num2 = prompt("Taper le deuxieme numero : ")

let Som = Number(num1) + Number(num2)

alert (`La Somme de deux nombres : ${Som}`) */

// Part 2 

let num1 = Number(prompt("Taper le premier numero : "))

let num2 = Number(prompt("Taper le deuxieme numero : "))

let oper = prompt("Choisir une operation (Addition / Soustraction / Multiplication / Division)")

Result = 0

if (oper === "Addition")
{
    Result = num1 + num2
}
else if(oper === "Soustraction")
{
    Result = num1 - num2
}
else if(oper === "Multiplication")
{
    Result = num1 * num2
}
else if(oper === "Division")
{
    if (num2 === 0)
    {
        alert("Division Impossible")
    }
    else {
        Result = num1 / num2
    }
}
alert(`Resultat de votre operation : ${Result}`)
