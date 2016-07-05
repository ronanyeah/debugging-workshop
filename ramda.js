'use strict';

let R = require('ramda');

let id = 5;
let objs = [
  {
    id: 1,
    name: 'rick',
    occupation: 'scientist'
  },
  {
    id: 5,
    name: 'morty',
    occupation: 'student'
  },
  {
    id: 10,
    name: 'goofy',
    occupation: 'dog'
  }
];

for (let x = 0; x < objs.length; x++) {
  if (objs[x].id === id) {
    console.log(objs[x]);
  }
}

let result = objs.filter( obj => obj.id === id)[0];
console.log(result);

let result2 = R.find(R.propEq('id', id), objs);
let findById = R.find(R.propEq('id', id));
console.log(result2);
console.log(findById(objs));

let results = [];
for (let x = 0; x < objs.length; x++) {
  if (objs[x].id === id) {
    results.push(objs[x]);
  }
}

let results2 = objs.reduce( (acc, obj) => {
  return obj.id === id ? acc : R.concat(acc, [obj]);
}, []);
