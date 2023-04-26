// _____Exercise 1 : Evaluation

5 >= 1 // true car 5 est superieur a 1
0 === 1 // false 
4 <= 1 // false 
1 != 1 // false
"A" > "B"  //false
"B" < "C"  // false
"a" > "A"
"b" < "A"
true === false //false
true != true // false



// _____Exercise 2 : Ask For Numbers








// _____Exercice 3 : Trouver Nemo

let nemo = prompt ("Donner une phrase contenant le mot 'Nemo'")

let newnemo=nemo.split(' ')

// console.log(newnemo)


 if (newnemo.indexOf("Nemo")===-1)
{
    alert("la phrase ne contient pas Le mot Nemo")
}
else {
    let index= newnemo.indexOf("Nemo")
    alert(`I found Nemo at ${index}`)
}
 

