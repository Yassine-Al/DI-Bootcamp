const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}`
function toJs(morsear) {
    return new Promise((resolve, reject) => {
        try {
        const Objs = JSON.parse(morsear);
        if (Object.keys(Objs).length === 0) {
            reject('L\'objet JavaScript Morse est vide.');
        } else {
            resolve(Objs);
        }
        } catch (error) {
        reject('La chaîne JSON Morse fournie est invalide.');
        }
    });
}
  
toJs(morse)
.then((Objs) => {
    console.log(Objs);
})
.catch((error) => {
    console.error(error);
});
  //--------------la 2éme fct--------------------
function toMorse(morse) {
    return new Promise((resolve, reject) => {
        let morseObj = JSON.parse(morse);
        
        function getMorseCode(character) {
        let morseCode = morseObj[character.toLowerCase()];
        if (morseCode) {
            return morseCode;
        } else {
            reject(`Le caractère '${character}' n'existe pas dans le nouvel objet JavaScript Morse.`);
        }
}
      
let userInput = prompt("Entrez un mot ou une phrase :");
let words = userInput.split(" ");
let morseTranslation = [];
    
for (let word of words) {
let characters = Array.from(word);
let morseWord = [];

for (let character of characters) {
    let morseCode = getMorseCode(character);
    if (morseCode) {
    morseWord.push(morseCode);
    }
}
    
morseTranslation.push(morseWord.join(" "));
}
    
resolve(morseTranslation);


});
}
  
  
toMorse(morse)
.then((morseTranslation) => {
    console.log(morseTranslation);
})
.catch((error) => {
    console.error(error);
});
  
  //--------------la 3éme fct--------------------
function joinWords(morseTranslation) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(morseTranslation)) {
        reject("L'argument doit être un tableau.");
        }
        
        let translationText = morseTranslation.join("\n");
        
        // Affichage sur le DOM  dans une div
        let translationElement = document.getElementById("translation");
        if (translationElement) {
        translationElement.innerText = translationText;
        resolve();
        } else {
        reject("Élément DOM introuvable pour afficher la traduction.");
        }
    });
}
  
toMorse(morse)
.then((morseTranslation) => {
    return joinWords(morseTranslation);
})
.then(() => {
    console.log("Traduction affichée avec succès.");
})
.catch((error) => {
    console.error(error);
});
  