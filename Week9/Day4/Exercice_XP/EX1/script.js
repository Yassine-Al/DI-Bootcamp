async function fetchStarWarsData() {
    try {
      let response = await fetch("https://www.swapi.tech/api/starships/9/");
      let objectStarWars = await response.json();
      console.log(objectStarWars.result);
    } catch (error) {
      console.log(error);
    }
}
  
fetchStarWarsData();
  