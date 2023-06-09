/**
 * a utility to create a random number
 */

// function uuid4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
//         const r = Math.random()*16|0; 
//         const v = c == 'x' ? r : (r & 0x3) | 0x8;
//         return v.toString(16);
//     });
// }

// // console.log(uuid4());


// /**
//  * easily travers
//  * filter
//  * delete
//  * updated
//  * create a new one student
//  */

// const students = {
//     'be14bdd6-7737-4560-ab3d-b721ba431925': {
//       id: 'be14bdd6-7737-4560-ab3d-b721ba431925',
//       name: 'Prodip R.',
//       email: 'rprodip@gmail.com'
//     },

//     '96187d88-0c94-48f3-9b3d-d17cd828ed49': {
//       id: '96187d88-0c94-48f3-9b3d-d17cd828ed49',
//       name: 'Probir R.',
//       email: 'probir@gmail.com'
//     },

//     'a0958268-dee7-4925-8df8-82da556dd20e': {
//       id: 'a0958268-dee7-4925-8df8-82da556dd20e',
//       name: 'Probin R.',
//       email: 'probin@gmail.com'
//     }
// };

// // console.log(students)

// // create new students
// const std = {
//     id: uuid4(),
//     name: "Dipto",
//     email: "dipto@gmail.com"

// }

// students[std.id] = std;

// // update
// const idToBeUpdated = '96187d88-0c94-48f3-9b3d-d17cd828ed49';
// const updateData = {
//     name: 'Joyonto',
//     email: 'joy@gmail.com'
// }

// students[idToBeUpdated] = {
//     ...students[idToBeUpdated],
//     ...updateData
// }

// delete
// delete students[idToBeUpdated];
// console.log(students);

// for(let key in students){
//   console.log(students[key].email)
// }

// Object.values(students).forEach((student) => {
//   console.log(student.email, student.name)
// });


// array and obj time
/** const arr = [];
const arrToObj = {};
for (let i = 0; i < 5000000; i++){
  const o = {
    id: i,
    value: i,
  };
  arr.push(o);
  arrToObj[i] = o;
}

console.time('array');
const index = arr.findIndex((item) => item.id == 4000000);
arr.splice(index, 1);
console.timeEnd('array');

console.time('obj');
delete arrToObj[4000000];
console.timeEnd('obj');

**/


/**
 * map, filter, reduce
 */

/**
 * Map => [same length as the original array]
 * filter => [with filtered item]
 * Reduce => Know one knows (Only you know) all possible value
 */

/* const numbers = [1, 2, 3, 4, false, null, '', 5, 6];

const arr = [1, 2, 3, 4, 5, 6];

const number = numbers.map((v) => v);
// console.log(number);
const filtered = numbers.filter((v) => !!v);
// console.log(filtered)

const sum = arr.reduce((a, b) => a + b);
// console.log(sum)

const result = numbers.reduce((acc, cur, index) => {
  if (index == 0) acc += '[';
  if(cur) {
    acc += cur.toString() + (index < numbers. length - 1 ? ', ' : '');
  }
  if(index == numbers.length - 1) acc += ']';
  return acc;
}, '');

console.log(result);
*/


/*
How to find true value from a  array using Reduce
function myReduce (array, cb, init) {
  let acc = init;
  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i], i, array);
  }
  return acc;
}

const sum = myReduce([1, 2, 3, 4], (a, b) => a + b, 0)
console.log(sum);

const arr = [1, 2, '', false, 3, NaN, false, 4, 5, NaN, 6];
const result = myReduce(arr, (acc, cur) => {
  if(cur){
    acc.push(cur*cur);
  }
  return acc;
}, []);

console.log(result);
*/
/**
 * axios
 * json placeholder
 * map all the time array return korbe
 */

/*
const axios = require('axios').default;
const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData() {
  const { data } = await axios.get(url);
  // const result = data.slice(0, 10).map((item) => {
  //   return {
  //     userId: item.userId,
  //     id: item.id,
  //     title: item.title
  //   }
  // })


  const result = data.slice(0, 10).reduce((acc, cur) => {
    acc[cur.id] = { ...cur };
    delete acc[cur.id].body;
    return acc;
  }, {});
  return result;
}

getData()
.then((data) => console.log(data))
.catch((e) => console.log(e));

 */

const names = [
  'Animesh',
  'Akhoy',
  'Aditto',
  'Dipto',
  'Digonto',
  'Joy',
  'Jitu',
  'Mishu',
  'Mitu'
]

const namesGrouped = names.reduce((acc, cur) => {
  const firstLetter = cur[0].toUpperCase();
  if(firstLetter in acc){
    acc[firstLetter].push(cur);
  }else {
    acc[firstLetter] = [cur];
  }
  return acc;
}, {});

Object.keys(namesGrouped).forEach((groupKey) => {
console.log('---------', groupKey, '--------');
namesGrouped[groupKey].forEach((name) => console.log(name));
console.log('');
})


