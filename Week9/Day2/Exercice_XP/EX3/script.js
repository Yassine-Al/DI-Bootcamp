let resolvedPromise = Promise.resolve(3);
let rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then(result => console.log(result))
  .catch(error => console.log("Ooops quelque chose s'est mal passé"));

rejectedPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
