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

// console.log(Object.keys(pageViewCounts));

// Object.keys(pageViewCounts).forEach(key => {
//   console.log(`the ${key} has ${pageViewCounts[key]} views.`);
// });

//factory function

function mammal(name, eyes) {
  return {
    //since it is an object I need to surround it with curly braces
    name: name,
    numEyes: eyes,
    greeting: function() {
      console.log(`Hello, I am a ${this.name} and I have ${this.numEyes} eyes`);
    },
    mutate: function() {
      console.log('I am about to evole');
      this.numEyes++;
      console.log(`Now I have ${this.numEyes} eyes`);
    }
  };
}

// console.log(mammal("tiger", 2));
// console.log(mammal("doggo", 4));

// const tiger = mammal("tiger", 2);
// const doggo = mammal("doggo", 4);

// tiger.greeting();
// tiger.mutate();
// doggo.greeting();
// doggo.mutate();

const names = [
  {
    name: 'Bernard',
    age: 29,
    birthMonth: 'April'
  },
  {
    name: 'Bernice',
    age: 14,
    birthMonth: 'December'
  },
  {
    name: 'Gerard',
    age: 88,
    birthMonth: 'June'
  },
  {
    name: 'Stella',
    age: 3,
    birthMonth: 'September'
  }
];

// names.forEach(user => {
//   console.log(`${user.name} will be ${user.age + 1} in ${user.birthMonth}.`);
// });

function makeStudentReport(data) {
  let result = [];
  data.forEach(student => {
    result.push(`${student.name}: ${student.grade}`);
  });
  console.log(result);
}

const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' }
];

// makeStudentReport(testData);

function enrollInSummerSchool(students) {
  students.forEach(item => (item.status = 'In Summer School'));
  return students;
}

const names2 = [
  {
    name: 'Tim',
    status: 'Current student',
    course: 'Biology'
  },
  {
    name: 'Sue',
    status: 'Withdrawn',
    course: 'Mathematics'
  }
];

// console.log(enrollInSummerSchool(names2));

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' }
];

function findById(items, idNum) {
  //   items.forEach(item => {
  //     if (item.id === idNum) {
  //       console.log(item);
  //     }
  //   });
  // }

  console.log(items.find(item => item.id === idNum));
}

findById(scratchData, 28);
