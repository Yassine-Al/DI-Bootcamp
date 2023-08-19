display()
let btn = document.getElementById("sub");
btn.addEventListener("click",addTask);
function addTask(e) {
    e.preventDefault()
    let name = document.getElementById('nom').value;
    let description = document.getElementById('description').value;
    let startDate = document.getElementById('dateDebut').value;
    let endDate = document.getElementById('dateFin').value;
    let isCompleted = false;

    var task = {
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        isCompleted: isCompleted
    };

    if(localStorage.getItem('taskListe')== null){
        let arr=[]
        arr.push(task)
        localStorage.setItem('taskListe',JSON.stringify(arr));
        display()

    }else{
        let getItem = JSON.parse(localStorage.getItem('taskListe'));
        getItem.push(task);
        localStorage.setItem('taskListe',JSON.stringify(getItem));

        alert('La tâche a été ajoutée avec succès !');
        display();

    }
           
}
        

function display(){
    let tasks=JSON.parse(localStorage.getItem('taskListe'))

    if(tasks == null) return
    let container=document.getElementById('container');
    container.innerHTML=''

    tasks.forEach(element => {
    let nom=document.createElement('p');
    nom.textContent="Nom : "+element.name;
    let a=document.createElement('a');
    a.className="btn btn-primary";


    let description=document.createElement('p');
    description.textContent="description : "+element.description;

            
    let startDate=document.createElement('p');
    startDate.textContent="startDate : "+element.startDate;
    const daysRemaining = calculateDaysRemaining(element.startDate, element.endDate)
    
    let endDate=document.createElement('p');
    endDate.textContent="days left : "+ daysRemaining;
    
    let isCompleted=document.createElement('p');
    isCompleted.textContent="isCompleted : "+element.isCompleted;
    container.appendChild(nom);
    container.appendChild(description);
    container.appendChild(startDate);
    container.appendChild(endDate);
    container.appendChild(isCompleted);
    });
}


function calculateDaysRemaining(startDate, endDate) {
    const oneDay = 24 * 60 * 60 * 1000; 
    const start = new Date();
    const end = new Date(endDate);
    const diffDays = Math.round((end - start) / oneDay);
    return diffDays;
}