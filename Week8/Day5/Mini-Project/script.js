let btn = document.querySelector('button');
    btn.addEventListener('click',addCard)
    function addCard(e){
        e.preventDefault();

       let Inputville=document.getElementById('Inputville')     

        let xhr = new XMLHttpRequest();
 
        xhr.open('GET', `https://api.openweathermap.org/data/2.5/weather?q=${Inputville.value}&appid=6bc236fa8bd5e7e03f83fd8cea3eac74`);

        xhr.send();

        xhr.onload = function() {
        if (xhr.status != 200) { 
            alert(`Error ${xhr.status}: ${xhr.statusText}`);
        } 
        else { 
            let data = JSON.parse(xhr.response); 
            console.log(data)
            ajouterCard(data)
        }
};


xhr.onerror = function() {
  alert("Request failed");
}

};
function ajouterCard(data){
    
    let container=document.getElementById('container1');

    let div=document.createElement('div');
    div.className ="cards"


    let h2=document.createElement('h2');
    h2.textContent=data.name;

    let  id=document.createElement('h4');
    id.textContent= "id:  "+data.weather[0].id;


    let img=document.createElement('img');
    img.src=  ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    img.className="image"
    

    let  description=document.createElement('p');
    description.textContent="description:  "+data.weather[0].description;


    let  main=document.createElement('p');
    main.textContent="main:  "+data.weather[0].main;


    let  humidity=document.createElement('p');
    humidity.textContent="Humidity:  "+data.main.humidity + ' %';

    div.appendChild(h2)
    div.appendChild(id)
    div.appendChild(img)
    div.appendChild(description)
    div.appendChild(main)
    div.appendChild(humidity)
    container.appendChild(div)

    Inputville.value=""
};