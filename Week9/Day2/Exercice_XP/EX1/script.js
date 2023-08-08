function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve("Promise resolved");
      } else {
        reject("Promise rejected");
      }
    });
}
  
// promesse rejetée
compareToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error));

// promesse résolue
compareToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error));