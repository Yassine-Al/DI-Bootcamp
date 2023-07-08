// _______Exercice:1

// let sum = (num1, num2) => { return num1 + num2}




// _________ Exercice:2

// Utilisation de la déclaration de fonction

// function kilo_to_gram_1(weight){
//     return console.log(`Utilisation de la déclaration de fonction: ${weight*1000} gr`)
// }

//Utilisation de l'expression de fonction

// let kilo_to_gram_2 = function (weight){
//     return console.log(`Utilisation de l'expression de fonction : ${weight*1000} gr`)
// }

// l'expression de la fonction est affectée à une variable et n'a pas de nom, c'est donc une fonction anonyme


// Utilisation de la fonction flèche

// let kilo_to_gram_3 = (weight) => { return console.log(`Utilisation de la fonction flèche: ${weight*1000} gr`)}



// ____________Exercice :3

// (function bildElements(){
//     let host = document.getElementById('container')
    
//     let title = document.createElement('h1')
//     title.textContent = "Fortune Teller"
//     title.classList.add('titleStyle')
//     host.appendChild(title)

//     let childInp = document.createElement('input')
//     childInp.setAttribute('placeholder', "Enter number of children")
//     childInp.setAttribute('id', 'childern')
//     childInp.classList.add('inpStyle')
//     host.appendChild(childInp)

//     let partnerInp = document.createElement('input')
//     partnerInp.setAttribute('placeholder', "Enter partner's Name")
//     partnerInp.setAttribute('id', 'partner')
//     partnerInp.classList.add('inpStyle')
//     host.appendChild(partnerInp)  

//     let locationInp = document.createElement('input')
//     locationInp.setAttribute('placeholder', "Enter geographic aocation")
//     locationInp.setAttribute('id', 'location')
//     locationInp.classList.add('inpStyle')
//     host.appendChild(locationInp)  

//     let jobInp = document.createElement('input')
//     jobInp.setAttribute('placeholder', 'Enter job title')
//     jobInp.setAttribute('id', 'job')
//     jobInp.classList.add('inpStyle')
//     host.appendChild(jobInp)

//     let submit = document.createElement('button')
//     submit.setAttribute('id', 'submet')
//     submit.textContent = "Show Message"
//     submit.classList.add('subStyle')
//     host.appendChild(submit)

//     let display = document.createElement('div')
//     display.setAttribute('id', 'screen')
//     display.classList.add('displayStyle')
//     host.appendChild(display)
// })()

// // Generate message
// function getInfo(numberOfChildren, partnersName, geographicLocation, jobTitle){
//     let screen = document.getElementById('screen')
//     let message = `You will be a ${jobTitle} in ${geographicLocation}, 
//     and married to ${partnersName} with ${numberOfChildren} kids.`
//     screen.textContent = message;
//     screen.style.display = "block"
// }

// // Showing the message
// let btn = document.getElementById('submet')
// btn.addEventListener('click', showNessage)
// function showNessage(e){
//     let childInp = document.getElementById('childern')
//     let partnerInp = document.getElementById('partner')
//     let locationInp = document.getElementById('location')
//     let jobInp = document.getElementById('job')
//     e.preventDefault()
//     getInfo(childInp.value, partnerInp.value, locationInp.value, jobInp.value)   
// }



// ____________Exercice:5

// let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let ordinal = ["th","st","nd","rd"];

// for(let i = 0; i < colors.length; i++) {
//   let index = i+1;
//   let suffix = (index > 3 && index < 21) || index % 10 > 3 ? ordinal[0] : ordinal[index % 10];
//   console.log(`Le ${index}${suffix} choix est ${colors[i]}`);
// }