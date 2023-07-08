let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
  
function getCarHonda(carInventory){
    let voitureHonda =carInventory.find(voiture=>voiture.car_make==="Honda")


    if(voitureHonda){
        return `this is a ${voitureHonda.car_make}, ${voitureHonda.car_model} from ${voitureHonda.car_year} .`
    }
    return "No Honda cars found in the inventory.";
};
let hondaCarString = getCarHonda(inventory);
console.log(hondaCarString);



//----------part2-----------------
  
//trier les voitutres par sont (yaer)
function sortCarInventoryByYear(carInventory) {
    return carInventory.sort((a, b) => a.car_year - b.car_year);
}
  
let sortedInventory = sortCarInventoryByYear(inventory);
console.log(sortedInventory);
    
