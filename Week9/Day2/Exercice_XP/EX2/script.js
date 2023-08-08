let delay = mmessage => new Promise(resolve => setTimeout(resolve, message));

let myPromise = delay(4000).then(() => Promise.resolve("succès"));

myPromise
  .then(result => console.log(result))
  .catch(error => console.log("Ooops quelque chose s'est mal passé"));
