/* eslint-disable no-console */
'use strict';

//object practice

const person = {
  name: 'Joe',
  age: 18,
  job: 'student',
  greeting: function() {
    if (person.age > 22) {
      person.job = 'software engineer';
    }
    console.log(
      `Hi I'm ${this.name}. I am ${this.age} years old and I am a ${this.job}.`
    );
  },
  year: function() {
    person.age++;
    if (person.age !== 21) {
      console.log(`Whoa, a year has passed, now I am ${this.age}`);
    } else {
      console.log(`WooHoo! I am finally ${this.age}`);
    }
  }
};

// person.greeting();
// person.year();
// person.greeting();
// person.year();
// person.greeting();
// person.year();
// person.greeting();
// person.year();
// person.greeting();
// person.year();
// person.greeting();
// person.year();
// person.greeting();

function createMyObject() {
  const newObject = {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
  return newObject;
}

// console.log(createMyObject());

function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

const example = {
  cats: 'cats',
  dogs: 'dogs'
};

// console.log(updateObject(example));

const person2 = {
  firstName: 'Paul',
  lastName: 'Jones',
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

// person2.fullName();

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang'
};

// console.log(keyDeleter(sampleObj));

const pageViewCounts = {
  homePage: 399,
  aboutPage: 400,
  termsOfService: 22
};

console.log(Object.keys(pageViewCounts));

Object.keys(pageViewCounts).forEach(key => {
  console.log(`the ${key} has ${pageViewCounts[key]} views.`);
});
