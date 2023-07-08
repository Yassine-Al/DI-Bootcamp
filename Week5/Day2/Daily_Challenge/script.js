let form = document.getElementById('libform')

let Noun = document.getElementById('noun').value
let Adjective = document.getElementById('adjective').value
let Person = document.getElementById('person').value
let Verb = document.getElementById('verb').value
let Place = document.getElementById('place').value






form.addEventListener('submit',(e)=>
{
    e.preventDefault()

    if (Noun === "" || Adjective === "" || Person === "" || Verb === "" || Place === "") {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    let stories = [
        `${Person} went to ${Place} and ${Verb} with a ${Adjective} ${Noun}.`,
        `${Person} found a ${Adjective} ${Noun} in ${Place} and decided to ${Verb} with it.`,
        `Once upon a time, ${Person} visited ${PersonPlace} and encountered a ${Adjective} ${Noun}. ${Person} couldn't resist ${Verb} with it.`
    ];

    let randomIndex = Math.floor(Math.random() * stories.length);
    let randomStory = stories[randomIndex];

    document.getElementById("story").textContent = randomStory;
})