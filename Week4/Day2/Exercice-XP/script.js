// ______Exercice 1 : Informations
// #Part 1
/* function infoAboutMe()
{
    
    console.log("je m'appelle Yassine j'ai 20ans et j'aime le Foot")
}
infoAboutMe()
// #Part 2

 function infoAboutPerson(personName, personAge, personFavoriteColor)
{
    console.log("Your name is",personName)
    console.log("Your Age is",personAge)
    console.log("Your Favorite Color is",personFavoriteColor)
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow") */



// _____Exercice 2 : Conseils
/* function calculateTip()
{
    let facture = Number(prompt("Quel est le montant de la facture?"))
    let pourboire
    if(facture<50)
    {
        pourboire=Number(facture*0.2)
    } 
    else if(facture>=50 && facture<200)
    {
        pourboire=Number(facture*0.15)
    } 
    else if(facture>=200)
    {
        pourboire=Number(facture*0.1)
    }
    console.log(`le montant est: ${facture+pourboire}`)  
}
calculateTip() */



// _____Exercice 3 : Trouver Les Nombres Divisibles Par 23

/* function isDivisible()
{
    let som=0
    for(let i=0;i<500; i++)
    {
        if(i%23===0)
        {
            console.log(i)
            som= som+i
        } 
    }
    console.log(`la somme de tous les nombres divisibles par 23 est : ${som}`)

}
isDivisible() */


// _____Exercice 4 : Liste De Courses

/* const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList=[ "banana", "orange","pomme"]

function myBill()
{
    for(const item of shoppingList)
    {
        const QTEENStock=stock[item]
        if (QTEENStock>0){
            const price=prices[item]
            console.log('the price of ',item,"is",price)
            console.log("and we have this many in stock :",stock[item])
        }
        else{
            console.log("there is no ",item, "in stock")
        }
    }
        
}
myBill() */


// _____Exercice 5 : Qu'y A-T-Il Dans Mon Portefeuille ?

/* function changeEnough(itemPrice, amountOfChange)
{

    const quarters = amountOfChange[0] * 0.25;
    const dimes = amountOfChange[1] * 0.10;
    const nickels = amountOfChange[2] * 0.05;
    const pennies = amountOfChange[3] * 0.01;

    const totalChange = quarters + dimes + nickels + pennies;

    return totalChange >= itemPrice;

}

console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5])); */


// _____Exercice 6 : Frais De Vacances


function hotelCost()
{

    let Nuit

  while (Nuit === null || isNaN(Nuit)) 
  {
    Nuit = prompt("Combien de nuits ?");
  }

    prixnuit=140*Nuit

    return prixnuit
    // console.log(prixnuit) 

}

function planeRideCost()
{
    let destination
    while (destination === null) 
    {
        destination = prompt("Quel est votre destination ?");
    }

    if (destination==="Londres")
    {
        prix=183
    }
    else if (destination==="Paris")
    {
        prix=220
    }
    else 
    {
        prix=300
    }
    return prix
    // console.log(prix)

}


function rentalCarCost()
{
   let voiture
   while (voiture === null || isNaN(voiture)) 
  {
    voiture = prompt("Combien de jours ?");
  } 

  if (voiture >10)
  {
    prixV = (voiture * 40) - (voiture * 40 * 0.5)
  }
  else {
    prixV = voiture * 40
  }
  return prixV

//   console.log(prixV)
}



function totalVacationCost()
{
    console.log(`La Voiture coute : ${rentalCarCost()} l'hotel coute : ${hotelCost()} les billets d'avion coûtent : ${planeRideCost()}`)
}

totalVacationCost()