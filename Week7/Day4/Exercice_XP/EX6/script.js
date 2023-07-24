const object1 = { number: 5 };  // La valeur de number est 5.
const object2 = object1;  // La valeur de number est 5. object2 référence le même objet que object1.
const object3 = object2;  // La valeur de number est 5. object3 référence le même objet que object1 et object2.
const object4 = { number: 5};  // La valeur de number est 5. C'est un nouvel objet indépendant de object1, object2 et object3.

class Animal {
  constructor(nom, type, couleur) {
    this.nom = nom;
    this.type = type;
    this.couleur = couleur;
  }
}

class Mamal extends Animal {
  sound(son) {
    return `Moooo I'm a ${this.type}, named ${this.nom} and I'm ${this.couleur}.\n${son}`;
  }
}

const farmerCow = new Mamal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound("meugle"));