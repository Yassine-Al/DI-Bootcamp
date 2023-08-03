const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'img/img1.jpeg'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'img/img2.jpeg'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'img/img3.jpeg'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'img/img4.jpg'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'img/img5.jpg'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'img/img6.png'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'img/img7.png'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'img/img1.jpeg'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'img/img4.jpg'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'img/img3.jpeg'
    },
    {
      id: 11,
      name: 'merlenna Reichert',
      username: 'melphine',
      email: 'Chaim_McDermott@dana.io',
      image:'img/img6.png'
    },
    {
      id: 12,
      name: 'jolementina DuBuque',
      username: 'cariah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'img/img1.jpeg'
    }
    ];
let div=document.getElementById('Container-cards');
div.style.display = "flex"
div.style.alignItems = "center"
div.style.justifyContent = "center"
div.style.flexWrap = "wrap"


function appendCards(Robotcard){
    div.innerHTML = ""
    Robotcard.forEach(robot => {
        let robotCard=document.createElement('div');
        robotCard.className='cardname';
        robotCard.dataset.id=robot.id; //ajouter l'id dans html

        let robotimg=document.createElement('img');
        robotimg.src=robot.image;

        let robotname = document.createElement('h5');
        robotname.textContent=robot.name
        

        let icon=document.createElement('i');
        icon.className="fa fa-user";
        icon.ariaHidden="true"; 

        let robotUsername = document.createElement('p');
        robotUsername.textContent = `Username: ${robot.username}`;

        let icon2=document.createElement('i');
        icon2.className="fa fa-envelope";
        icon2.id="fa2";
        icon2.ariaHidden="true";  

        let robotEmail = document.createElement('p');
        robotEmail.textContent = `Email: ${robot.email}`;
    

        robotCard.appendChild(robotimg);
        robotCard.appendChild(robotname);
        robotCard.appendChild(icon);
        robotCard.appendChild(robotUsername);
        robotCard.appendChild(icon2);
        robotCard.appendChild(robotEmail); 
        div.appendChild(robotCard);
    })
}
appendCards(robots)

function filtrename(recherche){

let newrobot=robots.filter(fil=>{ 
    return fil.name.toLowerCase().includes(recherche.toLowerCase())
} )

console.log(newrobot)
appendCards(newrobot)
}