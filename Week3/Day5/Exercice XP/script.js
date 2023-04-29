// _____Exercice 1 : Liste Des Personnes


// #Partie I - Examen Des Tableaux
/* const people = ["Greg", "Mary", "Devon", "James"];

// Supprimer "Greg" du tableau
people.shift();

// Remplacer "James" par "Jason"
people[2] = "Jason";

// Ajouter votre nom à la fin du tableau
people.push("Yourname");

console.log(people.indexOf("Mary"));


const peopleCopy = people.slice(1, 3);


console.log(people.indexOf("Foo")); // Renvoie -1 car "Foo" n'existe pas dans le tableau

const last = people[people.length - 1];


// #Partie II - Boucles

for (let i = 0; i < people.length; i++) 
{
    console.log(people[i]);
}


for (let i = 0; i < people.length; i++) 
{
    console.log(people[i]);
    if (people[i] === "Jason") 
    {
      break;
    }
} */



// _____ Exercice 2 : Vos Couleurs Préférées

/* const colors = ["bleu", "rouge", "vert", "jaune", "violet"];

for (let i = 0; i < colors.length; i++)
{
    console.log(`Mon choix n°${i+1} est ${colors[i]}`);
} */



// _____Exercice 3 : Répéter La Question

/* const number = prompt("Veuillez entrer un numéro :");

if (typeof Number(number) == true) 
{
  console.log(`Le numéro que vous avez entré est : ${number}`);
} 
else 
{
  console.log("Vous n'avez pas entré un numéro valide.");
} */



// _____Exercice 4 : Gestion Du Bâtiment

/* const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors)

console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);


console.log(building.nameOfTenants[1]); 
console.log(building.numberOfRoomsAndRent.dan[0]); 


const sarah = building.numberOfRoomsAndRent.sarah[1];
const david = building.numberOfRoomsAndRent.david[1];
const dan = building.numberOfRoomsAndRent.dan[1];


if (sarah + david > dan) 
{
    building.numberOfRoomsAndRent.dan[1] = 1200;
} */
    
