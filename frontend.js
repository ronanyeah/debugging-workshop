'use strict';

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
  if (objs.id === id) {
    console.log(objs[x]);
  }
}

//let results = [];
//for (let x = 0; x < objs.length; x++) {
  //if (objs.id === id) {
    //results.push(objs[x]);
  //}
//}
