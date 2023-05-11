function playTheGame()
{
    let jeux = confirm("Voulez-Vous jouez un jeux ? ")

    

    if (!jeux)
    {
        alert(" Pas de problème, au revoir ")
    }
    else if (jeux)
    {
        var rep = false

        do {

                console.log("&&")
            let nombre = prompt("Donner un nombre entre 0 et 10 ")
        if (nombre === "" || isNaN(nombre))
        {
            alert("Désolé, pas un numéro, au revoir")
        }
        else if (nombre <0 || nombre >10)
        {
            alert("Désolé, ce n'est pas un bon chiffre, au revoir")
        }
        else {
            console.log("true")

            rep = true
            let computerNumber = Math.floor(Math.random() * 11)

            compareNumbers(nombre , computerNumber)
        }
            
        } while (!rep);

        
    }
}


function compareNumbers(userNumber,computerNumber)
{
    for (let i =0 ; i<3 ; i++)
    {
        if (userNumber == computerNumber)
        {
            alert("WINNER")
            break
        }
        else if (i==2 && userNumber != computerNumber)
        {
            alert("Hors de chances Computer Number is : " + computerNumber)

        }
        else if (userNumber > computerNumber)
        {
            userNumber = prompt("Votre numéro est plus grand que celui de l'ordinateur, devinez à nouveau")
        }
        else if (userNumber < computerNumber)
        {
            userNumber = prompt("Votre numéro est plus petit que celui de l'ordinateur, devinez à nouveau")
        }

    }

}