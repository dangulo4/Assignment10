// STEP 1
function Cat() {
  console.log('The cat has been created using constructor ES5');
}

const Dog = class {
  constructor() {
    console.log('The dog has been created using constructor ES6');
  }
};

// STEP 2
const cat = new Cat();
const dog = new Dog();

// STEP 3
class Animal {
  constructor() {
    console.log('The Animal has been created');
  }
}

const animal = new Animal();

// STEP 4
class Animal_1 {
  constructor(specie) {
    this._specie = specie;
    console.log(`The animal specie is ${this._specie}.`);
  }
}

const animal1 = new Animal_1('Tiger');

// STEP 5
function Animal_2(specie, age, color, size, gender) {
  this._specie = specie;
  this._age = age;
  this._gender = gender;
  this._size = size;
  this._color = color;
  console.log(
    `The animal specie is a ${this._specie}, described as a ${this._age} year old ${this._color} ${this._size} ${this._gender}.`
  );
}

const animal_2 = new Animal_2('Tiger', '2', 'white', 'large', 'male');

// STEP 6
for (const property in animal_2) {
  console.log(`${property}: ${animal_2[property]}`);
}

// STEP 7
function Animal_3(specie, age, color, size, gender) {
  let _specie = specie;
  let _age = age;
  let _gender = gender;
  let _size = size;
  let _color = color;

  this.speak = function () {
    _specie = 'Dog'
      ? console.log(`The ${_color} ${_specie} is barking!`)
      : console.log(`The ${_color} ${_specie} is meowing!`);
  };
}
const animal_3 = new Animal_3('Dog', '2', 'black', 'large', 'male');
animal_3.speak();

// STEP 8
class Animal_4 {
  constructor(specie, age, color, size, gender) {
    this._specie = specie;
    this._age = age;
    this._gender = gender;
    this._size = size;
    this._color = color;

    this.checkType = function () {
      return type ? (this._specie = 'Dog') : (this._specie = 'Cat');
    };
  }

  speak_1 = function () {
    console.log(`Animal Type is ${this._specie}`);
  };
}
const animal_4 = new Animal_4('Cat', '2', 'orange', 'large', 'male');
animal_4.speak_1('Cat');

// STEP 9
const text = new String('The quick brown fox jumped over the lazy dog');

String.prototype.findWords = function (word) {
  this._word = word;
  const searchWord = (this.match(`/[${this._word}]/gi`) || []).length;
  return searchWord;
};

console.log(text.findWords('The'));
