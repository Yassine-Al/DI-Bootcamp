// ______Exercise 1 : Scope

// #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }


// la valeur de a sera 3 car la condition est vrai dans la valeur de a change de 5 a 3 



// #1.1 - run in the console:

// console.log(funcOne())

// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2

// let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:
// funcThree()  // return a = 0
// funcTwo()    // return a = 5
// funcThree()  // return a = 
// #2.2 What will happen if the variable is declared 
// with const instead of let ?   

/*  */
// si on remplace let par const la valeur de a reste 0 
// car on ne peut pas modifier la valeur de a 
// et la fonction 2 n'execute pas 
/*  */



//#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:
// funcFour()  // la valeur de a = hello 
// funcFive()  // la valeur de a = hello 


//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }

// la valeur de a = "test"

// #4.1 - run in the console:
// funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

// la valeur de a = "test" car on a 'a' dans la fonction


//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// Rien ne change





// ______Exercise 2 : Ternary Operator

// const winBattle = () => true;

// let experiencePoints = winBattle() ? 10 : 1; 

// console.log(experiencePoints)







// _______Exercise 3 : Is It A String ?


// const verif = (str) => typeof (str)  === 'string' ? true : false;

// console.log(verif('hello')); 

// console.log(verif([1, 2, 4, 0]));



// ________Exercise 4 : Colors


// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// for (let i = 0; i < colors.length; i++) {
//     console.log(`${i+1}# choice is ${colors[i]}`)
// }

// if (colors.includes("Violet"))
// {
//     console.log('Yeah')
// }
// else {
//     console.log('No')
// }




// // ________Exercise 5 : Colors#2

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// for (let i = 0; i < colors.length; i++) 
// {
//     let pr = (i + 1) > 3 ? ordinal[0] : ordinal[i + 1];
    
//     console.log(`${i + 1}${pr} choice is ${colors[i]}.`);
// }




// __________Exercise 6 : Bank Details


// let bankAmount = 5000 ;

// let TVA = 0.17
 
// let prix = 0

// const details = ["+200", "-100", "+146", "+167", "-2900"]

// for (let i = 0; i < details.length; i++) {
//     let int = parseInt(details[i])

//     // console.log(parseInt(details[i]))

//     if (int > 0)
//     {
//         prix += int * TVA
//     }
//     else 
//     {
//         prix -= int * TVA
//     }
    
//     bankAmount = bankAmount + prix

//     console.log(`Votre position actuelle à la fin du mois : ${bankAmount}`)

// }
