'use strict';
console.log('Hello world');

/* 
   ? 1) javascript For in loop
*/

const printObjectProperties = function (obj) {
   if (!Object.keys(obj).length) console.log('Object is empty');

   for (let property in obj) {
      console.log(`${property}: ${obj[property]}`);
   }
};
printObjectProperties({ firstName: 'John', lastName: 'Doe', age: 27 });

/* 
   ? 2) javascript function returns
*/

const findMaxNumber = arr => {
   if (!arr.length) return null;

   let maxNumber = Math.max(...arr);
   return maxNumber;
};

console.log(findMaxNumber([3, 5, 56, 767, 32, 5]));

/* 
  ? 3) javascript Spread Operator
*/

const mergeArrays = (arr1, arr2) => {
   const newArray = [...arr1, ...arr2];
   return newArray;
};
console.log(mergeArrays(['Banana', 'Mango', 'Orange'], ['Guava', 'Lemon']));

/* 
   ? 4) javascript arrow function
*/

const calculateSquare = num => Math.pow(num, 2);
console.log(calculateSquare(8));

/* 
   ? 5) javascript es6 map
*/

const doubleNumbers = arr => arr.map(num => num * 2);
console.log(doubleNumbers([1, 2, 3, 4, 5]));

/* 
   ? 6) javascript es6 static keyword
*/

const MathUtility = class {
   static multiply(a, b) {
      return a * b;
   }
};
console.log(MathUtility.multiply(5, 3));

/* 
   ? 7) javascript es6 class inheritance
*/

class Animal {
   constructor(name, sound) {
      this.name = name;
      this.sound = sound;
   }

   makeSound() {
      return this.sound;
   }
}
const lion = new Animal('Lion', 'Roar');
console.log(lion, lion.makeSound());

class Dog extends Animal {
   fetch() {
      return 'Fetching the ball!';
   }
}
const dog = new Dog('James', 'Bark');
console.log(dog, dog.fetch());

/* 
   ? 8) javascript es6 super keyword
*/

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   introduce() {
      console.log(
         `Hello, my name is ${this.name} and I am ${this.age} years old.`
      );
   }
}
const person1 = new Person('John', 30);
console.log(person1);
person1.introduce();

const Student = class extends Person {
   constructor(name, age, major) {
      super(name, age);

      this.major = major;
   }

   introduce() {
      console.log(
         `"Hello, my name is ${this.name} and I am ${this.age} years old. I am majoring in ${this.major}.`
      );
   }
};
const student1 = new Student('Alice', 20, 'Computer Science');
console.log(student1);
student1.introduce();
