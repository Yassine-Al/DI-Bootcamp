let Beer = prompt('Entrer le nombre de bouteilles pour commencer :')

let beer2 = Beer

for (let i = 0; i < Number(Beer); i++) {
    beer2 = beer2 - i
    if( beer2 < 0 )
    {
        console.log('0 bouteille de bière sur le mur" ou "pas de bouteille de bière sur le mur')
        break
    }
        
    console.log( beer2 )  
}
