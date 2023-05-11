let mot = prompt('Ecrire plusieurs mots séparés par des virgules : ')

let table = mot.split(',')
console.log(table)


let max = 0
table.forEach(el => {
    if(el.length>max)
    {
        max = el.length
    }
});

// console.log(max) 

for (let i = 0; i <= table.length; i++) {
    if (i==0 || i==table.length)
    {
        console.log('*'.repeat(max+4))
        if(i == table.length) break
    }
    console.log(`* ${table[i]}${' '.repeat(max-((table[i].length)-1))}*`)
    
    
    

    
}
