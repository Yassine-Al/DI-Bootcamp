let Quote = [
    {
        "id" : 0,
        "author" : "Oscar Wilde",
        "quote" : "Be yourself; everyone else is already taken.",
        "like" : 0

    },
    {
        "id" : 1,
        "author" : "Frank Zappa",
        "quote" : "So many books, so little time",
        "like" : 0
    },
    {
        "id" : 2,
        "author" : "Elbert Hubbard",
        "quote" : "A friend is someone who knows all about you and still loves you.",
        "like" : 0
    },
    {
        "id" : 3,
        "author" : "Oscar Wilde",
        "quote" : "To live is the rarest thing in the world. Most people exist, that is all.",
        "like" : 0
    },
    {
        "id" : 4,
        "author" : "Mahatma Gandhi",
        "quote" : "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        "like" : 0
    },

]


let btnrecup = document.getElementById("recuperer")

let lastQuoteIndex;

function recup()  
{
    let random = Math.floor(Math.random() * (Quote.length))
    
    let index = Quote[random]
    
    
    let section = document.getElementById('section')
    section.textContent=index.quote
    
    lastQuoteIndex = section.textContent;
    
    while (random === lastQuoteIndex) {
        random = Math.floor(Math.random() * (Quote.length))
        return random
    }

    section.dataset.id = index.id
    span[3].textContent = index.like
    span[0].textContent = ""
    span[1].textContent = ""
    span[2].textContent =""

    // console.log(index.quote)


}

// let y = Array.find(x=> x.quote === section.textContent)
let citation = document.getElementById('citation')
let auteur = document.getElementById('auteur')
let btnajout = document.getElementById('ajouter')

btnajout.addEventListener('click',(e) =>
{
    e.preventDefault()
    if (citation.value == "")
    {
        alert("veuillez saisir une citation svp !")
        return false 
    }
    if (auteur.value == "")
    {
        alert("veuillez saisir le nom d'auteur svp !")
        return false 
    }
    let obj = {
        "id" : Quote.length,
        "quote" : citation.value,
        "author" : auteur.value,
        "like" : 0,
    }

    Quote.push(obj)
    
    console.log(Quote)
    citation.value = ""
    auteur.value = ""

    selt()
}
)

let span = document.querySelectorAll('span')

let espace = document.getElementById('espace')
let nonespace = document.getElementById('nonespace')
let jaime = document.getElementById('jaime')
let nbrmot = document.getElementById('nbrmot')

espace.addEventListener('click', (e)=>
{
    e.preventDefault()
    span[0].textContent=(section.textContent).length
    // console.log((section.textContent).length)
})

nonespace.addEventListener('click', (e)=>
{
    e.preventDefault()

    let str = (section.textContent).replace(/ /g,'')
    // console.log(str.length)
    span[1].textContent=(str.length)
    console.log(str)
})

let cont = 0

jaime.addEventListener('click',(e)=>
{
    e.preventDefault()
    
    let ind = Quote.find(x => x.id == section.dataset.id)

    ind.like++

    span[3].textContent = ind.like

})

nbrmot.addEventListener('click',(e)=>
{
    e.preventDefault()
    let split = section.textContent.split(' ')
    span[2].textContent = split.length
})


let body = document.querySelector('body')
let form = document.createElement('form')
let select = document.createElement('select')

select.setAttribute('id','select')

body.appendChild(form)
form.appendChild(select)


let btnaffich = document.createElement('button')
form.appendChild(btnaffich)
btnaffich.innerHTML = 'Afficher'


// const unique = [...new Set(Quote.map((item) => item.author))];

// console.log(unique)

var temp = [];

function selt()
{
    let aut = Quote.map((val) => {
    
        return val.author
    
    }) 
    
    aut.forEach(el => {
        if(!temp.includes(el))
        {
            temp.push(el)
        }
    }
    )
     

    for (let i = 0; i < temp.length; i++) {
        if(!i) select.innerHTML = ''
        let option = document.createElement('option')
    
        option.value = temp[i]
        option.text = temp[i]

        select.appendChild(option)
        
    }

}

selt()



let div = document.createElement("div");
form.appendChild(div)



btnaffich.addEventListener("click",(e)=>{
    e.preventDefault()

   let sel = document.getElementById('select').value;


    let quotes = Quote.filter(function(quote) {
        return quote.author == sel;
    });
    
    div.textContent = ''
    quotes.forEach(function(quote) {
        console.log(quote.quote)
    div.innerHTML += quote.quote + "<br>";
    });


})

for (let i = 0; i < 4; i++) {
    let br = document.createElement('br')
    body.appendChild(br)
    
}


let form2 = document.createElement('form')
console.log(form2)
let input = document.createElement('input')
input.setAttribute('type','number')
form2.appendChild(input)

body.appendChild(form2)
let btnsrch = document.createElement('button')
form2.appendChild(btnsrch)

btnsrch.textContent = 'search'