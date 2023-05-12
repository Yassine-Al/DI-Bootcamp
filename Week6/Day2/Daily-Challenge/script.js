const gameInfo = [
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

gameInfo.forEach(el => { 
    let usernames = []
    usernames.push(el.username + "!")

    console.log(usernames)
    
});


gameInfo.forEach(el=>{
    let score = []
    if(el.score >= 5)
    {
        score.push(el.username)
    }
    console.log(score)
})

let count = 0 

gameInfo.forEach(el => {
    count += el.score
    console.log(`Score totale est : ${count}`)
})


