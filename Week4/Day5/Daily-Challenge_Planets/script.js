let section = document.getElementsByClassName('listPlanets')


let planetes = ['Mercure','Vénus','Terre','Mars','Jupiter','Saturne','Uranus','Neptune']

let colors = ['Blue','Violet','Pink','Red','Orange','Yellow','Green','Gray']

for (let i = 0; i < planetes.length; i++) 
{
    let div = document.createElement('div')
    div.setAttribute('class','planet')
    div.style.background=colors[i]
    div.textContent=planetes[i]
    section[0].appendChild(div)
    
}
    


