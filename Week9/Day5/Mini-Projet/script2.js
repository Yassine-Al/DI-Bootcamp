let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');

button.addEventListener('click',(e)=>{
    e.preventDefault()
    let randomNumber = Math.floor((Math.random() * 83));

    fetch('https://swapi.dev/api/people/'+randomNumber).then(response=>{ 
        if(response.ok){
            // console.log('hello')
            return response.json()
        }else{
            throw new Error('makhdemch')
        }
    }).then((result)=>{
        // console.log(result)
        names.innerText = result.name;
        height.innerText = `Height: ${result.height}`;
        gender.innerText = `Gender: ${result.gender}`;
        birthYear.innerText = `Birth Year: ${result.birth_year}`;
        // homeWorld.innerText = `Home World: ${result.homeworld}`;

        fetch(result.homeworld).then(response=>{ 
            if(response.ok){
                // console.log('hello')
                return response.json()
            }else{
                throw new Error('makhdemch')
            }
        }).then((result)=>{
            // console.log(result)
            homeWorld.innerText = `Home World: ${result.name}`;

        })
        
    })



})