// There are two step
// - Define a function
// - Invoke a function

// function testF(a, b) { 
//     const result = a + b + Math.max(a, b)
//     console.log(result);

// }

// testF(2, 20);

// sleep
function sleep(name) {
    console.log(`${name} is sleeping`);
}

// awake
function awake(name) {
    console.log(`${name} is awake`);
}

// Eat, name, time
function eat(name, time) {
    console.log(`${name} is taking ${time}`);
}

// walk, name, destination
function walk(name, destination) {
    console.log(`${name} is walking to ${destination}`);
}

//  study
function study(name) {
    console.log(`${name} is studying`);
} 

// work
function work(name) {
    console.log(`${name} is working`);
}
// student lifecycle
function studentsLifecycle(name){
    awake(name)
    eat(name, 'breakfast') 
    work(name)
    eat(name, 'lunch')
    eat(name, 'dinner')
    sleep(name) 
}
console.log('Students Lifecycle');
console.log('---------------------');
studentsLifecycle('Aporna')
console.log('---------------------');
studentsLifecycle('Puja')

function jobholderLifcycle(name){
    awake(name)
    eat(name, 'breakfast')
    walk(name, 'office')
    work(name)
    eat(name, 'home')
    eat(name, 'dinner')
    sleep(name)
}


console.log('Jobholder Lifecycle');
jobholderLifcycle('Prodip R')
console.log('---------------');

jobholderLifcycle('Dipto R')
console.log('---------------');

jobholderLifcycle('Hridoy R')
console.log('---------------');

jobholderLifcycle('Joy R')
console.log('---------------');

jobholderLifcycle('Utpol R')
console.log('---------------');

jobholderLifcycle('Aditto R')
console.log('---------------');

