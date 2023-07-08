// ______Exercice 1 : Modifier L'article

// let h1 = document.querySelector('h1')
// console.log(h1.textContent)

// let art = document.querySelector('article')
// let last_p = art.lastElementChild
// art.removeChild(last_p)


// let h2_style = document.querySelector('h2')

// h2_style.addEventListener('click',()=>
// {
//     h2_style.style.background = 'red'
// })



// let h3_display = document.querySelector('h3')

// h3_display.addEventListener('click',()=>
// {
//     h3_display.style.display = 'none'
// })


// let body = document.querySelector('body')
// let butt = document.createElement('button')

// butt.textContent = 'Text en gras'

// body.appendChild(butt)

// let p = document.getElementsByTagName('p')

// butt.addEventListener('click',()=>
// {
//     for (let i = 0; i < p.length; i++) {
//         p[i].style.fontWeight = 'bold';
//       }
// })







// _______Exercice 2 : Travailler Avec Des Formulaires


// let form = document.querySelector('form')
// console.log(form)


// let f_name_id = document.getElementById('fname')
// let l_name_id = document.getElementById('lname')

// console.log(f_name_id)
// console.log(l_name_id)


// let f_name_nm = document.getElementsByName('fname')
// let l_name_nm = document.getElementsByName('lname')

// console.log(f_name_nm)
// console.log(l_name_nm)


// let sub = document.getElementById('submit')

// sub.addEventListener('click',(e)=>
// {
//     e.preventDefault()
    
//     let frst_name = document.getElementById('fname').value
//     let lst_name = document.getElementById('lname').value
    
    
//     let ul = document.querySelector('.usersAnswer')
    
    
//     let firstItem = document.createElement('li')
//     let lastItem = document.createElement('li')
    
//     firstItem.textContent = 'First name: ' + frst_name;
//     lastItem.textContent = 'Last name: ' + lst_name;
    
    
//     ul.appendChild(firstItem)
//     ul.appendChild(lastItem)
// })






// Exercice 3 : Transformer La Phrase



// let allBoldItems;

// function getBold_items() {
//   let boldItems = document.querySelectorAll('strong');
//   allBoldItems = boldItems;
// }

// function highlight() {

//     for (let i = 0; i < allBoldItems.length; i++) {
//       allBoldItems[i].style.color = 'blue';
//     }
// }


// function return_normal() {

//     for (let i = 0; i < allBoldItems.length; i++) {
//       allBoldItems[i].style.color = 'black';
//     }
// }


// getBold_items()
// highlight()
// return_normal()


// let p = document.querySelector('p')

// p .addEventListener('mouseout',highlight)
// p .addEventListener('mouseover',return_normal)




// ______Exercice 4 : Volume D'une Sphère

// let btn = document.getElementById('submit');

// let Radius = document.getElementById('radius')

// btn.addEventListener('click', function(event)
// { 
//     event.preventDefault();


//     Radius = parseInt(Radius.value)

//     volume = (4/3) * Math.PI * Math.pow(Radius, 3);

//     let volumeInput = document.getElementById('volume');
//     volumeInput.value = volume.toFixed(2)

// })

