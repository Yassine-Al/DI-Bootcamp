let gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];
let user = [];//declaration du tab
gameInfo.forEach(function(joueur) {
    user.push(joueur.username+ "!");//ajout sur dans le tab
});
console.log(user); 
//2---------
let winners = [];//declaration du tab
gameInfo.forEach(function(joueur) {
    if (joueur.score > 5) {
    winners.push(joueur.username); //ajout sur dans le tab
    }
});
console.log(winners);
//3--------
let total = 0;
gameInfo.forEach(function(joueur) {
    total += joueur.score; // il calcul le total
});

console.log(total);