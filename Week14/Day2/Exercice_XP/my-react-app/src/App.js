import React from 'react';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals'; 

// ____ EX1
// function App() {
//   const myelement = <h1>I Love JSX!</h1>;
//   const sum = 5 + 5;

//   return (
//     <div className="App">
//       <p>Hello World!</p>
//       {myelement}
//       <p>React is {sum} times better with JSX</p>
//     </div>
//   );
// }


const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey']
};

function App() {
  return (
    <div className="App">
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} /> {/* Utilisation du composant avec les accessoires */}
    </div>
  );
}

export default App;

