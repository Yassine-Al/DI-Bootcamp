// _____Exereice 1 : Utilisateurs

// let dv = document.getElementById("container")
// console.log(dv.textContent)

// let change = document.getElementsByClassName("list")[0]

// change = change.lastElementChild
// change.innerText="Richard"

// console.log(change)


// let supp = document.getElementsByClassName("list")[1]

// li = supp.lastElementChild

// sarah = li.previousElementSibling
// sarah.remove()

// let lists = document.querySelectorAll("ul")

// lists.forEach(list =>
//     {
//         let items = list.querySelectorAll("li");
//         items[0].innerText='yassine'
  
// })

// ______Exercice 2 : Utilisateurs Et Style

// let dv = document.querySelector("div")

// dv.style.background=("lightblue")
// dv.style.padding="10px"


// let ul = document.querySelector("ul")
// let li = ul.firstElementChild

// li.style.display='none'

// let pete = ul.lastElementChild

// pete.style.border='2px solid black'

// document.body.style.fontSize='30px'


// _____Exercice 3 : Changer La Barre De Navigation


/* let navbar = document.querySelector("div")

navbar.setAttribute("id","socialNetworkNavigation")

let id = navbar.getAttribute("id")

console.log(id)


let ul = document.querySelector('ul')
let li = document.createElement('li')

li.innerText='Déconnexion'

ul.appendChild(li)

let first = ul.firstElementChild.textContent
let last = ul.lastElementChild.textContent

console.log(first)
console.log(last) */

// ______Exercice 4 : Ma Liste De Livres


let allBooks = [
    {
        titre: "Le Seigneur des Anneaux",
        auteur: "Tolkien",
        image: "https://fr.web.img3.acsta.net/medias/nmedia/18/35/14/33/18366630.jpg",
        dejaRead: true
    },
    {
        titre: "Harry Potter et la Chambre des Secrets",
        auteur: "Rowling",
        image: "https://fr.web.img4.acsta.net/medias/nmedia/00/02/53/35/affiche0.jpg",
        dejaRead: false
    }
]


let div = document.querySelector('div')

let table = document.createElement('table')
let tr1 = document.createElement('tr')
let tr2 = document.createElement('tr')

let td1 = document.createElement('td')
let td2 = document.createElement('td')
let td3 = document.createElement('td')

let td4 = document.createElement('td')
let td5 = document.createElement('td')
let td6 = document.createElement('td')

let img1 = document.createElement('img')
let img2 = document.createElement('img')

table.style.border=("3px solid black")


td1.innerHTML=(`${allBooks[0].titre} ecrit par ${allBooks[0].auteur}`)
td1.style.border='2px solid grey'
tr1.appendChild(td1)
table.appendChild(tr1)
div.appendChild(table)


img1.setAttribute('src',allBooks[0].image)
img1.style.width="100px"

td2.appendChild(img1)
td2.style.border='2px solid grey'
tr1.appendChild(td2)
table.appendChild(tr1)
div.appendChild(table)

td3.style.width="100px"
td3.style.textAlign='center'
td3.innerHTML=read1(allBooks[0].dejaRead)
td3.innerHTML=( `${allBooks[0].dejaRead}`)
td3.style.border='2px solid grey'
tr1.appendChild(td3)
table.appendChild(tr1)
div.appendChild(table)




td4.innerHTML=(`${allBooks[1].titre} ecrit par ${allBooks[1].auteur}`)
td4.style.border='2px solid grey'
tr2.appendChild(td4)
table.appendChild(tr2)
div.appendChild(table)


img2.setAttribute('src',allBooks[1].image)
img2.style.width="100px"

td5.appendChild(img2)
td5.style.border='2px solid grey'
tr2.appendChild(td5)
table.appendChild(tr2)
div.appendChild(table)

td6.style.width="100px"
td6.style.textAlign='center'
td6.innerHTML=read2(allBooks[1].dejaRead)
td6.innerHTML=( `${allBooks[1].dejaRead}`)
td6.style.border='2px solid grey'
tr2.appendChild(td6)
table.appendChild(tr2)
div.appendChild(table)

function read1 (read)
{
    if (read === true )
    {
       td1.style.color = "red"
       td2.style.border="2px solid red"
       td3.style.color="red"
    }
    else if (read == false)
    {
        td1.style.color = "blue"
        td2.style.border="2px solid blue"
       td3.style.color="blue"
    }
}

function read2 (read)
{
    if (read === true )
    {
       td4.style.color = "red"
       td5.style.border="2px solid red"
       td6.style.color="red"
    }
    else if (read == false)
    {
        td4.style.color = "blue"
        td5.style.border="2px solid blue"
        td6.style.color="blue"
    }
}


