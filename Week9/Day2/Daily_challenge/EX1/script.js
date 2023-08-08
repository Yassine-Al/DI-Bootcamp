function makeAllCaps(wordArray) {
    return new Promise((resolve, reject) => {
      if (Array.isArray(wordArray)) {
        const isStrings = wordArray.every((word) => typeof word === 'string');
        if (isStrings) {
          const majArray = wordArray.map((word) => word.toUpperCase());
          resolve(majArray);
        } else {
          reject('Le tableau doit contenir uniquement des chaînes de caractères.');
        }
      } else {
        reject('L\'argument doit être un tableau.');
      }
    });
}
let words = ['hello', 'world', 'javascript'];
makeAllCaps(words)
.then((result) => {
    console.log(result); // ['HELLO', 'WORLD', 'JAVASCRIPT']
})
.catch((error) => {
    console.error(error);
});
  
//-------la 2éme function----------------
function sortWords(wordArray) {
return new Promise((resolve, reject) => {
    if (Array.isArray(wordArray)) {
    if (wordArray.length > 4) {
        let sortedArray = wordArray.sort();
        resolve(sortedArray);
    } else {
        reject('La longueur du tableau doit être supérieure à 4.');
    }
    } else {
    reject('L\'argument doit être un tableau.');
    }
});
}

let word = ['HELLO', 'WORLD', 'JAVASCRIPT', 'OPENAI', 'GPT'];
sortWords(word)
.then((result) => {
    console.log(result); // ['GPT', 'HELLO', 'JAVASCRIPT', 'OPENAI', 'WORLD']
})
.catch((error) => {
    console.error(error);
});