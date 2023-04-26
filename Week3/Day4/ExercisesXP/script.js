// _____Exercice1

/* let x=prompt("Taper le premier nombre : ")
let y=prompt("Taper le deuxieme nombre : ")

if (x>y)
{
    alert(`Le nombre le plus grand est : ${x}`)
}
else if(y>x)
{
    alert(`Le nombre le plus grand est : ${y}`)
}
else
{
    alert(`Les deux nombres sont egaux`)
} */


// _____Exercice 2

/* let newDog = "Chihuahua"

console.log(newDog.length)
console.log(newDog.toUpperCase())
console.log(newDog.toLowerCase())

if(newDog=="Chihuahua")
{
    console.log("J'adore les chihuahuas, c'est ma race de chien préférée")
}
else
{
    console.log("Je m'en fous, je préfère les chats")
}
 */

// _____Exercice3

/* let z = prompt("Taper un nombre : ")

if(z%2==0)
{
    alert(`le nombre ${z} est paire.`)
}
else if (z%2!=0)
{
    alert(`le nombre ${z} est impaire`)
} */


// _____Exercice 4


const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch(users.length)
{
    case 0:
        console.log ("personne n'est en ligne")
        break
    case 1:
        console.log (`${users[0]} est en ligne`)
        break
    case 2:
        console.log(`${users[0]} et ${users[1]} sont en ligne`)
        break
    default:
        console.log(`${users[0]} et ${users[1]} et ${users.length-2} sont en ligne`)
}








