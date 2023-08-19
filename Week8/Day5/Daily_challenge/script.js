function formatDate(date) {
    let années = date.getFullYear();
    let mois = (date.getMonth() + 1).toString().padStart(2, '0');
    let jours = date.getDate().toString().padStart(2, '0');
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
  
    return `${années}${mois}${jours}${hours}${minutes}${seconds}`;
}

let date1 = new Date(2020, 6, 4, 8, 0, 0);
console.log(formatDate(date1)); 

let date2 = new Date(2019, 11, 31, 23, 59, 59);
console.log(formatDate(date2)); 

let date3 = new Date(2020, 6, 4);
console.log(formatDate(date3)); 